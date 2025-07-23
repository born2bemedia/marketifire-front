'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Close,
  Content,
  Description,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { UserBadge } from '@/core/user/components';

import { headerSt } from '@/shared/ui/components/header';
import { ShortAddress } from '@/shared/ui/components/short-address';
import { BagIcon, CloseIcon, MenuIcon } from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import st from './burger-menu.module.scss';

export function BurgerMenu() {
  return (
    <section className={st.layout}>
      <Image src="/full-logo.svg" alt="full-logo" width={155} height={28} />
      <Menu />
    </section>
  );
}

function Menu() {
  const t = useTranslations('header.routes');

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const routes = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('whatWeDo'), href: '/what-we-do' },
    { label: t('tailoredSolutions'), href: '/tailored-solutions' },
    { label: t('caseStudies'), href: '/case-studies' },
    { label: t('insights'), href: '/insights' },
    { label: t('pricingPackages'), href: '/pricing-and-packages' },
    { label: t('help'), href: '/help-and-faq' },
    { label: t('contacts'), href: '/contacts' },
  ];

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <button className={st.button}>
          <MenuIcon />
        </button>
      </Trigger>
      <Portal>
        <Content className={st.menuContent}>
          <Title />
          <Description asChild>
            <section className={st.content}>
              <section className={st.top}>
                <div className={headerSt.btns}>
                  <Button variant="white" className={headerSt.btnWithIcon}>
                    <Text uppercase>Cart</Text>
                    <BagIcon />
                  </Button>
                  <UserBadge />
                </div>
                <Close className={st.closeLayout}>
                  <CloseIcon />
                </Close>
              </section>
              <ul className={st.navList}>
                {routes.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
              <footer className={st.footer}>
                {/* <SocialNetworks iconsSize={24} /> */}
                <ShortAddress />
              </footer>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
}
