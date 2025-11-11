// src/services/chatService.js

/**
 * Mengirim pesan dari front-end ke backend (serverless function)
 * @param {string} userMessage - Pesan yang diketik oleh pengguna
 * @returns {Promise<string>} - Balasan dari AI
 */
export async function sendMessageToBot(userMessage) {
  try {
    // 1. Memanggil "pelayan" (backend /api/chat)
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      // Jika pelayannya bilang ada masalah (error 500, 404, dll)
      throw new Error('Server merespons dengan error');
    }

    const data = await response.json();
    return data.reply; // 2. Mengembalikan balasan dari AI

  } catch (error) {
    console.error('Error di chatService:', error);
    // 3. Beri pesan error jika gagal
    return 'Maaf, sepertinya Loka sedang ada masalah. Coba lagi nanti.';
  }
}

// Ekspor default untuk kompatibilitas impor
export default sendMessageToBot;