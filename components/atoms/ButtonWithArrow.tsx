import Link from 'next/link';
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";

interface ButtonWithArrowProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  outline?: boolean;
  isDisabled?: boolean;
  type?: 'link' | 'button' | 'submit';
}

export const ButtonWithArrow = ({ 
  href = '#', 
  children, 
  className = '',
  outline = false,
  isDisabled = false,
  type = 'link'
}: ButtonWithArrowProps) => {
  return (
    <>
     {type === 'link' && (
        <Link 
          href={href} 
          className={
          `flex items-center group relative px-7 py-3 rounded-full transition-all duration-300 text-[16px] 
          ${outline ? 'bg-transparent border border-white text-white' : 'bg-crimson text-white hover:bg-crimson/90'} 
          ${className}`
        }
        >
          <span className='block transform transition-transform duration-300 group-hover:-translate-x-2'>
            {children}
          </span>
          <BsChevronDoubleRight className='absolute top-1/2 -translate-y-1/2 right-4 w-4 h-4 transform transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0' />
        </Link>
      )}

      {type === 'submit' && (
        <button 
          type="submit" 
          className={`flex items-center group relative px-7 py-3 rounded-full transition-all duration-300 text-[16px] 
            ${outline ? 'bg-transparent border border-white text-white' : 'bg-crimson text-white hover:bg-crimson/90'} 
            ${className}`}
        >
          <span className='block transform transition-transform duration-300 group-hover:-translate-x-2'>
            {children}
          </span>
          <BsChevronDoubleRight className='absolute top-1/2 -translate-y-1/2 right-4 w-4 h-4 transform transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0' />
        </button>
      )}
    </>
  )
}; 