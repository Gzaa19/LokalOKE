export async function sendMessageToBot(userMessage) {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      throw new Error('Server merespons dengan error');
    }

    const data = await response.json();
    return data.reply;

  } catch (error) {
    console.error('Error di chatService:', error);
    const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV;
    if (isDev) {
      const lower = (userMessage || '').toLowerCase();
      if (lower.includes('umkm')) {
        return 'UMKM adalah usaha mikro, kecil, dan menengah. Saya bisa bantu jelaskan lebih lanjut atau cara bergabung di LokalOKE.';
      }
      if (lower.includes('daftar') || lower.includes('bergabung')) {
        return 'Untuk mendaftar UMKM di LokalOKE, buka menu "Daftar Bisnis", isi formulir, dan tunggu verifikasi. Butuh panduan langkah demi langkah?';
      }
      if (lower.includes('keuntungan') || lower.includes('manfaat')) {
        return 'Keuntungan bergabung di LokalOKE: eksposur lebih besar, tools promosi, dan dukungan komunitas. Mau lihat detailnya?';
      }
      return 'Belum bisa terhubung ke server /api/chat di lingkungan pengembangan. Saya memberi jawaban sementara agar Anda tetap bisa melanjutkan.';
    }
    return 'Maaf, sepertinya Loka sedang ada masalah. Coba lagi nanti.';
  }
}

export default sendMessageToBot;