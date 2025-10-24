import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { umkmData } from "../Data/umkm.js";
import { ArrowLeft, MapPin, Phone, Star, DollarSign, ChevronLeft, ChevronRight } from "lucide-react";

const UMKMDetail = () => {
  const { id } = useParams();
  // Pastikan perbandingan ID konsisten (misal, keduanya string)
  const umkm = umkmData.find((u) => u.id.toString() === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  if (!umkm) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">UMKM tidak ditemukan</h1>
          <Link to="/" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  // URL untuk embed Google Maps
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${umkm.location.lat},${umkm.location.lng}&zoom=15`;
  
  // URL untuk link ke Google Maps
  const mapsLink = `https://www.google.com/maps?q=${umkm.location.lat},${umkm.location.lng}&hl=id&z=15`;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center px-4 py-2 text-white bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Direktori
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Image Gallery */}
        <div className="mb-12">
          {/* Main Image Display */}
          <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 group">
            <img
              src={umkm.images[currentImageIndex]}
              alt={`${umkm.name} - Photo ${currentImageIndex + 1}`}
              className="w-full h-[800px] object-cover"
            />
            
            {/* Arrow Navigation Buttons */}
            {umkm.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-900/80 hover:bg-blue-900 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                  aria-label="Gambar sebelumnya"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-900/80 hover:bg-blue-900 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                  aria-label="Gambar selanjutnya"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            
            {/* Image Counter */}
            {umkm.images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-blue-900/80 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                {currentImageIndex + 1} / {umkm.images.length}
              </div>
            )}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2">
            {umkm.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-blue-900 scale-125'
                    : 'bg-muted hover:bg-blue-900/30'
                }`}
                aria-label={`Lihat gambar ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* Main Info */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white shadow-lg border border-gray-100 rounded-xl h-full">
              <div className="p-10 bg-white rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-foreground leading-tight">
                      {umkm.name}
                    </h1>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {umkm.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-orange-200 px-4 py-2 rounded-full mt-2">
                    <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
                    <span className="font-semibold text-lg text-orange-800">{umkm.rating}</span>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-foreground">
                      Tentang
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {umkm.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-900 mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground mb-1">
                          Alamat
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {umkm.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-900 mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground mb-1">
                          Telepon
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {umkm.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:col-span-2">
                      <DollarSign className="w-5 h-5 text-blue-900 mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground mb-1">
                          Kisaran Harga
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {umkm.priceRange}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg border border-gray-100 rounded-xl min-h-[500px]">
              <div className="p-6 bg-white rounded-xl h-full flex flex-col">
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  Lokasi
                </h2>
                <div className="rounded-xl overflow-hidden shadow-md flex-1 min-h-[350px]">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '350px' }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    // --- Menggunakan URL embed yang sudah diperbaiki ---
                    src={googleMapsUrl}
                  />
                </div>
                <a
                  // --- Menggunakan URL link yang sudah diperbaiki ---
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group block mt-4 px-6 py-3 rounded-full text-blue-900 font-medium text-sm transition-all duration-950 ease-out border border-blue-900/30 bg-gradient-to-r from-blue-50/50 to-blue-100/50 hover:shadow-lg"
                >
                  <span className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-blue-700 to-blue-900 transition-all duration-950 ease-out"></span>
                  <span className="relative z-10 group-hover:text-white flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Buka di Google Maps
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMKMDetail;