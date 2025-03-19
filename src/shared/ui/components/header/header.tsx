'use client';

import { BurgerMenu } from '@/shared/ui/components/burger-menu';

import { HeaderBottom } from './header-bottom';
import { HeaderTop } from './header-top';

export function Header() {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
      <BurgerMenu />
    </header>
  );
}
