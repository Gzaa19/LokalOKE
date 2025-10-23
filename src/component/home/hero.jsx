import umkmBg from '../../assets/hero4.jpg';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-cover bg-center pt-20"
            style={{ backgroundImage: `url(${umkmBg})` }}
        >
            <div className="absolute inset-0 flex items-center bg-gradient-to-br from-[#07416bcc] via-black/60 to-black/70">
                <div className="container">
                    <div className="text-center text-white max-w-[900px] mx-auto px-5">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.25em] uppercase text-white/90 font-medium">
                            DISCOVER YOUR NEXT
                        </h1>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.30em] font-black leading-none uppercase text-white drop-shadow-lg mt-2">
                            LOKALOKE
                        </h2>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-3 tracking-[0.29em] uppercase text-white/90 font-semibold">
                            Temukan yang OKE di Sekitarmu
                        </h3>
                        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/95 max-w-[600px] mx-auto font-light">
                            Kami membantu UMKM mudah ditemukan, dan membantu
                            Anda menemukan produk lokal terbaik.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
