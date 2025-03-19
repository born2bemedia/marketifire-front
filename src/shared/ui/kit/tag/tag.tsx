'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './tag.module.scss';

export function Tag({
  children,
  className,
  color = 'white',
}: {
  children: ReactNode;
  className?: string;
  color?: 'yellow' | 'white' | 'white10';
}) {
  const tagClasses = cn(
    st.layout,
    {
      [st.yellow]: color === 'yellow',
      [st.white]: color === 'white',
      [st.white10]: color === 'white10',
    },
    className,
  );

  return <div className={tagClasses}>{children}</div>;
}
