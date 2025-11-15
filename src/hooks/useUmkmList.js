import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { umkmData, categories } from '../Data/umkm';

const PRICE_STEP = 1000;

const parsePriceRange = (priceRange) => {
  if (!priceRange) {
    return { min: 0, max: 0 };
  }

  const matches = priceRange.match(/\d[\d\.,]*/g);
  if (!matches) {
    return { min: 0, max: 0 };
  }

  const values = matches
    .map((value) => Number(value.replace(/[\.,]/g, '')))
    .filter((value) => Number.isFinite(value));

  if (!values.length) {
    return { min: 0, max: 0 };
  }

  return {
    min: Math.min(...values),
    max: Math.max(...values),
  };
};

export const useUmkmList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const { list: umkmWithPrice, minPrice, maxPrice } = useMemo(() => {
    let globalMin = Number.POSITIVE_INFINITY;
    let globalMax = 0;

    const list = umkmData.map((umkm) => {
      const { min, max } = parsePriceRange(umkm.priceRange);
      globalMin = Math.min(globalMin, min);
      globalMax = Math.max(globalMax, max);
      return {
        ...umkm,
        priceMin: min,
        priceMax: max,
      };
    });

    if (!Number.isFinite(globalMin)) {
      globalMin = 0;
    }

    return {
      list,
      minPrice: globalMin === Number.POSITIVE_INFINITY ? 0 : globalMin,
      maxPrice: globalMax,
    };
  }, []);

  const [selectedPriceRange, setSelectedPriceRange] = useState(() => [minPrice, maxPrice]);

  const filteredUMKM = umkmWithPrice.filter((umkm) => {
    const categoryMatch =
      selectedCategory === 'Semua' ||
      (selectedCategory === 'Kuliner' && ['Makanan', 'Kedai Kopi', 'Minuman'].includes(umkm.category)) ||
      (selectedCategory === 'Jasa' && umkm.category === 'Jasa') ||
      (selectedCategory === 'Kos' && ['kost', 'kos'].includes((umkm.category || '').toLowerCase())) ||
      umkm.category.toLowerCase() === selectedCategory.toLowerCase();

    const searchMatch =
      !searchQuery || umkm.name.toLowerCase().includes(searchQuery.toLowerCase());

    const priceMatch =
      umkm.priceMax === 0 && umkm.priceMin === 0
        ? true
        : umkm.priceMax >= selectedPriceRange[0] && umkm.priceMin <= selectedPriceRange[1];

    return categoryMatch && searchMatch && priceMatch;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (range) => {
    const [minValue, maxValue] = range;
    const safeMin = Math.max(minPrice, Math.min(minValue, maxPrice));
    const safeMax = Math.max(minPrice, Math.min(maxValue, maxPrice));

    if (safeMax - safeMin < PRICE_STEP) {
      const midpoint = safeMin + (safeMax - safeMin) / 2;
      const adjustedMin = Math.max(
        minPrice,
        Math.floor((midpoint - PRICE_STEP / 2) / PRICE_STEP) * PRICE_STEP,
      );
      const adjustedMax = Math.min(maxPrice, adjustedMin + PRICE_STEP);
      setSelectedPriceRange([adjustedMin, adjustedMax]);
      return;
    }

    setSelectedPriceRange([Math.min(safeMin, safeMax), Math.max(safeMin, safeMax)]);
  };

  return {
    selectedCategory,
    selectedPriceRange,
    searchQuery,

    filteredUMKM,
    categories,
    priceRangeLimits: { min: minPrice, max: maxPrice },
    priceStep: PRICE_STEP,

    handleCategoryChange,
    handlePriceRangeChange,
  };
};