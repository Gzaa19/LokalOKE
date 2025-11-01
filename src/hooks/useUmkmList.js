import { useState } from "react";
import { umkmData, categories } from "../Data/umkm";

export const useUmkmList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Filter UMKM berdasarkan kategori
  const filteredUMKM = selectedCategory === "Semua"
    ? umkmData
    : selectedCategory === "Kuliner"
    ? umkmData.filter((umkm) => ['Makanan', 'Kedai Kopi', 'Minuman'].includes(umkm.category))
    : selectedCategory === "Jasa"
    ? umkmData.filter((umkm) => umkm.category === 'Jasa')
    : selectedCategory === "Kos"
    ? umkmData.filter((umkm) => umkm.category === 'Kost')
    : umkmData.filter((umkm) => umkm.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return {
    // State
    selectedCategory,

    // Computed values
    filteredUMKM,
    categories,

    // Actions
    handleCategoryChange
  };
};
