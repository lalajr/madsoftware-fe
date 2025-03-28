'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from "react-icons/md";
import { DesktopNav } from './navigation/DesktopNav';
import { MobileNav } from './navigation/MobileNav';
import { getNavigation } from '@/sanity/utils/general';
import { Navigation } from '@/types/Navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navigations, setNavigations] = useState<Navigation | null>(null);
  // Add effect to toggle body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isMegaMenuOpen) {
      console.log('isMegaMenuOpen', isMegaMenuOpen);
    }
  }, [isMegaMenuOpen]);

  useEffect(() => {
    const fetchNavigation = async () => {
      const navigation = await getNavigation();
      setNavigations(navigation);
    };
    fetchNavigation();
  }, []);

  // Add effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform ${
      isMegaMenuOpen
        ? 'bg-madsoft-charcoal h-screen overflow-y-auto translate-y-0 lg:h-auto lg:overflow-visible' 
        : '-translate-y-1'
    } ${scrolled ? 'bg-madsoft-charcoal' : 'max-md:bg-transparent'}`}>
      
      <div className={`min-w-[320px] ${
        isOpen ? 'bg-madsoft-charcoal h-screen overflow-y-auto lg:h-auto lg:overflow-visible' : 'bg-transparent'
      } transition-all duration-300`}>
        
        <div className={`container px-4 mx-auto py-[18px] lg:py-[28px] transition-all duration-300 lg:bg-transparent`}>
          <div className='flex items-center justify-between'>
            <Link href="/">
              <Image src="/logo.svg" alt="Mad Software" width={200} height={40} />
            </Link>

            <DesktopNav 
              isMegaMenuOpen={isMegaMenuOpen}
              setIsMegaMenuOpen={setIsMegaMenuOpen}
              navigations={navigations?.items || []}
            />

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className='text-white text-2xl lg:hidden'
            >
              {isOpen ? <MdClose /> : <GiHamburgerMenu />}
            </button>
          </div>

          <MobileNav 
            isOpen={isOpen}
            isServicesOpen={isServicesOpen}
            setIsServicesOpen={setIsServicesOpen}
            navigations={navigations?.items || []}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
