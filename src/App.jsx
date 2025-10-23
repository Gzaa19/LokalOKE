import './global.css'
import Navbar from './component/layouts/navbar'
import Hero from './component/home/hero'
import Footer from './component/layouts/footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default App
