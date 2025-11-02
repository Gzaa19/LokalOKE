import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Import plugin tailwind

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tambahkan plugin tailwind di sini
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks - library besar yang jarang berubah
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'icon-vendor': ['lucide-react', '@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons'],
          
          // App chunks - kode aplikasi berdasarkan fitur
          'pages': [
            './src/pages/homepages.jsx',
            './src/pages/aboutpages.jsx', 
            './src/pages/contactpages.jsx',
            './src/pages/umkmpages.jsx',
            './src/pages/detailpages.jsx'
          ],
          'components': [
            './src/components/layout/Navbar.jsx',
            './src/components/layout/Footer.jsx'
          ],
          'features': [
            './src/features/umkm-detail/UmkmDetail.jsx',
            './src/features/umkm-directory/UmkmDirectory.jsx'
          ]
        }
      }
    },
    // Tingkatkan batas warning chunk size ke 600kb
    chunkSizeWarningLimit: 600,
    // Optimasi build - gunakan esbuild minifier (default Vite)
    minify: 'esbuild',
    // Optimasi CSS dan assets
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Inline assets < 4kb
    // Target browser modern untuk bundle yang lebih kecil
    target: 'es2020'
  },
  // Optimasi development
  server: {
    hmr: {
      overlay: false
    }
  }
})