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
      if (lower.includes('daftar')) {
        return "Isi formulir pada halaman 'Daftar Bisnis' untuk memulai.";
      }
      // Jawaban diarahkan ke penjelasan di content section Features pada beranda
      if ((lower.includes('keuntungan') || lower.includes('manfaat')) && (lower.includes('lokaloke') || lower.includes('lokal oke') || lower.includes('bergabung'))) {
        return 'Lokasi OKE: Temukan UMKM terdekat dengan mudah. Lihat lokasi pasti, jarak, dan rute terbaik untuk sampai ke tempat yang Anda inginkan Info Lengkap di sini.';
      }
      return 'Belum bisa terhubung ke server di lingkungan pengembangan. Saya memberi jawaban sementara agar Anda tetap bisa melanjutkan.';
    }
    return 'Maaf, sepertinya Loka sedang ada masalah. Coba lagi nanti.';
  }
}

export default sendMessageToBot;