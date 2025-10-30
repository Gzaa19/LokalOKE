import { Megaphone } from "lucide-react";
import { useResponsiveDesign } from "../../hooks/useResponsiveDesign";

export default function CTA() {
  const { getResponsiveCtaStyles, getResponsiveClasses } = useResponsiveDesign();

  // Shared button classes using responsive utilities
  const baseButtonClasses = getResponsiveClasses({
    default: "w-full font-medium px-6 py-3 rounded-full transition-all duration-300 text-sm",
    sm: "w-full sm:w-auto font-medium px-6 sm:px-8 py-3 rounded-full transition-all duration-300 text-sm sm:text-base"
  });

  return (
    <div className="relative mx-auto max-w-4xl mt-5 mb-20 px-4">
        <div 
            className="bg-white px-4 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20 text-center relative"
            style={getResponsiveCtaStyles()}
        >
            <div className="mx-auto max-w-2xl">
                <div className="mb-4">
                    <span className="inline-flex items-center gap-2 text-red-600 text-md font-medium animate-bounce">
                        <Megaphone className="w-6 h-6" />
                        Gabung LOKALOKE
                    </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-900 mb-4 sm:mb-6">
                    Siap Bikin Usahamu LokalOKE?
                </h2>
                
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto px-2">
                    Ayo, pertemukan bisnismu dengan ribuan pelanggan baru di sekitarmu. LokalOKE adalah solusi agar lokasimu mudah ditemukan dan informasimu jadi OKE. Daftarkan usahamu dan jadilah bagian dari direktori UMKM lokal terbaik.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <button className={`${baseButtonClasses} bg-gradient-to-r from-sky-600 to-sky-800 hover:bg-gradient-to-r from-sky-700 to-sky-900 text-white transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                        Daftarkan Usahamu (Gratis)
                    </button>
                    <button className={`${baseButtonClasses} border-2 border-gray-400 hover:border-gray-500 text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-300`}>
                        Pelajari Keuntungannya
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}