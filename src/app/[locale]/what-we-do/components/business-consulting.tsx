'use client';

import { useTranslations } from 'next-intl';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  Aperture,
  ArrowsIn,
  BezierCurve,
  CardThree,
  CheckSquare,
  Eyes,
  MoneyWavy,
  Users,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from './info-block';

export function BusinessConsulting() {
  const t = useTranslations('whatWeDo.businessConsulting');

  const strategies: DataGridDef[] = [
    {
      title: t('values.0.title'),
      desc: t('values.0.desc'),
      icon: ArrowsIn,
      iconBg: 'yellow',
    },
    {
      title: t('values.1.title'),
      desc: t('values.1.desc'),
      icon: Users,
      iconBg: 'grey',
    },
    {
      title: t('values.2.title'),
      desc: t('values.2.desc'),
      icon: Aperture,
      iconBg: 'grey',
    },
    {
      title: t('values.3.title'),
      desc: t('values.3.desc'),
      icon: CardThree,
      iconBg: 'grey',
    },
    {
      title: t('values.4.title'),
      desc: t('values.4.desc'),
      icon: CheckSquare,
      iconBg: 'grey',
    },
    {
      title: t('values.5.title'),
      desc: t('values.5.desc'),
      icon: MoneyWavy,
      iconBg: 'grey',
    },
    {
      title: t('values.6.title'),
      desc: t('values.6.desc'),
      icon: BezierCurve,
      iconBg: 'yellow',
    },
    {
      title: t('values.7.title'),
      desc: t('values.7.desc'),
      icon: Eyes,
      iconBg: 'yellow',
    },
  ];

  return (
    <InfoBlock
      number="03"
      annotation={t('annotation')}
      subAnnotation={t('subAnnotation')}
      title={t('title')}
      values={strategies}
      startFromBig
    />
  );
}
