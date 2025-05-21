'use  client';

import { useTranslations } from 'next-intl';

import { Pricing } from './pricing/pricing';

export function ContentAudience() {
  const t = useTranslations('pricingPackages.contentAudience');

  const contentEngagement = [
    {
      title: t('0.title'),
      description: t('0.description'),
      price: Number(t('0.price')),
      type: 'buy',
      icon: '/pricing/social-media-community-growth.svg',
    },
    {
      title: t('1.title'),
      description: t('1.description'),
      price: Number(t('1.price')),
      type: 'order',
      icon: '/pricing/influencer-affiliate-marketing.svg',
    },
    {
      title: t('2.title'),
      description: t('2.description'),
      price: Number(t('2.price')),
      type: 'buy',
      icon: '/pricing/email-crm-optimization.svg',
    },
    {
      title: t('3.title'),
      description: t('3.description'),
      price: Number(t('3.price')),
      type: 'buy',
      icon: '/pricing/high-impact-content-creation-storytelling.svg',
    },
    {
      title: t('4.title'),
      description: t('4.description'),
      price: Number(t('4.price')),
      type: 'order',
      icon: '/pricing/video-content-strategy.svg',
    },
    {
      title: t('5.title'),
      description: t('5.description'),
      price: Number(t('5.price')),
      type: 'buy',
      icon: '/pricing/blogging-thought-leadership.svg',
    },
    {
      title: t('6.title'),
      description: t('6.description'),
      price: Number(t('6.price')),
      type: 'order',
      icon: '/pricing/social-media-ad-campaigns.svg',
    },
    {
      title: t('7.title'),
      description: t('7.description'),
      price: Number(t('7.price')),
      type: 'buy',
      icon: '/pricing/customer-testimonial-case-study-creation.svg',
    },
  ];

  return (
    <Pricing
      categoryLabel="04"
      categoryTitle={t('title')}
      pricingItems={contentEngagement}
    />
  );
}
