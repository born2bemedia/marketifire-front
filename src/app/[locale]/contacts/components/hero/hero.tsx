'use client';

import { useTranslations } from 'next-intl';

import { usePreventHorizontalScroll } from '@/shared/lib/hooks';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations ('contacts.hero');

  usePreventHorizontalScroll();

  return (
    <section className={st.layout}>
      <Tag color="yellow">{t('tag')}</Tag>
      <Title level={1}>{t('title')}</Title>
      <Text color="black100">{t('text')}</Text>
    </section>
  );
}
