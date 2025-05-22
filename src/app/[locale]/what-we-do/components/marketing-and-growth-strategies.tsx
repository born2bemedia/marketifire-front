'use client';

import { useTranslations } from 'next-intl';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  Eye,
  Handshake,
  Linktree,
  MagnifyingGlass,
  MapPin,
  MobileCamera,
  Strategy,
  Users,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from '../components/info-block';

export function MarketingAndGrowthStrategies() {
  const t = useTranslations('whatWeDo.marketingAndGrowthStrategies');

  const strategies: DataGridDef[] = [
    {
      title: t('values.0.title'),
      desc: t('values.0.desc'),
      icon: MagnifyingGlass,
      iconBg: 'grey',
    },
    {
      title: t('values.1.title'),
      desc: t('values.1.desc'),
      icon: Linktree,
      iconBg: 'grey',
    },
    {
      title: t('values.2.title'),
      desc: t('values.2.desc'),
      icon: MobileCamera,
      iconBg: 'grey',
    },
    {
      title: t('values.3.title'),
      desc: t('values.3.desc'),
      icon: Strategy,
      iconBg: 'yellow',
    },
    {
      title: t('values.4.title'),
      desc: t('values.4.desc'),
      icon: Users,
      iconBg: 'grey',
    },
    {
      title: t('values.5.title'),
      desc: t('values.5.desc'),
      icon: Eye,
      iconBg: 'grey',
    },
    {
      title: t('values.6.title'),
      desc: t('values.6.desc'),
      icon: MapPin,
      iconBg: 'grey',
    },
    {
      title: t('values.7.title'),
      desc: t('values.7.desc'),
      icon: Handshake,
      iconBg: 'yellow',
    },
  ];

  return (
    <InfoBlock
      number="01"
      annotation={t('annotation')}
      subAnnotation={t('subAnnotation')}
      title={t('title')}
      values={strategies}
    />
  );
}
