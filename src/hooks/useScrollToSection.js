import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook untuk menangani scroll ke section tertentu
 * berdasarkan state dari navigation
 */
export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to UMKM section when returning from detail page
    if (location.state?.scrollToUmkm) {
      scrollToSection('umkm');
      clearNavigationState();
    }
    
    // Bisa ditambahkan untuk section lain jika diperlukan
    if (location.state?.scrollToSection) {
      scrollToSection(location.state.scrollToSection);
      clearNavigationState();
    }
  }, [location.state]);

  /**
   * Function untuk scroll ke section dengan ID tertentu
   * @param {string} sectionId - ID dari section yang ingin di-scroll
   * @param {number} delay - Delay sebelum scroll (default: 100ms)
   */
  const scrollToSection = (sectionId, delay = 100) => {
    // Small delay to ensure the page is fully rendered
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, delay);
  };

  /**
   * Function untuk clear navigation state setelah digunakan
   */
  const clearNavigationState = () => {
    // Clear the state to prevent unwanted scrolling on subsequent renders
    window.history.replaceState({}, document.title);
  };

  return {
    scrollToSection,
    clearNavigationState
  };
};