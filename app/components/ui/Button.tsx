import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'hero-outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transform';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 hover:text-white focus:ring-primary shadow-glow hover:shadow-glow btn-enhanced active:bg-primary active:!text-white focus:!text-white',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 hover:text-white focus:ring-secondary shadow-md hover:shadow-lg btn-enhanced active:bg-secondary active:!text-white focus:!text-white',
    outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:!text-white focus:ring-primary shadow-sm hover:shadow-md btn-enhanced active:bg-primary active:!text-white focus:bg-primary focus:!text-white',
    ghost: 'text-primary bg-transparent hover:bg-primary/10 hover:text-primary focus:ring-primary btn-enhanced active:bg-primary/20 active:text-primary focus:text-primary',
    white: 'bg-white text-primary border-2 border-white hover:bg-white/90 hover:text-primary hover:scale-105 focus:ring-white shadow-white-glow hover:shadow-white-glow btn-enhanced active:bg-white/80 active:text-primary focus:text-primary',
    'hero-outline': 'border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white/95 hover:text-primary hover:border-white hover:scale-105 focus:ring-white shadow-lg hover:shadow-white-glow btn-enhanced active:bg-white/90 active:text-primary focus:bg-white/95 focus:text-primary'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm rounded-lg min-h-[36px]',
    md: 'px-4 py-2 text-sm rounded-full min-h-[40px]',
    lg: 'px-6 py-3 text-base rounded-full min-h-[48px]',
    xl: 'px-8 py-4 text-lg rounded-full min-h-[56px] font-bold'
  };

  // Merge classes properly, allowing custom classes to override defaults where needed
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={combinedClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <LoadingSpinner size="sm" className="mr-2" />}
      {children}
    </button>
  );
};