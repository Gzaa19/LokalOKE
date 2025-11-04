import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter, ShoppingBag, Utensils, Wrench, Home, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUmkmList } from '../../hooks/useUmkmList';
import UmkmCard from '../../components/umkm/umkmcard';
import AnimatedContainer from '../../components/ui/Container';
import AnimatedButton from '../../components/ui/Button';

const UmkmList = ({
  hoveredCard,
  setHoveredCard
}) => {
  const { selectedCategory, searchQuery, filteredUMKM, categories, handleCategoryChange } = useUmkmList();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const timer = setTimeout(() => setIsSidebarVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.section
      className="mt-5 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full px-8 xl:px-16">
        <div className="relative w-full flex justify-center items-center my-4 sm:my-6 md:my-8 px-4">
          <div className="w-full relative select-none">
            <div className="flex items-center justify-center">
              <div className="relative">
                <h2 className="
                  font-bold leading-[1]
                  text-gray-300 opacity-60
                  uppercase
                  text-[3rem] tracking-[3px] sm:text-[4rem] sm:tracking-[5px]
                  md:text-[6rem] md:tracking-[8px] lg:text-[8rem] lg:tracking-[12px]
                  xl:text-[10rem] xl:tracking-[15px]
                  max-w-full overflow-hidden
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
                  {searchQuery ? `HASIL PENCARIAN` : 'UMKM POPULER'}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Search Result Info */}
        {searchQuery && (
          <div className="mb-6 px-4">
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm">
                Menampilkan <span className="font-semibold">{filteredUMKM.length}</span> hasil untuk pencarian:
                <span className="font-semibold ml-1">"{searchQuery}"</span>
              </p>
            </div>
          </div>
        )}

        {/* Toggle Button for Filter */}
        <button
          data-drawer-target="separator-sidebar"
          data-drawer-toggle="separator-sidebar"
          aria-controls="separator-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-0 ms-3 text-sm text-white bg-gradient-to-r from-sky-600 to-sky-800 rounded-lg hover:from-sky-700 hover:to-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:text-white dark:from-sky-600 dark:to-sky-800 dark:hover:from-sky-700 dark:hover:to-sky-900 dark:focus:ring-sky-600 cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row gap-8 mt-0 mb-10">
          {/* Mobile Overlay */}
          {isMobile && isSidebarOpen && (
            <div
              className="fixed inset-0 bg-transparent z-5"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Filter Sidebar */}
          <motion.aside
            id="separator-sidebar"
            className={`fixed top-16 left-0 z-10 w-64 h-screen bg-white`}
            initial={{ x: -256 }}
            animate={{ x: isSidebarOpen ? 0 : -256 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                <li>
                  <div className="flex items-center p-2 text-sky-800 rounded-lg dark:text-sky-800 group">
                    <Filter className="w-5 h-5 text-sky-700 transition duration-75 dark:text-sky-600 group-hover:text-sky-900 dark:group-hover:text-sky-900" />
                    <span className="ms-3">Filter Kategori</span>
                  </div>
                </li>
                {categories.map((category) => {
                  const getCategoryIcon = (cat) => {
                    switch (cat) {
                      case 'Kuliner':
                        return <Utensils className="w-4 h-4 text-orange-500" />;
                      case 'Kos':
                        return <Home className="w-4 h-4 text-green-500" />;
                      case 'Jasa':
                        return <Wrench className="w-4 h-4 text-blue-500" />;
                      case 'Toko Kelontong':
                        return <ShoppingBag className="w-4 h-4 text-purple-500" />;
                      case 'Kerajinan':
                        return <Filter className="w-4 h-4 text-pink-500" />;
                      default:
                        return <ShoppingBag className="w-4 h-4 text-black-500" />;
                    }
                  };

                  return (
                    <li key={category}>
                      <button
                        onClick={() => {
                          handleCategoryChange(category);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          setIsSidebarOpen(false); // Close sidebar on mobile after selection
                        }}
                        className={`
                        w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 text-left flex items-center gap-3 cursor-pointer
                        ${selectedCategory === category
                          ? 'bg-gradient-to-r from-sky-700 to-sky-900 text-white shadow-md'
                          : 'bg-gray-100 text-sky-800 border-2 border-sky-800 hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-900 hover:text-white hover:shadow-md'}
                        `}
                      >
                        {getCategoryIcon(category)}
                        {category}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="relative inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-sky-800 text-white px-8 py-2 rounded-lg overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-sky-700 to-sky-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                    <ArrowLeft className="w-4 h-4 relative z-10" />
                    <span className="relative z-10 text-sm font-semibold">Kembali</span>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.aside>

          {/* UMKM Cards */}
          <motion.div
            className={`p-4 transition-all duration-500 ease-out ${!isMobile && isSidebarOpen ? 'ml-64' : ''}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <AnimatedContainer
              variant="stagger"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredUMKM.map((umkm) => (
                <UmkmCard
                  key={umkm.id}
                  umkm={umkm}
                  isHovered={hoveredCard === umkm.id}
                  onMouseEnter={() => setHoveredCard(umkm.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                />
              ))}
            </AnimatedContainer>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default UmkmList;
