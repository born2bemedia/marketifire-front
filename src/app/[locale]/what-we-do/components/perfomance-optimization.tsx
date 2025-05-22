'use client';

import { useTranslations } from 'next-intl';

import type { DataGridDef } from '@/shared/ui/components/data-grid';
import {
  Article,
  Browsers,
  CardHolder,
  Certificate,
  ChartDonut,
  Chats,
  Ranking,
  TreeStructure,
} from '@/shared/ui/icons/outline';

import { InfoBlock } from './info-block';

export function PerfomanceOptimization() {
  const t = useTranslations('whatWeDo.perfomanceOptimization');

  const strategies: DataGridDef[] = [
    {
      title: t('values.0.title'),
      desc: t('values.0.desc'),
      icon: ChartDonut,
      iconBg: 'grey',
    },
    {
      title: t('values.1.title'),
      desc: t('values.1.desc'),
      icon: CardHolder,
      iconBg: 'grey',
    },
    {
      title: t('values.2.title'),
      desc: t('values.2.desc'),
      icon: Browsers,
      iconBg: 'grey',
    },
    {
      title: t('values.3.title'),
      desc: t('values.3.desc'),
      icon: TreeStructure,
      iconBg: 'grey',
    },
    {
      title: t('values.4.title'),
      desc: t('values.4.desc'),
      icon: Article,
      iconBg: 'yellow',
    },
    {
      title: t('values.5.title'),
      desc: t('values.5.desc'),
      icon: Certificate,
      iconBg: 'yellow',
    },
    {
      title: t('values.6.title'),
      desc: t('values.6.desc'),
      icon: Ranking,
      iconBg: 'yellow',
    },
    {
      title: t('values.7.title'),
      desc: t('values.7.desc'),
      icon: Chats,
      iconBg: 'grey',
    },
  ];

  return (
    <InfoBlock
      number="02"
      annotation={t('annotation')}
      subAnnotation={t('subAnnotation')}
      title={t('title')}
      values={strategies}
    />
  );
}
