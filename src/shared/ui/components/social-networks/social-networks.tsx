'use client';

import Link from 'next/link';

import { FacebookIcon, InstagramIcon, XIcon } from '@/shared/ui/icons/fill';

import st from './social-networks.module.scss';

export function SocialNetworks({ iconsSize = 18 }: { iconsSize?: number }) {
  return (
    <nav aria-label="Social media links">
      <ul className={st.socialNetworks}>
        <li>
          <Link href="https://x.com/marketifirecom" aria-label="x">
            <XIcon width={iconsSize} height={iconsSize} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/marketifire/"
            aria-label="instagram"
          >
            <InstagramIcon width={iconsSize} height={iconsSize} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.facebook.com/marketifirecom/"
            aria-label="facebook"
          >
            <FacebookIcon width={iconsSize} height={iconsSize} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
