'use client';

import { useTranslations } from 'next-intl';

import { FaqSection } from './faq-section';

export function Faq() {
  const t = useTranslations('helpAndFaq');

  const generalQuestions = [
    {
      question: t('generalQuestions.0.question'),
      answer: t('generalQuestions.0.answer'),
    },
    {
      question: t('generalQuestions.1.question'),
      answer: t('generalQuestions.1.answer'),
    },
    {
      question: t('generalQuestions.2.question'),
      answer: t('generalQuestions.2.answer'),
    },
    {
      question: t('generalQuestions.3.question'),
      answer: t('generalQuestions.3.answer'),
    },
    {
      question: t('generalQuestions.4.question'),
      answer: t('generalQuestions.4.answer'),
    },
    {
      question: t('generalQuestions.5.question'),
      answer: t('generalQuestions.5.answer'),
    },
  ];

  const servicesPricing = [
    {
      question: t('servicesPricing.0.question'),
      answer: t('servicesPricing.0.answer'),
    },
    {
      question: t('servicesPricing.1.question'),
      answer: t('servicesPricing.1.answer'),
    },
    {
      question: t('servicesPricing.2.question'),
      answer: t('servicesPricing.2.answer'),
    },
    {
      question: t('servicesPricing.3.question'),
      answer: t('servicesPricing.3.answer'),
    },
    {
      question: t('servicesPricing.4.question'),
      answer: t('servicesPricing.4.answer'),
    },
    {
      question: t('servicesPricing.5.question'),
      answer: t('servicesPricing.5.answer'),
    },
  ];

  const accountBilling = [
    {
      question: t('accountBilling.0.question'),
      answer: t('accountBilling.0.answer'),
    },
    {
      question: t('accountBilling.1.question'),
      answer: t('accountBilling.1.answer'),
    },
    {
      question: t('accountBilling.2.question'),
      answer: t('accountBilling.2.answer'),
    },
  ];

  const customerSupport = [
    {
      question: t('customerSupport.0.question'),
      answer: t('customerSupport.0.answer'),
    },
    {
      question: t('customerSupport.1.question'),
      answer: t('customerSupport.1.answer'),
    },
    {
      question: t('customerSupport.2.question'),
      answer: t('customerSupport.2.answer'),
    },
    {
      question: t('customerSupport.3.question'),
      answer: t('customerSupport.3.answer'),
    },
    {
      question: t('customerSupport.4.question'),
      answer: t('customerSupport.4.answer'),
    },
  ];

  return (
    <>
      <FaqSection
        number="01"
        title="General Questions"
        faq={generalQuestions}
      />
      <FaqSection
        number="02"
        title="Services & Pricing"
        faq={servicesPricing}
      />
      <FaqSection number="03" title="Account & Billing" faq={accountBilling} />
      <FaqSection
        number="04"
        title="Customer Support & Communication"
        faq={customerSupport}
      />
    </>
  );
}
