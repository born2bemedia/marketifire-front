'use client';

import { useTranslations } from 'next-intl';

import { usePreventHorizontalScroll } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './policy.module.scss';

export function Hero({ title }: { title: string }) {
  const t = useTranslations('policies');

  usePreventHorizontalScroll();

  return (
    <section className={st.title}>
      <Title>{title}</Title>
      <Text>{t('lastRevised')}: 20.03.2025</Text>
    </section>
  );
}
