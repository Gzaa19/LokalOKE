import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import About from '../features/about/About';

const AboutPages = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPages;