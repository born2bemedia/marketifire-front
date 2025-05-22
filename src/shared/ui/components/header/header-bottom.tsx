'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import st from './header.module.scss';

const disabledNavigation = new Set(['/request-form']);

export function HeaderBottom() {
  const t = useTranslations('header.routes');
  const pathaname = usePathname();

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

  return !disabledNavigation.has(pathaname) ? (
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
  ) : null;
}
