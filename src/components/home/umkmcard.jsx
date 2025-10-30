import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { umkmData } from '../../Data/umkm.js';
import { ArrowRight, Star, ShoppingBag, Utensils, Wrench, Home } from 'lucide-react';

export default function UmkmCard() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'Semua');

    // Filter UMKM berdasarkan kategori
    const filteredUmkmData = selectedCategory === 'Semua'
        ? umkmData
        : selectedCategory === 'Kuliner'
        ? umkmData.filter(umkm =>
            ['Makanan', 'Kedai Kopi', 'Minuman'].includes(umkm.category)
          )
        : selectedCategory === 'Jasa'
        ? umkmData.filter(umkm => umkm.category === 'Jasa')
        : selectedCategory === 'Kos'
        ? [] // Kos belum ada di data, tampilan kosong buat sementara
        : umkmData.filter(umkm => umkm.category.toLowerCase() === selectedCategory.toLowerCase());

    useEffect(() => {
        if (selectedCategory === 'Semua') {
            setSearchParams({});
        } else {
            setSearchParams({ category: selectedCategory.toLowerCase() });
        }
    }, [selectedCategory, setSearchParams]);

    const renderWarungCards = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUmkmData.map((warung) => (
                <div
                    key={warung.id}
                    className="
                        bg-white shadow-lg overflow-hidden 
                        hover:shadow-xl hover:scale-[1.02] 
                        transition-all duration-300 ease-in-out 
                        flex flex-col group h-full
                        rounded-tl-[50px] rounded-br-[50px] tr bl
                    "
                    onMouseEnter={() => setHoveredCard(warung.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="h-64 shrink-0 rounded-tl-[50px] overflow-hidden">
                        <img
                            src={warung.images[0]}
                            alt={warung.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="p-4 flex flex-col grow justify-between">
                        <div className="flex flex-col">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-lg font-bold text-gray-900 line-clamp-2" title={warung.name}>
                                    {warung.name}
                                </h3>
                                <div className="flex items-center text-sm font-semibold text-yellow-600 ml-4 shrink-0">
                                    <Star size={16} fill="currentColor" className="mr-1" />
                                    {warung.rating.toFixed(1)}
                                </div>
                            </div>

                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                <svg
                                    className="w-4 h-4 text-gray-500 mr-1 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{warung.category}</span>
                            </div>

                            <p className="text-sm text-gray-500 mt-1 line-clamp-2" title={warung.description}>
                                {warung.description}
                            </p>
                        </div>

                        <div className="mt-3 pt-3 border-t border-gray-100">
                            <span className="text-base font-bold text-[#07416b]">
                                {warung.priceRange}
                            </span>
                        </div>
                    </div>

                    <Link to={`/umkm/${warung.id}`} className="w-full mt-auto">
                        <button
                            className={`
                                bg-[#07416b] text-white 
                                py-3 w-full 
                                flex items-center justify-center 
                                transition-all duration-500 ease-out shrink-0 transform 
                                text-base font-semibold 
                                rounded-br-[50px] bl rounded-tr-none rounded-tl-none
                                ${hoveredCard === warung.id
                                    ? 'opacity-100 translate-x-0 scale-100 shadow-xl'
                                    : 'opacity-0 translate-x-4 scale-95'
                                }
                            `}
                            aria-label={`Lihat detail untuk ${warung.name}`}
                        >
                            <span className="flex items-center justify-center space-x-2">
                                Lihat Detail
                                <ArrowRight size={20} />
                            </span>
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="
                    bg-gradient-to-br from-white/95 to-[#F8F5F0]/95 backdrop-blur-sm 
                    shadow-xl rounded-2xl px-6 h-fit py-6 border-2 border-gray-200 mb-6 // 👈 Mengurangi mb-10 menjadi mb-6 untuk jarak antar blok
                    w-fit 
                ">
                    <h2 className="
                        font-bold text-lg sm:text-xl md:text-3xl lg:text-2xl 
                        leading-[1.2] text-black 
                        flex items-center gap-3
                        mb-2 
                    ">
                        <ShoppingBag className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black shrink-0" /> 
                        Jelajahi yang OKE di Sekitarmu
                    </h2>
                    <p className="
                        text-xs sm:text-sm md:text-lg leading-6 sm:leading-7 
                        text-slate-600
                    ">
                        Pilihan lokal terbaik untukmu, dijamin OKE!
                    </p>
                </div>

                <div className="
                    bg-gradient-to-br from-white/95 to-[#F8F5F0]/95 backdrop-blur-sm 
                    shadow-xl rounded-2xl px-6 h-fit py-6 border-2 border-gray-200 mb-10 // 👈 Menggunakan mb-10 untuk jarak sebelum kartu UMKM
                ">
                    <h2 className="text-2xl font-bold text-black mb-6 md:text-3xl lg:text-2xl flex items-center gap-3"> 
                        Kategori Pilihan
                    </h2>
                    
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-6">
                        {/* SEMUA */}
                        <button onClick={() => setSelectedCategory('Semua')} className={`group block bg-gradient-to-br from-white/95 to-[#F8F5F0]/95 backdrop-blur-sm border-2 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 ${selectedCategory === 'Semua' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                            <div className="flex items-center gap-3">
                                <ShoppingBag className={`w-6 h-6 group-hover:text-black transition-colors ${selectedCategory === 'Semua' ? 'text-blue-600' : 'text-gray-700'}`} />
                                <span className={`text-lg font-semibold group-hover:text-black transition-colors ${selectedCategory === 'Semua' ? 'text-blue-600' : 'text-gray-700'}`}>Semua</span>
                            </div>
                        </button>

                        {/* KULINER */}
                        <button onClick={() => setSelectedCategory('Kuliner')} className={`group block bg-gradient-to-br from-white/95 to-[#F8F5F0]/95 backdrop-blur-sm border-2 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 ${selectedCategory === 'Kuliner' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                            <div className="flex items-center gap-3">
                                <Utensils className={`w-6 h-6 group-hover:text-black transition-colors ${selectedCategory === 'Kuliner' ? 'text-blue-600' : 'text-gray-700'}`} />
                                <span className={`text-lg font-semibold group-hover:text-black transition-colors ${selectedCategory === 'Kuliner' ? 'text-blue-600' : 'text-gray-700'}`}>Kuliner</span>
                            </div>
                        </button>

                        {/* JASA */}
                        <button onClick={() => setSelectedCategory('Jasa')} className={`group block bg-gradient-to-br from-white/95 to-[#F8F5F0]/95 backdrop-blur-sm border-2 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 ${selectedCategory === 'Jasa' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                            <div className="flex items-center gap-3">
                                <Wrench className={`w-6 h-6 group-hover:text-black transition-colors ${selectedCategory === 'Jasa' ? 'text-blue-600' : 'text-gray-700'}`} />
                                <span className={`text-lg font-semibold group-hover:text-black transition-colors ${selectedCategory === 'Jasa' ? 'text-blue-600' : 'text-gray-700'}`}>Jasa</span>
                            </div>
                        </button>

                        {/* KOS */}
                        <button onClick={() => setSelectedCategory('Kos')} className={`group block bg-gradient-to-br from-white/95 to-[#F8F5F0]/95 backdrop-blur-sm border-2 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 ${selectedCategory === 'Kos' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                            <div className="flex items-center gap-3">
                                <Home className={`w-6 h-6 group-hover:text-black transition-colors ${selectedCategory === 'Kos' ? 'text-blue-600' : 'text-gray-700'}`} />
                                <span className={`text-lg font-semibold group-hover:text-black transition-colors ${selectedCategory === 'Kos' ? 'text-blue-600' : 'text-gray-700'}`}>Kos</span>
                            </div>
                        </button>
                    </div>
                </div>
                {renderWarungCards()}
            </div>
        </section>
    );
}