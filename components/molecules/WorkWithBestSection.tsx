'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect, use, useMemo } from 'react';
import { IconExperience, IconWork, IconIndustry, IconQuality } from '@/components/atoms/Icons'; // Create these icons
import { ButtonWithArrow } from '../atoms/ButtonWithArrow';
import { SectionHeading } from '../atoms/SectionHeading';
import { WorkWithBest } from '@/types/Homepage';

const iconMap = {
  experience: <IconExperience className="w-12 h-12 text-crimson" />,
  work: <IconWork className="w-12 h-12 text-crimson" />,
  industry: <IconIndustry className="w-12 h-12 text-crimson" />,
  quality: <IconQuality className="w-12 h-12 text-crimson" /> 
};

const WorkWithBestSection = ({ data }: { data: WorkWithBest }) => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [features, setFeatures] = useState<{ title: string, description: string, icon: React.ReactNode, column: string }[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useMemo(() => {
    if (data) {
      setFeatures(data.features);
    }
  }, [data]);

  return (
    <div ref={sectionRef} className="py-[48px] lg:py-[120px]">
      <div className="container min-w-container mx-auto px-4">
        
        <SectionHeading 
          title={data.title} 
          subtitle={data.subtitle} 
        />

        {/* Features Grid */}
        <div className="grid max-md:grid-cols-1 lg:grid-cols-2 max-lg:gap-4 gap-8 max-md:mt-[24px] mt-[60px]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ 
                opacity: 0,
                x: feature.column === 'left' ? -50 : 50,
                y: isMobile ? 50 : 0
              }}
              animate={isInView ? { 
                opacity: 1,
                x: 0,
                y: 0
              } : {}}
              transition={{ 
                duration: 0.8,
                delay: isMobile ? 0.3 * index : 0.8 + (index * 0.2)
              }}
              className="bg-deep-charcoal rounded-[24px] backdrop-blur-sm relative overflow-hidden group"
            >
              <div 
                className="absolute inset-0 bg-crimson -left-[180%] -skew-x-12 group-hover:left-[-10%] transition-all duration-700 ease-out"
                style={{ width: '150%' }}
              />
              <div className="relative flex max-lg:flex-col max-lg:items-center lg:flex-row lg:items-start gap-7 p-[32px] lg:py-[40px]">
                <div className="m-auto">
                  {iconMap[feature.icon as keyof typeof iconMap]}
                </div>
                <div className="max-lg:text-center text-white">
                  <h3 className="text-[40px] leading-[48px] font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[18px] leading-[32px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-[24px] lg:mt-[60px]"
          >
            <div className="flex justify-center">
                <ButtonWithArrow href={data.ctaButton.link} className="inline-flex" outline>
                  {data.ctaButton.text}
                </ButtonWithArrow>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkWithBestSection; 