import React from 'react';
import { Logo } from './Logo';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLogo?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '',
  showLogo = false
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  if (showLogo) {
    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <Logo size="md" showText={false} />
        <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary ${sizeClasses[size]}`} />
        <p className="text-sm text-secondary">Loading...</p>
      </div>
    );
  }

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary ${sizeClasses[size]} ${className}`} />
  );
};