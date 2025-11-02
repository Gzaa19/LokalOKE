import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import AnimatedCard from '../ui/Card';
import AnimatedButton from '../ui/Button';
import CategoryBadge from '../ui/CategoryBadge';

const UmkmCard = ({ 
  umkm, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  const location = useLocation();
  return (
    <AnimatedCard
      hoverEffect="lift"
      entranceAnimation="slideUp"
      delay={0.1}
      className="
        bg-white shadow-lg overflow-hidden 
        flex flex-col group h-full
        rounded-tl-[50px] rounded-br-[50px] tr bl
      "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="h-64 shrink-0 rounded-tl-[50px] overflow-hidden relative">
        <img
          src={umkm.images[0]}
          alt={umkm.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Category Badge dengan animasi hover */}
        <div className="absolute top-3 right-3">
          <CategoryBadge 
            category={umkm.category}
            isVisible={isHovered}
            delay={0.1}
          />
        </div>
      </div>

      <div className="p-4 flex flex-col grow justify-between">
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2" title={umkm.name}>
              {umkm.name}
            </h3>
            <div className="flex items-center text-sm font-semibold text-yellow-600 ml-4 shrink-0">
              <Star size={16} fill="currentColor" className="mr-1" />
              {umkm.rating.toFixed(1)}
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <svg
              className="w-4 h-4 text-red-500 mr-1 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="truncate" title={umkm.address}>
              {umkm.address.length > 40 ? umkm.address.substring(0, 37) + '...' : umkm.address}
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-1 line-clamp-2" title={umkm.description}>
            {umkm.description}
          </p>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-base font-bold text-[#07416b]">
            {umkm.priceRange}
          </span>
        </div>
      </div>

      <Link 
        to={`/umkm/${umkm.id}`} 
        state={{ from: location.pathname }}
        className="w-full mt-auto"
        onClick={() => {
          // Simpan path saat ini ke localStorage sebagai backup
          localStorage.setItem('previousPath', location.pathname);
        }}
      >
        <button
          variant="scale"
          size="lg"
          className={`
            bg-[#07416b] text-white
            py-3 w-full
            flex items-center justify-center
            text-base font-semibold
            rounded-br-[50px] bl rounded-tr-none rounded-tl-none cursor-pointer
            ${isHovered
              ? 'opacity-100 translate-x-0 scale-100 shadow-xl'
              : 'opacity-0 translate-x-4 scale-95'
            }
          `}
          aria-label={`Lihat detail untuk ${umkm.name}`}
        >
          <span className="flex items-center justify-center space-x-2">
            Lihat Detail
            <ArrowRight size={20} />
          </span>
        </button>
      </Link>
    </AnimatedCard>
  );
};

export default UmkmCard;