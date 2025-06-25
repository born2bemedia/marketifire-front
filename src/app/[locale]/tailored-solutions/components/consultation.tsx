'use client';

import { useTranslations } from 'next-intl';

import { CtaBlock } from '@/shared/ui/components/cta-block';

export function Consultation() {
  const t = useTranslations('tailoredSolutions.consultation');

  return (
    <CtaBlock
      title={t('title')}
      text={t('text')}
      link="/request-form"
      buttonText={t('btnLabel')}
    />
  );
}
