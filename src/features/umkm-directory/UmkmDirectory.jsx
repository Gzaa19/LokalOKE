import React from 'react';
import { ShoppingBag, Utensils, Wrench, Home } from 'lucide-react';
import { useUmkmCard } from '../../hooks/useUmkmCard';
import UmkmCard from '../../components/umkm/umkmcard';
import AnimatedContainer from '../../components/ui/Container';

const UmkmDirectory = () => {
    const { 
        selectedCategory, 
        setSelectedCategory, 
        hoveredCard, 
        setHoveredCard, 
        filteredUmkmData 
    } = useUmkmCard();

    const renderWarungCards = () => (
        <AnimatedContainer 
            variant="stagger" 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {filteredUmkmData.map((warung) => (
                <UmkmCard
                    key={warung.id}
                    umkm={warung}
                    isHovered={hoveredCard === warung.id}
                    onMouseEnter={() => setHoveredCard(warung.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                />
            ))}
        </AnimatedContainer>
    );

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="
                    bg-gradient-to-br from-white/95 to-[#F8F5F0]/95 backdrop-blur-sm 
                    shadow-xl rounded-2xl px-6 h-fit py-6 border-2 border-gray-200 mb-6
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
                    shadow-xl rounded-2xl px-6 h-fit py-6 border-2 border-gray-200 mb-10
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
};

export default UmkmDirectory;