'use client';

import { usePreventHorizontalScroll } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './policy.module.scss';

export function Hero({
  title,
  lastUpdate,
}: {
  title: string;
  lastUpdate: string | null;
}) {
  usePreventHorizontalScroll();

  return (
    <section className={st.title}>
      <Title>{title}</Title>
      <Text>{lastUpdate}</Text>
    </section>
  );
}
