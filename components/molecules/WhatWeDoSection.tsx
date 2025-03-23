'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '../atoms/SectionHeading';
import { WhatWeDo, WhatWeDoService } from '@/types/Homepage';
import Link from 'next/link';
import { getServices } from '@/sanity/utils/services';
import { Service } from '@/types/Service';

const getInitialAnimation = (index: number) => {
  const directions = ['left', 'top', 'right', 'bottom', 'right'];
  const direction = directions[index % directions.length];
  
  switch (direction) {
    case 'left':
      return { x: -100, y: 0, opacity: 0 };
    case 'right':
      return { x: 100, y: 0, opacity: 0 };
    case 'top':
      return { x: 0, y: -100, opacity: 0 };
    case 'bottom':
      return { x: 0, y: 100, opacity: 0 };
    default:
      return { x: 0, y: 0, opacity: 0 };
  }
};

const WhatWeDoSection = ({ data }: { data: WhatWeDo }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [rows, setRows] = useState<Service[][]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const services = await getServices();

      const rows = services.reduce((acc: typeof services[], service: Service, index: number) => {
        const rowIndex = Math.floor(index / 3);
        if (!acc[rowIndex]) {
          acc[rowIndex] = [];
        }
        acc[rowIndex].push(service);
        return acc;
      }, [] as typeof services[]);
  
      setRows(rows);
    }
    fetchServices();
}, []);

  return (
    <div ref={sectionRef} className="py-[48px] lg:py-[120px]">
      <div className="container min-w-container mx-auto px-4">
        {/* Title with animated line decoration */}
        <SectionHeading 
          title={data.title} 
          subtitle={data.subtitle} 
        />

        {/* Services Grid */}
        <div className="flex flex-col gap-6 max-md:mt-[24px] mt-[60px]">
          {rows.map((row, rowIndex) => (
            <div 
              key={rowIndex}
              className={`grid gap-6 ${
                rowIndex % 2 === 0 
                  ? 'lg:grid-cols-3' 
                  : 'lg:grid-cols-2'
              }`}
            >
              {row.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={getInitialAnimation(rowIndex * 3 + index)}
                  animate={isInView ? { 
                    x: 0,
                    y: 0,
                    opacity: 1
                  } : {}}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.8 + ((rowIndex * 3 + index) * 0.2),
                    ease: "easeOut"
                  }}
                  className={`relative overflow-hidden rounded-lg bg-deep-charcoal backdrop-blur-sm group ${
                    rowIndex % 2 !== 0 ? '' : ''
                  }`}
                >
                  <Link
                      key={service.title}
                      href={`/services/${service.slug}`}
                  >
                    {/* Flowbite Card Component */}
                    <div className="py-[32px] px-[24px] lg:p-[40px] flex flex-col items-center text-center h-full text-white">
                      <div className={`relative transition-transform duration-300 group-hover:scale-105 ${
                        rowIndex % 2 !== 0 ? 'w-56 h-56 lg:w-72 lg:h-72' : 'w-48 h-48 lg:w-72 lg:h-72'
                      }`}>
                        <Image
                          src={service.thumbnail}
                          alt={service.thumbnailAlt}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-[40px] leading-[48px] font-semibold mb-4 mt-6">
                        {service.title}
                      </h3>
                      <p className="text-[18px] leading-[24px] lg:leading-[32px]">
                        {service.excerpt}
                      </p>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-crimson/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection; 