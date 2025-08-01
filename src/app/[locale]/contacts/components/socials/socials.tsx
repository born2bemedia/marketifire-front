'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight, Asterisk } from '@/shared/ui/icons/fill';
import { FacebookIcon } from '@/shared/ui/icons/socials';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './socials.module.scss';

export function Socials() {
  const t = useTranslations('contacts.socials');

  return (
    <section className={st.layout}>
      <section className={st.title}>
        <Tag color="yellow">
          <Asterisk />
          {t('tag')}
        </Tag>
        <Title level={2}>{t('title')}</Title>
        <Text>{t('text')}</Text>
      </section>
      <section className={st.cards}>
        <article className={st.cardLayout}>
          <Title level={3}>Facebook</Title>
          <Link href="https://www.facebook.com/marketifirecom/">
            <button className={st.btn}>
              <FacebookIcon />
              <ArrowRight />
            </button>
          </Link>
        </article>
        {/* <article className={st.cardLayout}>
          <Title level={3}>Instagram</Title>
          <Link href="https://www.instagram.com/">
            <button className={st.btn}>
              <InstagramIcon />
              <ArrowRight />
            </button>
          </Link>
        </article>
        <article className={st.cardLayout}>
          <Title level={3}>Twitter</Title>
          <Link href="https://x.com/">
            <button className={st.btn}>
              <XIcon />
              <ArrowRight />
            </button>
          </Link>
        </article> */}
      </section>
    </section>
  );
}
