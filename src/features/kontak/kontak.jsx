import { useKontak } from '../../hooks/useKontak';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import AnimatedContainer from '../../components/ui/Container';
import AnimatedButton from '../../components/ui/Button';

export default function Kontak() {
    const { result, isSubmitting, showPopup, onSubmit, closePopup } = useKontak();

    return (
        <AnimatedContainer 
            variant="fadeIn" 
            className="py-12 md:py-16 px-4"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-10 mb-6">
                        Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Terhubung!</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Baik Anda pemilik UMKM yang ingin bergabung, pengguna yang punya masukan, atau rekan yang ingin bermitra, kami siap mendengar. Sampaikan pesan Anda dan mari buat bisnis lokal kita semakin OKE!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-center group">
                                    <div className="bg-gradient-to-br from-sky-500 to-blue-600 h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-slate-900">Email</h3>
                                        <a href="mailto:halo.lokaloke@gmail.com?subject=Pertanyaan%20Seputar%20Platform%20LokalOKE&body=Halo%20tim%20LokalOKE,%0A%0ASaya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20platform%20Anda.%20Bisa%20memberikan%20informasi%20lebih%20lanjut?" 
                                        className="text-sky-600 hover:text-sky-700 font-medium transition-colors">
                                            halo.lokaloke@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center group">
                                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-slate-900">Alamat</h3>
                                        <p className="text-slate-600">Semarang, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Jadikan Bisnis Lokal Anda "Pasti OKE!"</h3>
                            <span className="text-lg leading-relaxed">Naik kelas bersama LokalOKE. Masukkan data Anda pada form di samping, dan mari kita mulai kembangkan bisnis Anda bersama.</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h2>

                        <form onSubmit={onSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                                    <input 
                                        type='text' 
                                        name='name' 
                                        placeholder='Masukkan nama lengkap Anda'
                                        className="w-full text-slate-900 rounded-xl py-3 px-4 border-2 border-slate-200 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-200 bg-slate-50 focus:bg-white" 
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                                    <input 
                                        type='email' 
                                        name='email' 
                                        placeholder='nama@email.com'
                                        className="w-full text-slate-900 rounded-xl py-3 px-4 border-2 border-slate-200 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-200 bg-slate-50 focus:bg-white" 
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Perihal</label>
                                <input 
                                    type='text' 
                                    name='subject' 
                                    placeholder='Contoh: Pendaftaran UMKM / Masukan / Kerjasama'
                                    className="w-full text-slate-900 rounded-xl py-3 px-4 border-2 border-slate-200 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-200 bg-slate-50 focus:bg-white" 
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Pesan</label>
                                <textarea 
                                    name='message' 
                                    placeholder='Tuliskan pesan, pertanyaan, atau masukan Anda di sini...' 
                                    rows="6"
                                    className="w-full text-slate-900 rounded-xl py-3 px-4 border-2 border-slate-200 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-200 bg-slate-50 focus:bg-white resize-none" 
                                    required
                                ></textarea>
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
                                        Mengirim...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Kirim Pesan
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
                                {result.includes('berhasil') ? 'Pesan Terkirim!' : 'Terjadi Kesalahan'}
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