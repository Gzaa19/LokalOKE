import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNewsletter } from '../../hooks/useNewsletter';
import AnimatedContainer from '../ui/Container';
import AnimatedButton from '../ui/Button';

export default function Newsletter() {
  const { email, result, isSubmitting, showPopup, handleSubscribe, handleEmailChange, closePopup } = useNewsletter();

  return (
    <AnimatedContainer 
      variant="fadeIn" 
      className="bg-linear-to-r from-slate-500 via-slate-600 to-slate-700 py-12 sm:py-16 "
    >
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
              <label htmlFor="newsletter-email" className="sr-only">Email</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Masukan Email Anda"
                className="w-full bg-slate-700 text-white placeholder:text-slate-400 px-3 py-2 sm:py-2.5 md:py-3 outline-none focus:ring-2 focus:ring-emerald-400"
                required
                disabled={isSubmitting}
              />
              <button
                variant="lift"
                type="submit"
                disabled={isSubmitting}
                className={`font-semibold px-4 py-2 sm:px-5 sm:py-3 whitespace-nowrap transition-all duration-200 ${
                  isSubmitting 
                    ? 'bg-slate-400 cursor-not-allowed text-slate-700' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
                aria-label="Subscribe"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-slate-700 border-t-transparent"></div>
                    <span className="hidden sm:inline">Mengirim...</span>
                  </div>
                ) : (
                  'Ikuti Sekarang'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {showPopup && result && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-md w-full">
            <div className={`rounded-2xl p-8 text-center shadow-2xl ${
              result.includes('Berhasil') 
                ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                : 'bg-gradient-to-br from-red-500 to-rose-600'
            }`}>
              <div className="mb-6">
                {result.includes('Berhasil') ? (
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">
                {result.includes('Berhasil') ? 'Subscription Berhasil!' : 'Terjadi Kesalahan'}
              </h3>
              <p className="text-white/90 mb-6">{result}</p>
              
              <button 
                onClick={closePopup}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </AnimatedContainer>
  );
}