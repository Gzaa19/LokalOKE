import Navbar from '../components/layouts/navbar';
import UMKMDetail from '../components/detailproduk/detail';
import Footer from '../components/layouts/footer';
import CTA from '../components/detailproduk/cta';

export default function detailpages() {
  return (
    <>
      <Navbar />
      <main>
        <UMKMDetail />
        <CTA />
      </main>
      <Footer />
    </>
  );
}