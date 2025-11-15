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
  const { getResponsiveClasses } = useResponsiveDesign();

  const galleryHeightClasses = getResponsiveClasses({
    default: "h-[400px]",
    sm: "h-[500px]",
    lg: "h-[625px]"
  });

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
    <div className={`relative w-full ${galleryHeightClasses} bg-gray-100 rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none lg:rounded-t-3xl overflow-hidden`}>
      {images && images.length > 0 ? (
        <>
          <img
            src={images[currentImageIndex]}
            alt={`${name} - ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
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
                    className={`w-3 h-3 shrink-0 rounded-full cursor-pointer transition-all duration-200 ${
                      index === currentImageIndex
                        ? "bg-blue-500 scale-110"
                        : "bg-white bg-opacity-60 hover:bg-opacity-80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
          <p>Tidak ada gambar tersedia</p>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;