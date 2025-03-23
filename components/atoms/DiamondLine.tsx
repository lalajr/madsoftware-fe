'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface DiamondLineProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
}

export const DiamondLine = ({
  className = '',
  width = '120px',
  height = '4px',
  color = 'bg-crimson'
}: DiamondLineProps) => {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { 
    margin: "-100px",
    once: false
  });

  return (
    <div 
      ref={lineRef} 
      className={`relative mb-4 max-lg:mx-auto ${className}`}
      style={{ width, height }}
    >
      {/* Background line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isLineInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
        className={`absolute top-0 left-0 h-full w-full ${color} origin-left`}
      />
      
      {/* Diamond marker */}
      <motion.div
        initial={{ left: 0, opacity: 0 }}
        animate={isLineInView ? {
          left: '100%',
          opacity: 1,
        } : {
          left: 0,
          opacity: 0
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
        className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 ${color} rotate-45`}
      />
    </div>
  );
};
