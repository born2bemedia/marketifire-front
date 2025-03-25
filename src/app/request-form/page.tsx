import type { Metadata } from 'next';

import {
  RequestForm,
  RequestFormLayout,
} from '@/features/request-form/components';

import { Hero, PulsingEllipse } from './components';
import st from './page.module.scss';

export const metadata: Metadata = {
  title: 'Request Form | Business & Marketing Consulting for Entrepreneurs',
  description:
    'Unlock your business’s potential with Marketfire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
  openGraph: {
    title: 'Request Form | Business & Marketing Consulting for Entrepreneurs',
    description:
      'Unlock your business’s potential with Marketfire’s expert business consulting, marketing strategies, and growth solutions tailored for entrepreneurs.',
    images: 'https://marketifire.com/meta/lg.png',
  },
};

export default function RequestFormPage() {
  return (
    <main className={st.layout}>
      <PulsingEllipse />
      <Hero />
      <RequestFormLayout className={st.formLayout}>
        <RequestForm />
      </RequestFormLayout>
    </main>
  );
}
