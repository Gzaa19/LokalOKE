import Navbar from '../components/layout/Navbar';
import BusinessRegister from '../features/business-register/BusinessRegister';
import Footer from '../components/layout/Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function BusinessRegisterPage() {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <main>
        <BusinessRegister />
      </main>
      <Footer />
    </>
  );
}