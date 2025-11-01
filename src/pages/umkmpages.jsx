import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import UmkmList from '../features/umkm-directory/UmkmList';

export default function UmkmPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <UmkmList
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
        />
      </main>
      <Footer />
    </>
  );
}
