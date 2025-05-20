'use client';

import { useTranslations } from 'next-intl';

import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { PulsingEllipse } from '../pulsing-ellipse';
import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('about.hero');

  return (
    <section className={st.text}>
      <PulsingEllipse />
      <Tag color="yellow">{t('tag')}</Tag>
      <Title>{t('title')}</Title>
      <Text>{t('text')}</Text>
      <Text>{t('text2')}</Text>
    </section>
  );
}
