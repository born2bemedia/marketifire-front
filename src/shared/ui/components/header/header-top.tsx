'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { UserBadge } from '@/core/user/components';

import { CartModal } from '@/features/cart/components/modal/modal';
import { useCartModalStore } from '@/features/cart/services/modal.store';
import { LangSwitcher } from '@/features/lang-switcher/components';

import { ShortAddress } from '@/shared/ui/components/short-address';
import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { BagIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import st from './header.module.scss';

export function HeaderTop() {
  const t = useTranslations('header');

  const { setIsCartOpen } = useCartModalStore();

  const handleOpenCartModal = () => {
    setIsCartOpen(true);
  };

  return (
    <>
      <section className={st.headerTopLayout}>
        <div className={st.headerRow}>
          <Link href="/">
            <Image
              src="/full-logo.svg"
              alt="full-logo"
              width={155}
              height={28}
            />
          </Link>
          <SocialNetworks />
          <ShortAddress />
        </div>
        <div className={st.btns}>
          <LangSwitcher />
          <Button
            variant="white"
            className={st.btnWithIcon}
            onClick={handleOpenCartModal}
          >
            <Text uppercase>{t('cart')}</Text>
            <BagIcon />
          </Button>
          <UserBadge />
        </div>
      </section>
      <CartModal />
    </>
  );
}
