import './global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepages'
import UMKMDetail from './pages/detailpages'
import ContactPage from './pages/contactpages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/umkm/:id" element={<UMKMDetail />} />
        <Route path="/kontak" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
