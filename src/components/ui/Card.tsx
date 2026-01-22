/**
 * Card Component
 * Reusable card container with consistent styling
 */

import React from 'react';
import { cn } from '../../utils/classNames';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  onClick,
  hoverable = false,
}) => {
  return (
    <div
      className={cn(
        'bg-zinc-900 border border-zinc-800 rounded-2xl p-5 transition-all duration-200 shadow-xl',
        hoverable && 'hover:border-zinc-700 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
