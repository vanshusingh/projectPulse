import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  neonBorder?: 'primary' | 'secondary' | 'accent' | 'none';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
  neonBorder = 'none',
}) => {
  const neonBorderClasses = {
    primary: 'border-primary-500 shadow-[0_0_10px_rgba(0,255,170,0.3)]',
    secondary: 'border-secondary-500 shadow-[0_0_10px_rgba(255,0,170,0.3)]',
    accent: 'border-accent-500 shadow-[0_0_10px_rgba(120,80,255,0.3)]',
    none: 'border-gray-700',
  };

  const hoverClasses = hoverEffect 
    ? 'transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-600' 
    : '';

  return (
    <div 
      className={`
        bg-gray-800 rounded-xl p-6 border ${neonBorderClasses[neonBorder]} 
        ${hoverClasses} ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;