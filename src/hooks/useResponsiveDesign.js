import { useState, useEffect } from 'react';

export const useResponsiveDesign = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });

  const breakpoints = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isBreakpoint = (breakpoint) => {
    return screenSize.width >= breakpoints[breakpoint];
  };

  const getCurrentBreakpoint = () => {
    const { width } = screenSize;
    if (width >= breakpoints['2xl']) return '2xl';
    if (width >= breakpoints.xl) return 'xl';
    if (width >= breakpoints.lg) return 'lg';
    if (width >= breakpoints.md) return 'md';
    if (width >= breakpoints.sm) return 'sm';
    return 'xs';
  };

  const isMobile = screenSize.width < breakpoints.md;
  const isTablet = screenSize.width >= breakpoints.md && screenSize.width < breakpoints.lg;
  const isDesktop = screenSize.width >= breakpoints.lg;

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

  const getResponsiveClasses = (classMap) => {
    const currentBp = getCurrentBreakpoint();
    const orderedBreakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    
    let applicableClass = classMap.xs || classMap.default || '';
    
    for (const bp of orderedBreakpoints) {
      if (classMap[bp] && isBreakpoint(bp)) {
        applicableClass = classMap[bp];
      }
    }
    
    return applicableClass;
  };

  const getResponsiveValue = (valueMap) => {
    const currentBp = getCurrentBreakpoint();
    const orderedBreakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    
    let applicableValue = valueMap.xs || valueMap.default;
    
    for (const bp of orderedBreakpoints) {
      if (valueMap[bp] !== undefined && isBreakpoint(bp)) {
        applicableValue = valueMap[bp];
      }
    }
    
    return applicableValue;
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isDesktop && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isDesktop, isMobileMenuOpen]);

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
    screenSize,
    currentBreakpoint: getCurrentBreakpoint(),
    isMobile,
    isTablet,
    isDesktop,
    isBreakpoint,
    breakpoints,
    getResponsiveClasses,
    getResponsiveValue,
    getGridColumns,
    getResponsiveSpacing,
    getResponsiveCtaStyles,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  };
};