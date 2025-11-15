import { motion } from 'framer-motion';

const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  
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
  const variants = customVariants || (stagger ? animationVariants.staggerContainer : animationVariants[animation]);
  
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
export { animationVariants, transitionPresets };