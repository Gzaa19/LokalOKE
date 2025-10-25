import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { umkmData } from '../../Data/umkm.js';

export default function UmkmCard() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const renderWarungCards = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {umkmData.map((warung) => (
                <div
                    key={warung.id}
                    className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col group"
                    onMouseEnter={() => setHoveredCard(warung.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="h-48 shrink-0">
                        <img
                            src={warung.images[0]}
                            alt={warung.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="p-4 flex flex-col grow">
                        <div className="grow flex flex-col justify-end">
                            <h3 className="text-lg font-bold text-gray-900 line-clamp-2" title={warung.name}>
                                {warung.name}
                            </h3>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
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
                        </div>

                        <div className="flex justify-end pt-4">
                            <Link to={`/umkm/${warung.id}`}>
                                <button
                                    className={`w-10 h-10 bg-[#07416b] text-white rounded-full flex items-center justify-center transition-all duration-500 ease-out shrink-0 transform ${
                                        hoveredCard === warung.id 
                                            ? 'opacity-100 translate-x-0 scale-110 shadow-lg' 
                                            : 'opacity-0 translate-x-4 scale-95'
                                    }`}
                                    aria-label={`Lihat detail untuk ${warung.name}`}
                                >
                                    <svg
                                        className="w-5 h-5 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
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