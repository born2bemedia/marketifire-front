'use client';

import { useTranslations } from 'next-intl';

import { GetFreeConsultation } from '@/shared/ui/components/get-free-consultation/get-free-consultation';
export function FreeConsultation() {
  const t = useTranslations('whatWeDo.freeConsultation');

  return (
    <GetFreeConsultation
      text={
        <>
          {t('text.0')}
          <br />
          <br />
          {t('text.1')}
        </>
      }
      nav={{
        url: '/pricing-and-packages',
        label: t('btnLabel'),
      }}
    />
  );
}
