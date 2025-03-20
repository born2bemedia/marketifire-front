'use client';

import Link from 'next/link';

import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { Text } from '@/shared/ui/kit/text';

import st from './footer.module.scss';

export function FooterBottom() {
  return (
    <section className={st.footerBottomLayout}>
      <Text color="black60" className={st.text}>
        © {new Date().getFullYear()} SL Freight Management S.R.O All Rights
        Reserved.
      </Text>
      <section className={st.contacts}>
        <div className={st.links}>
          <Link href="tel:+00 000 000 00">
            <Text color="black60">+00 000 000 00</Text>
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
