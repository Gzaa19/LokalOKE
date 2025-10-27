import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { umkmData } from '../../Data/umkm.js';
import { ArrowRight, Star } from 'lucide-react';

export default function UmkmCard() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const renderWarungCards = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {umkmData.map((warung) => (
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
                {renderWarungCards()}
            </div>
        </section>
    );
}