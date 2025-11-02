import React from 'react';
import { motion } from 'framer-motion';
import logoLokalOKE from '../../assets/logolokaloke.png';

const AnimatedCard3D = ({ mousePosition, imageVariants }) => {
  return (
    <motion.div 
      className="relative"
      variants={imageVariants}
      animate={{
        x: mousePosition.x * 20,
        y: mousePosition.y * 15,
        rotateX: mousePosition.y * 10,
        rotateY: mousePosition.x * 10,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <motion.div 
        className="rounded-2xl shadow-2xl overflow-hidden bg-white"
        animate={{
          rotateX: mousePosition.y * -5,
          rotateY: mousePosition.x * 5,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
      >
        <motion.div 
          className="w-full h-full"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <img 
            src={logoLokalOKE} 
            alt="LokalOKE Logo" 
            className="w-full h-full object-contain p-8"
          />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-80"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
          x: mousePosition.x * -15,
          y: mousePosition.y * -10,
        }}
        transition={{ 
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 100, damping: 10 },
          y: { type: "spring", stiffness: 100, damping: 10 }
        }}
      />
      <motion.div 
        className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-70"
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, -10, 0],
          x: mousePosition.x * 25,
          rotate: mousePosition.x * 20,
        }}
        transition={{ 
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 80, damping: 12 },
          rotate: { type: "spring", stiffness: 80, damping: 12 }
        }}
      />
    </motion.div>
  );
};

export default AnimatedCard3D;