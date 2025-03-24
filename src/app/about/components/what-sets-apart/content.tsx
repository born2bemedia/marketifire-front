'use client';

import Link from 'next/link';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './what-sets-apart.module.scss';

export function Content() {
  return (
    <section className={st.contentLayout}>
      <div className={st.annotation}>
        <Tag color="yellow">
          <Asterisk />
          <Text>Unleash Your Brand’s Potential</Text>
        </Tag>
        <Title level={2}>What Sets Us Apart?</Title>
        <Text>
          We don’t believe in one-size-fits-all solutions. At Marketfire, every
          strategy is custom-built to fit your unique goals. With a data-driven
          mindset, innovative execution, and a commitment to measurable results,
          we help you stand out, grow faster, and achieve long-term success.
        </Text>
      </div>
      <div className={st.requestNavDesktop}>
        <Link href="/request-form">
          <Button variant="black" size="md">
            Get Free Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
}
