import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter, ShoppingBag, Utensils, Wrench, Home, Building2 } from 'lucide-react';
import { useUmkmList } from '../../hooks/useUmkmList';
import UmkmCard from '../../components/umkm/umkmcard';
import AnimatedContainer from '../../components/ui/Container';
import AnimatedButton from '../../components/ui/Button';

const UmkmList = ({
  hoveredCard,
  setHoveredCard
}) => {
  const { selectedCategory, filteredUMKM, categories, handleCategoryChange } = useUmkmList();

  return (
    <section className="mt-5 pb-16">
      <div className="container mx-auto">
        <div className="relative w-full flex justify-center items-center my-4 sm:my-6 md:my-8 px-4">
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
            UMKM POPULER
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-8 mb-10">
          {/* Filter Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
              {/* Tombol Kembali */}
              <div className="mb-6">
                <Link
                  to="/"
                  className="relative inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-sky-800 text-white px-4 py-3 rounded-lg overflow-hidden group transition-all duration-300 ease-out hover:scale-105 w-full justify-center"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-700 to-sky-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                  <ArrowLeft className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 text-sm font-semibold">Kembali</span>
                </Link>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5 text-sky-600" />
                Filter Kategori
              </h4>
              <div className="space-y-2">
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
                        return <ShoppingBag className="w-4 h-4 text-gray-500" />;
                    }
                  };

                  return (
                    <button
                      key={category}
                      onClick={() => {
                        handleCategoryChange(category);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`
                      w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 text-left flex items-center gap-3
                      ${selectedCategory === category
                        ? 'bg-gradient-to-r from-sky-700 to-sky-900 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 border-2 border-sky-800 hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-900 hover:text-white hover:shadow-md'}
                      `}
                    >
                      {getCategoryIcon(category)}
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* UMKM Cards */}
          <div className="flex-1">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmkmList;
