'use client';

import { useLayoutEffect } from 'react';
import { useTranslations } from 'next-intl';

import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('insights.hero');

  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    html, body {
      overflow-x: hidden !important;
      position: relative;
    }
  `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className={st.layout}>
      <Tag color="yellow">{t('tag')}</Tag>
      <Title level={1}>{t('title')}</Title>
      <Text className={st.text} color="black100" size="lg">
        {t('description')}
      </Text>
    </section>
  );
}
