'use client';

import Link from 'next/link';

import { routes } from '@/shared/lib/routes';

import st from './header.module.scss';

export function HeaderBottom() {
  return (
    <nav aria-label="Main navigation" className={st.headerBottomLayout}>
      <ul role="menubar" className={st.nav}>
        {routes.map(({ label, href }) => (
          <li key={label} role="none">
            <Link href={href} role="menuitem">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
