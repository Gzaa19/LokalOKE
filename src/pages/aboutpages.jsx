import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import About from '../features/about/About';
import { useScrollToTop } from '../hooks/useScrollToTop';



const AboutPages = () => {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
};

export default AboutPages;