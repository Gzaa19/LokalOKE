import { useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';
export const useAnimationControls = (options = {}) => {
  const {
    triggerOnce = true,
    threshold = 0.1,
    delay = 0,
    onStart,
    onComplete
  } = options;

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: triggerOnce, 
    threshold 
  });
  
  const [animationState, setAnimationState] = useState('idle');

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimationState('animating');
        onStart?.();
        
        controls.start('animate').then(() => {
          setAnimationState('completed');
          onComplete?.();
        });
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, controls, delay, onStart, onComplete]);

  const startAnimation = useCallback((variants) => {
    setAnimationState('animating');
    onStart?.();
    
    return controls.start(variants || 'animate').then(() => {
      setAnimationState('completed');
      onComplete?.();
    });
  }, [controls, onStart, onComplete]);

  const stopAnimation = useCallback(() => {
    controls.stop();
    setAnimationState('stopped');
  }, [controls]);

  const resetAnimation = useCallback(() => {
    controls.set('initial');
    setAnimationState('idle');
  }, [controls]);

  return {
    ref,
    controls,
    isInView,
    animationState,
    startAnimation,
    stopAnimation,
    resetAnimation
  };
};

export const useScrollAnimation = (options = {}) => {
  const { smooth = true } = options;
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      setScrollY(currentScrollY);
      setScrollProgress(currentScrollY / maxScroll);
    };

    const throttledHandleScroll = smooth 
      ? throttle(handleScroll, 16)
      : handleScroll;

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [smooth]);

  const scrollToElement = useCallback((elementId, behavior = 'smooth') => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior, block: 'start' });
    }
  }, []);

  return {
    scrollY,
    scrollProgress,
    scrollToElement
  };
};

export const useSequentialAnimation = (animations = [], options = {}) => {
  const { autoStart = false, loop = false } = options;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimation();

  const playSequence = useCallback(async () => {
    if (animations.length === 0) return;
    
    setIsPlaying(true);
    
    for (let i = 0; i < animations.length; i++) {
      setCurrentIndex(i);
      await controls.start(animations[i]);
    }
    
    setIsPlaying(false);
    
    if (loop) {
      setTimeout(() => playSequence(), 500);
    }
  }, [animations, controls, loop]);

  const stopSequence = useCallback(() => {
    setIsPlaying(false);
    controls.stop();
  }, [controls]);

  const resetSequence = useCallback(() => {
    setCurrentIndex(0);
    setIsPlaying(false);
    controls.set(animations[0] || {});
  }, [animations, controls]);

  useEffect(() => {
    if (autoStart && animations.length > 0) {
      playSequence();
    }
  }, [autoStart, animations, playSequence]);

  return {
    controls,
    currentIndex,
    isPlaying,
    playSequence,
    stopSequence,
    resetSequence
  };
};

export const useHoverAnimation = (hoverVariants = {}, options = {}) => {
  const { delay = 0, duration = 0.3 } = options;
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    controls.start({
      ...hoverVariants.hover,
      transition: { delay, duration, ease: "easeOut" }
    });
  }, [controls, hoverVariants.hover, delay, duration]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    controls.start({
      ...hoverVariants.initial,
      transition: { duration: duration * 0.7, ease: "easeOut" }
    });
  }, [controls, hoverVariants.initial, duration]);

  return {
    controls,
    isHovered,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }
  };
};

export const useStaggerAnimation = (itemCount, options = {}) => {
  const { 
    staggerDelay = 0.1, 
    initialDelay = 0,
    triggerOnce = true 
  } = options;
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: triggerOnce });
  const controls = useAnimation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return {
    containerRef,
    controls,
    containerVariants,
    itemVariants,
    isInView
  };
};

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}