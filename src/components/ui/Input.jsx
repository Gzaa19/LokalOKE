import React from 'react';

const Input = ({ 
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  error = false,
  errorMessage = '',
  label = '',
  className = '',
  size = 'medium',
  variant = 'default',
  ...props 
}) => {
  const baseClasses = 'border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1';
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg'
  };
  
  const variantClasses = {
    default: 'bg-white border-gray-300 focus:ring-sky-500 focus:border-sky-500',
    dark: 'bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:ring-emerald-400 focus:border-emerald-400',
    newsletter: 'bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:ring-emerald-400'
  };
  
  const errorClasses = error 
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
    : '';
    
  const disabledClasses = disabled 
    ? 'bg-gray-100 cursor-not-allowed opacity-60' 
    : 'hover:border-gray-400';
  
  const inputClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${errorClasses} ${disabledClasses} ${className}`;
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;