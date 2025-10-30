import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import Newsletter from '../components/home/newsletter';
import Footer from '../components/layout/Footer';
import UmkmDirectory from '../features/umkm-directory/UmkmDirectory';

export default function HomePage() {
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