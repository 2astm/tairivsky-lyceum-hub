
import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundGradientProps {
  className?: string;
  children?: React.ReactNode;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ 
  className,
  children
}) => {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div 
        className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-100 
          opacity-50 blur-3xl filter"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal-100 
          opacity-50 blur-3xl filter"
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export default BackgroundGradient;
