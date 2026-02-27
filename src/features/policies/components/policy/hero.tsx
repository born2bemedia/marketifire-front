'use client';

import { usePreventHorizontalScroll } from '@/shared/lib/hooks';
import { Title } from '@/shared/ui/kit/title';

import st from './policy.module.scss';

export function Hero({ title }: { title: string }) {    

  usePreventHorizontalScroll();

  return (
    <section className={st.title}>
      <Title>{title}</Title>
    </section>
  );
}
