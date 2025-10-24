import './global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepages'
import UMKMDetail from './pages/detailpages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/umkm/:id" element={<UMKMDetail />} />
      </Routes>
    </Router>
  )
}

export default App
