import React from 'react';
import { MapPin, Info ,Star, Send, Search, Percent, Heart } from 'lucide-react';
import AnimatedContainer from '../../components/ui/Container';
import { categories } from '../../Data/umkm';
import { useBusinessRegister } from '../../hooks/useBusinessRegister';

export default function BusinessRegister() {
    const { result, isSubmitting, showPopup, onSubmit, closePopup } = useBusinessRegister();

    const businessCategories = categories.filter(category => category !== 'Semua');

    return (
        <AnimatedContainer 
            variant="fadeIn" 
            className="py-12 md:py-16 px-4"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-10 mb-6">
                        Daftarkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Bisnis Anda!</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Bergabunglah dengan komunitas UMKM LokalOKE dan jangkau lebih banyak pelanggan. Isi formulir di bawah ini untuk memulai perjalanan bisnis Anda bersama kami.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Mengapa Bergabung dengan LokalOKE?</h2>
                            
                            <div className="grid md:grid-cols-2 gap-6 md:gap-x-8">
                                <div className="flex items-center gap-4 group">
                                    <div className="bg-gradient-to-br from-sky-500 to-blue-600 h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Lokasi OKE</h3>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                                        <Info className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Info Lengkap</h3>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="bg-gradient-to-br from-emerald-500 to-green-600 h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Ulasan Jujur</h3>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="bg-gradient-to-br from-emerald-500 to-green-600 h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                                        <Search className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Pencarian Mudah</h3>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                                        <Percent className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Promo & Diskon</h3>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="bg-gradient-to-br from-rose-500 to-pink-600 h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">100% Dukung Lokal</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Siap Bergabung?</h3>
                            <p className="text-lg leading-relaxed">Isi formulir profil bisnis di samping dan tim kami akan membantu Anda memulai perjalanan digital bisnis Anda!</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Formulir Profil Bisnis</h2>

                        <form onSubmit={onSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Nama UMKM <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type='text' 
                                    name='businessName'
                                    placeholder='Contoh: Warung Makan Bu Sari'
                                    className="w-full text-slate-900 rounded-xl py-3 px-4 border-2 border-slate-200 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-200 bg-slate-50 focus:bg-white" 
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Kategori Bisnis <span className="text-red-500">*</span>
                                </label>
                                <select 
                                    name='category'
                                    className="w-full text-slate-900 rounded-xl py-3 px-4 border-2 border-slate-200 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-200 bg-slate-50 focus:bg-white" 
                                    required
                                >
                                    <option value="">Pilih kategori bisnis Anda</option>
                                    {businessCategories.map((category, index) => (
                                        <option key={index} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Alamat / Lokasi <span className="text-red-500">*</span>
                                </label>
                                <textarea 
                                    name='address'
                                    placeholder='Contoh: Jl. Mulawarman No. 123, Tembalang, Semarang' 
                                    rows="3"
                                    className="w-full text-slate-900 rounded-xl py-3 px-4 border-2 border-slate-200 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-200 bg-slate-50 focus:bg-white resize-none" 
                                    required
                                ></textarea>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type='tel' 
                                    name='phone'
                                    placeholder='Contoh: 0812-3456-7890'
                                    className="w-full text-slate-900 rounded-xl py-3 px-4 border-2 border-slate-200 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-200 bg-slate-50 focus:bg-white" 
                                    required
                                />
                            </div>
                            
                            <button
                                type='submit' 
                                disabled={isSubmitting}
                                className={`w-full flex items-center justify-center gap-3 rounded-xl text-sm font-semibold py-4 px-6 transition-all duration-200 ${
                                    isSubmitting 
                                        ? 'bg-slate-400 cursor-not-allowed text-white' 
                                        : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-sky-200'
                                }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                        Mengirim Pendaftaran...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Daftarkan Bisnis Saya
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {showPopup && result && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className={`max-w-md w-full rounded-2xl shadow-2xl transform transition-all duration-300 ease-out animate-in zoom-in-95 ${
                        result.includes('berhasil') 
                            ? 'bg-gradient-to-br from-emerald-500 to-green-600' 
                            : 'bg-gradient-to-br from-red-500 to-rose-600'
                    }`}>
                        <div className="p-8 text-white text-center">
                            <div className="mb-4">
                                {result.includes('berhasil') ? (
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2">
                                {result.includes('berhasil') ? 'Pendaftaran Berhasil!' : 'Terjadi Kesalahan'}
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