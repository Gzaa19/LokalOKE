import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";
import { useUmkmDetail } from "../../hooks/useUmkmDetail";
import PhotoGallery from "./PhotoGallery";
import UmkmMap from "./UmkmMap";
import AnimatedButton from "../../components/ui/Button";
import AnimatedContainer from "../../components/ui/Container";

const UmkmDetail = () => {
  const {
    umkm,
    currentImageIndex,
    activeTab,
    googleMapsUrl,
    mapsLink,
    nextImage,
    prevImage,
    goToImage,
    setActiveTab
  } = useUmkmDetail();

  // Pastikan halaman selalu mulai dari atas saat masuk ke halaman detail
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderTabContent = () => {
    if (!umkm) return null;
    
    switch(activeTab) {
      case 'deskripsi':
        return (
          <div className="text-gray-100 mt-3 sm:mt-4 lg:mt-6 text-sm sm:text-base">
            <p className="leading-relaxed">{umkm.description}</p>
          </div>
        );
      case 'detail':
        return (
          <div className="text-gray-100 mt-3 sm:mt-4 lg:mt-6 text-sm sm:text-base space-y-2 sm:space-y-3">
            <div>
              <span className="font-medium">Kategori: </span>
              <span>{umkm.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Telepon: </span>
              <span className="break-all">{umkm.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Rating: </span>
              <span>{umkm.rating}/5</span>
            </div>
            <div>
              <span className="font-medium">Kisaran Harga: </span>
              <span>{umkm.priceRange}</span>
            </div>
          </div>
        );
      case 'lokasi':
        return (
          <UmkmMap 
            address={umkm.address}
            googleMapsUrl={googleMapsUrl}
            mapsLink={mapsLink}
          />
        );
      default:
        return null;
    }
  };

  if (!umkm) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-30 pb-6 sm:pb-8 lg:pb-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">UMKM tidak ditemukan</h2>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 mt-4 bg-linear-to-r from-sky-600 to-sky-800 text-white px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <AnimatedContainer 
      variant="fadeIn" 
      className="tracking-wide max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-30 pb-6 sm:pb-8 lg:pb-20"
    >
        <div className="mb-4 sm:mb-6">
          <Link 
            to="/" 
            className="relative inline-flex items-center gap-2 bg-linear-to-r from-sky-600 to-sky-800 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
          >
            <span className="absolute inset-0 bg-linear-to-r from-sky-700 to-sky-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
            <ArrowLeft className="w-4 h-4 relative z-10" />
            <span className="relative z-10 text-sm sm:text-base">Kembali</span>
          </Link>
        </div>
        
        <div className="bg-white min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] grid items-start grid-cols-1 lg:grid-cols-2 gap-0 shadow-xl rounded-3xl overflow-hidden">
              <PhotoGallery
                images={umkm.images}
                name={umkm.name}
                currentImageIndex={currentImageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
                goToImage={goToImage}
              />

            <div className="bg-[#465C88] py-4 sm:py-6 px-4 sm:px-6 lg:px-8 h-full shadow-xl rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl lg:rounded-b-none">
                <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white">{umkm.name}</h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 mt-1 sm:mt-2">{umkm.category}</p>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4 justify-between mt-2 sm:mt-4">
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium">{umkm.priceRange}</h3>  
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-orange-500 text-orange-500" />
                        <span className="text-gray-300 text-xs sm:text-sm">({umkm.rating})</span>
                    </div>
                </div>

                <div>
                    <ul className="grid grid-cols-3 mt-4 sm:mt-6 lg:mt-8">
                        <li
                            onClick={() => setActiveTab('deskripsi')}
                            className={`text-xs sm:text-sm lg:text-base w-full py-2 sm:py-3 lg:py-3.5 px-1 sm:px-2 text-center border-b-2 cursor-pointer ${
                              activeTab === 'deskripsi' 
                                ? 'text-white border-white' 
                                : 'text-gray-300 border-gray-400 hover:text-white hover:border-gray-300'
                            }`}
                        >
                            Deskripsi
                        </li>
                        <li
                            onClick={() => setActiveTab('detail')}
                            className={`text-xs sm:text-sm lg:text-base w-full py-2 sm:py-3 lg:py-3.5 px-1 sm:px-2 text-center border-b-2 cursor-pointer ${
                              activeTab === 'detail' 
                                ? 'text-white border-white' 
                                : 'text-gray-300 border-gray-400 hover:text-white hover:border-gray-300'
                            }`}
                        >
                            Detail
                        </li>
                        <li
                            onClick={() => setActiveTab('lokasi')}
                            className={`text-xs sm:text-sm lg:text-base w-full py-2 sm:py-3 lg:py-3.5 px-1 sm:px-2 text-center border-b-2 cursor-pointer ${
                              activeTab === 'lokasi' 
                                ? 'text-white border-white' 
                                : 'text-gray-300 border-gray-400 hover:text-white hover:border-gray-300'
                            }`}
                        >
                            Lokasi
                        </li>
                    </ul>
                    {renderTabContent()}
                </div>
            </div>
        </div>
    </AnimatedContainer>
  );
};

export default UmkmDetail;