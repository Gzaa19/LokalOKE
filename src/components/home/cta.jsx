import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone } from "lucide-react";
import { useResponsiveDesign } from "../../hooks/useResponsiveDesign";

export default function CTA() {
  const { getResponsiveCtaStyles, getResponsiveClasses } = useResponsiveDesign();

  // Shared button classes using responsive utilities
  const baseButtonClasses = getResponsiveClasses({
    default: "w-full font-medium px-6 py-3 rounded-full transition-all duration-300 text-sm",
    sm: "w-full sm:w-auto font-medium px-6 sm:px-8 py-3 rounded-full transition-all duration-300 text-sm sm:text-base"
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      className="py-16 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative mx-auto max-w-4xl">
        <motion.div 
          className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 px-4 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20 text-center relative rounded-2xl shadow-lg"
          style={getResponsiveCtaStyles()}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto max-w-2xl">
            <motion.div 
              className="mb-4"
              variants={itemVariants}
            >
              <span className="inline-flex items-center gap-2 bg-sky-700 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                <Megaphone className="w-5 h-5" />
                BERGABUNG DENGAN KAMI
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-900 mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Siap Bergabung dengan <span className="text-sky-700">LokalOKE</span>?
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto px-2"
              variants={itemVariants}
            >
              Mari bersama-sama membangun ekosistem UMKM digital yang kuat dan berkelanjutan. 
              Bergabunglah dengan ribuan UMKM lainnya dan rasakan kemudahan berbisnis di era digital.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <motion.button 
                className={`${baseButtonClasses} bg-sky-700 hover:bg-sky-800 text-white transform hover:scale-105 shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mulai Sekarang
              </motion.button>
              <motion.button 
                className={`${baseButtonClasses} border-2 border-sky-700 hover:border-sky-800 text-sky-700 hover:text-sky-800 bg-white hover:bg-sky-50`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}