'use client';

import Image from 'next/image';

import { PulsingFrame } from '@/shared/ui/components/pulsing-frame';

import st from './pulsing-ellipse.module.scss';

export function PulsingEllipse() {
  return (
    <PulsingFrame
      layerOne={
        <Image
          className={st.ellipse}
          src="/request-form/ellipse.svg"
          alt="ellipse"
          width={513}
          height={513}
        />
      }
      layerTwo={
        <Image
          className={st.ellipseBig}
          src="/request-form/ellipse.svg"
          alt="ellipse"
          width={813}
          height={813}
        />
      }
    />
  );
}
