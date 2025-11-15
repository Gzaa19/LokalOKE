import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, MessageCircle, X } from 'lucide-react';
import { useChatBot } from '../../hooks/useChatLOKA.js';
import AnimatedContainer from '../../components/ui/Container';
import Input from '../../components/ui/Input.jsx';
import AnimatedButton from '../../components/ui/Button.jsx';

export default function ChatLOKA() {
  const { messages, isLoading, handleSend } = useChatBot();
  const [inputMessage, setInputMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const suggestions = [
    'Apa itu UMKM?',
    'Bagaimana cara daftar UMKM di LokalOKE?',
    'Apa keuntungan bergabung dengan LokalOKE?',
    'Bagaimana cara meningkatkan penjualan UMKM?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      handleSend(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <>
      <button
        aria-label="Buka LOKA Chat"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 rounded-full p-3 sm:p-4 shadow-xl bg-gradient-to-r from-sky-700 to-sky-900 text-white hover:from-sky-800 hover:to-sky-950 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-200"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {isOpen && (
          <AnimatedContainer
            variant="fadeIn"
            className="fixed bottom-24 sm:bottom-20 right-2 sm:right-6 z-[9999] w-[88vw] sm:w-[360px] bg-white/95 rounded-2xl shadow-2xl border border-sky-100 overflow-hidden"
          >
            <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 border-b border-sky-100 bg-white/80">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-sky-700 to-sky-900 p-2 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-semibold text-sky-900">LOKA Assistant</span>
                  <span className="text-[11px] sm:text-xs text-sky-700">Online • Siap membantu</span>
                </div>
              </div>
              <button
                aria-label="Tutup chat"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-sky-100 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-sky-700" />
              </button>
            </div>

            <div className="max-h-[60vh] h-[42vh] sm:h-[280px] overflow-y-auto p-3 sm:p-3 space-y-3 sm:space-y-3 bg-white/90">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] sm:max-w-[76%] px-3 py-2.5 sm:px-3 sm:py-2.5 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-sky-700 to-sky-900 text-white'
                        : 'bg-sky-100 text-sky-900 border border-sky-300'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Bot className="w-4 h-4 mt-1 text-sky-700 flex-shrink-0" />
                      )}
                      <p className="text-[12px] sm:text-[13px] leading-relaxed">{message.text}</p>
                      {message.sender === 'user' && (
                        <User className="w-4 h-4 mt-1 text-white/80 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-sky-100 text-sky-900 border border-sky-300 px-3 py-2.5 rounded-2xl max-w-[60%]">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-sky-700" />
                      <div className="typing-dots" aria-label="Bot sedang mengetik">
                        <span className="typing-dot" />
                        <span className="typing-dot" />
                        <span className="typing-dot" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-sky-200 p-2.5 sm:p-3 bg-sky-50/90">
              <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                <div className="flex-1">
                  <label htmlFor="loka-chat-input" className="sr-only">Pesan</label>
                  <Input
                    id="loka-chat-input"
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Tanyakan sesuatu tentang UMKM..."
                    disabled={isLoading}
                    size="medium"
                    variant="default"
                    className="w-full bg-white/90 border-sky-300 focus:ring-sky-700 focus:border-sky-700 text-sky-900 placeholder-sky-500"
                  />
                </div>
                <AnimatedButton
                  type="submit"
                  color="primary"
                  size="md"
                  variant="bounce"
                  disabled={isLoading || !inputMessage.trim()}
                  className="rounded-xl px-3 sm:px-4 py-2"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </AnimatedButton>
              </form>

              <div className="mt-3 flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputMessage(suggestion);
                      setTimeout(() => {
                        handleSend(suggestion);
                        setInputMessage('');
                      }, 100);
                    }}
                    className="bg-white/90 text-sky-800 border border-sky-300 hover:border-sky-600 px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs transition-all duration-200 hover:shadow-sm"
                    disabled={isLoading}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedContainer>
      )}
    </>
  );
}