import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import CTA from '../components/home/cta';
import Newsletter from '../components/home/newsletter';
import Footer from '../components/layout/Footer';
import UmkmDirectory from '../features/umkm-directory/UmkmDirectory';
import Divider from '../components/ui/Divider';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useScrollToSection } from '../hooks/useScrollToSection';

export default function HomePage() {
  useScrollToTop();
  useScrollToSection(); 

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UmkmDirectory isHomePage={true} />
        <Divider variant="gradient" iconType="spinner" />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}