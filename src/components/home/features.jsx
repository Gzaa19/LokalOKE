import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faCircleInfo, faMagnifyingGlass, faPercent } from '@fortawesome/free-solid-svg-icons'
import { faStar, faHeart } from '@fortawesome/free-regular-svg-icons'
import AnimatedCard from '../ui/Card'
import AnimatedContainer from '../ui/Container'
export default function Features() {
    return (
        <AnimatedContainer 
            variant="fadeIn" 
            className="container mx-auto px-4 space-y-6 pt-20 pb-5"
        >
            <div className="mx-auto flex max-w-232 flex-col items-center space-y-3 text-center">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-4xl leading-[1.2] mt-12 sm:mt-16 bg-gradient-to-r from-sky-700 via-sky-800 to-sky-900 bg-clip-text text-transparent">Semua Jadi Mudah & OKE</h2>
                <p className="text-sm sm:text-base md:text-xl leading-6 sm:leading-7 max-w-[750px] text-gray-700 font-medium">
                    Kami merancang setiap fitur untuk membuat penjelajahan UMKM lokal jadi lebih cepat, akurat, dan menyenangkan.
                </p>
            </div>

            <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-6xl md:grid-cols-2 lg:grid-cols-3">
                <AnimatedCard
                    hoverEffect="lift"
                    entranceAnimation="slideUp"
                    delay={0.1}
                    className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4"
                >
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faMapLocationDot} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-sky-700 shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg text-gray-800">Lokasi OKE</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Temukan UMKM terdekat dengan mudah. Lihat lokasi pasti, jarak, dan rute terbaik untuk sampai ke tempat yang Anda inginkan.</p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard
                    hoverEffect="lift"
                    entranceAnimation="slideUp"
                    delay={0.2}
                    className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4"
                >
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faCircleInfo} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-sky-700 shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg text-gray-800">Info Lengkap</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Dapatkan informasi detail tentang produk, layanan, jam operasional, dan kontak. Semua yang Anda butuhkan dalam satu tempat.</p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard
                    hoverEffect="lift"
                    entranceAnimation="slideUp"
                    delay={0.3}
                    className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4"
                >
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faStar} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-sky-700 shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg text-gray-800">Ulasan Jujur</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Lihat apa kata komunitas. Baca ulasan dan rating jujur dari pengunjung lain untuk membantu Anda menentukan pilihan terbaik.</p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard
                    hoverEffect="lift"
                    entranceAnimation="slideUp"
                    delay={0.4}
                    className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4"
                >
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-sky-700 shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg text-gray-800">Pencarian Mudah</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Cari berdasarkan kategori, lokasi, atau nama. Filter canggih membantu Anda menemukan persis apa yang dicari dengan cepat.</p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard
                    hoverEffect="lift"
                    entranceAnimation="slideUp"
                    delay={0.5}
                    className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4"
                >
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faPercent} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-sky-700 shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg text-gray-800">Promo & Diskon</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Jangan lewatkan penawaran menarik! Temukan promo eksklusif dan diskon khusus dari UMKM favorit Anda.</p>
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard
                    hoverEffect="lift"
                    entranceAnimation="slideUp"
                    delay={0.6}
                    className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4"
                >
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faHeart} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-sky-700 shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg text-gray-800">100% Dukung Lokal</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Setiap pencarian, kunjungan, dan ulasan Anda adalah bentuk dukungan nyata untuk pertumbuhan bisnis tetangga dan ekonomi lokal Anda.</p>
                    </div>
                  </div>
                </AnimatedCard>
            </div>
        </AnimatedContainer>
    )
}
