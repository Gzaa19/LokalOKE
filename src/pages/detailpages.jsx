import Navbar from '../components/layout/Navbar';
import UmkmDetail from '../features/umkm-detail/UmkmDetail';
import Footer from '../components/layout/Footer';
import CTA from '../features/umkm-detail/cta';

export default function detailpages() {
  return (
    <>
      <Navbar />
      <main>
        <UmkmDetail />
        <CTA />
      </main>
      <Footer />
    </>
  );
}