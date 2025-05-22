'use client';

import { useTranslations } from 'next-intl';

import { CtaBlock } from '@/shared/ui/components/cta-block';

export function FreeSession() {
  const t = useTranslations('caseStudies.freeSession');

  return (
    <CtaBlock
      title={t('title')}
      text={t('text')}
      link="/request-form"
      buttonText={t('btnLabel')}
    />
  );
}
