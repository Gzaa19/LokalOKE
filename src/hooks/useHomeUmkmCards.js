import { useMemo, useState } from 'react';
import { umkmData } from '../Data/umkm.js';

export function useHomeUmkmCards() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  // Fungsi untuk mengkategorikan UMKM berdasarkan kategori
  const categorizeUmkm = (data) => {
    const categories = {
      kuliner: [],
      jasa: [],
      kos: [],
      tokoKelontong: []
    };

    data.forEach(umkm => {
      const category = umkm.category.toLowerCase();
      
      if (['makanan', 'kedai kopi', 'minuman', 'kuliner'].includes(category)) {
        categories.kuliner.push(umkm);
      }
      else if (category === 'jasa') {
        categories.jasa.push(umkm);
      }
      else if (['kost', 'kos'].includes(category)) {
        categories.kos.push(umkm);
      }
      else if (category === 'toko kelontong') {
        categories.tokoKelontong.push(umkm);
      }
    });

    return categories;
  };

  const filteredUmkmData = useMemo(() => {
    const categorizedData = categorizeUmkm(umkmData);

    const selectedCards = [];

    const kulinerCards = categorizedData.kuliner.slice(0, 3);
    selectedCards.push(...kulinerCards);

    const jasaCards = categorizedData.jasa.slice(0, 2);
    selectedCards.push(...jasaCards);

    const kosCards = categorizedData.kos.slice(0, 2);
    selectedCards.push(...kosCards);

    const tokoKelontongCards = categorizedData.tokoKelontong.slice(0, 2);
    selectedCards.push(...tokoKelontongCards);

    if (selectedCategory === 'Semua') {
      return selectedCards;
    } else if (selectedCategory === 'Kuliner') {
      return selectedCards.filter(card => 
        ['makanan', 'kedai kopi', 'minuman', 'kuliner'].includes(card.category.toLowerCase())
      );
    } else if (selectedCategory === 'Jasa') {
      return selectedCards.filter(card => 
        card.category.toLowerCase() === 'jasa'
      );
    } else if (selectedCategory === 'Kos') {
      return selectedCards.filter(card => 
        ['kost', 'kos'].includes(card.category.toLowerCase())
      );
    } else if (selectedCategory === 'Toko Kelontong') {
      return selectedCards.filter(card => 
        card.category.toLowerCase() === 'toko kelontong'
      );
    }

    return selectedCards;
  }, [selectedCategory]);

  const getDistributionStats = () => {
    const categorizedData = categorizeUmkm(filteredUmkmData);
    return {
      kuliner: categorizedData.kuliner.length,
      jasa: categorizedData.jasa.length,
      kos: categorizedData.kos.length,
      tokoKelontong: categorizedData.tokoKelontong.length,
      total: filteredUmkmData.length
    };
  };

  return {
    selectedCategory,
    setSelectedCategory,
    filteredUmkmData,
    getDistributionStats,
    totalCards: filteredUmkmData.length
  };
}