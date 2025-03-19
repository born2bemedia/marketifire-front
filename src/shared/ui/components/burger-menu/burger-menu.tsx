'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Close,
  Content,
  Description,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { routes } from '@/shared/lib/routes';
import { headerSt } from '@/shared/ui/components/header';
import { ShortAddress } from '@/shared/ui/components/short-address';
import { SocialNetworks } from '@/shared/ui/components/social-networks';
import {
  BagIcon,
  CloseIcon,
  MenuIcon,
  SignInIcon,
} from '@/shared/ui/icons/outline';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import st from './burger-menu.module.scss';

export function BurgerMenu() {
  return (
    <section className={st.layout}>
      <Text>[BRAND] LOGO</Text>
      <Menu />
    </section>
  );
}

function Menu() {
  const [open, setOpen] = useState(false);

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
                  <Button variant="yellow" className={headerSt.btnWithIcon}>
                    <Text uppercase>Login</Text>
                    <SignInIcon />
                  </Button>
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
                <SocialNetworks iconsSize={24} />
                <ShortAddress />
              </footer>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
}
