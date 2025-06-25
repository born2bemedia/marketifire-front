'use client';

import { useTranslations } from 'next-intl';

import { GetFreeConsultation } from '@/shared/ui/components/get-free-consultation';

export function FreeConsultation() {
  const t = useTranslations('insights.freeConsultation');

  return (
    <GetFreeConsultation
      text={t('description')}
      nav={{
        url: '/request-form',
        label: t('button'),
      }}
    />
  );
}
