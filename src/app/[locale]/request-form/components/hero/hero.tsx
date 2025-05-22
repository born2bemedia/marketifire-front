'use client';

import { useTranslations } from 'next-intl';

import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('requestForm.hero');

  return (
    <section className={st.text}>
      <Tag color="yellow">{t('tag')}</Tag>
      <Title>{t('title')}</Title>
      <Text>{t('text')}</Text>
    </section>
  );
}
