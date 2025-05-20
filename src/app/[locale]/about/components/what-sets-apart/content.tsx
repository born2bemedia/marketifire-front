'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Asterisk } from '@/shared/ui/icons/fill';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './what-sets-apart.module.scss';

export function Content() {
  const t = useTranslations('about.whatSetsApart');

  return (
    <section className={st.contentLayout}>
      <div className={st.annotation}>
        <Tag color="yellow">
          <Asterisk />
          <Text>{t('tag')}</Text>
        </Tag>
        <Title level={2}>{t('title')}</Title>
        <Text>{t('description')}</Text>
      </div>
      <div className={st.requestNavDesktop}>
        <Link href="/request-form">
          <Button variant="black" size="md">
            {t('btnLabel')}
          </Button>
        </Link>
      </div>
    </section>
  );
}
