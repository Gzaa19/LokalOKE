import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Home, ShoppingBag, Utensils, Wrench } from 'lucide-react';

const CategoryBadge = ({ category, isVisible = false, delay = 0 }) => {
  // Color palette untuk setiap kategori
  const categoryConfig = {
    'Kost': {
      color: 'white',
      bgColor: '#3b82f6',
      borderColor: '#3b82f6',
      icon: Home,
      label: 'Kos'
    },
    'Toko Kelontong': {
      color: 'white',
      bgColor: '#22c55e',
      borderColor: '#22c55e',
      icon: ShoppingBag,
      label: 'Toko Kelontong'
    },
    'Jasa': {
      color: 'white',
      bgColor: '#6b7280',
      borderColor: '#6b7280',
      icon: Wrench,
      label: 'Jasa'
    },
    'Kuliner': {
      color: 'white',
      bgColor: '#f97316',
      borderColor: '#f97316',
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