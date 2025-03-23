import { ButtonWithArrow } from '@/components/atoms/ButtonWithArrow';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';
import { DropdownItem, Navigation, NavigationItem } from '@/types/Navigation';

interface MobileNavProps {
  isOpen: boolean;
  isServicesOpen: boolean;
  setIsServicesOpen: (value: boolean) => void;
  navigations: NavigationItem[];
}

export const MobileNav = ({ isOpen, isServicesOpen, setIsServicesOpen, navigations }: MobileNavProps) => {
  return (
    <nav 
      className={`
        mt-[80px] lg:hidden
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none z-[-1] fixed'}
        max-h-[calc(100vh-150px)] overflow-y-auto
      `}
    >
      <ul className='space-y-8 text-white text-[24px] leading-1'>
        {navigations.map((item: NavigationItem, index: number) => (
          <li key={index}>
            {item.isDropdown ? (
              <>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className='flex items-center gap-2 w-full'
                >
                  {item.title}
                  <HiChevronDown className={`transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${isServicesOpen ? 'max-h-screen opacity-100' : 'max-h-[0px] opacity-0'}
                `}>
                  <ul className='mt-4 space-y-5'>
                    {item.dropdownItems?.map((dropdownItem: DropdownItem) => (
                      <li key={dropdownItem._key}>
                        <Link href={dropdownItem.link} className='flex items-center justify-between group'>
                          <div>
                            <div className='text-[24px] leading-1'>{dropdownItem.title}</div>
                            <p className='text-sm text-gray-400 mt-1 text-[12px] leading-1'>Custom, scalable, and high-performance software tailored to your business needs.</p>
                          </div>
                          <span className='text-[24px]'>→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Link href={item.link} className='block'>{item.title}</Link>
            )}
          </li>
        ))}
        <li className='pt-[138px]'>
          <ButtonWithArrow href="/contact" className='inline-flex'>
            Contact Us
          </ButtonWithArrow>
        </li>
      </ul>
    </nav>
  );
}; 