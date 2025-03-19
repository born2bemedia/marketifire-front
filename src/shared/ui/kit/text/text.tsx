'use client';

import type { HTMLAttributes } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './text.module.scss';

export function Text({
  className,
  children,
  color = 'black',
  uppercase = false,
  weight = 400,
  size = 'base',
}: HTMLAttributes<HTMLParagraphElement> & {
  color?: 'black' | 'black60';
  uppercase?: boolean;
  weight?: 300 | 400 | 500;
  size?: 'base' | 'lg' | 'xl' | '2xl';
}) {
  const textClasses = cn(
    st.text,
    {
      [st.colorBlack]: color === 'black',
      [st.colorBlack60]: color === 'black60',
      [st.uppercase]: uppercase,
      [st.weight300]: weight === 300,
      [st.weight400]: weight === 400,
      [st.weight500]: weight === 500,
      [st.sizeBase]: size === 'base',
      [st.sizeLg]: size === 'lg',
      [st.sizeXl]: size === 'xl',
      [st.sizeXxl]: size === '2xl',
    },
    className,
  );

  return <p className={textClasses}>{children}</p>;
}
