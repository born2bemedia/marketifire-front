'use client';

import { useTranslations } from 'next-intl';

import { WhyOptions } from '@/shared/ui/components/why-options';

export function InsightsAndExecution() {
  const t = useTranslations('home.insightsAndExecution');

  const stats = [
    { title: t('cards.0.title'), desc: t('cards.0.desc') },
    { title: t('cards.1.title'), desc: t('cards.1.desc') },
    { title: t('cards.2.title'), desc: t('cards.2.desc') },
  ];

  return (
    <WhyOptions
      title={t('title')}
      annotation={t('annotation')}
      footerText={t('footerText')}
      cards={stats}
      tagText={t('tagText')}
    />
  );
}
