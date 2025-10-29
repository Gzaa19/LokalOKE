import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faCircleInfo, faMagnifyingGlass, faPercent } from '@fortawesome/free-solid-svg-icons'
import { faStar, faHeart } from '@fortawesome/free-regular-svg-icons'
export default function Features() {
    return (
        <section id="features" className="container mx-auto px-4 space-y-6 pt-20 pb-14">
            <div className="mx-auto flex max-w-232 flex-col items-center space-y-3 text-center">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-4xl leading-[1.2] mt-12 sm:mt-16">Semua Jadi Mudah & OKE</h2>
                <p className="text-sm sm:text-base md:text-xl leading-6 sm:leading-7 max-w-[750px] text-slate-600">
                    Kami merancang setiap fitur untuk membuat penjelajahan UMKM lokal jadi lebih cepat, akurat, dan menyenangkan.
                </p>
            </div>

            <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-6xl md:grid-cols-3">
                <div className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4 transition duration-300 hover:border-[#7A7A7A] hover:shadow-lg hover:shadow-[#7A7A7A] hover:-translate-y-0.5">
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faMapLocationDot} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-black shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg">Lokasi OKE</h3>
                      <p className="text-sm text-muted-foreground">Kami menyajikan data lokasi yang akurat. Temukan UMKM terdekat Anda dengan peta interaktif dan petunjuk arah yang jelas.</p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4 transition duration-300 hover:border-[#7A7A7A] hover:shadow-lg hover:shadow-[#7A7A7A] hover:-translate-y-0.5">
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faCircleInfo} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-black shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg">Informasi OKE</h3>
                      <p className="text-sm">Informasi lengkap dan terverifikasi. Lihat jam buka, daftar menu/jasa, fasilitas (parkir, WiFi, dll), dan info kontak yang up-to-date.</p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4 transition duration-300 hover:border-[#7A7A7A] hover:shadow-lg hover:shadow-[#7A7A7A] hover:-translate-y-0.5">
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faStar} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-black shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg">Ulasan Jujur</h3>
                      <p className="text-sm text-muted-foreground">Lihat apa kata komunitas. Baca ulasan dan rating jujur dari pengunjung lain untuk membantu Anda menentukan pilihan terbaik.</p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4 transition duration-300 hover:border-[#7A7A7A] hover:shadow-lg hover:shadow-[#7A7A7A] hover:-translate-y-0.5">
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-black shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg">Pencarian Mudah</h3>
                      <p className="text-sm text-muted-foreground">Temukan yang Anda cari dengan cepat. Gunakan filter canggih berdasarkan kategori, lokasi, rating, atau yang sedang buka saat ini.</p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4 transition duration-300 hover:border-[#7A7A7A] hover:shadow-lg hover:shadow-[#7A7A7A] hover:-translate-y-0.5">
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faPercent} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-black shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg">Info Promo Terbaru</h3>
                      <p className="text-sm text-muted-foreground">Jangan lewatkan penawaran menarik. Dapatkan info promo spesial, diskon, atau produk baru langsung dari pemilik UMKM.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-xl border border-[#E8E8E8] bg-white/85 shadow-lg select-none p-3 md:p-4 transition duration-300 hover:border-[#7A7A7A] hover:shadow-lg hover:shadow-[#7A7A7A] hover:-translate-y-0.5">
                  <div className="relative min-h-[75px] rounded-md p-6 md:p-7 lg:p-8">
                    <FontAwesomeIcon icon={faHeart} className="absolute top-6 left-6 md:top-7 md:left-7 lg:top-8 lg:left-8 text-2xl text-black shrink-0 leading-none" />
                    <div className="space-y-2 flex-1 pt-10">
                      <h3 className="font-bold text-base md:text-lg">100% Dukung Lokal</h3>
                      <p className="text-sm text-muted-foreground">Setiap pencarian, kunjungan, dan ulasan Anda adalah bentuk dukungan nyata untuk pertumbuhan bisnis tetangga dan ekonomi lokal Anda.</p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    )
}
