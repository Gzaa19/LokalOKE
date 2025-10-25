import { Megaphone } from "lucide-react";

export default function CTA() {
  const getResponsiveStyles = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 640) {
        return {
          clipPath: "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
          boxShadow: "5px 5px 12px 1px rgba(0, 0, 0, 0.2)"
        };
      } else if (width <= 768) {
        return {
          clipPath: "polygon(40px 0%, 100% 0%, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0% 100%, 0% 40px)",
          boxShadow: "7px 7px 14px 2px rgba(0, 0, 0, 0.25)"
        };
      } else if (width <= 1024) {
        return {
          clipPath: "polygon(50px 0%, 100% 0%, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0% 100%, 0% 50px)",
          boxShadow: "10px 10px 20px 3px rgba(0, 0, 0, 0.3)"
        };
      } else {
        return {
          clipPath: "polygon(75px 0%, 100% 0%, 100% calc(100% - 75px), calc(100% - 75px) 100%, 0% 100%, 0% 75px)",
          boxShadow: "15px 15px 30px 4px rgba(0, 0, 0, 0.35)"
        };
      }
    }
    // Default fallback for SSR
    return {
      clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
      boxShadow: "8px 8px 16px 2px rgba(0, 0, 0, 0.25)"
    };
  };

  return (
    <div className="relative mx-auto max-w-4xl mt-5 mb-20 px-4">
        <div 
            className="bg-white px-4 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20 text-center relative"
            style={getResponsiveStyles()}
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
                    <button className="w-full sm:w-auto bg-gradient-to-r from-sky-600 to-sky-800 hover:bg-gradient-to-r from-sky-700 to-sky-900 text-white font-medium px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                        Daftarkan Usahamu (Gratis)
                    </button>
                    <button className="w-full sm:w-auto border-2 border-gray-400 hover:border-gray-500 text-gray-700 hover:text-gray-900 font-medium px-6 sm:px-8 py-3 rounded-full transition-all duration-300 bg-gray-100 hover:bg-gray-300 text-sm sm:text-base">
                        Pelajari Keuntungannya
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}