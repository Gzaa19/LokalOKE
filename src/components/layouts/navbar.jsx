import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const threshold = 30; 
            setIsScrolled(scrollTop > threshold);
        };

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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm border-b border-white/30 transition-all duration-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="font-russo text-sky-800 text-2xl md:text-3xl tracking-wide drop-shadow-sm transition-all duration-500">LOKALOKE</span>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div className="hidden md:flex items-center">
                            <div className="bg-white/80 border-white/50 shadow-sm backdrop-blur-sm rounded-full md:px-2 lg:px-3 md:py-1.5 lg:py-2 flex items-center md:space-x-1 lg:space-x-2 whitespace-nowrap transition-all duration-300">
                                <Link 
                                    to="/" 
                                    className={`rounded-full font-semibold md:text-xs lg:text-sm md:px-3 md:py-1.5 lg:px-5 lg:py-2 transition-all ${
                                        location.pathname === '/' 
                                            ? 'text-white bg-gradient-to-r from-sky-700 to-sky-900' 
                                            : 'relative overflow-hidden group text-sky-800 font-medium'
                                    }`}
                                >
                                    {location.pathname !== '/' && (
                                        <span className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-sky-700 to-sky-900 transition-all duration-950 ease-out"></span>
                                    )}
                                    <span className={`${location.pathname !== '/' ? 'relative z-10 group-hover:text-white' : ''}`}>Beranda</span>
                                </Link>
                                <a href="#tentang-kami" className="relative overflow-hidden group px-5 py-2 rounded-full text-sky-800 font-medium text-sm transition-all">
                                    <span className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-sky-700 to-sky-900 transition-all duration-950 ease-out"></span>
                                    <span className="relative z-10 group-hover:text-white">Tentang Kami</span>
                                </a>
                                <a href="#faq" className="relative overflow-hidden group px-5 py-2 rounded-full text-sky-800 font-medium text-sm transition-all">
                                    <span className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-sky-700 to-sky-900 transition-all duration-950 ease-out"></span>
                                    <span className="relative z-10 group-hover:text-white">Produk</span>
                                </a>
                                <Link 
                                    to="/kontak" 
                                    className={`rounded-full font-semibold md:text-xs lg:text-sm md:px-3 md:py-1.5 lg:px-5 lg:py-2 transition-all ${
                                        location.pathname === '/kontak' 
                                            ? 'text-white bg-gradient-to-r from-sky-700 to-sky-900' 
                                            : 'relative overflow-hidden group text-sky-800 font-medium'
                                    }`}
                                >
                                    {location.pathname !== '/kontak' && (
                                        <span className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-sky-700 to-sky-900 transition-all duration-950 ease-out"></span>
                                    )}
                                    <span className={`${location.pathname !== '/kontak' ? 'relative z-10 group-hover:text-white' : ''}`}>Kontak</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <button className="px-3 py-2 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/40" aria-label="Toggle theme">
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

                        <div className="relative flex items-center">
                            <button
                                className="px-3 py-2 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/40"
                                onClick={() => { setIsSearchOpen(!isSearchOpen); setIsMobileMenuOpen(false); }} aria-label="Open search"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <div className={`absolute left-1/2 -translate-x-1/2 -ml-48 top-full mt-5 z-[60] transition-all duration-300 ${isSearchOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                <form onSubmit={(e)=>{e.preventDefault();}}>
                                    <div className="flex items-center bg-white/95 border border-white/40 rounded-xl shadow-lg px-3 py-2 w-[min(90vw,28rem)]">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Temukan UMKM di LOKALOKE....."
                                            aria-label="Search input"
                                            className="flex-1 rounded-md px-2 py-2 text-sm outline-none bg-transparent text-slate-900"
                                        />
                                        <button type="submit" className="ml-2 px-3 py-2 rounded-lg text-white font-semibold text-sm bg-gradient-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950">
                                            Cari
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                        <button className="px-3 py-2 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950 hover:shadow-md" aria-label="Toggle theme">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </button>
                        <div className="relative">
                            <button
                                className="px-3 py-2 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950 hover:shadow-md"
                                onClick={() => { setIsSearchOpen(!isSearchOpen); setIsMobileMenuOpen(false); }} aria-label="Open search"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <div className={`absolute left-1/2 -translate-x-1/2 -ml-28 top-full mt-5 z-[60] transition-all duration-300 md:hidden ${isSearchOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                <form onSubmit={(e)=>{e.preventDefault();}}>
                                    <div className="flex items-center bg-white/95 border border-white/40 rounded-xl shadow-lg px-3 py-2 w-[min(90vw,28rem)]">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Temukan UMKM di LOKALOKE....."
                                            aria-label="Search input"
                                            className="flex-1 rounded-md px-2 py-2 text-sm outline-none bg-transparent text-slate-900"
                                        />
                                        <button type="submit" className="ml-2 px-3 py-2 rounded-lg text-white font-semibold text-sm bg-gradient-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950">
                                            Cari
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <button
                            className="px-3 py-2 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-sky-700 to-sky-900 transition-all hover:from-sky-800 hover:to-sky-950 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/40"
                            onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsSearchOpen(false); }}
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} >
                <div className="px-4 pt-3 pb-4 space-y-2 backdrop-blur-xl transition-all duration-700 bg-white/85 border-t border-white/40 shadow-lg">
                    <Link 
                        to="/" 
                        className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-500 ease-out ${
                            location.pathname === '/' 
                                ? 'text-white bg-gradient-to-r from-sky-700 to-sky-900' 
                                : 'relative overflow-hidden group font-medium text-sky-900 bg-gradient-to-r from-sky-600/10 to-sky-700/10 hover:from-sky-600/20 hover:to-sky-700/20 border border-sky-400/30'
                        }`}
                    >
                        {location.pathname !== '/' && (
                            <span className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-sky-700 to-sky-900 transition-all duration-950 ease-out" />
                        )}
                        <span className={`${location.pathname !== '/' ? 'relative z-10 group-hover:text-white' : ''}`}>Beranda</span>
                    </Link>
                    <a href="#tentang-kami" className="relative overflow-hidden group block px-4 py-3 rounded-lg transition-all duration-500 ease-out font-medium text-sky-900 bg-gradient-to-r from-sky-600/10 to-sky-700/10 hover:from-sky-600/20 hover:to-sky-700/20 border border-sky-400/30">
                        <span className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-sky-700 to-sky-900 transition-all duration-950 ease-out" />
                        <span className="relative z-10 group-hover:text-white">Tentang Kami</span>
                    </a>
                    <a href="#faq" className="relative overflow-hidden group block px-4 py-3 rounded-lg transition-all duration-500 ease-out font-medium text-sky-900 bg-gradient-to-r from-sky-600/10 to-sky-700/10 hover:from-sky-600/20 hover:to-sky-700/20 border border-sky-400/30" >
                        <span className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-sky-700 to-sky-900 transition-all duration-950 ease-out" />
                        <span className="relative z-10 group-hover:text-white">FAQ</span>
                    </a>
                    <Link 
                        to="/kontak" 
                        className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-500 ease-out ${
                            location.pathname === '/kontak' 
                                ? 'text-white bg-gradient-to-r from-sky-700 to-sky-900' 
                                : 'relative overflow-hidden group font-medium text-sky-900 bg-gradient-to-r from-sky-600/10 to-sky-700/10 hover:from-sky-600/20 hover:to-sky-700/20 border border-sky-400/30'
                        }`}
                    >
                        {location.pathname !== '/kontak' && (
                            <span className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-sky-700 to-sky-900 transition-all duration-950 ease-out" />
                        )}
                        <span className={`${location.pathname !== '/kontak' ? 'relative z-10 group-hover:text-white' : ''}`}>Kontak</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
