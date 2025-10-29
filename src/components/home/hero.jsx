export default function Hero() {
    // URL gambar dari Pinterest
    const heroImg1 = 'https://i.pinimg.com/736x/7c/c7/9d/7cc79d1380ddb1c4968e266286b9aba2.jpg';
    const heroImg2 = 'https://i.pinimg.com/1200x/33/3a/60/333a6009e79964ef5c625db241ce3460.jpg';
    const heroImg3 = 'https://i.pinimg.com/1200x/af/5e/84/af5e84b51f1b73f474283569ae9a4efc.jpg';
    const heroImg4 = 'https://i.pinimg.com/736x/f1/4c/c3/f14cc33bb61be476421ff86e698de184.jpg';

    return (
        <section
            id="home"
            className="relative min-h-screen pt-20"
        >
            {/* Grid Background dengan 4 gambar */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div 
                    className="bg-cover bg-center brightness-105 saturate-105"
                    style={{ backgroundImage: `url(${heroImg1})` }}
                />
                <div 
                    className="bg-cover bg-center brightness-105 saturate-105"
                    style={{ backgroundImage: `url(${heroImg2})` }}
                />
                <div 
                    className="bg-cover bg-center brightness-105 saturate-105"
                    style={{ backgroundImage: `url(${heroImg3})` }}
                />
                <div 
                    className="bg-cover bg-center brightness-105 saturate-105"
                    style={{ backgroundImage: `url(${heroImg4})` }}
                />
            </div>

            {/* Overlay dan konten */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#07416b88] via-black/40 to-black/50">
                <div className="container flex justify-center">
                    <div className="flex flex-col items-center text-center text-white max-w-[900px] mx-auto px-5">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.18em] sm:tracking-[0.25em] uppercase text-white/90 font-medium">
                            DISCOVER YOUR NEXT
                        </h1>
                        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-[430px]:text-4xl max-[390px]:text-[2.25rem] max-[375px]:text-[2.125rem] tracking-[0.18em] sm:tracking-[0.24em] md:tracking-[0.28em] lg:tracking-[0.30em] xl:tracking-[0.32em] font-black leading-none uppercase text-white drop-shadow-lg mt-2">
                            LOKALOKE
                        </h2>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-[430px]:text-sm mt-3 tracking-[0.16em] sm:tracking-[0.20em] md:tracking-[0.24em] lg:tracking-[0.28em] uppercase text-white/90 font-semibold">
                            Temukan yang OKE di Sekitarmu
                        </h3>
                        <p className="mt-4 font-semiblod text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/95 max-w-[600px] mx-auto font-light">
                            Kami membantu UMKM mudah ditemukan, dan membantu Anda menemukan produk lokal terbaik.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
