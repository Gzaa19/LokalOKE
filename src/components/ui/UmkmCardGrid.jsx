import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedContainer from './Container';
import UmkmCard from '../umkm/umkmcard';

const UmkmCardGrid = ({ items, hoveredCard, setHoveredCard, animationKey }) => (
  <AnimatedContainer
    key={animationKey}
    animation="fadeIn"
    transition="smooth"
    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
  >
    <AnimatePresence mode="popLayout">
      {items.map((umkm, index) => {
        const initialRotation = index % 2 === 0 ? -12 : 12;
        const initialX = (index % 3 - 1) * 45;

        return (
          <motion.div
            key={umkm.id}
            layout
            initial={{ opacity: 0, y: -140, x: initialX, rotate: initialRotation, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, x: initialX * 0.6, rotate: initialRotation }}
            transition={{
              type: 'spring',
              stiffness: 240,
              damping: 18,
              delay: index * 0.12
            }}
            style={{ transformOrigin: 'center top' }}
            className="will-change-transform"
          >
            <UmkmCard
              umkm={umkm}
              isHovered={hoveredCard === umkm.id}
              onMouseEnter={() => setHoveredCard(umkm.id)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          </motion.div>
        );
      })}
    </AnimatePresence>
  </AnimatedContainer>
);

export default UmkmCardGrid;
