'use client';

import Link from 'next/link';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './transform-your-business.module.scss';

export function Content() {
  return (
    <section className={st.contentLayout}>
      <div className={st.annotation}>
        <Tag color="yellow">
          <Asterisk />
          <Text>Unleash Your Brand’s Potential</Text>
        </Tag>
        <Title level={2}>
          Transform Your Business with Marketifire’s Expertise
        </Title>
        <Text>
          Struggling to gain traction, increase conversions, or optimize
          marketing spending? Our experts build holistic, ROI-driven strategies
          designed for long-term success.
        </Text>
      </div>
      <div className={st.requestNavDesktop}>
        <Text>Ready to Elevate Your Business?</Text>
        <Link href="/request-form">
          <Button variant="black" size="md">
            Get Free Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
}
