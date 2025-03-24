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
  color?: 'white' | 'black' | 'black60' | 'black100';
  uppercase?: boolean;
  weight?: 300 | 400 | 500;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
}) {
  const textClasses = cn(
    st.text,
    {
      [st.colorWhite]: color === 'white',
      [st.colorBlack]: color === 'black',
      [st.colorBlack60]: color === 'black60',
      [st.colorBlack100]: color === 'black100',
      [st.uppercase]: uppercase,
      [st.weight300]: weight === 300,
      [st.weight400]: weight === 400,
      [st.weight500]: weight === 500,
      [st.sizeSm]: size === 'sm',
      [st.sizeBase]: size === 'base',
      [st.sizeLg]: size === 'lg',
      [st.sizeXl]: size === 'xl',
      [st.sizeXxl]: size === '2xl',
    },
    className,
  );

  return <p className={textClasses}>{children}</p>;
}
