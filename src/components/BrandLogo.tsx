import React from 'react';

interface BrandLogoProps {
  /** 'dark' = primary logo for light backgrounds, 'light' = reversed logo for teal backgrounds */
  variant?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SIZES = {
  sm: 'h-9',
  md: 'h-11 sm:h-12',
  lg: 'h-14 sm:h-16',
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
}) => (
  <img
    src={variant === 'light' ? '/assets/logo-reversed.png' : '/assets/logo-primary.png'}
    alt="Shri Vani Jagat"
    className={`${SIZES[size]} w-auto select-none ${className}`}
    draggable={false}
  />
);
