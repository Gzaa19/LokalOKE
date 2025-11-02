import Navbar from '../components/layout/Navbar';
import UmkmDetail from '../features/umkm-detail/UmkmDetail';
import Footer from '../components/layout/Footer';
import CTA from '../features/umkm-detail/cta';
import { useScrollToTop } from '../hooks/useScrollToTop';



export default function UMKMDetail() {
  useScrollToTop();
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