import { useState, useEffect } from 'react';

export const useNewsletter = () => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    setResult("");
    setShowPopup(false);

    // Create form data for Web3Forms API
    const formData = new FormData();
    formData.append("access_key", "69a48724-faef-4053-814c-59c73b649b3c");
    formData.append("email", email);
    formData.append("subject", "Newsletter Subscription - LokalOKE");
    formData.append("message", `Halo tim LokalOKE,

Saya ingin berlangganan newsletter LokalOKE untuk mendapatkan:
- Rekomendasi UMKM terbaru
- Promo dan penawaran khusus
- Artikel dan tips bisnis lokal
- Update terbaru platform LokalOKE

Email saya: ${email}

Terima kasih!`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Berhasil berlangganan! Terima kasih telah bergabung dengan komunitas LokalOKE.");
        setEmail(''); // Reset email setelah berhasil
      } else {
        setResult("Terjadi kesalahan saat berlangganan. Silakan coba lagi.");
      }
    } catch (error) {
      setResult("Terjadi kesalahan saat berlangganan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
      setShowPopup(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const closePopup = () => {
    setShowPopup(false);
    setResult("");
  };

  // Auto-close popup after 4 seconds
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
    email,
    result,
    isSubmitting,
    showPopup,
    
    // Actions
    handleSubscribe,
    handleEmailChange,
    closePopup
  };
};