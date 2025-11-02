# LokalOKE - Platform UMKM Digital

LokalOKE adalah platform digital yang menghubungkan UMKM (Usaha Mikro, Kecil, dan Menengah) lokal dengan masyarakat. Platform ini memungkinkan pengguna untuk menemukan, menjelajahi, dan berinteraksi dengan berbagai UMKM di sekitar mereka dengan mudah dan efisien.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.16
- **Animation**: Framer Motion 12.23.24
- **Routing**: React Router DOM 7.9.4
- **Icons**: Lucide React 0.547.0, Font Awesome
- **Language**: JavaScript (ES6+)

## 🚀 Cara Menjalankan Project

### Prerequisites
Pastikan Anda telah menginstall:
- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/Gzaa19/LokalOKE.git
   cd LokalOKE
   ```

2. **Install dependencies**
   ```terminal
   npm install
   ```

3. **Jalankan development server**
   ```terminal
   npm run dev
   ```

4. **Buka browser**
   Akses aplikasi di `http://localhost:5173`

### Scripts Tersedia

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run preview` - Preview build production
- `npm run lint` - Menjalankan ESLint untuk code quality

## 📋 Progress Saat Ini

### ✅ Fitur yang Sudah Selesai
- **Landing Page**: Halaman utama dengan hero section dan overview UMKM
- **Halaman UMKM**: Directory lengkap dengan sistem filtering berdasarkan kategori
- **Detail UMKM**: Halaman detail dengan galeri foto, informasi lengkap, dan integrasi Google Maps
- **Halaman Tentang Kami**: Informasi tentang platform dan tim
- **Halaman Kontak**: Form kontak dan informasi komunikasi
- **Responsive Design**: Optimized untuk desktop, tablet, dan mobile
- **Navigation System**: Navbar dan footer yang konsisten
- **Animation Effects**: Smooth animations menggunakan Framer Motion

### 🔧 Komponen Utama
- **Navbar & Footer**: Layout konsisten di seluruh aplikasi
- **UMKM Cards**: Komponen card dengan hover effects dan animasi
- **Photo Gallery**: Galeri foto dengan navigasi dan transisi smooth
- **Filter System**: Sistem filtering UMKM berdasarkan kategori
- **Responsive Components**: Komponen yang adaptif untuk berbagai ukuran layar

### 📱 Kategori UMKM yang Tersedia
- Kuliner (Makanan, Kedai Kopi, Minuman)
- Kos/Penginapan
- Jasa
- Toko Kelontong
- Kerajinan

## 📁 Struktur Project

```
src/
├── components/          # Komponen reusable
│   ├── home/           # Komponen khusus homepage
│   ├── layout/         # Navbar, Footer
│   ├── ui/             # UI components (Button, Card, dll)
│   └── umkm/           # Komponen khusus UMKM
├── features/           # Feature-based components
│   ├── kontak/         # Fitur kontak
│   ├── umkm-detail/    # Fitur detail UMKM
│   └── umkm-directory/ # Fitur directory UMKM
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── Data/               # Data dan mock data
└── assets/             # Static assets (images, etc)
```
**LokalOKE** - Menghubungkan UMKM dengan Masyarakat 🏪✨
