'use client';

import { useTranslations } from 'next-intl';

import { Pricing } from './pricing';

export function PerfomanceMarketing() {
  const t = useTranslations('pricingPackages.performanceMarketing');

  const performanceMarketing = [
    {
      title: t('0.title'),
      description: t('0.description'),
      price: Number(t('0.price')),
      type: 'buy',
      icon: '/pricing/seo-search-visibility-growth.svg',
    },
    {
      title: t('1.title'),
      description: t('1.description'),
      price: Number(t('1.price')),
      type: 'order',
      icon: '/pricing/ppc-paid-advertising.svg',
    },
    {
      title: t('2.title'),
      description: t('2.description'),
      price: Number(t('2.price')),
      type: 'order',
      icon: '/pricing/website-funnel-optimization.svg',
    },
    {
      title: t('3.title'),
      description: t('3.description'),
      price: Number(t('3.price')),
      type: 'order',
      icon: '/pricing/data-driven-sales-strategies.svg',
    },
    {
      title: t('4.title'),
      description: t('4.description'),
      price: Number(t('4.price')),
      type: 'order',
      icon: '/pricing/landing-page-optimization.svg',
    },
    {
      title: t('5.title'),
      description: t('5.description'),
      price: Number(t('5.price')),
      type: 'buy',
      icon: '/pricing/retargeting-remarketing-campaigns.svg',
    },
    {
      title: t('6.title'),
      description: t('6.description'),
      price: Number(t('6.price')),
      type: 'order',
      icon: '/pricing/lead-generation-tactics.svg',
    },
    {
      title: t('7.title'),
      description: t('7.description'),
      price: Number(t('7.price')),
      type: 'buy',
      icon: '/pricing/ab-testing-performance-tracking.svg',
    },
  ];

  return (
    <Pricing
      categoryLabel="02"
      categoryTitle={t('title')}
      pricingItems={performanceMarketing}
    />
  );
}
