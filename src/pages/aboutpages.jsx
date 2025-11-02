import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Lightbulb, Target, Users, Award } from 'lucide-react';

const AboutPages = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize mouse position to -1 to 1 range
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      
      <motion.div 
        className="pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.section 
          className="py-16 px-4 text-center"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cerita Kami
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Apa itu <span className="text-blue-500">LokalOKE</span>?
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Platform digital yang menghubungkan masyarakat dengan UMKM lokal di sekitar mereka. 
              Kami berkomitmen untuk memberdayakan ekonomi lokal dan membantu UMKM berkembang 
              di era digital dengan menyediakan platform yang mudah diakses dan user-friendly.
            </motion.p>
          </div>
        </motion.section>

        {/* Main Content Section */}
        <motion.section 
          className="py-16 px-4"
          variants={itemVariants}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
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

              {/* Content */}
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-blue-500 mb-6">
                  Asal Mula LokalOKE
                </h2>
                
                <div className="space-y-6 text-gray-600">
                  <p className="leading-relaxed">
                    Pada tahun 2024, berdasarkan kebutuhan masyarakat akan kemudahan akses 
                    informasi UMKM lokal, LokalOKE hadir sebagai solusi digital yang 
                    menghubungkan konsumen dengan pelaku usaha mikro, kecil, dan menengah 
                    di sekitar mereka.
                  </p>
                  
                  <p className="leading-relaxed">
                    Nama LokalOKE sendiri berasal dari gabungan kata "Lokal" yang 
                    menggambarkan fokus kami pada bisnis lokal, dan "OKE" yang 
                    menunjukkan kemudahan dan kepuasan dalam menggunakan platform kami.
                  </p>
                  
                  <motion.div 
                    className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start">
                      <Lightbulb className="w-6 h-6 text-yellow-500 mr-3 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Fun Fact</h4>
                        <p className="text-sm text-gray-600">
                          Sejak tahun 2024, lebih dari 1000+ UMKM lokal telah bergabung 
                          dengan platform kami untuk memperluas jangkauan bisnis mereka.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section 
          className="py-16 px-4 bg-linear-to-r from-blue-600 to-green-600 text-white"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-8"
              variants={itemVariants}
            >
              Visi Kami
            </motion.h2>
            
            <motion.p 
              className="text-xl leading-relaxed mb-12"
              variants={itemVariants}
            >
              Mewujudkan LokalOKE 2025 yang progresif dan sinergis guna memberikan 
              kebermaknaan dengan inovasi yang berkelanjutan
            </motion.p>

            {/* Stats/Features */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              <motion.div 
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">1000+</h3>
                <p className="text-blue-100">UMKM Terdaftar</p>
              </motion.div>

              <motion.div 
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-blue-100">Kota Terjangkau</p>
              </motion.div>

              <motion.div 
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">4.8/5</h3>
                <p className="text-blue-100">Rating Pengguna</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="py-16 px-4 text-center"
          variants={itemVariants}
        >
          <div className="max-w-2xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Bergabunglah dengan Komunitas LokalOKE
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-8"
              variants={itemVariants}
            >
              Dukung UMKM lokal di sekitar Anda dan jadilah bagian dari gerakan 
              ekonomi kreatif Indonesia
            </motion.p>
            
            <motion.button 
              className="bg-linear-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Mulai Jelajahi UMKM
            </motion.button>
          </div>
        </motion.section>
      </motion.div>

      <Footer />
    </div>
  );
};

export default AboutPages;