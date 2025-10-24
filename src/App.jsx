import './global.css'
import Navbar from './components/layouts/navbar'
import Hero from './components/home/hero'
import Footer from './components/layouts/footer'
import Features from './components/home/features'
import Newsletter from './components/home/newsletter'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default App
