'use client';

import { useTranslations } from 'next-intl';

import { Pricing } from './pricing/pricing';

export function StrategicGrowth() {
  const t = useTranslations('pricingPackages.strategicGrowth');

  const strategicGrowth = [
    {
      title: t('0.title'),
      description: t('0.description'),
      price: Number(t('0.price')),
      type: 'buy',
      icon: '/pricing/personal-brand-omni-channel-growth.svg',
    },
    {
      title: t('1.title'),
      description: t('1.description'),
      price: Number(t('1.price')),
      type: 'buy',
      icon: '/pricing/lead-building-audience-retention-strategies.svg',
    },
    {
      title: t('2.title'),
      description: t('2.description'),
      price: Number(t('2.price')),
      type: 'order',
      icon: '/pricing/sales-strategies-entrepreneurs.svg',
    },
    {
      title: t('3.title'),
      description: t('3.description'),
      price: Number(t('3.price')),
      type: 'buy',
      icon: '/pricing/tailored-marketing-monetization-plans.svg',
    },
    {
      title: t('4.title'),
      description: t('4.description'),
      price: Number(t('4.price')),
      type: 'buy',
      icon: '/pricing/business-valuation-exit-strategy.svg',
    },
    {
      title: t('5.title'),
      description: t('5.description'),
      price: Number(t('5.price')),
      type: 'buy',
      icon: '/pricing/strategic-partnership-collaboration.svg',
    },
    {
      title: t('6.title'),
      description: t('6.description'),
      price: Number(t('6.price')),
      type: 'buy',
      icon: '/pricing/market-differentiation-strategy.svg',
    },
    {
      title: t('7.title'),
      description: t('7.description'),
      price: Number(t('7.price')),
      type: 'buy',
      icon: '/pricing/long-term-growth-sustainability-plans.svg',
    },
  ];

  return (
    <Pricing
      categoryLabel="06"
      categoryTitle={t('title')}
      pricingItems={strategicGrowth}
    />
  );
}
