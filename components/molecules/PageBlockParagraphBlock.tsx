import type { PageBlock, ParagraphBlock } from "@/types/Page";
import { motion, useInView } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { useRef } from "react";

interface ParagraphBlockProps {
    block: ParagraphBlock;
}

export const components = {
    block: {
        normal: ({children}: any) => (
            <p className="[&:not(:last-child)]:mb-8 [&:not(:last-child)]:lg:mb-16">
                {children}
            </p>
        )
    },
    // marks: {
    //     strong: ({children}: any) => <strong className="font-bold">{children}</strong>,
    //     em: ({children}: any) => <em className="italic">{children}</em>,
    // },
};

const PageBlockParagraphBlock = ({ block }: ParagraphBlockProps) => {
    const sectionRef = useRef(null);
    const isPageInView = useInView(sectionRef, { once: true });
    
    return (
        <div className="container min-w-container mx-auto px-4">
            <motion.div
                ref={sectionRef}
                initial={{ opacity: 0, y: 20 }}
                animate={isPageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white"
            >
            <div className="mb-8 lg:mb-16">
                <PortableText value={block.content} components={components} />
                </div>
            </motion.div>
        </div>
    );
};

export default PageBlockParagraphBlock;
