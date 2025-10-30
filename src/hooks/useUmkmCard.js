import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { umkmData } from '../Data/umkm.js';

export function useUmkmCard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') ? capitalize(searchParams.get('category')) : 'Semua'
  );

  const filteredUmkmData =
    selectedCategory === 'Semua'
      ? umkmData
      : selectedCategory === 'Kuliner'
      ? umkmData.filter((umkm) => ['Makanan', 'Kedai Kopi', 'Minuman'].includes(umkm.category))
      : selectedCategory === 'Jasa'
      ? umkmData.filter((umkm) => umkm.category === 'Jasa')
      : selectedCategory === 'Kos'
      ? umkmData.filter((umkm) => ['kost', 'kos'].includes(umkm.category?.toLowerCase()))
      : umkmData.filter((umkm) => umkm.category.toLowerCase() === selectedCategory.toLowerCase());

  useEffect(() => {
    if (selectedCategory === 'Semua') {
      setSearchParams({});
    } else {
      setSearchParams({ category: selectedCategory.toLowerCase() });
    }
  }, [selectedCategory, setSearchParams]);

  return {
    selectedCategory,
    setSelectedCategory,
    hoveredCard,
    setHoveredCard,
    filteredUmkmData,
  };
}

function capitalize(text) {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}