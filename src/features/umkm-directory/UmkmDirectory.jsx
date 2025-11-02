import React from 'react';
import { Link } from 'react-router-dom';
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
        <section className="mt-5">
            <div className="container mx-auto">
                <div className="relative w-full flex justify-center items-center my-8 sm:my-12 md:my-16 px-4 overflow-hidden">
                    <h2 className="
                        font-bold leading-[1] 
                        text-gray-300 opacity-60
                        uppercase
                        text-[2.5rem] tracking-[2px] sm:text-[3.5rem] sm:tracking-[3px] 
                        md:text-[5rem] md:tracking-[5px] lg:text-[6.5rem] lg:tracking-[8px] 
                        xl:text-[8rem] xl:tracking-[10px]
                        max-w-full text-center
                        ">
                        LOKALOKE
                    </h2>
                    <h3 className="
                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        font-semibold text-cyan-700 
                        tracking-wider 
                        uppercase text-center px-2
                        text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                        max-w-[90%] sm:max-w-full
                        ">
                        UMKM POPULER
                    </h3>
                </div>

                <div className="w-full px-4 mt-8 mb-10">
                    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 max-w-4xl mx-auto">
                        {/* SEMUA */}
                        <button
                            onClick={() => setSelectedCategory('Semua')}
                            className={`
                            py-2 px-3 sm:px-5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap
                            ${selectedCategory === 'Semua'
                                ? 'bg-gradient-to-r from-sky-700 to-sky-900 text-white'
                                : 'bg-gray-100 text-gray-700 border-2 border-sky-800 hover:bg-gradient-to-r from-sky-700 to-sky-900 hover:text-white'}
                            `}
                        >
                            Semua
                        </button>
                        {/* KULINER */}
                        <button
                            onClick={() => setSelectedCategory('Kuliner')}
                            className={`
                            py-2 px-3 sm:px-5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap
                            ${selectedCategory === 'Kuliner'
                                ? 'bg-gradient-to-r from-sky-700 to-sky-900 text-white'
                                : 'bg-gray-100 text-gray-700 border-2 border-sky-800 hover:bg-gradient-to-r from-sky-700 to-sky-900 hover:text-white'}
                            `}
                        >
                            Kuliner
                        </button>

                        {/* JASA */}
                        <button
                            onClick={() => setSelectedCategory('Jasa')}
                            className={`
                            py-2 px-3 sm:px-5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap
                            ${selectedCategory === 'Jasa'
                                ? 'bg-gradient-to-r from-sky-700 to-sky-900 text-white'
                                : 'bg-gray-100 text-gray-700 border-2 border-sky-800 hover:bg-gradient-to-r from-sky-700 to-sky-900 hover:text-white'}
                            `}
                        >
                            Jasa
                        </button>
                        {/* KOS */}
                        <button
                            onClick={() => setSelectedCategory('Kos')}
                            className={`
                            py-2 px-3 sm:px-5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap
                            ${selectedCategory === 'Kos'
                                ? 'bg-gradient-to-r from-sky-700 to-sky-900 text-white'
                                : 'bg-gray-100 text-gray-700 border-2 border-sky-800 hover:bg-gradient-to-r from-sky-700 to-sky-900 hover:text-white'}
                            `}
                        >
                            Kos
                        </button>
                        {/* LIHAT SEMUA */}
                        <Link
                            to="/produk"
                            className="py-2 px-3 sm:px-5 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 bg-gradient-to-r from-green-600 to-green-800 text-white hover:from-green-700 hover:to-green-900 whitespace-nowrap"
                        >
                            Lihat Semua
                        </Link>
                    </div>
                </div>
                {renderWarungCards()}
            </div>
        </section>
    );
};

export default UmkmDirectory;