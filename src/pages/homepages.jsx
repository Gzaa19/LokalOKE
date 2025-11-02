import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import Newsletter from '../components/home/newsletter';
import Footer from '../components/layout/Footer';
import UmkmDirectory from '../features/umkm-directory/UmkmDirectory';
import { useScrollToSection } from '../hooks/useScrollToSection';

export default function HomePage() {
  useScrollToSection();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UmkmDirectory />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}