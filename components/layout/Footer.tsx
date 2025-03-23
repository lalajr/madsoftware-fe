'use client'

import { getNavigation } from '@/sanity/utils/general';
import { getSiteSettings } from '@/sanity/utils/settings';
import { Navigation } from '@/types/Navigation';
import { SiteSettings } from '@/types/SiteSettings';
import { Footer } from 'flowbite-react'
import { motion } from 'framer-motion'
import Link from 'next/dist/client/link';
import { useEffect, useState } from 'react';

const CustomFooter = () => {

  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [navigations, setNavigations] = useState<Navigation | null>(null);

  useEffect(() => {
    const fetchSiteSettings = async () => {
      const settings = await getSiteSettings();
      setSiteSettings(settings);
    };
    fetchSiteSettings();
  }, []);

  useEffect(() => {
    const fetchNavigation = async () => {
      const navigation = await getNavigation();
      setNavigations(navigation);
    };
    fetchNavigation();
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <footer className="bg-transparent text-white">
        <div className="bg-transparent container min-w-container mx-auto px-4 pt-[48px] lg:pt-[120px]">
          <div className="grid w-full lg:grid-cols-[2fr,1fr]">
            {/* Left Column - Logo and Info */}
            <div className="text-white text-[18px] leading-[24px] pb-[24px] mb-[24px] lg:pr-[90px] 2xl:pr-[120px] lg:border-none border-b border-white">
              <img src={siteSettings?.footer?.logo} alt="Mad Software Logo" className="size-[80%] h-auto mb-[32px]" />
              <p className="mb-[32px]">
                {siteSettings?.footer?.tagline}
              </p>
              <p className="mb-[32px]">
                <Link href={siteSettings?.footer?.socialLinks?.linkedin || ''} target="_blank" rel="noopener noreferrer" className="hover:text-crimson transition-colors duration-300">LinkedIn</Link>&nbsp;|&nbsp;
                <Link href={siteSettings?.footer?.socialLinks?.instagram || ''} target="_blank" rel="noopener noreferrer" className="hover:text-crimson transition-colors duration-300">Instagram</Link>&nbsp;|&nbsp;
                <Link href={siteSettings?.footer?.socialLinks?.twitter || ''} target="_blank" rel="noopener noreferrer" className="hover:text-crimson transition-colors duration-300">X (Formally Twitter)</Link>
              </p>
              <p className="mb-[16px]">{siteSettings?.footer?.contact?.phone}</p>
              {siteSettings?.footer?.contact?.address.map((address, index) => (
                <p key={index} className={`${index - 1 !== siteSettings?.footer?.contact?.address.length ? 'mb-[16px]' : ''}`}>{address}</p>
              ))}
            </div>

            {/* Right Column - Quick Links */}
            {navigations && navigations.items.length > 0 && (
              <div className="lg:pl-[90px] 2xl:pl-[120px] lg:border-l lg:border-white lg:py-[60px]">
                <h2 className="text-[40px] leading-[48px] font-bold mb-[32px] text-white lg:text-crimson">Quick Links</h2>
                <Footer.LinkGroup col className="text-[24px] leading-[24px] text-white space-y-[32px]">
                  {navigations.items.map((item, index) => (
                    <Footer.Link key={index} href={item.link} className="[&>a]:hover:text-crimson [&>a]:transition-colors [&>a]:duration-300 [&>a]:hover:no-underline">{item.title}</Footer.Link>
                  ))}
                </Footer.LinkGroup>
              </div>
            )}
          </div>

          {/* <Footer.Divider className="my-6 border-gray-700" /> */}
          
          <div className="[&>div]:text-left text-[16px] leading-[24px] text-white pt-[24px] pb-[48px] lg:pt-[30px]">
            <Footer.Copyright
              by="Mad Software All Rights Reserved"
              year={new Date().getFullYear()}
              className="text-gray-400"
            />
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default CustomFooter 