// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

/**
 * AnimatedCard - Komponen card dengan animasi hover dan entrance
 * 
 * @param {string} hoverEffect - Jenis efek hover (lift, scale, tilt, glow)
 * @param {string} entranceAnimation - Animasi masuk (fadeIn, slideUp, scaleIn)
 * @param {number} delay - Delay animasi masuk
 * @param {boolean} clickable - Apakah card bisa diklik
 * @param {string} className - CSS classes tambahan
 * @param {object} style - Inline styles
 * @param {function} onClick - Click handler
 * @param {ReactNode} children - Card content
 */
const AnimatedCard = ({
  hoverEffect = 'lift',
  entranceAnimation = 'fadeIn',
  delay = 0,
  clickable = false,
  className = '',
  style = {},
  onClick,
  children,
  ...props
}) => {
  // Entrance animation variants
  const entranceVariants = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { 
        opacity: 1,
        transition: { duration: 0.6, delay }
      }
    },
    
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    },
    
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.6, delay, ease: "easeOut" }
      }
    }
  };

  // Hover effect variants
  const hoverVariants = {
    lift: {
      hover: {
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.3, ease: "easeOut" }
      }
    },
    
    scale: {
      hover: {
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
      }
    },
    
    tilt: {
      hover: {
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }
    },
    
    glow: {
      hover: {
        boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)",
        transition: { duration: 0.3, ease: "easeOut" }
      }
    }
  };

  // Combine variants
  const cardVariants = {
    ...entranceVariants[entranceAnimation],
    ...hoverVariants[hoverEffect],
    tap: clickable ? { scale: 0.98 } : {}
  };

  // Base card classes
  const baseClasses = `
    bg-white rounded-lg shadow-md border border-gray-200
    ${clickable ? 'cursor-pointer' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap={clickable ? "tap" : undefined}
      className={baseClasses}
      style={{
        transformStyle: 'preserve-3d',
        ...style
      }}
      onClick={clickable ? onClick : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;