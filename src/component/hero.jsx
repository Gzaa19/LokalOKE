import umkmBg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="hero" id="home" style={{backgroundImage: `url(${umkmBg})`}}>
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1>Belanja Produk Lokal, Mudah dan OKE</h1>
            <p>Dukung UMKM Indonesia dengan platform yang sederhana dan cepat. Temukan produk berkualitas dari pengusaha lokal di sekitar Anda.</p>
            <div className="cta">
              <a href="#produk" className="btn btn-primary">Jelajahi Produk</a>
              <a href="#kontak" className="btn btn-secondary">Pelajari Lebih Lanjut</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}