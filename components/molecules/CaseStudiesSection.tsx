'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ButtonWithArrow } from '../atoms/ButtonWithArrow';
import { SectionHeading } from '../atoms/SectionHeading';
const caseStudies = [
  {
    category: 'Technology',
    title: 'FinTech – Scalable Payment Processing Platform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/fintech.jpg',
  },
  {
    category: 'Retail',
    title: 'E-commerce – Custom Marketplace Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/ecommerce.jpg',
  },
  {
    category: 'Innovation',
    title: 'AI-Powered Telehealth Platform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/aipowered.jpg',
  },
];

const CaseStudiesSection = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isLineInView = useInView(lineRef, { 
    margin: "-100px",
    once: false // This allows the animation to replay
  });

  return (
    <div ref={sectionRef} className="py-[48px] lg:py-[120px]">
      <div className="container min-w-container mx-auto px-4">

        <SectionHeading 
          title="CASE STUDIES" 
          subtitle="Real-world success stories showcasing innovative solutions, seamless execution, and impactful results." 
        />

        {/* Case Studies */}
        <div className="flex flex-col gap-8 lg:gap-0">
          {caseStudies.map((study, index) => (
            <div 
              key={study.title}
              className={`flex flex-col gap-6 lg:gap-0 ${
                index % 2 === 0 
                  ? 'lg:flex-row' 
                  : 'lg:flex-row-reverse'
              } items-center`}
            >
              {/* Image */}
              <motion.div
                initial={{ 
                  x: index % 2 === 0 ? -100 : 100,
                  opacity: 0 
                }}
                animate={isInView ? { 
                  x: 0,
                  opacity: 1 
                } : {}}
                transition={{ 
                  duration: 0.8,
                  delay: 0.8 + (index * 0.2) 
                }}
                className="w-full lg:w-1/2 relative overflow-hidden rounded-[32px] group"
              >
                <div className="aspect-[5/5.5] lg:aspect-[5/4] relative">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { 
                  opacity: 1,
                  y: 0 
                } : {}}
                transition={{ 
                  duration: 0.8,
                  delay: 1 + (index * 0.2) 
                }}
                className="w-full lg:w-1/2 flex flex-col text-white lg:px-[48px]"
              >
                <span className="text-[24px] lg:text-[16px] text-crimson mb-2">
                  {study.category}
                </span>
                <h3 className="text-[40px] leading-[48px] text-[40px] font-bold mb-4">
                  {study.title}
                </h3>
                <p className="text-[18px] leading-[32px]">
                  {study.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <ButtonWithArrow href="/case-studies" className="inline-flex" outline>
            See More
          </ButtonWithArrow>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudiesSection; 