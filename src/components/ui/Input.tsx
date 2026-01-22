/**
 * Input Component
 * Reusable input field with consistent styling
 */

import React from 'react';
import { cn } from '../../utils/classNames';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <div className={cn('flex flex-col gap-2', fullWidth && 'w-full')}>
      {label && (
        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
          {label}
        </label>
      )}
      <input
        className={cn(
          'bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all',
          error && 'border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-xs font-bold uppercase tracking-widest animate-pulse">
          {error}
        </p>
      )}
    </div>
  );
};
