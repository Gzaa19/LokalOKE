import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Search, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function NotFound() {
  return (
    <motion.section
      className="pt-20 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="max-w-3xl mx-auto text-center" variants={itemVariants}>
        <div className="inline-flex items-center gap-2 bg-sky-700 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <AlertTriangle className="w-4 h-4" />
          Halaman tidak ditemukan
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          404 — Ups, alamatnya tidak ada
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Maaf, halaman yang kamu tuju tidak tersedia. Yuk kembali dan
          jelajahi UMKM populer di sekitar kamu.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        variants={itemVariants}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white bg-gradient-to-br from-sky-700 to-sky-900 shadow-md hover:shadow-lg hover:brightness-110 transition"
          aria-label="Kembali ke beranda"
        >
          <Home className="w-5 h-5" />
          Kembali ke Beranda
        </Link>
        <Link
          to="/umkm"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sky-700 bg-white border border-sky-200 hover:bg-sky-50 transition"
          aria-label="Jelajahi UMKM"
        >
          <Search className="w-5 h-5" />
          Jelajahi UMKM
        </Link>
      </motion.div>
    </motion.section>
  );
}