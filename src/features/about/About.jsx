import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Users, Award } from 'lucide-react';
import { useAbout } from '../../hooks/useAbout';
import AnimatedCard3D from '../../components/ui/AnimatedCard3D';

const About = () => {
  const { mousePosition, containerVariants, itemVariants, imageVariants } = useAbout();

  return (
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
            className="inline-block bg-sky-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Cerita Kami
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            variants={itemVariants}
          >
            Apa itu <span className="text-sky-700">LokalOKE</span>?
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
            <AnimatedCard3D 
              mousePosition={mousePosition} 
              imageVariants={imageVariants} 
            />

            {/* Content */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-sky-700 mb-6">
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
                  className="bg-sky-50 border-l-4 border-sky-700 p-4 rounded-r-lg"
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
        className="py-16 px-4 bg-gradient-to-r from-sky-700 to-sky-900 text-white"
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
              <p className="text-sky-100">UMKM Terdaftar</p>
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
              <p className="text-sky-100">Kota Terjangkau</p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">99%</h3>
              <p className="text-sky-100">Kepuasan Pengguna</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Team Section */}
      <motion.section 
        className="py-16 px-4 bg-gray-50"
        variants={itemVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <motion.div 
              className="inline-block bg-sky-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              THE TEAM
            </motion.div>
            
            <motion.h2 
              className="text-4xl font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              Meet Our <span className="text-sky-700">Team</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Tim yang berdedikasi untuk mengembangkan platform LokalOKE dan mendukung pertumbuhan UMKM Indonesia
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            {/* Team Member 1 */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="bg-white rounded-xl shadow-sm border border-gray-100 text-center p-3 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -2, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden bg-gradient-to-br from-sky-400 to-sky-600">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                    alt="Ahmad Rizki"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-0.5">Ahmad Rizki</h3>
                <p className="text-sky-600 text-xs font-medium mb-2">Frontend Developer</p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="bg-white rounded-xl shadow-sm border border-gray-100 text-center p-3 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -2, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-green-600">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                    alt="Sari Indah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-0.5">Sari Indah</h3>
                <p className="text-sky-600 text-xs font-medium mb-2">UI/UX Designer</p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="bg-white rounded-xl shadow-sm border border-gray-100 text-center p-3 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -2, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                    alt="Budi Santoso"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-0.5">Budi Santoso</h3>
                <p className="text-sky-600 text-xs font-medium mb-2">Backend Developer</p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 px-4 bg-gradient-to-br from-sky-50 via-white to-green-50"
        variants={itemVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="inline-block bg-sky-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BERGABUNG DENGAN KAMI
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-6"
            variants={itemVariants}
          >
            Siap Bergabung dengan <span className="text-sky-700">LokalOKE</span>?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Mari bersama-sama membangun ekosistem UMKM digital yang kuat dan berkelanjutan
          </motion.p>
          
          <motion.button 
            className="bg-gradient-to-r from-sky-700 to-sky-900 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(3, 105, 161, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Mulai Sekarang
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;