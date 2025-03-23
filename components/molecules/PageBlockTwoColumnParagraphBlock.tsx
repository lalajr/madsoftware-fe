import type { TwoColumnParagraphBlock } from "@/types/Page";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TwoColumnParagraphBlockProps {
    block: TwoColumnParagraphBlock;
}

export const components = {
    block: {
        normal: ({children}: any) => (
            <p className="[&:not(:last-child)]:mb-2 [&:not(:last-child)]:lg:mb-4">
                {children}
            </p>
        )
    },
    // marks: {
    //     strong: ({children}: any) => <strong className="font-bold">{children}</strong>,
    //     em: ({children}: any) => <em className="italic">{children}</em>,
    // },
};

const PageBlockTwoColumnParagraphBlock = ({ block }: TwoColumnParagraphBlockProps) => {
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
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 divide-y lg:divide-y-0 lg:divide-x lg:divide-white/20">
                    <div className="">
                        <PortableText value={block.leftColumn} components={components} />
                    </div>
                    <div className="pt-8 lg:pt-0 lg:pl-16">
                        <PortableText value={block.rightColumn} components={components} />  
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default PageBlockTwoColumnParagraphBlock; 