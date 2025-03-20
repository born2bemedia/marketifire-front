'use client';

import Image from 'next/image';
import Link from 'next/link';

import { LangSwitcher } from '@/features/lang-switcher/components';

import { ShortAddress } from '@/shared/ui/components/short-address';
import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { BagIcon, SignInIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import st from './header.module.scss';

export function HeaderTop() {
  return (
    <section className={st.headerTopLayout}>
      <div className={st.headerRow}>
        <Link href="/">
          <Image src="/full-logo.svg" alt="full-logo" width={155} height={28} />
        </Link>
        <SocialNetworks />
        <ShortAddress />
      </div>
      <div className={st.btns}>
        <LangSwitcher />
        <Button variant="white" className={st.btnWithIcon}>
          <Text uppercase>Cart</Text>
          <BagIcon />
        </Button>
        <Button variant="yellow" className={st.btnWithIcon}>
          <Text uppercase>Login</Text>
          <SignInIcon />
        </Button>
      </div>
    </section>
  );
}
