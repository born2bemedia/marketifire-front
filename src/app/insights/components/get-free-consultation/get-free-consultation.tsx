'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './get-free-consultation.module.scss';

export function GetFreeConsultation() {
  return (
    <section className={st.layout}>
      <section className={st.textContent}>
        <div className={st.text}>
          <Title level={1}>Let’s Build Something Powerful Together</Title>
          <Text>
            Marketfire isn’t just another marketing consultancy — we are your
            partners in growth. Let’s get started today if you’re ready to
            elevate your brand, expand your audience, and drive revenue.
          </Text>
        </div>
        <Link href="/request-form">
          <Button variant="black" className={st.btn}>
            Get Your Free Consultation Today
          </Button>
        </Link>
      </section>
      <section className={st.mainEllipse}>
        <Image
          className={st.ellipseFill}
          src="/insights/ellipse-fill.png"
          alt="ellipse-fill"
          width={503}
          height={503}
        />
        <Image
          className={st.ellipseFill}
          src="/insights/line-1.png"
          alt="ellipse-line"
          width={590}
          height={590}
        />
        <Image
          className={st.ellipseFill}
          src="/insights/line-2.png"
          alt="ellipse-line"
          width={680}
          height={680}
        />
      </section>
      <section className={st.mobileEllipse}>
        <Image
          className={st.line}
          src="/insights/half-line-1.png"
          alt="ellipse-line"
          width={280}
          height={280}
        />
        <Image
          className={st.line}
          src="/insights/half-line-2.png"
          alt="ellipse-line"
          width={350}
          height={350}
        />
        <section className={st.halfEllipse}>
          <Image src="/insights/half-ellipse.png" alt="ellipse-fill" fill />
        </section>
      </section>
    </section>
  );
}
