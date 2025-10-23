import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const threshold = 30; // Lebih responsif dengan threshold yang lebih kecil
            setIsScrolled(scrollTop > threshold);
        };

        // Throttle scroll event untuk performa yang lebih baik
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledHandleScroll, {
            passive: true,
        });
        return () =>
            window.removeEventListener('scroll', throttledHandleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
                isScrolled
                    ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-black/10'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span
                            className={`font-bold text-2xl tracking-wide transition-all duration-500 ${
                                isScrolled
                                    ? 'text-white drop-shadow-lg'
                                    : 'text-white drop-shadow-lg'
                            }`}
                        >
                            LOKALOKE
                        </span>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div className="hidden md:flex items-center">
                            <div
                                className={`backdrop-blur-xl rounded-full px-3 py-2 flex items-center space-x-2 transition-all duration-700 ${
                                    isScrolled
                                        ? 'bg-white/15 border border-white/30 shadow-lg shadow-black/5'
                                        : 'bg-white/10 border border-white/20'
                                }`}
                            >
                                <a
                                    href="#beranda"
                                    className="bg-linear-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105"
                                >
                                    Beranda
                                </a>
                                <a
                                    href="#tentang-kami"
                                    className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm backdrop-blur-sm ${
                                        isScrolled
                                            ? 'text-white/95 hover:text-white hover:bg-white/20'
                                            : 'text-white/90 hover:text-white hover:bg-white/20'
                                    }`}
                                >
                                    Tentang Kami
                                </a>
                                <a
                                    href="#faq"
                                    className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm backdrop-blur-sm ${
                                        isScrolled
                                            ? 'text-white/95 hover:text-white hover:bg-white/20'
                                            : 'text-white/90 hover:text-white hover:bg-white/20'
                                    }`}
                                >
                                    FAQ
                                </a>
                                <a
                                    href="#kontak"
                                    className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm backdrop-blur-sm ${
                                        isScrolled
                                            ? 'text-white/95 hover:text-white hover:bg-white/20'
                                            : 'text-white/90 hover:text-white hover:bg-white/20'
                                    }`}
                                >
                                    Kontak
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Dark Mode Toggle - Desktop */}
                    <div className="hidden md:flex items-center">
                        <button
                            className={`transition-all duration-300 p-2 rounded-lg backdrop-blur-sm ${
                                isScrolled
                                    ? 'text-white/90 hover:text-white hover:bg-white/20 border border-white/30 hover:border-white/50'
                                    : 'text-white/80 hover:text-white hover:bg-white/20 border border-white/10 hover:border-white/30'
                            }`}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            className={`transition-all duration-300 p-2 rounded-lg ${
                                isScrolled
                                    ? 'text-white/90 hover:text-white hover:bg-white/20'
                                    : 'text-white/80 hover:text-white hover:bg-white/20'
                            }`}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            >
                <div
                    className={`px-4 pt-3 pb-4 space-y-2 backdrop-blur-xl transition-all duration-700 ${
                        isScrolled
                            ? 'bg-white/15 border-t border-white/30'
                            : 'bg-gradient-to-b from-blue-900/95 to-slate-900/95 border-t border-blue-500/30'
                    }`}
                >
                    <a
                        href="#beranda"
                        className="block px-4 py-3 text-white bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 font-semibold border border-blue-400/20"
                    >
                        Beranda
                    </a>
                    <a
                        href="#tentang-kami"
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                            isScrolled
                                ? 'text-white/95 hover:text-white hover:bg-white/20'
                                : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                    >
                        Tentang Kami
                    </a>
                    <a
                        href="#faq"
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                            isScrolled
                                ? 'text-white/90 hover:text-white hover:bg-slate-700/50'
                                : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                    >
                        FAQ
                    </a>
                    <a
                        href="#kontak"
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                            isScrolled
                                ? 'text-white/90 hover:text-white hover:bg-slate-700/50'
                                : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                    >
                        Kontak
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
