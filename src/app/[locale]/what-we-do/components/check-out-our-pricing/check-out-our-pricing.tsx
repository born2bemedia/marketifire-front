'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { Asterisk } from '@/shared/ui/icons/fill';
import {
  ChartLineUp,
  Code,
  HandCoins,
  IntersectThree,
  Linktree,
  MonitorPlay,
  Smiley,
  UserSound,
} from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './check-out-our-pricing.module.scss';

export function CheckOutOurPricing() {
  const t = useTranslations('whatWeDo.checkOutOurPricing');

  return (
    <section className={st.layout}>
      <section className={st.ellipseWrapper}>
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
        <CodeCard />
        <UserSoundCard />
        <AtomCard />
        <SmileyCard />
        <MonitorCard />
        <HandCoinsCard />
        <ChartCard />
        <LinktreeCard />
      </section>
      <div className={st.textLayout}>
        <Tag color="yellow">
          <Asterisk />
          <Text>{t('tag')}</Text>
        </Tag>
        <Title level={2}>{t('title')}</Title>
        <Text className={st.text}>{t('text')}</Text>
        <Link href="/pricing-and-packages" className={st.actionBtn}>
          <Button variant="black" size="md">
            {t('btnLabel')}
          </Button>
        </Link>
      </div>
    </section>
  );
}

function CodeCard() {
  return (
    <div className={cn(st.black10Bg, st.codePos)}>
      <Code width={30} height={30} />
    </div>
  );
}

function UserSoundCard() {
  return (
    <div className={cn(st.whiteBg, st.userSoundPos)}>
      <UserSound width={24} height={24} />
    </div>
  );
}

function AtomCard() {
  return (
    <div className={cn(st.whiteBg, st.atomPos)}>
      <IntersectThree width={40} height={40} />
    </div>
  );
}

function SmileyCard() {
  return (
    <div className={cn(st.whiteBg, st.smileyPos)}>
      <Smiley />
    </div>
  );
}

function MonitorCard() {
  return (
    <div className={cn(st.yellowBg, st.monitorPos)}>
      <MonitorPlay width={44} height={44} />
    </div>
  );
}

function HandCoinsCard() {
  return (
    <div className={cn(st.whiteBg, st.handCoinsPos)}>
      <HandCoins width={54} height={54} />
    </div>
  );
}

function ChartCard() {
  return (
    <div className={cn(st.yellowBg, st.chartPos)}>
      <ChartLineUp width={54} height={54} />
    </div>
  );
}

function LinktreeCard() {
  return (
    <div className={cn(st.black10Bg, st.linktreePos)}>
      <Linktree width={54} height={54} />
    </div>
  );
}
