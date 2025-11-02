import { useState, useEffect } from 'react';

export const useResponsiveDesign = () => {
  // Screen size state
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  // Breakpoint definitions (following Tailwind CSS conventions)
  const breakpoints = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  };

  // Update screen size on window resize
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Initial call to set correct size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check if screen matches specific breakpoint
  const isBreakpoint = (breakpoint) => {
    return screenSize.width >= breakpoints[breakpoint];
  };

  // Get current breakpoint
  const getCurrentBreakpoint = () => {
    const { width } = screenSize;
    if (width >= breakpoints['2xl']) return '2xl';
    if (width >= breakpoints.xl) return 'xl';
    if (width >= breakpoints.lg) return 'lg';
    if (width >= breakpoints.md) return 'md';
    if (width >= breakpoints.sm) return 'sm';
    return 'xs';
  };

  // Mobile detection
  const isMobile = screenSize.width < breakpoints.md;
  const isTablet = screenSize.width >= breakpoints.md && screenSize.width < breakpoints.lg;
  const isDesktop = screenSize.width >= breakpoints.lg;

  // Responsive styles for CTA component (extracted from cta.jsx)
  const getResponsiveCtaStyles = () => {
    const ctaBreakpoints = [
      { maxWidth: 640, clipSize: 30, shadowSize: "5px 5px 12px 1px", opacity: 0.2 },
      { maxWidth: 768, clipSize: 40, shadowSize: "7px 7px 14px 2px", opacity: 0.25 },
      { maxWidth: 1024, clipSize: 50, shadowSize: "10px 10px 20px 3px", opacity: 0.3 },
      { maxWidth: Infinity, clipSize: 75, shadowSize: "15px 15px 30px 4px", opacity: 0.35 }
    ];

    const config = ctaBreakpoints.find(bp => screenSize.width <= bp.maxWidth) || ctaBreakpoints[ctaBreakpoints.length - 1];
    
    return {
      clipPath: `polygon(${config.clipSize}px 0%, 100% 0%, 100% calc(100% - ${config.clipSize}px), calc(100% - ${config.clipSize}px) 100%, 0% 100%, 0% ${config.clipSize}px)`,
      boxShadow: `${config.shadowSize} rgba(0, 0, 0, ${config.opacity})`
    };
  };

  // Get responsive classes based on current breakpoint
  const getResponsiveClasses = (classMap) => {
    const orderedBreakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    
    let applicableClass = classMap.xs || classMap.default || '';
    
    for (const bp of orderedBreakpoints) {
      if (classMap[bp] && isBreakpoint(bp)) {
        applicableClass = classMap[bp];
      }
    }
    
    return applicableClass;
  };

  // Get responsive values based on current breakpoint
  const getResponsiveValue = (valueMap) => {
    const orderedBreakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    
    let applicableValue = valueMap.xs || valueMap.default;
    
    for (const bp of orderedBreakpoints) {
      if (valueMap[bp] !== undefined && isBreakpoint(bp)) {
        applicableValue = valueMap[bp];
      }
    }
    
    return applicableValue;
  };

  // Mobile menu utilities
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    if (isDesktop && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isDesktop, isMobileMenuOpen]);

  // Responsive grid columns
  const getGridColumns = (config) => {
    return getResponsiveValue({
      xs: config.mobile || 1,
      sm: config.mobile || 1,
      md: config.tablet || config.mobile || 2,
      lg: config.desktop || config.tablet || config.mobile || 3,
      xl: config.desktop || config.tablet || config.mobile || 3,
      '2xl': config.desktop || config.tablet || config.mobile || 3
    });
  };

  // Responsive spacing
  const getResponsiveSpacing = (config) => {
    return getResponsiveValue({
      xs: config.mobile || config.default,
      sm: config.mobile || config.default,
      md: config.tablet || config.mobile || config.default,
      lg: config.desktop || config.tablet || config.mobile || config.default,
      xl: config.desktop || config.tablet || config.mobile || config.default,
      '2xl': config.desktop || config.tablet || config.mobile || config.default
    });
  };

  return {
    // Screen information
    screenSize,
    currentBreakpoint: getCurrentBreakpoint(),
    
    // Device type checks
    isMobile,
    isTablet,
    isDesktop,
    
    // Breakpoint utilities
    isBreakpoint,
    breakpoints,
    
    // Responsive utilities
    getResponsiveClasses,
    getResponsiveValue,
    getGridColumns,
    getResponsiveSpacing,
    
    // Specific component utilities
    getResponsiveCtaStyles,
    
    // Mobile menu utilities
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  };
};