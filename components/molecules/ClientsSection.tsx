'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Clients } from '@/types/Homepage';

const ClientsSection = ({ data }: { data: Clients }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [clientsData, setClientsData] = useState<Clients | null>(null);
  const [clients, setClients] = useState<{ name: string, logo: string }[]>([]);

  useMemo(() => {
    if (data) {
      setClientsData(data);
      const clientsRaw = data?.clients.map((client) => ({
        name: client.name,
        logo: client.logo,
      }));
      setClients(clientsRaw);
    }
  }, [data]);

  return (
    <div ref={sectionRef} className="py-[48px] lg:py-[120px] overflow-hidden">
      <div className="container min-w-container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 text-[64px] lg:text-[120px] lg:leading-none leading-[64px] tracking-[2px] bebas-neue font-bold"
        >
          <span className="text-crimson block lg:inline-block">
            {clientsData?.title.highlightedText}
          </span>&nbsp;
          <span className="text-white">
            {clientsData?.title.mainText}
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-white text-[18px] lg:text-[32px] leading-[32px] lg:leading-[42px] md:text-xl mb-16 max-w-3xl mx-auto"
        >
          {clientsData?.subtitle}
        </motion.p>

        {/* Infinite Scroll Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-[30px] lg:mt-[60px] relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-black after:to-transparent"
        >
          {/* First Scroll Track */}
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`scroll-1-${index}`}
                className="flex-shrink-0 mx-8 w-[150px] grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={60}
                  className="object-contain h-12"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientsSection; 