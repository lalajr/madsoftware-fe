import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';
import { ButtonWithArrow } from '@/components/atoms/ButtonWithArrow';
import { DropdownItem, Navigation, NavigationItem } from '@/types/Navigation';

interface DesktopNavProps {
  isMegaMenuOpen: boolean;
  setIsMegaMenuOpen: (isOpen: boolean) => void;
  navigations: NavigationItem[];
}

export const DesktopNav = ({ isMegaMenuOpen, setIsMegaMenuOpen, navigations }: DesktopNavProps) => {

  return (
    <nav className='hidden lg:block'>
      <ul className='flex items-center space-x-8'>
        {navigations.map((item: NavigationItem, index: number) => (
          <li key={index} className='relative'>
            {item.isDropdown ? (
              <>
                <button 
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className='text-white hover:text-crimson transition-colors flex items-center space-x-1'
                >
                  <span>{item.title}</span>
                  <HiChevronDown className={`w-4 h-4 transform transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Menu */}
                <div className={`fixed left-0 right-0 mt-5 bg-madsoft-charcoal shadow-lg transition-all duration-300 py-[80px] px-[100px]
                  transform ${isMegaMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 z-[-1]'}`}
                >
                  <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-2 gap-[24px]'>
                      {item.dropdownItems?.map((dropdownItem: DropdownItem) => (
                        <Link key={dropdownItem._key} href={dropdownItem.link} className='block group'>
                          <div className='relative p-8 rounded-lg transition-all duration-300 group-hover:bg-crimson'>
                            <div>
                              <h3 className='text-white text-[40px] leading-[48px] font-bold mb-2'>{dropdownItem.title}</h3>
                              <p className='text-gray-400 group-hover:text-white/90 text-[18px] leading-[32px] transition-colors'>
                                {dropdownItem.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Link href={item.link} className='text-white hover:text-crimson transition-colors flex items-center space-x-1'>
                {item.title}
              </Link>
            )}
            
          </li>
        ))}
        <li>
          <ButtonWithArrow href="/contact" className='text-[16px]'>
            Contact Us
          </ButtonWithArrow>
        </li>
      </ul>
    </nav>
  );
}; 