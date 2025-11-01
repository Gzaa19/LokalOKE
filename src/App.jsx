import './global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepages'
import UMKMDetail from './pages/detailpages'
import ContactPage from './pages/contactpages'
import UmkmPage from './pages/umkmpages'
import AboutPage from './pages/aboutpages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/umkm" element={<UmkmPage />} />
        <Route path="/umkm/:id" element={<UMKMDetail />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/kontak" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
