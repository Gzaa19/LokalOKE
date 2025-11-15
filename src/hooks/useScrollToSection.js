import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToUmkm) {
      scrollToSection('umkm');
      clearNavigationState();
    }
    if (location.state?.scrollToSection) {
      scrollToSection(location.state.scrollToSection);
      clearNavigationState();
    }
  }, [location.state]);

  const scrollToSection = (sectionId, delay = 100) => {
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

  const clearNavigationState = () => {
    window.history.replaceState({}, document.title);
  };

  return {
    scrollToSection,
    clearNavigationState
  };
};