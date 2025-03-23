import type { BannerBlock } from "@/types/Page";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BannerBlockProps {
    block: BannerBlock;
}

const PageBlockBannerBlock = ({ block }: BannerBlockProps) => {
    const sectionRef = useRef(null);
    const isPageInView = useInView(sectionRef, { once: true });
    
    return (
        <section ref={sectionRef} className="bg-transparent pt-[48px] lg:pt-[120px]">
            {/* Banner Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isPageInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative max-h-[969px] h-auto overflow-hidden"
            >
                <img
                    src={block.image?.asset?.url || 'images/teamphoto.jpg'}
                    alt="Mad Software Team"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </section>
    );
};

export default PageBlockBannerBlock; 