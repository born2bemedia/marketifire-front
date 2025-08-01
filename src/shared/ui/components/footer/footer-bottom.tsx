'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';

import { SocialNetworks } from '../social-networks';
import st from './footer.module.scss';

export function FooterBottom() {
  const t = useTranslations('footer');

  return (
    <section className={st.footerBottomLayout}>
      <Text color="black60" className={st.text}>
        © {new Date().getFullYear()} SL Freight Management S.R.O{' '}
        {t('allRightsReserved')}
      </Text>
      <section className={st.contacts}>
        <div className={st.links}>
          <Link href="tel:+421221011939">
            <Text color="black60">+421221011939</Text>
          </Link>
          <Link href="mailto:info@marketifire.com">
            <Text color="black60">info@marketifire.com</Text>
          </Link>
        </div>
        <SocialNetworks />
      </section>
    </section>
  );
}
