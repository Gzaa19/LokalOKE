import Navbar from '../components/layout/Navbar';
import Kontak from '../features/kontak/kontak';
import Footer from '../components/layout/Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';



export default function ContactPage() {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <main>
        <Kontak />
      </main>
      <Footer />
    </>
  );
}