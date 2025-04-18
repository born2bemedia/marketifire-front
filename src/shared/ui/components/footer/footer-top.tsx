'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './footer.module.scss';

const navigation = [
  {
    title: 'Quick Navigation',
    list: [
      { label: 'Home', link: '/' },
      { label: 'About Marketifire', link: '/about' },
      { label: 'What We Do', link: '/what-we-do' },
    ],
  },
  {
    title: 'Our Expertise',
    list: [
      { label: 'Tailored Solutions', link: '/tailored-solutions' },
      { label: 'Case Studies', link: '/case-studies' },
      { label: 'Insights', link: '/insights' },
    ],
  },
  {
    title: 'Support & Resources',
    list: [
      { label: 'Pricing & Packages', link: '/pricing-and-packages' },
      { label: 'Help & FAQs', link: '/help-and-faq' },
      { label: 'Contacts', link: '/contacts' },
    ],
  },
  {
    title: 'Legal & Compliance',
    list: [
      { label: 'Terms and Conditions', link: '/terms-and-conditions' },
      { label: 'Privacy Policy', link: '/privacy-policy' },
      { label: 'Cookie Policy', link: '/cookie-policy' },
      { label: 'Refund Policy', link: '/refund-policy' },
    ],
  },
];

export function FooterTop() {
  return (
    <section className={st.footerTopLayout}>
      <section className={st.logoLayout}>
        <Link href="/">
          <Image src="/full-logo.svg" alt="full-logo" width={155} height={28} />
        </Link>
        <address className={st.addressLayout}>
          <Text color="black60" weight={300}>
            Office address: Galvaniho 7/D, 821 04 Bratislava, Slovakia
          </Text>
          <Text color="black60" weight={300}>
            Registered address: Biskupa Kondého Street 5138/30, 929 01 Dunajská
            Streda, Slovakia
          </Text>
          <Text color="black60" weight={300}>
            Registered number: 53623878
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
