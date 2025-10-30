import Navbar from '../components/layouts/navbar';
import Kontak from '../components/kontak/kontak';
import Footer from '../components/layouts/footer';

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