import { useState } from 'react';
import { sendMessageToBot } from '../services/chat.service.js';

export function useChatBot() {
  const MIN_TYPING_MS = 1200;
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Halo! Aku Loka, asisten AI kamu. Ada yang bisa dibantu seputar UMKM di sini?',
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (userMessageText) => {
    if (!userMessageText.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text: userMessageText,
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setIsLoading(true);
    const startTs = performance.now();

    try {
      const botReplyText = await sendMessageToBot(userMessageText);

      const elapsed = performance.now() - startTs;
      const waitMs = Math.max(0, MIN_TYPING_MS - elapsed);
      if (waitMs > 0) await sleep(waitMs);

      const newBotMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReplyText,
      };

      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'Maaf, Loka sedang ada gangguan. Coba lagi nanti ya.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, handleSend };
}

export default useChatBot;