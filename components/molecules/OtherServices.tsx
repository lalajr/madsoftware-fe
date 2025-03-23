import { motion, useInView } from 'framer-motion';
import type { Page } from '@/types/Page';
import { useRef, useState, useEffect } from 'react';
import { SectionHeading } from '../atoms/SectionHeading';
import { SiteSettings } from '@/types/SiteSettings';
import { getSiteSettings } from '@/sanity/utils/settings';
import { getServices } from '@/sanity/utils/services';
import { Service } from '@/types/service';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

interface NavigationButtonProps {
    direction: 'prev' | 'next';
    onClick: () => void;
    disabled: boolean;
}

const NavigationButton = ({ direction, onClick, disabled }: NavigationButtonProps) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`w-12 h-12 flex items-center justify-center border border-white rounded-[16px] transition-colors
            ${disabled 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-deep-charcoal cursor-pointer'
            }`}
        aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
    >
        {direction === 'prev' ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
);

const OtherServices = ({ excludeSlug }: { excludeSlug?: string }) => {
    const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
    const [services, setServices] = useState<Service[] | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    const secRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(secRef, {
        once: true,
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchSiteSettings = async () => {
            const settings = await getSiteSettings();
            setSiteSettings(settings);
        }
        fetchSiteSettings();

        const fetchServices = async () => {
            const services = await getServices(excludeSlug);
            setServices(services);
        }
        fetchServices();
    }, []);

    const isFirstSlide = currentIndex === 0;
    const isLastSlide = services ? currentIndex === (isMobile ? services.length - 1 : services.length - 3) : false;

    const handlePrevious = () => {
        if (!services || isFirstSlide) return;
        setCurrentIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        if (!services || isLastSlide) return;
        setCurrentIndex((prev) => prev + 1);
    };

    return (
        <section ref={secRef} className="py-[48px] pb-[142px] lg:pb-[120px] lg:py-[120px] text-white">
            <div className="container min-w-container mx-auto px-4">
                <div className="flex flex-col gap-4 lg:flex-row justify-between items-center">
                    <SectionHeading title={siteSettings?.otherServices.title || ''} subtitle={siteSettings?.otherServices.subtitle || ''} />
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex self-end gap-4 pb-[60px]">
                        <NavigationButton 
                            direction="prev" 
                            onClick={handlePrevious} 
                            disabled={isFirstSlide} 
                        />
                        <NavigationButton 
                            direction="next" 
                            onClick={handleNext} 
                            disabled={isLastSlide} 
                        />
                    </div>
                </div>
                
                {/* Services Carousel */}
                <div className="mt-[60px] relative overflow-hidden">
                    <div className="flex gap-6">
                        {services?.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, x: 100 }}
                                animate={isInView ? { 
                                    opacity: 1,
                                    x: 0,
                                    transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 24}px))`,
                                } : {}}
                                transition={{ 
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                                className={`relative overflow-hidden rounded-[32px] bg-deep-charcoal backdrop-blur-sm group cursor-pointer
                                    ${isMobile ? 'min-w-full' : 'min-w-[calc(33.333%-16px)]'}`}
                            >
                                <Link
                                    key={service.title}
                                    href={`/services/${service.slug}`}
                                    className="block"
                                >
                                
                                    <div className="py-[32px] px-[24px] lg:p-[40px] flex flex-col items-center text-center h-full text-white">
                                        <div className="relative transition-transform duration-300 group-hover:scale-105 w-56 h-56 lg:w-72 lg:h-72">
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-crimson/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Navigation */}
                    {isMobile && (
                        <div className="absolute -bottom-[80px] left-1/2 transform -translate-x-1/2 flex gap-4">
                            <NavigationButton 
                                direction="prev" 
                                onClick={handlePrevious} 
                                disabled={isFirstSlide} 
                            />
                            <NavigationButton 
                                direction="next" 
                                onClick={handleNext} 
                                disabled={isLastSlide} 
                            />
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}

export default OtherServices;