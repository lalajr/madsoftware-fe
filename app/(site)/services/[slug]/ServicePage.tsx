'use client'

import { notFound, useParams } from "next/navigation";
import { getService } from "@/sanity/utils/services";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/atoms/fadeIn";
import { Service } from "@/types/service";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from './ServicePage.module.css'
import { Divider } from "@/components/atoms/PortableTextDivider";
import { HowToBecomeClient } from "@/components/molecules/HowToBecomeClient";
import OtherServices from "@/components/molecules/OtherServices";

export const components = {
    block: {
        normal: ({children}: any) => (
            <p className="text-[18px] leading-[32px] lg:text-[32px] lg:leading-[48px] [&:not(:last-child)]:mb-4">
                {children}
            </p>
        ),
        h2: ({children}: any) => (
            <h2 className="text-[40px] leading-[48px] lg:text-[48px] lg:leading-[56px] font-bold mb-[32px]">
                {children}
            </h2>
        ),
        h3: ({children}: any) => (
            <h3 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[56px] font-bold mb-[32px]">
                {children}
            </h3>
        ),
        h4: ({children}: any) => (
            <h4 className="text-[40px] leading-[48px] font-bold mb-[32px]">
                {children}
            </h4>
        )
    },
    types: {
        divider: Divider,
    }
};

export default function ServicePage() {
    const { slug } = useParams<{ slug: string }>()
    const [service, setService] = useState<Service | null>(null);

    useEffect(() => {
        const fetchService = async () => {
            const service = await getService(slug);
            
            if (!service) {
                notFound();
            }
            setService(service);
        };

        fetchService();
    }, []);

    return (
        service ? (
            <main className="pt-[138px] lg:pt-[224px] text-white">
                {/* Title Section */}
                <motion.section 
                    variants={fadeIn('up', 0)}
                    initial="hidden"
                    animate="show"
                    className="container min-w-container mx-auto 2xl:px-[120px]"
                >
                    <div className="max-w-screen-xl mx-auto text-center">
                        <h1 className="mb-6 text-[54px] overflow-hidden lg:text-[145px] 2xl:text-[220px] leading-none text-white dark:text-white">
                            {service.title}
                        </h1>
                        {service.excerpt && <p className="text-[18px] lg:text-[26px] 2xl:text-[32px] leading-[32px] lg:leading-[40px] 2xl:leading-[48px] font-normal">
                            {service.excerpt}
                        </p>}
                    </div>
                </motion.section>
                
                {service.banner && (
                    <motion.section
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        animate="show"
                        className="w-full pt-[48px] lg:pt-[120px] pb-[48px] lg:pb-[120px]"
                    >
                        <Image src={service.banner} alt={service.bannerAlt || service.title} width={1920} height={1080} className="w-full h-auto" />
                    </motion.section>
                )}

                {/* Description Section */}
                {service.description && (
                    <motion.section
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        animate="show"
                        className={`container min-w-container mx-auto lg:px-[120px] pb-[48px] lg:pb-[120px] ${!service.banner ? 'pt-[48px] lg:pt-[120px]' : ''}`}
                    >
                        <div className={`prose prose-lg dark:prose-invert max-w-none ${styles.contentSection}`}>
                            <PortableText value={service.description as PortableTextBlock[]} components={components} />
                        </div>
                    </motion.section>
                )}

                <HowToBecomeClient />
                <OtherServices excludeSlug={slug} />
            </main>
        ) : (
            <div>
                <h1>Service not found</h1>
            </div>
        )
    );
} 