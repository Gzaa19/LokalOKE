import './index.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/homepages'
import UMKMDetail from './pages/detailpages'
import ContactPage from './pages/contactpages'
import UmkmPage from './pages/umkmpages'
import AboutPage from './pages/aboutpages'
import BusinessRegisterPage from './pages/businessregisterpages'
import NotFoundPage from './pages/notfoundpages'
import ChatLOKA from './features/LOKA/chatLOKA.jsx'

function AppContent() {
  const location = useLocation();
  const pathname = location.pathname;
  const showChat = (
    pathname === '/' ||
    pathname === '/umkm' ||
    pathname === '/tentang' ||
    pathname === '/kontak' ||
    pathname === '/daftar-bisnis' ||
    pathname.startsWith('/umkm/')
  );
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/umkm" element={<UmkmPage />} />
        <Route path="/umkm/:id" element={<UMKMDetail />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/kontak" element={<ContactPage />} />
        <Route path="/daftar-bisnis" element={<BusinessRegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {showChat && <ChatLOKA />}
    </>
  );
}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
