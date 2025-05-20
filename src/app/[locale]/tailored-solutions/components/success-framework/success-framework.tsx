'use client';

import { useTranslations } from 'next-intl';

import { WhyOptions } from '../why-options';

export function SuccessFramework() {
  const t = useTranslations('tailoredSolutions.successFramework');

  const cards = [
    {
      title: t('cards.0.title'),
      desc: t('cards.0.desc'),
    },
    {
      title: t('cards.1.title'),
      desc: t('cards.1.desc'),
    },
    {
      title: t('cards.2.title'),
      desc: t('cards.2.desc'),
    },
    {
      title: t('cards.3.title'),
      desc: t('cards.3.desc'),
    },
  ];

  return (
    <WhyOptions
      title={t('title')}
      annotation={t('annotation')}
      footerText={t('footerText')}
      cards={cards}
      tagText={t('tagText')}
    />
  );
}
