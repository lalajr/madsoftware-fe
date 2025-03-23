import { motion, useInView } from 'framer-motion';
import type { Page } from '@/types/Page';
import { useRef } from 'react';
import PageBlock from './PageBlock';

const Page = ({ page }: { page: Page }) => {
    const heroRef = useRef<HTMLDivElement>(null);
    
    return (
        <div ref={heroRef}>
            {/* Page Details Section */}
            <section className="min-h-screen pt-[138px] lg:pt-[224px]">
                <div className="container min-w-container mx-auto px-4">
                    {/* Main Title - Quick Fade In */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-[64px] lg:text-[145px] tracking-[2px] leading-none bebas-neue font-bold text-white mb-8 lg:mb-16"
                    >
                        {page.title.mainText} <span className="text-crimson">{page.title.highlightedText}</span>
                    </motion.h1>

                </div>

                <div className="text-[18px] lg:text-[24px] leading-[32px] lg:leading-[42px]">
                    {/* Description and Image Container */}
                    {/* Blocks Render */}
                    <PageBlock blocks={page.blocks} heroRef={heroRef} />
                </div>

            </section>
        </div>
    );
}

export default Page;