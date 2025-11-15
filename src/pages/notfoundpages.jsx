import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import NotFound from '../features/notfound/NotFound';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function NotFoundPage() {
  useScrollToTop();
  return (
    <>
      <main className="pt-16 overflow-x-hidden">
        <NotFound />
      </main>
    </>
  );
}