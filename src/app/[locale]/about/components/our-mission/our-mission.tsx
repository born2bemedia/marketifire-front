import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { RightArrowIcon } from '@/shared/ui/icons/outline/right-arrow';
import { Text } from '@/shared/ui/kit/text';

import st from './our-mission.module.scss';

export function OurMission() {
  const t = useTranslations('about.ourMission');
  return (
    <section className={st.layout}>
      <div className={st.ourMission}>
        <div className={st.col1}>
          <Link href="#">
            {t('title')}
            <RightArrowIcon />
          </Link>
          <div>
            <Image src="/about/mission1.png" alt="Our Mission" fill />
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
            <Text>{t('description')}</Text>
          </div>
          <div>
            <Text>{t('text')}</Text>
          </div>
        </div>
      </div>
    </section>
  );
}
