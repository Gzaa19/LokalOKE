import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { umkmData, categories } from "../Data/umkm";

export const useUmkmList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  // Filter UMKM berdasarkan kategori dan pencarian
  const filteredUMKM = umkmData.filter((umkm) => {
    // Filter berdasarkan kategori
    const categoryMatch = selectedCategory === "Semua" ||
      (selectedCategory === "Kuliner" && ['Makanan', 'Kedai Kopi', 'Minuman'].includes(umkm.category)) ||
      (selectedCategory === "Jasa" && umkm.category === 'Jasa') ||
      (selectedCategory === "Kos" && umkm.category === 'Kost') ||
      umkm.category.toLowerCase() === selectedCategory.toLowerCase();

    // Filter berdasarkan pencarian
    const searchMatch = !searchQuery || 
      umkm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      umkm.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      umkm.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (umkm.description && umkm.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return categoryMatch && searchMatch;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return {
    // State
    selectedCategory,
    searchQuery,

    // Computed values
    filteredUMKM,
    categories,

    // Actions
    handleCategoryChange
  };
};
