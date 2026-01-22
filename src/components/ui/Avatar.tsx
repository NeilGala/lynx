/**
 * Avatar Component
 * Reusable avatar with consistent styling and fallback
 */

import React from 'react';
import { cn } from '../../utils/classNames';

export interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  onClick,
  className,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-32 h-32',
  };

  return (
    <div
      className={cn(
        'rounded-full overflow-hidden border border-zinc-800 bg-zinc-900',
        sizeClasses[size],
        onClick && 'cursor-pointer hover:opacity-80 transition-opacity',
        className
      )}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to placeholder on error
          e.currentTarget.src = 'https://picsum.photos/seed/default/200';
        }}
      />
    </div>
  );
};
