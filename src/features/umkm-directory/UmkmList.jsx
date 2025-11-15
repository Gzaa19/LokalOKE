import React, { useEffect, useState } from 'react';
import { Filter } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useUmkmList } from '../../hooks/useUmkmList';
import FilterPanel from '../../components/ui/FilterPanel';
import ListingHeader from '../../components/ui/ListingHeader';
import SearchSummary from '../../components/ui/SearchSummary';
import EmptyState from '../../components/ui/EmptyState';
import UmkmCardGrid from '../../components/ui/UmkmCardGrid';

const UmkmList = ({ hoveredCard, setHoveredCard }) => {
  const {
    selectedCategory,
    selectedPriceRange,
    priceRangeLimits,
    priceStep,
    searchQuery,
    filteredUMKM,
    categories,
    handleCategoryChange,
    handlePriceRangeChange
  } = useUmkmList();

  const [isDesktop, setIsDesktop] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      setIsDesktop(true);
      setIsFilterPanelOpen(true);
      return;
    }

    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleViewportChange = (event) => {
      const matches = event.matches;
      setIsDesktop(matches);
      setIsFilterPanelOpen(matches);
    };

    handleViewportChange(mediaQuery);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleViewportChange);
      return () => mediaQuery.removeEventListener('change', handleViewportChange);
    }

    mediaQuery.addListener(handleViewportChange);
    return () => mediaQuery.removeListener(handleViewportChange);
  }, []);

  const formatCurrency = (value) => {
    if (!Number.isFinite(value)) {
      return 'Rp 0';
    }

    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const isPriceFilterDisabled = priceRangeLimits.max <= priceRangeLimits.min;
  const effectiveStep = priceStep || 1;

  const sanitizeRange = (range) => {
    if (isPriceFilterDisabled) {
      return [priceRangeLimits.min, priceRangeLimits.max];
    }

    const [rawMin, rawMax] = range;
    const safeMin = Math.max(priceRangeLimits.min, Math.min(rawMin, priceRangeLimits.max));
    const safeMax = Math.max(priceRangeLimits.min, Math.min(rawMax, priceRangeLimits.max));

    if (safeMax - safeMin < effectiveStep) {
      if (priceRangeLimits.max - priceRangeLimits.min <= effectiveStep) {
        return [priceRangeLimits.min, priceRangeLimits.max];
      }

      if (safeMin <= priceRangeLimits.min) {
        return [priceRangeLimits.min, Math.min(priceRangeLimits.max, priceRangeLimits.min + effectiveStep)];
      }

      if (safeMax >= priceRangeLimits.max) {
        return [Math.max(priceRangeLimits.min, priceRangeLimits.max - effectiveStep), priceRangeLimits.max];
      }

      const midpoint = safeMin + (safeMax - safeMin) / 2;
      const adjustedMin = Math.max(
        priceRangeLimits.min,
        Math.floor((midpoint - effectiveStep / 2) / effectiveStep) * effectiveStep
      );
      const adjustedMax = Math.min(priceRangeLimits.max, adjustedMin + effectiveStep);

      return [Math.min(adjustedMin, adjustedMax), Math.max(adjustedMin, adjustedMax)];
    }

    return [Math.min(safeMin, safeMax), Math.max(safeMin, safeMax)];
  };

  const applyPriceRange = (range) => {
    if (isPriceFilterDisabled) {
      return;
    }

    const normalizedRange = sanitizeRange(range);

    if (
      Math.abs(normalizedRange[0] - selectedPriceRange[0]) < effectiveStep &&
      Math.abs(normalizedRange[1] - selectedPriceRange[1]) < effectiveStep
    ) {
      return;
    }

    handlePriceRangeChange(normalizedRange);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (category) => {
    handleCategoryChange(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!isDesktop) {
      setIsFilterPanelOpen(false);
    }
  };

  const toggleFilterPanel = () => {
    setIsFilterPanelOpen((prev) => !prev);
  };

  const priceDisplay = {
    min: formatCurrency(priceRangeLimits.min),
    max: formatCurrency(priceRangeLimits.max)
  };

  // Header should indicate search context when query or any filter is active
  const isFilteringActive =
    selectedCategory !== 'Semua' ||
    selectedPriceRange[0] > priceRangeLimits.min ||
    selectedPriceRange[1] < priceRangeLimits.max;

  const filterPanelProps = {
    categories,
    selectedCategory,
    hasInteracted: true,
    onCategorySelect: handleCategorySelect,
    priceRangeLimits,
    priceStep: effectiveStep,
    selectedPriceRange,
    isPriceFilterDisabled,
    priceDisplay,
    onSelectRange: applyPriceRange
  };

  return (
    <motion.section
      className="mt-5 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="w-full px-8 xl:px-16">
        <ListingHeader hasQuery={Boolean(searchQuery) || isFilteringActive} />

        <SearchSummary count={filteredUMKM.length} query={searchQuery} />

        <AnimatePresence>
          {!isDesktop && isFilterPanelOpen && (
            <motion.aside
              key="mobile-filter"
              initial={{ x: -260, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -260, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="fixed top-28 left-4 z-30 w-56 max-w-[70vw] drop-shadow-xl"
            >
              <FilterPanel
                {...filterPanelProps}
                isCompact
                onClose={() => setIsFilterPanelOpen(false)}
              />
            </motion.aside>
          )}
        </AnimatePresence>

        <div className="lg:hidden mb-4 flex px-4">
          <button
            type="button"
            onClick={toggleFilterPanel}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-white text-sky-600 shadow-md hover:bg-sky-50 transition-colors"
            aria-expanded={isFilterPanelOpen}
            aria-label={isFilterPanelOpen ? 'Sembunyikan filter' : 'Tampilkan filter'}
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {isDesktop && (
            <div className="lg:w-64">
              <FilterPanel
                {...filterPanelProps}
                useStickyLayout
              />
            </div>
          )}

          <motion.div
            className="lg:w-5/6 p-0"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            {filteredUMKM.length > 0 ? (
              <UmkmCardGrid
                items={filteredUMKM}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                animationKey={`${selectedCategory}-${searchQuery}-${selectedPriceRange.join('-')}`}
              />
            ) : (
              <EmptyState />
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default UmkmList;
