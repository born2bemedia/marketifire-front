'use client';

import { useTranslations } from 'next-intl';

import { Pricing } from './pricing/pricing';

export function BusinessConsulting() {
  const t = useTranslations('pricingPackages.businessConsulting');

  const businessConsulting = [
    {
      title: t('0.title'),
      description: t('0.description'),
      price: Number(t('0.price')),
      type: 'buy',
      icon: '/pricing/market-entry-expansion-strategies.svg',
    },
    {
      title: t('1.title'),
      description: t('1.description'),
      price: Number(t('1.price')),
      type: 'buy',
      icon: '/pricing/customer-acquisition-retention-plans.svg',
    },
    {
      title: t('2.title'),
      description: t('2.description'),
      price: Number(t('2.price')),
      type: 'buy',
      icon: '/pricing/revenue-model-optimization.svg',
    },
    {
      title: t('3.title'),
      description: t('3.description'),
      price: Number(t('3.price')),
      type: 'buy',
      icon: '/pricing/business-process-automation.svg',
    },
    {
      title: t('4.title'),
      description: t('4.description'),
      price: Number(t('4.price')),
      type: 'order',
      icon: '/pricing/strategic-business-planning.svg',
    },
    {
      title: t('5.title'),
      description: t('5.description'),
      price: Number(t('5.price')),
      type: 'order',
      icon: '/pricing/financial-forecasting-budgeting.svg',
    },
    {
      title: t('6.title'),
      description: t('6.description'),
      price: Number(t('6.price')),
      type: 'buy',
      icon: '/pricing/organizational-design-development.svg',
    },
    {
      title: t('7.title'),
      description: t('7.description'),
      price: Number(t('7.price')),
      type: 'buy',
      icon: '/pricing/competitive-market-intelligence.svg',
    },
  ];

  return (
    <Pricing
      categoryLabel="03"
      categoryTitle={t('title')}
      pricingItems={businessConsulting}
    />
  );
}
