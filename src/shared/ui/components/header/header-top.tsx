'use client';

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
        <Text>[BRAND] LOGO</Text>
        <SocialNetworks />
        <ShortAddress />
      </div>
      <div className={st.btns}>
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
