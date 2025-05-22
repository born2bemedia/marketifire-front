'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className={st.layout}>
      <Title>{t('title')}</Title>
      <Text>{t('description')}</Text>
      <Link href="/request-form">
        <Button size="md" variant="black">
          {t('btnLabel')}
        </Button>
      </Link>
    </section>
  );
}
