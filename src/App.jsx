import './global.css'
import Navbar from './component/layouts/navbar'
import Hero from './component/home/hero'
import Search from './component/home/search'
import Footer from './component/layouts/footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Search />
      </main>
      <Footer />
    </>
  )
}

export default App
