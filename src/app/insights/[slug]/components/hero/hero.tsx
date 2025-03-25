'use client';

import type { ReactNode } from 'react';

import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) {
  return (
    <section className={st.layout}>
      <Title level={1}>{title}</Title>
      <div className={st.desc}>{description}</div>
    </section>
  );
}
