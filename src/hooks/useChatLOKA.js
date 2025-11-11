import { useState } from 'react';
// 1. Import service yang akan memanggil 'pelayan' (backend)
import { sendMessageToBot } from '../services/chatService.js';

export function useChatBot() {
  // 2. State untuk menyimpan daftar semua pesan
  const [messages, setMessages] = useState([
    {
      id: 1, // Kita butuh ID untuk 'key' di React
      sender: 'bot',
      text: 'Halo! Aku Loka, asisten AI kamu. Ada yang bisa dibantu seputar UMKM di sini?',
    },
    // Contoh pesan lain:
    // { id: 2, sender: 'user', text: 'Halo Loka' },
  ]);

  // 3. State untuk tahu apakah bot sedang 'berpikir' (menunggu balasan)
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fungsi ini dipanggil oleh UI (ChatWindow) saat user menekan 'send'
   * @param {string} userMessageText - Teks yang diketik oleh user
   */
  const handleSend = async (userMessageText) => {
    // 4. Jangan lakukan apa-apa jika user mengirim pesan kosong
    if (!userMessageText.trim()) return;

    // 5. Buat object pesan baru dari user
    const newUserMessage = {
      id: Date.now(), // Pakai timestamp sebagai ID unik sementara
      sender: 'user',
      text: userMessageText,
    };

    // 6. Tambahkan pesan user ke UI, dan set loading
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setIsLoading(true);

    try {
      // 7. Kirim pesan user ke backend (serverless function)
      const botReplyText = await sendMessageToBot(userMessageText);

      // 8. Buat object pesan balasan dari bot
      const newBotMessage = {
        id: Date.now() + 1, // ID unik
        sender: 'bot',
        text: botReplyText,
      };

      // 9. Tambahkan balasan bot ke UI
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);

    } catch (error) {
      // 10. Jika terjadi error di service, tampilkan pesan error
      const errorMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'Maaf, Loka sedang ada gangguan. Coba lagi nanti ya.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      // 11. Apapun hasilnya, set loading kembali ke false
      setIsLoading(false);
    }
  };

  // 12. Kirim semua state dan fungsi yang dibutuhkan oleh UI
  return {
    messages,
    isLoading,
    handleSend,
  };
}

// Jaga kompatibilitas: ekspor default juga tersedia
export default useChatBot;