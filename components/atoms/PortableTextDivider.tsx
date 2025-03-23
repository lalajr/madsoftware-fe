interface DividerProps {
    value: {
      style: 'solid' | 'dashed' | 'dotted' | 'double'
      width: 'full' | 'md' | 'sm'
      spacing: 'sm' | 'md' | 'lg'
    }
  }
  
  const widthClasses = {
    full: 'w-full',
    md: 'w-2/3',
    sm: 'w-1/3'
  }
  
  const spacingClasses = {
    sm: 'my-[24px]',
    md: 'my-[48px]',
    lg: 'my-[72px]'
  }
  
  export function Divider({ value }: DividerProps) {
    return (
      <hr 
        className={`
          mx-auto
          ${widthClasses[value.width]}
          ${spacingClasses[value.spacing]}
          border-0 border-b
          border-${value.style}
        `}
      />
    )
  }