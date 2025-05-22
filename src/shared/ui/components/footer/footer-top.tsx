'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './footer.module.scss';

export function FooterTop() {
  const tr = useTranslations('header.routes');
  const t = useTranslations('footer');

  const navigation = [
    {
      title: t('quickNavigation'),
      list: [
        { label: tr('home'), link: '/' },
        { label: tr('about'), link: '/about' },
        { label: tr('whatWeDo'), link: '/what-we-do' },
      ],
    },
    {
      title: t('ourExpertise'),
      list: [
        { label: tr('tailoredSolutions'), link: '/tailored-solutions' },
        { label: tr('caseStudies'), link: '/case-studies' },
        { label: tr('insights'), link: '/insights' },
      ],
    },
    {
      title: t('supportResources'),
      list: [
        { label: tr('pricingPackages'), link: '/pricing-and-packages' },
        { label: tr('help'), link: '/help-and-faq' },
        { label: tr('contacts'), link: '/contacts' },
      ],
    },
    {
      title: t('legal'),
      list: [
        { label: tr('termsAndConditions'), link: '/terms-and-conditions' },
        { label: tr('privacyPolicy'), link: '/privacy-policy' },
        { label: tr('cookiePolicy'), link: '/cookie-policy' },
        { label: tr('refundPolicy'), link: '/refund-policy' },
      ],
    },
  ];

  return (
    <section className={st.footerTopLayout}>
      <section className={st.logoLayout}>
        <Link href="/">
          <Image src="/full-logo.svg" alt="full-logo" width={155} height={28} />
        </Link>
        <address className={st.addressLayout}>
          <Text color="black60" weight={300}>
            {t('office')}: Galvaniho 7/D, 821 04 Bratislava, Slovakia
          </Text>
          <Text color="black60" weight={300}>
            {t('registeredAddress')}: Biskupa Kondého Street 5138/30, 929 01
            Dunajská Streda, Slovakia
          </Text>
          <Text color="black60" weight={300}>
            {t('registeredNumber')}: 53623878
          </Text>
        </address>
      </section>
      <section className={st.navigationLayout}>
        {navigation.map(({ title, list }, i) => (
          <nav key={title + i} className={st.listLayout}>
            <Title level={4} color="black60" uppercase>
              {title}
            </Title>
            <ul className={st.list}>
              {list.map(({ label, link }) => (
                <li key={label} className={st.navItem}>
                  <Link href={link}>
                    <Text>{label}</Text>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </section>
    </section>
  );
}
