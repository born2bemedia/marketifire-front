'use client';

import { useTranslations } from 'next-intl';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  BluePrint,
  Briefcase,
  ChartBar,
  ChartPie,
  HandCoins,
  HandGrabbing,
  IntersectThree,
  UsersThree,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from './info-block';

export function StrategicGrowth() {
  const t = useTranslations('whatWeDo.strategicGrowth');

  const strategies: DataGridDef[] = [
    {
      title: t('values.0.title'),
      desc: t('values.0.desc'),
      icon: ChartBar,
      iconBg: 'yellow',
    },
    {
      title: t('values.1.title'),
      desc: t('values.1.desc'),
      icon: ChartPie,
      iconBg: 'grey',
    },
    {
      title: t('values.2.title'),
      desc: t('values.2.desc'),
      icon: Briefcase,
      iconBg: 'grey',
    },
    {
      title: t('values.3.title'),
      desc: t('values.3.desc'),
      icon: HandCoins,
      iconBg: 'grey',
    },
    {
      title: t('values.4.title'),
      desc: t('values.4.desc'),
      icon: BluePrint,
      iconBg: 'grey',
    },
    {
      title: t('values.5.title'),
      desc: t('values.5.desc'),
      icon: HandGrabbing,
      iconBg: 'grey',
    },
    {
      title: t('values.6.title'),
      desc: t('values.6.desc'),
      icon: IntersectThree,
      iconBg: 'yellow',
    },
    {
      title: t('values.7.title'),
      desc: t('values.7.desc'),
      icon: UsersThree,
      iconBg: 'yellow',
    },
  ];

  return (
    <InfoBlock
      number="06"
      annotation={t('annotation')}
      subAnnotation={t('subAnnotation')}
      title={t('title')}
      values={strategies}
      startFromBig
    />
  );
}
