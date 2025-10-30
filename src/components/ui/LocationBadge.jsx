import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationBadge = ({ address, isVisible = false, delay = 0 }) => {
  // Fungsi untuk mempersingkat alamat jika terlalu panjang
  const getShortAddress = (fullAddress) => {
    if (!fullAddress) return 'Alamat tidak tersedia';
    
    // Ambil bagian pertama sebelum koma pertama atau maksimal 30 karakter
    const parts = fullAddress.split(',');
    const firstPart = parts[0];
    
    if (firstPart.length > 30) {
      return firstPart.substring(0, 27) + '...';
    }
    
    // Jika ada bagian kedua dan total tidak terlalu panjang, tambahkan
    if (parts[1] && (firstPart + ', ' + parts[1].trim()).length <= 35) {
      return firstPart + ', ' + parts[1].trim();
    }
    
    return firstPart;
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 10,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -10, scale: 0.8 },
    visible: { 
      rotate: 0, 
      scale: 1,
      transition: {
        duration: 0.2,
        delay: delay + 0.1,
        ease: "easeOut"
      }
    }
  };

  const shortAddress = getShortAddress(address);

  return (
    <motion.div
      variants={badgeVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm max-w-[280px]"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        color: '#374151'
      }}
    >
      <motion.div variants={iconVariants}>
        <MapPin size={14} className="text-red-500 shrink-0" />
      </motion.div>
      <span className="font-medium text-gray-700 truncate" title={address}>
        {shortAddress}
      </span>
    </motion.div>
  );
};

export default LocationBadge;