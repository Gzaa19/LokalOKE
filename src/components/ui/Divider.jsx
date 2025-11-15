import React from 'react';
import { motion } from 'framer-motion';

const Divider = ({ 
  variant = 'gradient', 
  className = '', 
  showIcon = true,
  iconType = 'diamond' 
}) => {
  const containerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  const renderIcon = () => {
    switch (iconType) {
      case 'diamond':
        return (
          <div className="w-4 h-4 bg-gradient-to-br from-sky-400 to-sky-600 rotate-45 shadow-lg"></div>
        );
      case 'circle':
        return (
          <div className="w-4 h-4 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full shadow-lg"></div>
        );
      case 'star':
        return (
          <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      case 'spinner':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-800 animate-spin" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3.268c-.708 0-1.298-.59-1.298-1.298S11.292.672 12 .672s1.298.59 1.298 1.298-.59 1.298-1.298 1.298zm0-1.416c-.118 0-.118 0-.118.118s.236.118.236 0 0-.118-.118-.118zM7.044 4.566c-.708 0-1.298-.59-1.298-1.298s.59-1.298 1.298-1.298 1.298.59 1.298 1.298-.59 1.298-1.298 1.298zm0-1.416c-.118 0-.118 0-.118.118s.236.118.236 0l-.118-.118zM3.268 8.342c-.708 0-1.298-.59-1.298-1.298s.59-1.416 1.298-1.416 1.298.59 1.298 1.298-.59 1.416-1.298 1.416zm0-1.534c-.118 0-.118 0-.118.118s.236.118.236 0c0 0 0-.118-.118-.118zm-1.298 6.49c-.708 0-1.298-.59-1.298-1.298s.59-1.298 1.298-1.298 1.298.59 1.298 1.298-.59 1.298-1.298 1.298zm0-1.416c-.118 0-.118 0-.118.118s.236.118.236 0 0-.118-.118-.118zM12 23.328c-.708 0-1.298-.59-1.298-1.298s.59-1.298 1.298-1.298 1.298.59 1.298 1.298-.59 1.298-1.298 1.298zm0-1.416c-.118 0-.118 0-.118.118s.236.118.236 0 0-.118-.118-.118zm4.956.118c-.708 0-1.298-.59-1.298-1.298s.59-1.298 1.298-1.298 1.298.59 1.298 1.298-.472 1.298-1.298 1.298zm0-1.416c0 .236.118.236 0 0 .118 0 .118 0 0 0zm3.776-2.36c-.708 0-1.298-.59-1.298-1.298s.59-1.298 1.298-1.298 1.298.59 1.298 1.298-.59 1.298-1.298 1.298zm0-1.298c-.118 0-.118 0 0 0-.118.236.118.236 0 0zm1.298-3.658c-.708 0-1.298-.59-1.298-1.298s.59-1.298 1.298-1.298 1.298.59 1.298 1.298-.59 1.298-1.298 1.298zm0-1.416c-.118 0-.118 0-.118.118s.236.118.236 0 0-.118-.118-.118zM3.268 18.254c-.708 0-1.298-.59-1.298-1.298s.59-1.298 1.298-1.298 1.298.59 1.298 1.298-.59 1.298-1.298 1.298zm0-1.298c-.118 0-.118 0-.118.118s.236.118.236 0 0-.118-.118-.118zm17.464-8.614c-.708 0-1.298-.59-1.298-1.298s.59-1.298 1.298-1.298 1.298.59 1.298 1.298-.59 1.298-1.298 1.298zm0-1.534c-.118 0-.118 0-.118.118s.236.118.236 0l-.118-.118zM7.044 22.03c-.708 0-1.298-.59-1.298-1.298s.59-1.298 1.298-1.298 1.298.59 1.298 1.298-.59 1.298-1.298 1.298zm0-1.416c-.118 0-.118 0-.118.118s.236.118.236 0-.118-.118-.118-.118zm9.912-16.048c-.708 0-1.298-.59-1.298-1.298s.59-1.298 1.298-1.298 1.298.59 1.298 1.298-.472 1.298-1.298 1.298zm0-1.416c-.118 0-.118 0-.118.118s.236.118.236 0c0 0 0-.118-.118-.118z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getDividerClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-transparent via-slate-800 to-transparent';
      case 'solid':
        return 'bg-slate-800';
      case 'dotted':
        return 'border-t-2 border-dotted border-slate-800 bg-transparent';
      case 'dashed':
        return 'border-t-2 border-dashed border-slate-800 bg-transparent';
      default:
        return 'bg-gradient-to-r from-transparent via-slate-800 to-transparent';
    }
  };

  return (
    <motion.div 
      className={`flex items-center justify-center py-12 px-4 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex items-center w-full max-w-4xl">
        <motion.div 
          className={`flex-1 h-px ${getDividerClasses()}`}
          variants={containerVariants}
        />
        
        {showIcon && (
          <motion.div 
            className="mx-6 flex items-center justify-center"
            variants={iconVariants}
          >
            <div className="bg-white p-3 rounded-full shadow-lg border border-sky-100">
              {renderIcon()}
            </div>
          </motion.div>
        )}
        
        <motion.div 
          className={`flex-1 h-px ${getDividerClasses()}`}
          variants={containerVariants}
        />
      </div>
    </motion.div>
  );
};

export default Divider;