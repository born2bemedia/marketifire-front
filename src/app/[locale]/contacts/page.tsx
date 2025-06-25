import type { Metadata } from 'next';

import {
  CommonRequestForm,
  CommonRequestLayout,
} from '@/features/request-form/components';

import { Addresses, Contact, Hero, Socials } from './components';
import st from './page.module.scss';
import { PulsingEllipse } from '@/app/[locale]/request-form/components';

export const metadata: Metadata = {
  title: 'Contact Marketifire | Get in Touch for Business Growth Solutions',
  description:
    'Contact Marketifire today to discuss your business goals and how our expert marketing and consulting services can help you succeed.',
  openGraph: {
    title: 'Contact Marketifire | Get in Touch for Business Growth Solutions',
    description:
      'Contact Marketifire today to discuss your business goals and how our expert marketing and consulting services can help you succeed.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default function Contacts() {
  return (
    <main className={st.layout}>
      <PulsingEllipse />
      <Hero />
      <Contact />
      <Addresses />
      <Socials />
      <CommonRequestLayout>
        <CommonRequestForm />
      </CommonRequestLayout>
    </main>
  );
}
