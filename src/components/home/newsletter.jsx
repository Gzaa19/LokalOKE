import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <section id="newsletter" className="bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 py-12 sm:py-16 mt-10 md:mt-14">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto justify-center text-center lg:justify-start lg:text-left">
            <div className="p-3 rounded-md bg-slate-800 border border-slate-600 shadow-md">
              <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 text-sky-400" />
            </div>
            <div>
              <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide leading-tight text-center lg:text-left">Dapatkan Info OKE Terbaru!</h2>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base text-center lg:text-left">Daftar untuk rekomendasi UMKM, promo, & artikel terbaru.</p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:flex-1">
            <div className="flex items-stretch rounded-lg overflow-hidden shadow-md border border-slate-600 max-w-md sm:max-w-lg md:max-w-lg lg:max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukan Email Anda"
                aria-label="Email address"
                className="w-full bg-slate-700 text-white placeholder:text-slate-400 px-3 py-2 sm:py-2.5 md:py-3 outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
              <button
                type="submit"
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold px-4 py-2 sm:px-5 sm:py-3 whitespace-nowrap transition-colors"
                aria-label="Subscribe"
              >
                Ikuti Sekarang
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}