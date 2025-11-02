import { motion } from 'framer-motion';

// Predefined animation variants
const animationVariants = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  
  // Slide animations
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  },
  
  slideDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  },
  
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  },
  
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  },
  
  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  
  scaleUp: {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 }
  },
  
  // Bounce animation
  bounce: {
    initial: { opacity: 0, y: -100 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    },
    exit: { opacity: 0, y: -100 }
  },
  
  // Stagger children animation
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  },
  
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  }
};

// Default transition configurations
const transitionPresets = {
  smooth: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94]
  },
  
  quick: {
    duration: 0.3,
    ease: "easeOut"
  },
  
  bouncy: {
    type: "spring",
    damping: 15,
    stiffness: 300
  },
  
  slow: {
    duration: 1,
    ease: "easeInOut"
  }
};

/**
 * AnimatedContainer - Komponen wrapper untuk animasi yang dapat digunakan kembali
 * 
 * @param {string} animation - Jenis animasi (fadeIn, slideUp, slideDown, slideLeft, slideRight, scaleIn, scaleUp, bounce)
 * @param {string} transition - Preset transisi (smooth, quick, bouncy, slow)
 * @param {object} customVariants - Variants animasi kustom
 * @param {object} customTransition - Konfigurasi transisi kustom
 * @param {number} delay - Delay sebelum animasi dimulai
 * @param {boolean} stagger - Apakah menggunakan stagger animation untuk children
 * @param {string} as - Element HTML yang akan dirender (default: 'div')
 * @param {string} className - CSS classes
 * @param {object} style - Inline styles
 * @param {function} onAnimationStart - Callback saat animasi dimulai
 * @param {function} onAnimationComplete - Callback saat animasi selesai
 * @param {ReactNode} children - Child components
 */
const AnimatedContainer = ({
  animation = 'fadeIn',
  transition = 'smooth',
  customVariants,
  customTransition,
  delay = 0,
  stagger = false,
  as = 'div',
  className = '',
  style = {},
  onAnimationStart,
  onAnimationComplete,
  children,
  ...props
}) => {
  // Pilih variants yang akan digunakan
  const variants = customVariants || (stagger ? animationVariants.staggerContainer : animationVariants[animation]);
  
  // Pilih transition yang akan digunakan
  const transitionConfig = customTransition || {
    ...transitionPresets[transition],
    delay
  };

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transitionConfig}
      className={className}
      style={style}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
      {...props}
    >
      {stagger ? (
        // Jika menggunakan stagger, wrap children dengan motion.div
        Array.isArray(children) ? (
          children.map((child, index) => (
            <motion.div
              key={index}
              variants={animationVariants.staggerItem}
              transition={transitionPresets[transition]}
            >
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div
            variants={animationVariants.staggerItem}
            transition={transitionPresets[transition]}
          >
            {children}
          </motion.div>
        )
      ) : (
        children
      )}
    </MotionComponent>
  );
};

export default AnimatedContainer;
// eslint-disable-next-line react-refresh/only-export-components
export { animationVariants, transitionPresets };