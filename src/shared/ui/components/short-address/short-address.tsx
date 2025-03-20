'use client';

import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';

import st from './short-address.module.scss';

export function ShortAddress() {
  return (
    <address className={st.address}>
      <Link href="tel:+00 000 000 00">
        <Text color="black60">+00 000 000 00</Text>
      </Link>
      <Link href="mailto:info@marketifire.comm">
        <Text color="black60">info@marketifire.com</Text>
      </Link>
    </address>
  );
}
