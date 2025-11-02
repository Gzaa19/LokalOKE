// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

/**
 * AnimatedButton - Komponen button dengan animasi hover dan tap yang lebih bagus
 * 
 * @param {string} variant - Jenis animasi button (bounce, pulse, ripple, magnetic, morphing)
 * @param {string} size - Ukuran button (sm, md, lg)
 * @param {string} color - Warna button (primary, secondary, success, danger)
 * @param {boolean} disabled - Status disabled
 * @param {boolean} loading - Status loading
 * @param {string} className - CSS classes tambahan
 * @param {object} style - Inline styles
 * @param {function} onClick - Click handler
 * @param {ReactNode} children - Button content
 */
const AnimatedButton = ({
  variant = 'bounce',
  size = 'md',
  color = 'primary',
  disabled = false,
  loading = false,
  className = '',
  style = {},
  onClick,
  children,
  ...props
}) => {
  // Animation variants untuk berbagai jenis button yang lebih bagus
  const buttonVariants = {
    bounce: {
      initial: { scale: 1 },
      hover: { 
        scale: 1.05,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      },
      tap: { 
        scale: 0.95,
        transition: { 
          type: "spring",
          stiffness: 600,
          damping: 15
        }
      }
    },
    
    pulse: {
      initial: { scale: 1 },
      hover: { 
        scale: [1, 1.05, 1],
        transition: { 
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      tap: { 
        scale: 0.95,
        transition: { duration: 0.1 }
      }
    },
    
    ripple: {
      initial: { 
        scale: 1,
        boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.7)"
      },
      hover: { 
        scale: 1.02,
        boxShadow: [
          "0 0 0 0 rgba(59, 130, 246, 0.7)",
          "0 0 0 10px rgba(59, 130, 246, 0)",
          "0 0 0 20px rgba(59, 130, 246, 0)"
        ],
        transition: { 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut"
        }
      },
      tap: { 
        scale: 0.98,
        transition: { duration: 0.1 }
      }
    },
    
    magnetic: {
      initial: { x: 0, y: 0, scale: 1 },
      hover: { 
        scale: 1.05,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      },
      tap: { 
        scale: 0.95,
        transition: { duration: 0.1 }
      }
    },
    
    morphing: {
      initial: { 
        borderRadius: "0.5rem",
        scale: 1
      },
      hover: { 
        borderRadius: "2rem",
        scale: 1.05,
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      },
      tap: { 
        scale: 0.95,
        borderRadius: "0.25rem",
        transition: { duration: 0.1 }
      }
    }
  };

  // Size configurations
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  // Color configurations
  const colorClasses = {
    primary: 'bg-gradient-to-r from-sky-700 to-sky-900 text-white hover:from-sky-800 hover:to-sky-950',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  // Base classes
  const baseClasses = `
    relative inline-flex items-center justify-center
    font-medium rounded-lg
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden
    cursor-pointer
  `;

  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${colorClasses[color]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Handle click dengan loading state
  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  return (
    <motion.button
      variants={buttonVariants[variant]}
      initial="initial"
      whileHover={!disabled && !loading ? "hover" : "initial"}
      whileTap={!disabled && !loading ? "tap" : "initial"}
      className={buttonClasses}
      style={style}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {/* Shimmer effect background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%', skewX: -15 }}
        whileHover={{ 
          x: '100%',
          transition: { duration: 0.8, ease: "easeOut" }
        }}
      />
      
      {/* Particle effect untuk variant ripple */}
      {variant === 'ripple' && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-white/30 rounded-lg"
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{
                scale: [1, 1.5, 2],
                opacity: [0, 0.5, 0],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }
              }}
            />
          ))}
        </>
      )}
      
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {loading && (
          <motion.div
            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
        {children}
      </span>
    </motion.button>
  );
};

export default AnimatedButton;