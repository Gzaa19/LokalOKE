import React from 'react';
import { Filter, Home, ShoppingBag, Store, Utensils, Wrench, X } from 'lucide-react';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Kuliner':
      return <Utensils className="w-4 h-4 text-orange-500" />;
    case 'Kos':
      return <Home className="w-4 h-4 text-blue-500" />;
    case 'Jasa':
      return <Wrench className="w-4 h-4 text-gray-500" />;
    case 'Toko Kelontong':
      return <Store className="w-4 h-4 text-green-500" />;
    default:
      return <ShoppingBag className="w-4 h-4 text-red-500" />;
  }
};

const FilterPanel = ({
  categories,
  selectedCategory,
  hasInteracted,
  onCategorySelect,
  priceRangeLimits,
  priceStep,
  selectedPriceRange,
  isPriceFilterDisabled,
  priceDisplay,
  onSelectRange,
  useStickyLayout = false,
  isCompact = false,
  onClose
}) => (
  <div
    className={`bg-white border-2 border-sky-200 rounded-2xl shadow-lg ${
      isCompact ? 'p-4 w-56' : 'p-5'
    } ${
      useStickyLayout
        ? 'lg:sticky lg:top-20'
        : isCompact
          ? 'max-h-[80vh] overflow-y-auto'
          : 'max-h-[70vh] overflow-y-auto'
    }`}
  >
    <div className={`${isCompact ? 'mb-4 pb-3' : 'mb-5 pb-4'} border-b border-sky-100`}>
      <div className="flex items-center justify-between gap-3">
        <h4 className={`font-bold text-sky-800 flex items-center gap-2 ${isCompact ? 'text-lg' : 'text-xl'}`}>
          <div className="bg-sky-600 p-2 rounded-lg">
            <Filter className="w-5 h-5 text-white" />
          </div>
          <span>Filter Kategori</span>
        </h4>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-200 text-sky-500 hover:bg-sky-50 transition-colors"
            aria-label="Tutup filter"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>

    <div className={`flex flex-col ${isCompact ? 'gap-2' : 'gap-2.5'}`}>
      {categories.map((category) => {
        const isActive = selectedCategory === category && hasInteracted;

        return (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`
              w-full flex items-center gap-2.5 px-3.5 ${isCompact ? 'py-2' : 'py-2.5'} rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer text-left
              ${isActive
                ? 'bg-sky-600 text-white shadow-md'
                : 'bg-white text-sky-700 border border-sky-200 hover:bg-sky-50 hover:border-sky-300 shadow-sm hover:shadow-md'}
            `}
          >
            {getCategoryIcon(category)}
            <span className="flex-1 truncate">{category}</span>
          </button>
        );
      })}
    </div>

    <div className={`mt-6 flex flex-col ${isCompact ? 'gap-3' : 'gap-4'}`}>
      <h5 className="text-sm font-semibold text-sky-800">Rentang Harga</h5>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-xs font-semibold text-slate-500">Harga Minimum</label>
          <input
            type="range"
            min={priceRangeLimits.min}
            max={priceRangeLimits.max}
            step={priceStep}
            value={selectedPriceRange[0]}
            onChange={(event) => onSelectRange([Number(event.target.value), selectedPriceRange[1]])}
            disabled={isPriceFilterDisabled}
            className="w-full cursor-pointer accent-sky-600"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold text-slate-500">Harga Maksimum</label>
          <input
            type="range"
            min={priceRangeLimits.min}
            max={priceRangeLimits.max}
            step={priceStep}
            value={selectedPriceRange[1]}
            onChange={(event) => onSelectRange([selectedPriceRange[0], Number(event.target.value)])}
            disabled={isPriceFilterDisabled}
            className="w-full cursor-pointer accent-sky-600"
          />
        </div>
        <div className="flex justify-between text-xs uppercase tracking-wide text-slate-400">
          <span>{priceDisplay.min}</span>
          <span>{priceDisplay.max}</span>
        </div>
      </div>
    </div>

    <div className="relative my-5">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-sky-200" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-xs font-medium text-sky-500 uppercase tracking-wider">
          LOKALOKE
        </span>
      </div>
    </div>
  </div>
);

export default FilterPanel;
