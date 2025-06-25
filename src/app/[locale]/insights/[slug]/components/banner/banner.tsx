'use client';

import type { ReactNode } from 'react';

import st from './banner.module.scss';

export function Banner({ children }: { children: ReactNode }) {
  return <section className={st.layout}>{children}</section>;
}
