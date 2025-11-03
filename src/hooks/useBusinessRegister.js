import { useState, useEffect } from 'react';

export const useBusinessRegister = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    setShowPopup(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "69a48724-faef-4053-814c-59c73b649b3c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Pendaftaran bisnis berhasil dikirim! Terima kasih telah mendaftarkan bisnis Anda.");
        event.target.reset();
      } else {
        setResult("Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch {
      setResult("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setResult("");
  };

  useEffect(() => {
    if (showPopup && result) {
      const timer = setTimeout(() => {
        closePopup();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showPopup, result]);

  return {
    // State
    result,
    isSubmitting,
    showPopup,
    
    // Actions
    onSubmit,
    closePopup
  };
};