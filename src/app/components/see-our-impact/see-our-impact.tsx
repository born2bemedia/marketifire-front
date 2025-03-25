'use client';

import Link from 'next/link';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './see-our-impact.module.scss';
import { ImpactCards } from '@/app/components/see-our-impact/impact-cards';

export function SeeOurImpact() {
  return (
    <section className={st.layout}>
      <section className={st.contentLayout}>
        <div className={st.titleLayout}>
          <Tag color="yellow">
            <Asterisk />
            <Text>Proven Success in Action</Text>
          </Tag>
          <Title level={2}>
            See Our Impact – Explore Client Success Stories
          </Title>
          <Text className={st.text}>
            At Marketifire, we don’t believe in one-size-fits-all solutions. We
            craft strategies backed by market research, analytics, and
            real-world testing.
          </Text>
        </div>
        <div className={st.caseStudiesNavDesktop}>
          <Text>Your Business, Transformed with Precision & Strategy.</Text>
          <Link href="/case-studies">
            <Button size="md" variant="black">
              Dive into Case Studies
            </Button>
          </Link>
        </div>
      </section>
      <ImpactCards />
      <div className={st.caseStudiesNavMobile}>
        <Text>Your Business, Transformed with Precision & Strategy.</Text>
        <Link href="/case-studies">
          <Button size="md" variant="black" className={st.text} fullWidth>
            Dive into Case Studies
          </Button>
        </Link>
      </div>
    </section>
  );
}
