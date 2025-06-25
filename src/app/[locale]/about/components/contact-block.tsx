'use client';

import { useTranslations } from 'next-intl';

import { CtaBlock } from '@/shared/ui/components/cta-block/cta-block';

export function ContactBlock() {
  const t = useTranslations('about.contactBlock');

  return (
    <CtaBlock
      title={t('title')}
      text={t('text')}
      link="/request-form"
      buttonText={t('btnLabel')}
    />
  );
}
