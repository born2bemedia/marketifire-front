'use client';

import { useTranslations } from 'next-intl';

import { Pricing } from './pricing';

export function MarketingStrategies() {
  const t = useTranslations('pricingPackages.marketingStrategies');

  const marketingAndGrowth = [
    {
      title: t('0.title'),
      description: t('0.description'),
      price: Number(t('0.price')),
      type: 'buy',
      icon: '/pricing/market-research.svg',
    },
    {
      title: t('1.title'),
      description: t('1.description'),
      price: Number(t('1.price')),
      type: 'order',
      icon: '/pricing/brand-positioning.svg',
    },
    {
      title: t('2.title'),
      description: t('2.description'),
      price: Number(t('2.price')),
      type: 'order',
      icon: '/pricing/digital-advertising.svg',
    },
    {
      title: t('3.title'),
      description: t('3.description'),
      price: Number(t('3.price')),
      type: 'buy',
      icon: '/pricing/product-launch.svg',
    },
    {
      title: t('4.title'),
      description: t('4.description'),
      price: Number(t('4.price')),
      type: 'order',
      icon: '/pricing/customer-segmentation.svg',
    },
    {
      title: 'Brand Identity Design',
      description: t('5.description'),
      price: Number(t('5.price')),
      type: 'buy',
      icon: '/pricing/brand-identity.svg',
    },
    {
      title: t('6.title'),
      description: t('6.description'),
      price: Number(t('6.price')),
      type: 'order',
      icon: '/pricing/local-market-penetration.svg',
    },
    {
      title: t('7.title'),
      description: t('7.description'),
      price: Number(t('7.price')),
      type: 'buy',
      icon: '/pricing/strategic-partnership-development.svg',
    },
  ];

  return (
    <Pricing
      categoryLabel="01"
      categoryTitle={t('title')}
      pricingItems={marketingAndGrowth}
    />
  );
}
