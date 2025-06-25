'use client';

import type { ReactNode } from 'react';

import st from './article.module.scss';

export function Article({ children }: { children: ReactNode }) {
  return <section className={st.container}>{children}</section>;
}
