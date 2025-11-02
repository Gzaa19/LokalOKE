import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import CTA from '../components/home/cta';
import Newsletter from '../components/home/newsletter';
import Footer from '../components/layout/Footer';
import UmkmDirectory from '../features/umkm-directory/UmkmDirectory';
import Divider from '../components/ui/Divider';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function HomePage() {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UmkmDirectory />
        <Divider variant="gradient" iconType="spinner" />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}