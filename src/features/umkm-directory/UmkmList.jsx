import React from 'react';
import { useUmkmList } from '../../hooks/useUmkmList';
import UmkmCard from '../../components/umkm/umkmcard';
import AnimatedContainer from '../../components/ui/Container';
import AnimatedButton from '../../components/ui/Button';

const UmkmList = ({
  selectedCategory,
  currentPage,
  currentUMKM,
  totalPages,
  categories,
  nextPage,
  prevPage,
  handleCategoryChange,
  goToPage,
  hoveredCard,
  setHoveredCard
}) => {
  return (
    <AnimatedContainer 
      variant="fadeIn" 
      className="max-w-7xl mx-auto px-4 py-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Popular UMKM</h2>
        <div className="flex items-center gap-2">
          <AnimatedButton
            variant="scale"
            onClick={prevPage}
            className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700"
            disabled={totalPages <= 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </AnimatedButton>
          <AnimatedButton
            variant="scale"
            onClick={nextPage}
            className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700"
            disabled={totalPages <= 1}
          >
            <ChevronRight className="w-5 h-5" />
          </AnimatedButton>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <AnimatedButton
            key={category}
            variant="scale"
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === category
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </AnimatedButton>
        ))}
      </div>

      {/* UMKM Cards Grid */}
      <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentUMKM.map((umkm, index) => (
          <UmkmCard 
            key={umkm.id}
            umkm={umkm}
            isHovered={hoveredCard === umkm.id}
            onMouseEnter={() => setHoveredCard(umkm.id)}
            onMouseLeave={() => setHoveredCard(null)}
          />
        ))}
      </AnimatedContainer>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <AnimatedButton
              key={index}
              variant="scale"
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full ${
                currentPage === index
                  ? "bg-purple-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </AnimatedContainer>
  );
};

export default UmkmList;