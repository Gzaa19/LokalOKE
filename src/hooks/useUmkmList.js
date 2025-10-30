import { useState } from "react";
import { umkmData, categories } from "../Data/umkm";

export const useUmkmList = () => {
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

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return {
    // State
    selectedCategory,
    currentPage,
    
    // Computed values
    filteredUMKM,
    currentUMKM,
    totalPages,
    categories,
    
    // Actions
    nextPage,
    prevPage,
    handleCategoryChange,
    goToPage
  };
};