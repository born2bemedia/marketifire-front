'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/styles';
import { Asterisk } from '@/shared/ui/icons/fill';
import { Coins, Globe, Sun, TrendUp } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './seamless-success.module.scss';

export function SeamlessSuccess() {
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
          <Text>Bringing Strategy & Execution Together</Text>
        </Tag>
        <Title level={2}>
          We Align Business & Marketing for Seamless Success
        </Title>
        <Text className={st.text}>
          We help bridge the gap between marketing, sales, and operations to
          ensure your brand’s growth is smooth, efficient, and long-term.
        </Text>
        <Button variant="black" size="md">
          Schedule a Free Strategy Session Today
        </Button>
      </div>
      <ExpandMarketsCard />
      <IntegrateSalesCard />
      <MaximizeValueCard />
      <UserPerformanceCard />
    </section>
  );
}

function ExpandMarketsCard() {
  return (
    <article className={cn(st.cardLayout, st.bgBlack10, st.expandPos)}>
      <div className={st.cardIcon}>
        <Globe />
      </div>
      <Title level={3}>Expand into New Markets with Confidence</Title>
    </article>
  );
}

function IntegrateSalesCard() {
  return (
    <article className={cn(st.cardLayout, st.bgYellow, st.integratePos)}>
      <div className={st.cardIcon}>
        <Coins />
      </div>
      <Title level={3}>
        Integrate Sales & Marketing for Higher Conversions
      </Title>
    </article>
  );
}

function MaximizeValueCard() {
  return (
    <article className={cn(st.cardLayout, st.bgWhite, st.customerPos)}>
      <div className={st.cardIcon} style={{ backgroundColor: '#FCFCFA' }}>
        <TrendUp />
      </div>
      <Title level={3}>Maximize Customer Value & Retention</Title>
    </article>
  );
}

function UserPerformanceCard() {
  return (
    <article className={cn(st.cardLayout, st.bgYellow, st.userPos)}>
      <div className={st.cardIcon}>
        <Sun />
      </div>
      <Title level={3}>
        Use Performance Insights to Make Smarter Decisions
      </Title>
    </article>
  );
}
