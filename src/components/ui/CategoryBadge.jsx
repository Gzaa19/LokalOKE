import React from 'react';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, Utensils, Wrench } from 'lucide-react';

const CategoryBadge = ({ category, isVisible = false, delay = 0 }) => {
  // Color palette untuk setiap kategori
  const categoryConfig = {
    'Kost': {
      color: '#FACC15',
      bgColor: 'rgba(250, 204, 21, 0.1)',
      borderColor: 'rgba(250, 204, 21, 0.3)',
      icon: Home,
      label: 'Kos'
    },
    'Toko Kelontong': {
      color: '#EF4444',
      bgColor: 'rgba(239, 68, 68, 0.1)',
      borderColor: 'rgba(239, 68, 68, 0.3)',
      icon: ShoppingBag,
      label: 'Toko Kelontong'
    },
    'Jasa': {
      color: '#8B5CF6',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      icon: Wrench,
      label: 'Jasa'
    },
    'Kuliner': {
      color: '#854D0E',
      bgColor: 'rgba(133, 77, 14, 0.1)',
      borderColor: 'rgba(133, 77, 14, 0.3)',
      icon: Utensils,
      label: 'Kuliner'
    }
  };

  const config = categoryConfig[category] || categoryConfig['Kuliner'];
  const IconComponent = config.icon;

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

  return (
    <motion.div
      variants={badgeVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm"
      style={{
        backgroundColor: config.bgColor,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: config.borderColor,
        color: config.color
      }}
    >
      <motion.div variants={iconVariants}>
        <IconComponent size={14} />
      </motion.div>
      <span className="font-semibold">{config.label}</span>
    </motion.div>
  );
};

export default CategoryBadge;