import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useSmartNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(null);

  // Track previous path untuk menentukan kemana harus kembali
  useEffect(() => {
    const currentPath = location.pathname;
    
    // Jangan simpan jika ini adalah halaman detail UMKM
    if (!currentPath.startsWith('/umkm/')) {
      setPreviousPath(currentPath);
      // Simpan juga ke localStorage sebagai backup
      localStorage.setItem('lastNonDetailPath', currentPath);
    }
  }, [location.pathname]);

  const goBack = () => {
    const currentPath = location.pathname;
    
    // Jika sedang di halaman detail UMKM
    if (currentPath.startsWith('/umkm/')) {
      // Cek dari mana user datang berdasarkan state dan localStorage
      const fromState = location.state?.from;
      const fromLocalStorage = localStorage.getItem('previousPath');
      const lastNonDetailPath = localStorage.getItem('lastNonDetailPath');
      
      // Prioritas: state > localStorage previousPath > lastNonDetailPath
      let sourceLocation = fromState || fromLocalStorage || lastNonDetailPath;
      
      console.log('Navigation Debug:', {
        fromState,
        fromLocalStorage,
        lastNonDetailPath,
        sourceLocation,
        currentPath
      });
      
      const fromHomepage = sourceLocation === '/' || 
                        sourceLocation?.includes('#umkm') || 
                        sourceLocation?.includes('/#umkm') ||
                        (!sourceLocation);
      
      if (fromHomepage) {
        navigate('/', { state: { scrollToUmkm: true } });
      } else {
        navigate('/umkm');
      }
      
      localStorage.removeItem('previousPath');
    } else {
      window.history.back();
    }
  };

  const getBackButtonText = () => {
    const currentPath = location.pathname;
    
    if (currentPath.startsWith('/umkm/')) {
      const fromState = location.state?.from;
      const fromLocalStorage = localStorage.getItem('previousPath');
      const lastNonDetailPath = localStorage.getItem('lastNonDetailPath');
      
      let sourceLocation = fromState || fromLocalStorage || lastNonDetailPath;
      
      if (!sourceLocation) {
        const referrer = document.referrer;
        if (referrer.includes('/#umkm') || referrer.endsWith('/')) {
          sourceLocation = '/';
        } else if (referrer.includes('/umkm')) {
          sourceLocation = '/umkm';
        }
      }
      
      const fromHomepage = sourceLocation === '/' || 
                          sourceLocation?.includes('/#umkm') ||
                          sourceLocation?.includes('#umkm') ||
                          (!sourceLocation && previousPath === '/');
      
      return fromHomepage ? 'Kembali ke Beranda' : 'Kembali ke UMKM';
    }
    
    return 'Kembali';
  };

  return {
    goBack,
    getBackButtonText,
    previousPath
  };
};