'use client';

import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './button.module.scss';

export function Button({
  children,
  className,
  fullWidth = false,
  variant = 'white',
  size = 'sm',
  ...args
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'yellow' | 'black' | 'white';
  size?: 'sm' | 'md';
  fullWidth?: boolean;
}) {
  const btnClasses = cn(
    st.btn,
    {
      [st.whiteBtn]: variant === 'white',
      [st.blackBtn]: variant === 'black',
      [st.yellowBtn]: variant === 'yellow',
      [st.sizeSm]: size === 'sm',
      [st.sizeMd]: size === 'md',
      [st.fullWidth]: fullWidth,
    },
    className,
  );

  return (
    <button className={btnClasses} {...args}>
      {children}
    </button>
  );
}
