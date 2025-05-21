'use client';

import { useTranslations } from 'next-intl';

import { Pricing } from './pricing/pricing';

export function DigitalTransformation() {
  const t = useTranslations('pricingPackages.digitalTransformation');

  const automationDigitalTransformation = [
    {
      title: t('0.title'),
      description: t('0.description'),
      price: Number(t('0.price')),
      type: 'buy',
      icon: '/pricing/ai-marketing-automation.svg',
    },
    {
      title: t('1.title'),
      description: t('1.description'),
      price: Number(t('1.price')),
      type: 'buy',
      icon: '/pricing/crm-customer-journey-optimization.svg',
    },
    {
      title: t('2.title'),
      description: t('2.description'),
      price: Number(t('2.price')),
      type: 'order',
      icon: '/pricing/chatbot-lead-nurturing-flows.svg',
    },
    {
      title: t('3.title'),
      description: t('3.description'),
      price: Number(t('3.price')),
      type: 'buy',
      icon: '/pricing/performance-analytics-reporting.svg',
    },
    {
      title: t('4.title'),
      description: t('4.description'),
      price: Number(t('4.price')),
      type: 'buy',
      icon: '/pricing/sales-process-automation.svg',
    },
    {
      title: t('5.title'),
      description: t('5.description'),
      price: Number(t('5.price')),
      type: 'order',
      icon: '/pricing/customer-data-integration.svg',
    },
    {
      title: t('6.title'),
      description: t('6.description'),
      price: Number(t('6.price')),
      type: 'buy',
      icon: '/pricing/workflow-automation.svg',
    },
    {
      title: t('7.title'),
      description: t('7.description'),
      price: Number(t('7.price')),
      type: 'buy',
      icon: '/pricing/custom-api-development.svg',
    },
  ];

  return (
    <Pricing
      categoryLabel="05"
      categoryTitle={t('title')}
      pricingItems={automationDigitalTransformation}
    />
  );
}
