import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useResponsiveDesign } from "../../hooks/useResponsiveDesign";

const PhotoGallery = ({ 
  images, 
  name, 
  currentImageIndex, 
  nextImage, 
  prevImage, 
  goToImage 
}) => {
  const { getResponsiveClasses, getResponsiveValue } = useResponsiveDesign();

  // Tetapkan tinggi galeri agar konsisten di semua gambar dan breakpoint
  const galleryHeightClasses = getResponsiveClasses({
    default: "h-[400px]",
    sm: "h-[500px]",
    lg: "h-[625px]"
  });

  // Responsive button positioning and size
  const buttonClasses = getResponsiveClasses({
    default: "absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1.5 rounded-full hover:bg-opacity-70 transition-all z-10",
    sm: "absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1.5 sm:p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
  });

  const leftButtonPosition = getResponsiveClasses({
    default: "left-4",
    sm: "left-4 sm:left-6"
  });

  const rightButtonPosition = getResponsiveClasses({
    default: "right-4", 
    sm: "right-4 sm:right-6"
  });

  const iconSize = getResponsiveClasses({
    default: "w-4 h-4",
    sm: "w-4 h-4 sm:w-5 sm:h-5"
  });

  const indicatorPosition = getResponsiveClasses({
    default: "bottom-4",
    sm: "bottom-4 sm:bottom-6"
  });
  return (
    <div className={`${galleryHeightClasses}`}>
      <div className="relative h-full flex items-center justify-center">
        {images && images.length > 0 ? (
          <>
            <img 
              src={images[currentImageIndex]} 
              alt={`${name} - ${currentImageIndex + 1}`} 
              className={`w-full h-full object-cover`}
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className={`${buttonClasses} ${leftButtonPosition}`}
                >
                  <ChevronLeft className={iconSize} />
                </button>
                <button
                  onClick={nextImage}
                  className={`${buttonClasses} ${rightButtonPosition}`}
                >
                  <ChevronRight className={iconSize} />
                </button>
                <div className={`flex items-center justify-center gap-3 absolute ${indicatorPosition} left-0 right-0 mx-auto z-10`}>
                  {images.map((_, index) => (
                    <div 
                      key={index}
                      onClick={() => goToImage(index)}
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
  );
};

export default PhotoGallery;