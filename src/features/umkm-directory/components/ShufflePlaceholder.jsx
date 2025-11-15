import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useResponsiveDesign } from '../../../hooks/useResponsiveDesign';

const SHUFFLE_DURATION = 0.15;

const MAX_SHUFFLE_CARDS = 5;

const BASE_SLOT_POSITIONS = {
  farLeft: {
    transform: { x: -140, y: -90, scale: 0.86, rotate: -6 },
    shadow: '0px 18px 32px -24px rgba(15, 118, 110, 0.28)',
    zIndex: 24,
    opacity: 0.76
  },
  left: {
    transform: { x: -70, y: -52, scale: 0.94, rotate: -3 },
    shadow: '0px 22px 34px -22px rgba(15, 118, 110, 0.32)',
    zIndex: 34,
    opacity: 0.86
  },
  center: {
    transform: { x: 0, y: -24, scale: 1.04, rotate: 0 },
    shadow: '0px 26px 40px -20px rgba(15, 118, 110, 0.46)',
    zIndex: 52,
    opacity: 1
  },
  right: {
    transform: { x: 70, y: -52, scale: 0.94, rotate: 3 },
    shadow: '0px 22px 34px -22px rgba(15, 118, 110, 0.32)',
    zIndex: 34,
    opacity: 0.86
  },
  farRight: {
    transform: { x: 140, y: -90, scale: 0.86, rotate: 6 },
    shadow: '0px 18px 32px -24px rgba(15, 118, 110, 0.28)',
    zIndex: 24,
    opacity: 0.76
  }
};

const SLOT_LAYOUTS = {
  1: ['center'],
  2: ['left', 'right'],
  3: ['left', 'center', 'right'],
  4: ['farLeft', 'left', 'right', 'farRight'],
  5: ['farLeft', 'left', 'center', 'right', 'farRight']
};

const ShufflePlaceholder = ({ items = [] }) => {
  const { isDesktop, isTablet } = useResponsiveDesign();

  const slotPositions = useMemo(() => {
    const horizontalScale = isDesktop ? 1 : isTablet ? 0.82 : 0.62;
    const verticalScale = isDesktop ? 1 : isTablet ? 0.85 : 0.7;
    const cardScale = isDesktop ? 1 : isTablet ? 0.94 : 0.88;

    const adjustTransform = (transform) => ({
      x: transform.x * horizontalScale,
      y: transform.y * verticalScale,
      scale: transform.scale * cardScale,
      rotate: transform.rotate
    });

    return Object.keys(BASE_SLOT_POSITIONS).reduce((accumulator, key) => {
      const baseSlot = BASE_SLOT_POSITIONS[key];
      accumulator[key] = {
        ...baseSlot,
        transform: adjustTransform(baseSlot.transform)
      };
      return accumulator;
    }, {});
  }, [isDesktop, isTablet]);

  const showRealCards = items.length > 0;
  const sampleItems = useMemo(
    () => (showRealCards ? items.slice(0, MAX_SHUFFLE_CARDS) : []),
    [items, showRealCards]
  );
  const [displayItems, setDisplayItems] = useState(sampleItems);

  useEffect(() => {
    setDisplayItems(sampleItems);
  }, [sampleItems]);

  useEffect(() => {
    if (!showRealCards || sampleItems.length <= 1) {
      return;
    }

    const intervalDuration = SHUFFLE_DURATION * 1000;
    const intervalId = setInterval(() => {
      setDisplayItems((previous) => {
        if (!previous || previous.length <= 1) {
          return previous;
        }

        const [first, ...rest] = previous;
        return [...rest, first];
      });
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [sampleItems, showRealCards]);

  if (!showRealCards) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 w-full h-full min-h-[360px] text-center">
        <div className="relative w-56 h-36">
          {[0, 1, 2].map((index) => {
            const depth = index * 8;
            const rotations = index === 1
              ? [0, -14, 12, -10, 8, 0]
              : index === 0
                ? [0, 16, -12, 10, -6, 0]
                : [0, -10, 8, -6, 4, 0];
            const translateX = index === 1
              ? [0, -28, 22, -18, 12, 0]
              : index === 0
                ? [0, 24, -18, 14, -10, 0]
                : [0, 18, -12, 9, -6, 0];

            return (
              <motion.div
                key={index}
                className="absolute inset-0 rounded-2xl border border-sky-300 bg-white shadow-2xl"
                style={{ zIndex: 30 - index * 5, top: depth, left: depth / 1.5 }}
                animate={{
                  rotate: rotations,
                  x: translateX,
                  y: [0, -12, 10, -8, 6, 0]
                }}
                transition={{ duration: 0.9, ease: 'easeInOut', repeat: Infinity }}
              />
            );
          })}
          <motion.div
            className="absolute inset-0 rounded-2xl border border-sky-400 bg-linear-to-br from-sky-500/70 to-sky-700/80 shadow-xl"
            animate={{
              rotate: [0, -8, 8, -6, 6, 0],
              scale: [1, 1.03, 0.98, 1.02, 0.99, 1]
            }}
            transition={{ duration: 0.9, ease: 'easeInOut', repeat: Infinity }}
            style={{ zIndex: 40 }}
          />
        </div>
      </div>
    );
  }

  const cardsToRender = (displayItems.length > 0 ? displayItems : sampleItems).slice(0, MAX_SHUFFLE_CARDS);
  const activeLayout = SLOT_LAYOUTS[cardsToRender.length] || SLOT_LAYOUTS[MAX_SHUFFLE_CARDS];

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-full min-h-[360px] text-center">
      <div className="relative w-full max-w-5xl h-[360px] sm:h-[400px] overflow-visible">
        {cardsToRender.map((umkm, index) => {
          const slotKey = activeLayout?.[index] || activeLayout?.[activeLayout.length - 1] || 'center';
          const slot = slotPositions[slotKey] || slotPositions.center;

          return (
            <motion.div
              key={umkm.id || index}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={false}
              animate={{ ...slot.transform, opacity: slot.opacity }}
              transition={{
                type: 'spring',
                stiffness: 210,
                damping: 26,
                mass: 0.8
              }}
              style={{ zIndex: slot.zIndex }}
            >
              <div className="w-56 sm:w-72 lg:w-88 origin-center sm:scale-100 lg:scale-105">
                <motion.div
                  className="relative flex flex-col overflow-hidden rounded-3xl border border-sky-200 bg-white"
                  initial={false}
                  animate={{ boxShadow: slot.shadow, opacity: slot.opacity }}
                  transition={{
                    type: 'spring',
                    stiffness: 210,
                    damping: 24,
                    mass: 0.8
                  }}
                >
                  <div className="h-44 sm:h-56 lg:h-68 w-full overflow-hidden bg-slate-200">
                    <img
                      src={umkm.images?.[0]}
                      alt={umkm.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="bg-white px-5 py-4">
                    <h4 className="text-base font-semibold text-sky-800 truncate">{umkm.name}</h4>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ShufflePlaceholder;
