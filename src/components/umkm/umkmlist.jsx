import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import UMKMCard from "./umkmcard";
import { umkmData, categories } from "../../Data/umkm";

export default function UMKMList() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;

  // Filter UMKM berdasarkan kategori
  const filteredUMKM = selectedCategory === "Semua" 
    ? umkmData 
    : umkmData.filter(umkm => umkm.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredUMKM.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const currentUMKM = filteredUMKM.slice(startIndex, startIndex + cardsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); // Reset ke halaman pertama saat ganti kategori
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Popular UMKM</h2>
        <div className="flex items-center gap-2">
          <button 
            onClick={prevPage}
            className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200"
            disabled={totalPages <= 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextPage}
            className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200"
            disabled={totalPages <= 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* UMKM Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentUMKM.map((umkm) => (
          <UMKMCard key={umkm.id} umkm={umkm} />
        ))}
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentPage === index
                  ? "bg-purple-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}