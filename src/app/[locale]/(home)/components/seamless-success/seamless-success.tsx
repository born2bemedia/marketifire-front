'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { Asterisk } from '@/shared/ui/icons/fill';
import { Coins, Globe, Sun, TrendUp } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './seamless-success.module.scss';

export function SeamlessSuccess() {
  const t = useTranslations('home.seamlessSuccess');

  return (
    <section className={st.layout}>
      <Image
        className={cn(st.ellipse, st.ellipseMd)}
        src="/home/seamless-success-ellipse-1.svg"
        alt="ellipse"
        width={924}
        height={924}
      />
      <Image
        className={st.ellipse}
        src="/home/seamless-success-ellipse-1.svg"
        alt="ellipse"
        width={613}
        height={613}
      />
      <div className={st.textLayout}>
        <Tag color="yellow">
          <Asterisk />
          <Text>{t('tag')}</Text>
        </Tag>
        <Title level={2}>{t('title')}</Title>
        <Text className={st.text}>{t('text')}</Text>
        <Link href="/request-form" className={st.actionBtn}>
          <Button variant="black" size="md">
            {t('btnLabel')}
          </Button>
        </Link>
      </div>
      <ExpandMarketsCard />
      <IntegrateSalesCard />
      <MaximizeValueCard />
      <UserPerformanceCard />
    </section>
  );
}

function ExpandMarketsCard() {
  const t = useTranslations('home.seamlessSuccess');

  return (
    <article className={cn(st.cardLayout, st.bgBlack10, st.expandPos)}>
      <div className={st.cardIcon}>
        <Globe />
      </div>
      <Title level={3}>{t('expandMarkets')}</Title>
    </article>
  );
}

function IntegrateSalesCard() {
  const t = useTranslations('home.seamlessSuccess');

  return (
    <article className={cn(st.cardLayout, st.bgYellow, st.integratePos)}>
      <div className={st.cardIcon}>
        <Coins />
      </div>
      <Title level={3}>{t('integrateSales')}</Title>
    </article>
  );
}

function MaximizeValueCard() {
  const t = useTranslations('home.seamlessSuccess');

  return (
    <article className={cn(st.cardLayout, st.bgWhite, st.customerPos)}>
      <div className={st.cardIcon} style={{ backgroundColor: '#FCFCFA' }}>
        <TrendUp />
      </div>
      <Title level={3}>{t('maximizeValue')}</Title>
    </article>
  );
}

function UserPerformanceCard() {
  const t = useTranslations('home.seamlessSuccess');

  return (
    <article className={cn(st.cardLayout, st.bgYellow, st.userPos)}>
      <div className={st.cardIcon}>
        <Sun />
      </div>
      <Title level={3}>{t('userPerformance')}</Title>
    </article>
  );
}
