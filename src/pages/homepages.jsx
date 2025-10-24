import Navbar from '../components/layouts/navbar';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import Newsletter from '../components/home/newsletter';
import Footer from '../components/layouts/footer';

export default function HomePage() {
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
  );
}