import Navbar from '../components/layout/Navbar';
import Kontak from '../features/kontak/kontak';
import Footer from '../components/layout/Footer';

export default function detailpages() {
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