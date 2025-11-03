import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollToUmkm && !location.state?.scrollToSection) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]); 

  return null;
};