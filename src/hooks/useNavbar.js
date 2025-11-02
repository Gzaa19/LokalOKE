import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResponsiveDesign } from './useResponsiveDesign';

export const useNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu, isMobile } = useResponsiveDesign();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 30; 
      setIsScrolled(scrollTop > threshold);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const toggleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  // Close search when clicking outside or on mobile menu toggle
  useEffect(() => {
    if (isMobileMenuOpen && isSearchOpen) {
      setIsSearchOpen(false);
    }
  }, [isMobileMenuOpen, isSearchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to UMKM page with search query
      navigate(`/umkm?search=${encodeURIComponent(searchQuery.trim())}`);
      // Close search dropdown
      setIsSearchOpen(false);
      // Clear search query
      setSearchQuery('');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return {
    // State
    isScrolled,
    isMobileMenuOpen,
    isSearchOpen,
    searchQuery,
    setSearchQuery,
    
    // Actions
    toggleMobileMenu,
    toggleSearchOpen,
    closeSearch,
    handleSearchSubmit,
    handleSearchChange,
    isMobile
  };
};