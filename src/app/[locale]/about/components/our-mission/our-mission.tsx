import Image from 'next/image';
import Link from 'next/link';

import { RightArrowIcon } from '@/shared/ui/icons/outline/right-arrow';
import { Text } from '@/shared/ui/kit/text';

import st from './our-mission.module.scss';

export function OurMission() {
  return (
    <section className={st.layout}>
      <div className={st.ourMission}>
        <div className={st.col1}>
          <Link href="#">
            Our Mission
            <RightArrowIcon />
          </Link>
          <div>
            <Image
              src="/about/mission1.png"
              alt="Our Mission"
              fill
            />
          </div>
        </div>
        <div className={st.col2}>
          <Image src="/about/mission2.png" alt="Our Mission" fill />
        </div>
        <div className={st.col3}>
          <div>
            <Image
              src="/about/mission3.png"
              alt="Our Mission"
              width={518}
              height={200}
            />
            <Text>
              To empower individuals and businesses with tailored marketing and
              business strategies that drive real growth, enhance brand
              visibility, and maximize revenue potential.
            </Text>
          </div>
          <div>
            <Text>
              Whether you’re building your brand from scratch or looking to
              optimize your digital presence, we’re here to guide you every step
              of the way.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
