import React from 'react';
import { motion } from 'framer-motion';

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
        className="bg-linear-to-br from-blue-500 to-green-500 rounded-2xl p-8 text-white shadow-2xl"
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
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
          <div className="text-6xl font-bold mb-2">UMKM</div>
          <div className="text-xl">LOKAL</div>
          <div className="mt-4 text-sm opacity-90">
            Mendukung Ekonomi Kreatif Indonesia
          </div>
        </div>
      </motion.div>
      
      {/* Decorative elements with mouse tracking */}
      <motion.div 
        className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80"
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
        className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full opacity-70"
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