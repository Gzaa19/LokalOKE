import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavbar } from '../../hooks/useNavbar';

const TARGET_BRAND_TEXT = 'LOKALOKE';
const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const NAV_LINKS = [
    { path: '/', label: 'Beranda' },
    { path: '/tentang', label: 'Tentang Kami' },
    { path: '/umkm', label: 'UMKM' },
    { path: '/kontak', label: 'Kontak' },
    { path: '/daftar-bisnis', label: 'Daftar Bisnis' }
];

const makeRandomText = (length) => {
    let text = '';
    for (let index = 0; index < length; index += 1) {
        text += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length));
    }
    return text;
};

const Navbar = () => {
    const {
        isScrolled,
        isMobileMenuOpen,
        isSearchOpen,
        searchQuery,
        toggleMobileMenu,
        toggleSearchOpen,
        handleSearchSubmit,
        handleSearchChange
    } = useNavbar();
    const location = useLocation();
    const [brandText, setBrandText] = useState(() => makeRandomText(TARGET_BRAND_TEXT.length));

    useEffect(() => {
        let frame = 0;
        let isPaused = false;
        let pauseTimeoutId = null;

        const runCycle = () => {
            frame = 0;
            isPaused = false;
        };

        const intervalId = window.setInterval(() => {
            if (isPaused) {
                return;
            }

            frame += 1;
            setBrandText(() => {
                const revealCount = Math.min(frame, TARGET_BRAND_TEXT.length);
                if (revealCount >= TARGET_BRAND_TEXT.length) {
                    isPaused = true;
                    window.clearTimeout(pauseTimeoutId);
                    pauseTimeoutId = window.setTimeout(() => {
                        runCycle();
                    }, 3000);
                    return TARGET_BRAND_TEXT;
                }

                const revealed = TARGET_BRAND_TEXT.slice(0, revealCount);
                const scrambled = makeRandomText(TARGET_BRAND_TEXT.length - revealCount);
                return `${revealed}${scrambled}`;
            });
        }, 90);

        return () => {
            window.clearInterval(intervalId);
            window.clearTimeout(pauseTimeoutId);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 font-poppins ${
            isScrolled 
                ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm' 
                : 'bg-white/70 backdrop-blur-sm border-b border-white/30'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="font-russo text-sky-800 text-2xl md:text-3xl tracking-wide drop-shadow-sm transition-all duration-500" aria-label="LokalOKE">{brandText}</span>
                    </div>

                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
                        <div className="bg-white/80 border-white/50 shadow-sm backdrop-blur-sm rounded-full md:px-2 lg:px-3 md:py-1.5 lg:py-2 flex items-center md:space-x-1 lg:space-x-2 whitespace-nowrap transition-all duration-300">
                            {NAV_LINKS.map(({ path, label }) => {
                                const isActive = location.pathname === path;
                                return (
                                    <Link
                                        key={path}
                                        to={path}
                                        className={`rounded-full font-semibold md:text-xs lg:text-sm md:px-3 md:py-1.5 lg:px-5 lg:py-2 transition-all ${
                                            isActive
                                                ? 'text-white bg-linear-to-r from-sky-700 to-sky-900'
                                                : 'relative overflow-hidden group text-sky-800 font-medium'
                                        }`}
                                    >
                                        {!isActive && (
                                            <span className="absolute inset-0 w-0 group-hover:w-full bg-linear-to-r from-sky-700 to-sky-900 transition-all duration-950 ease-out"></span>
                                        )}
                                        <span className={`${!isActive ? 'relative z-10 group-hover:text-white' : ''}`}>{label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <div className="relative flex items-center">
                            <button
                                className="px-3 py-2 rounded-full text-white font-semibold text-sm bg-linear-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/40"
                                onClick={toggleSearchOpen} aria-label="Open search"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <div className={`absolute left-1/2 -translate-x-1/2 -ml-40 top-full mt-5 z-50 transition-all duration-300 ${isSearchOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                <form onSubmit={handleSearchSubmit}>
                                    <div className="flex items-center bg-white/95 border border-white/40 rounded-xl shadow-lg px-3 py-2 w-[min(85vw,24rem)] max-w-sm">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                            placeholder="Temukan UMKM di LOKALOKE....."
                                            aria-label="Search input"
                                            className="flex-1 rounded-md px-2 py-2 text-sm outline-none bg-transparent text-slate-900"
                                        />
                                        <button type="submit" className="ml-2 px-3 py-2 rounded-lg text-white font-semibold text-sm bg-linear-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950">
                                            Cari
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                        <div className="relative">
                            <button
                                className="px-3 py-2 rounded-full text-white font-semibold text-sm bg-linear-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950 hover:shadow-md"
                                onClick={toggleSearchOpen} aria-label="Open search"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <div className={`absolute left-1/2 -translate-x-1/2 -ml-32 top-full mt-5 z-50 transition-all duration-300 md:hidden ${isSearchOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                <form onSubmit={handleSearchSubmit}>
                                    <div className="flex items-center bg-white/95 border border-white/40 rounded-xl shadow-lg px-3 py-2 w-[min(85vw,20rem)] max-w-xs mx-2">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                            placeholder="Temukan UMKM di LOKALOKE....."
                                            aria-label="Search input"
                                            className="flex-1 rounded-md px-2 py-2 text-sm outline-none bg-transparent text-slate-900"
                                        />
                                        <button type="submit" className="ml-2 px-3 py-2 rounded-lg text-white font-semibold text-sm bg-linear-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950">
                                            Cari
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <button
                            className="px-3 py-2 rounded-full text-white font-semibold text-sm bg-linear-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/40"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="md:hidden fixed top-16 left-0 right-0 z-40"
                    >
                        <div className="px-4 pt-3 pb-4 space-y-2 backdrop-blur-xl transition-all duration-700 bg-white/90 border-t border-white/40 shadow-lg">
                            {/* Stagger each link so the mobile menu reveals items sequentially */}
                            {NAV_LINKS.map(({ path, label }, index) => {
                                const isActive = location.pathname === path;
                                return (
                                    <motion.div
                                        key={path}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.25, delay: index * 0.06, ease: 'easeOut' }}
                                    >
                                        <Link
                                            to={path}
                                            className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-500 ease-out ${
                                                isActive
                                                    ? 'text-white bg-linear-to-r from-sky-700 to-sky-900'
                                                    : 'relative overflow-hidden group font-medium text-sky-900 bg-linear-to-r from-sky-600/10 to-sky-700/10 hover:from-sky-600/20 hover:to-sky-700/20 border border-sky-400/30'
                                            }`}
                                        >
                                            {!isActive && (
                                                <span className="absolute inset-0 w-0 group-hover:w-full bg-linear-to-r from-sky-700 to-sky-900 transition-all duration-950 ease-out" />
                                            )}
                                            <span className={`${!isActive ? 'relative z-10 group-hover:text-white' : ''}`}>{label}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;