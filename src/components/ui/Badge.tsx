/**
 * Badge Component
 * Reusable badge for status indicators
 */

import React from 'react';
import { cn } from '../../utils/classNames';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  const variantClasses = {
    default: 'bg-zinc-950 border-zinc-800 text-zinc-400',
    success: 'bg-green-500/10 border-green-500/30 text-green-400',
    warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
    danger: 'bg-red-500/10 border-red-500/30 text-red-400',
  };

  return (
    <span
      className={cn(
        'px-2 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider border flex items-center gap-1.5',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
