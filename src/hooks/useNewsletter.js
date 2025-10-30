import { useState } from 'react';

export const useNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    // Logic untuk handle subscription bisa ditambahkan di sini
    console.log('Subscribed:', email);
    
    // Reset email setelah subscribe
    setEmail('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return {
    // State
    email,
    
    // Actions
    handleSubscribe,
    handleEmailChange
  };
};