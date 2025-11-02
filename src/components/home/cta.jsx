import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      
      <motion.section
        className="flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full mt-2 mb-12 sm:mb-16 lg:mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col items-center justify-center text-center rounded-xl sm:rounded-2xl py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 w-full bg-[url('https://images.unsplash.com/photo-1633259584604-afdc243122ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')] bg-cover bg-center bg-no-repeat relative"
          variants={itemVariants}
        >
          {/* Overlay untuk meningkatkan kontras teks */}
          <div className="absolute inset-0 bg-black/40 rounded-xl sm:rounded-2xl"></div>
          
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl relative z-10 mb-3 sm:mb-4 leading-tight"
            variants={itemVariants}
          >
            Kembangkan Bisnis UMKM Anda dengan Platform LokalOKE
          </motion.h1>
          
          <motion.div
            className="h-[2px] sm:h-[3px] w-20 sm:w-24 md:w-32 my-2 sm:my-3 bg-gradient-to-l from-transparent to-white relative z-10"
            variants={itemVariants}
          />
          
          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl relative z-10 mt-2 sm:mt-3 md:mt-4 leading-relaxed"
            variants={itemVariants}
          >
            Bergabunglah dengan komunitas UMKM terbesar di Indonesia. Dapatkan akses ke pasar yang lebih luas dan tingkatkan penjualan Anda.
          </motion.p>
          
          <motion.button
            className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm md:text-base bg-white hover:scale-105 transition duration-300 rounded-full font-medium text-slate-800 relative z-10 shadow-lg hover:shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Daftarkan Bisnis Anda
          </motion.button>
        </motion.div>
      </motion.section>
    </>
  );
};

export default CTA;