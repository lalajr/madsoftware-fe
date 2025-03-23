'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { DiamondLine } from './DiamondLine';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, className = '' }: SectionHeadingProps) => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <div ref={headingRef} className={`relative mb-[32px] lg:mb-[60px] ${className}`}>
      <DiamondLine />

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-[64px] lg:text-[145px] tracking-[2px] max-lg:text-center leading-none bebas-neue font-bold text-white"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[18px] leading-[32px] lg:text-[32px] lg:leading-[42px] max-lg:text-center text-white mt-[24px]"
        >
          {subtitle}
        </motion.p>
    </div>
  );
};
