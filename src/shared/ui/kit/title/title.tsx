'use client';

import type { ElementType, HTMLAttributes } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './title.module.scss';

export function Title({
  children,
  className,
  level = 1,
  weight = 500,
  color = 'black',
  uppercase = false,
  ...args
}: HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4;
  weight?: 400 | 500 | 600 | 700;
  color?: 'black' | 'black60';
  uppercase?: boolean;
}) {
  const titleClasses = cn(
    st.title,
    {
      [st.level1]: level === 1,
      [st.level2]: level === 2,
      [st.level3]: level === 3,
      [st.level4]: level === 4,
      [st.weight400]: weight === 400,
      [st.weight500]: weight === 500,
      [st.weight600]: weight === 600,
      [st.weight700]: weight === 700,
      [st.colorBlack]: color === 'black',
      [st.colorBlack60]: color === 'black60',
      [st.uppercase]: uppercase,
    },
    className,
  );

  const Tag: ElementType = `h${level}`;

  return (
    <Tag className={titleClasses} {...args}>
      {children}
    </Tag>
  );
}
