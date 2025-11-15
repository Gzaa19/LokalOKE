import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { GoogleGenerativeAI } from '@google/generative-ai'

function parseJsonBody(req) {
  return new Promise((resolve) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      try {
        resolve(JSON.parse(data || '{}'))
      } catch (_) {
        resolve({})
      }
    })
  })
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiKeyFromEnv = env.GEMINI_API_KEY
  
  return {
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'lokaloke-dev-api',
      apply: 'serve',
      configureServer(server) {
        server.middlewares.use('/api/chat', async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Method Not Allowed' }))
            return
          }

          const apiKey = apiKeyFromEnv
          if (!apiKey) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Missing GEMINI_API_KEY in environment' }))
            return
          }

          try {
            const body = await parseJsonBody(req)
            const { message } = body || {}

            if (!message || typeof message !== 'string') {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Message is required' }))
              return
            }

            const genAI = new GoogleGenerativeAI(apiKey)
            const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
            const result = await model.generateContent(message)
            const response = await result.response
            const text = response.text()

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ reply: text }))
          } catch (err) {
            console.error('Error calling Gemini API:', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Failed to get response from AI' }))
          }
        })
      }
    }
    ,
    {
      name: 'lokaloke-preview-api',
      apply: 'preview',
      configurePreviewServer(server) {
        server.middlewares.use('/api/chat', async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Method Not Allowed' }))
            return
          }

          const apiKey = apiKeyFromEnv
          if (!apiKey) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Missing GEMINI_API_KEY in environment' }))
            return
          }

          try {
            const body = await parseJsonBody(req)
            const { message } = body || {}

            if (!message || typeof message !== 'string') {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Message is required' }))
              return
            }

            const genAI = new GoogleGenerativeAI(apiKey)
            const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
            const result = await model.generateContent(message)
            const response = await result.response
            const text = response.text()

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ reply: text }))
          } catch (err) {
            console.error('Error calling Gemini API:', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Failed to get response from AI' }))
          }
        })
      }
    }
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'icon-vendor': ['lucide-react', '@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons'],
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
}
})