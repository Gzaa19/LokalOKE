import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { umkmData } from "../../Data/umkm.js";
import { ArrowLeft, MapPin, Phone, Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const UMKMDetail = () => {
  const { id } = useParams();
  const umkm = umkmData.find((u) => u.id.toString() === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('deskripsi');

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === umkm.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? umkm.images.length - 1 : prev - 1
    );
  };

  // URL untuk embed Google Maps
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${umkm.location.lat},${umkm.location.lng}&zoom=15`;
  
  // URL untuk link ke Google Maps
  const mapsLink = `https://www.google.com/maps?q=${umkm.location.lat},${umkm.location.lng}&hl=id&z=15`;

  const renderTabContent = () => {
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
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="break-all">{umkm.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
              <span>Rating: {umkm.rating}/5</span>
            </div>
            <div>
              <span className="font-medium">Kisaran Harga: </span>
              <span>{umkm.priceRange}</span>
            </div>
          </div>
        );
      case 'lokasi':
        return (
          <div className="text-gray-100 mt-3 sm:mt-4 lg:mt-6 text-sm sm:text-base space-y-3 sm:space-y-4">
            <div className="flex items-start gap-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
              <span className="leading-relaxed">{umkm.address}</span>
            </div>
            <div className="mt-3 sm:mt-4">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg sm:h-[200px]"
              ></iframe>
            </div>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-2 mt-3 sm:mt-4 bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg overflow-hidden group transition-all duration-300 ease-out">
              <span className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
              <span className="relative z-10">Buka di Google Maps</span>
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tracking-wide max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-30 pb-6 sm:pb-8 lg:pb-20">
        <div className="mb-4 sm:mb-6">
          <Link 
            to="/" 
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-sky-800 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-700 to-sky-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
            <ArrowLeft className="w-4 h-4 relative z-10" />
            <span className="relative z-10 text-sm sm:text-base">Kembali</span>
          </Link>
        </div>
        
        <div className="bg-white min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] grid items-start grid-cols-1 lg:grid-cols-2 gap-0 shadow-xl rounded-xl overflow-hidden">
            <div className="h-[400px] sm:h-[500px] lg:h-[600px]">
                <div className="relative h-full flex items-center justify-center">
                    {umkm.images && umkm.images.length > 0 ? (
                      <>
                        <img 
                          src={umkm.images[currentImageIndex]} 
                          alt={`${umkm.name} - ${currentImageIndex + 1}`} 
                          className="w-full h-full object-cover" 
                        />
                        {umkm.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1.5 sm:p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
                            >
                              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1.5 sm:p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
                            >
                              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <div className="flex items-center justify-center gap-3 absolute bottom-4 sm:bottom-6 left-0 right-0 mx-auto z-10">
                              {umkm.images.map((_, index) => (
                                <div 
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-3.5 h-3.5 shrink-0 rounded-full cursor-pointer transition-colors ${
                                    index === currentImageIndex ? 'bg-white shadow-lg' : 'bg-white bg-opacity-50'
                                  }`}
                                ></div>
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Tidak ada gambar</span>
                      </div>
                    )}
                </div>
            </div>

            <div className="bg-[#465C88] py-4 sm:py-6 px-4 sm:px-6 lg:px-8 h-full shadow-xl rounded-xl">
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
                            className={`text-xs sm:text-sm lg:text-base w-full py-2 sm:py-3 lg:py-3.5 px-1 sm:px-2 text-center border-b-2 cursor-pointer transition-colors ${
                              activeTab === 'deskripsi' 
                                ? 'text-white border-white' 
                                : 'text-gray-300 border-gray-400 hover:text-white hover:border-gray-300'
                            }`}
                        >
                            Deskripsi
                        </li>
                        <li
                            onClick={() => setActiveTab('detail')}
                            className={`text-xs sm:text-sm lg:text-base w-full py-2 sm:py-3 lg:py-3.5 px-1 sm:px-2 text-center border-b-2 cursor-pointer transition-colors ${
                              activeTab === 'detail' 
                                ? 'text-white border-white' 
                                : 'text-gray-300 border-gray-400 hover:text-white hover:border-gray-300'
                            }`}
                        >
                            Detail
                        </li>
                        <li
                            onClick={() => setActiveTab('lokasi')}
                            className={`text-xs sm:text-sm lg:text-base w-full py-2 sm:py-3 lg:py-3.5 px-1 sm:px-2 text-center border-b-2 cursor-pointer transition-colors ${
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
    </div>
  );
};

export default UMKMDetail;