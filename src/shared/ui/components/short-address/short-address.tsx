'use client';

import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';

import st from './short-address.module.scss';

export function ShortAddress() {
  return (
    <address className={st.address}>
      <Link href="tel:+421221011939">
        <Text color="black60">+421221011939</Text>
      </Link>
      <Link href="mailto:info@marketifire.comm">
        <Text color="black60">info@marketifire.com</Text>
      </Link>
    </address>
  );
}
