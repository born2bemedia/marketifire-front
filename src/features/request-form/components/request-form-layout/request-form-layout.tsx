'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './request-form-layout.module.scss';

export function RequestFormLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={cn(st.layout, className)}>{children}</section>;
}
