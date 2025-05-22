'use client';

import { useTranslations } from 'next-intl';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  Atom,
  CalendarDots,
  ChartLineUp,
  Chat,
  Code,
  Faders,
  GitDiff,
  GridFour,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from './info-block';

export function AutomationAndDigitalTransform() {
  const t = useTranslations('whatWeDo.automationAndDigitalTransform');

  const strategies: DataGridDef[] = [
    {
      title: t('values.0.title'),
      desc: t('values.0.desc'),
      icon: Atom,
      iconBg: 'grey',
    },
    {
      title: t('values.1.title'),
      desc: t('values.1.desc'),
      icon: CalendarDots,
      iconBg: 'grey',
    },
    {
      title: t('values.2.title'),
      desc: t('values.2.desc'),
      icon: Chat,
      iconBg: 'grey',
    },
    {
      title: t('values.3.title'),
      desc: t('values.3.desc'),
      icon: ChartLineUp,
      iconBg: 'grey',
    },
    {
      title: t('values.4.title'),
      desc: t('values.4.desc'),
      icon: Faders,
      iconBg: 'yellow',
    },
    {
      title: t('values.5.title'),
      desc: t('values.5.desc'),
      icon: GitDiff,
      iconBg: 'grey',
    },
    {
      title: t('values.6.title'),
      desc: t('values.6.desc'),
      icon: GridFour,
      iconBg: 'yellow',
    },
    {
      title: t('values.7.title'),
      desc: t('values.7.desc'),
      icon: Code,
      iconBg: 'yellow',
    },
  ];

  return (
    <InfoBlock
      number="05"
      annotation={t('annotation')}
      subAnnotation={t('subAnnotation')}
      title={t('title')}
      values={strategies}
    />
  );
}
