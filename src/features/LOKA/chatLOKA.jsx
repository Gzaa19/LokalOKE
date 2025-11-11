import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, MessageCircle, X } from 'lucide-react';
import { useChatBot } from '../../hooks/useChatLOKA.js';
import AnimatedContainer from '../../components/ui/Container';

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
      {/* Floating Chat Bubble Button */}
      <button
        aria-label="Buka LOKA Chat"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-200"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Window */}
          <AnimatedContainer
            variant="fadeIn"
            className="absolute bottom-20 right-6 w-[360px] sm:w-[420px] bg-white rounded-2xl shadow-2xl border border-sky-100 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-sky-100 bg-gradient-to-r from-sky-50 to-blue-50">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-2 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-sky-900">LOKA Assistant</span>
                  <span className="text-xs text-sky-600">Online • Siap membantu</span>
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

            {/* Messages Area */}
            <div className="max-h-[55vh] h-[300px] overflow-y-auto p-4 space-y-4 bg-white">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
                        : 'bg-sky-100 text-sky-900 border border-sky-200'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Bot className="w-4 h-4 mt-1 text-sky-600 flex-shrink-0" />
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      {message.sender === 'user' && (
                        <User className="w-4 h-4 mt-1 text-white/80 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-sky-100 text-sky-900 border border-sky-200 px-4 py-3 rounded-2xl max-w-[70%]">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-sky-600" />
                      <p className="text-sm">LOKA sedang mengetik...</p>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-sky-200 p-3 bg-sky-50">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Tanyakan sesuatu tentang UMKM..."
                  className="flex-1 px-3 py-2.5 rounded-xl border border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sky-900 placeholder-sky-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 disabled:from-sky-300 disabled:to-blue-400 text-white px-4 py-2.5 rounded-xl transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </form>

              {/* Quick Suggestions */}
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
                    className="bg-white text-sky-700 border border-sky-300 hover:border-sky-500 px-3 py-1.5 rounded-xl text-xs transition-all duration-200 hover:shadow-sm"
                    disabled={isLoading}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        </div>
      )}
    </>
  );
}