import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import UmkmList from '../features/umkm-directory/UmkmList';
import { useScrollToTop } from '../hooks/useScrollToTop';



export default function UmkmPage() {
  useScrollToTop();
  const [hoveredCard, setHoveredCard] = useState(null);
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
