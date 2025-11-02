import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import CTA from '../components/home/cta';
import Newsletter from '../components/home/newsletter';
import Footer from '../components/layout/Footer';
import UmkmDirectory from '../features/umkm-directory/UmkmDirectory';
<<<<<<< HEAD
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function HomePage() {
  useScrollToTop();
=======
import { useScrollToSection } from '../hooks/useScrollToSection';

export default function HomePage() {
  useScrollToSection();

>>>>>>> 854a143d44e31191fe6f236e4b63a8aa0286ac68
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UmkmDirectory />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}