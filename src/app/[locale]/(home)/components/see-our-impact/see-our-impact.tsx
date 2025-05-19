'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { ImpactCards } from './impact-cards';
import st from './see-our-impact.module.scss';

export function SeeOurImpact() {
  const t = useTranslations('home.seeOurImpact');

  return (
    <section className={st.layout}>
      <section className={st.contentLayout}>
        <div className={st.titleLayout}>
          <Tag color="yellow">
            <Asterisk />
            <Text>{t('tag')}</Text>
          </Tag>
          <Title level={2}>{t('title')}</Title>
          <Text className={st.text}>{t('text')}</Text>
        </div>
        <div className={st.caseStudiesNavDesktop}>
          <Text>{t('label')}</Text>
          <Link href="/case-studies">
            <Button size="md" variant="black">
              {t('btnLabel')}
            </Button>
          </Link>
        </div>
      </section>
      <ImpactCards />
      <div className={st.caseStudiesNavMobile}>
        <Text>{t('label')}</Text>
        <Link href="/case-studies">
          <Button size="md" variant="black" className={st.text} fullWidth>
            {t('btnLabel')}
          </Button>
        </Link>
      </div>
    </section>
  );
}
