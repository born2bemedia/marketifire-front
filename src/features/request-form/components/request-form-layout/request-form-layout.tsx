'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './request-form-layout.module.scss';

export function RequestFormLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return <section className={cn(st.layout, className)}>{children}</section>;
}
