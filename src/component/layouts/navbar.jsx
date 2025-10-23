import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="brand">
          <div className="logo-container">
            <div className="logo-text">
              <span className="brand-name">LOKALOKE</span>
            </div>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#home">Beranda</a>
          <a href="#produk">Produk</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </div>
    </header>
  );
}