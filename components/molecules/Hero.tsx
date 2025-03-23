'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonWithArrow } from '../atoms/ButtonWithArrow';
import type { Hero, Homepage } from '@/types/Homepage';

const backgroundImages = [
  '/images/mad-hero.jpg', // Default image
];

const Hero = ({ data }: { data: Homepage }) => {
  
  const [heroData, setHeroData] = useState<Hero | null>(null);
  const [sliderImages, setSliderImages] = useState<string[]>(backgroundImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useMemo(() => {
    if (data) {
      const sliderImagesRaw = data?.hero.backgroundImages.map((image) => image.url);
      setHeroData(data.hero);
      setSliderImages(sliderImagesRaw);

      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % sliderImages.length
        );
      }, 10000); // Change image every 10 seconds

      return () => clearInterval(interval);
    }
  }, [data]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Fade Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${sliderImages[currentImageIndex]})`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container min-w-container mx-auto px-4">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="bebas-neue font-medium drop-shadow-xs tracking-[4px]
                text-[64px] leading-[64px]
                sm:text-[80px] sm:leading-[80px]
                md:text-[120px] md:leading-[120px] 
                2xl:text-[220px] 2xl:leading-[220px]">
                <motion.span className="text-crimson block lg:inline">
                {heroData?.title.highlightedText}
                </motion.span>{' '}
                <motion.span className="text-white block lg:inline">
                    {heroData?.title.mainText}
                </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mb-6 text-white 
                text-[18px] leading-[32px]
                lg:text-[22px] lg:leading-[32px]
                2xl:text-[32px] 2xl:leading-[42px]"
          >
            {heroData?.subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <ButtonWithArrow href={heroData?.ctaButton.link} className="inline-flex">
              {heroData?.ctaButton.text}
            </ButtonWithArrow>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
