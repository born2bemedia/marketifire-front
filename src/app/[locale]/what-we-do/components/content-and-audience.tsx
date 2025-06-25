'use client';

import { useTranslations } from 'next-intl';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  ComputerTower,
  Envelope,
  Headset,
  MobileCamera,
  MonitorPlay,
  Smiley,
  User,
  UserSound,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from './info-block';

export function ContentAndAudience() {
  const t = useTranslations('whatWeDo.contentAndAudience');

  const strategies: DataGridDef[] = [
    {
      title: t('values.0.title'),
      desc: t('values.0.desc'),
      icon: MobileCamera,
      iconBg: 'yellow',
    },
    {
      title: t('values.1.title'),
      desc: t('values.1.desc'),
      icon: User,
      iconBg: 'grey',
    },
    {
      title: t('values.2.title'),
      desc: t('values.2.desc'),
      icon: UserSound,
      iconBg: 'yellow',
    },
    {
      title: t('values.3.title'),
      desc: t('values.3.desc'),
      icon: Envelope,
      iconBg: 'grey',
    },
    {
      title: t('values.4.title'),
      desc: t('values.4.desc'),
      icon: Smiley,
      iconBg: 'grey',
    },
    {
      title: t('values.5.title'),
      desc: t('values.5.desc'),
      icon: MonitorPlay,
      iconBg: 'yellow',
    },
    {
      title: t('values.6.title'),
      desc: t('values.6.desc'),
      icon: ComputerTower,
      iconBg: 'grey',
    },
    {
      title: t('values.7.title'),
      desc: t('values.7.desc'),
      icon: Headset,
      iconBg: 'grey',
    },
  ];

  return (
    <InfoBlock
      number="04"
      annotation={t('annotation')}
      subAnnotation={t('subAnnotation')}
      title={t('title')}
      values={strategies}
    />
  );
}
