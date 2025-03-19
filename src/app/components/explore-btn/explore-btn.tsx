'use client';

import Link from 'next/link';

import { CaretRight } from '@/shared/ui/icons/fill';
import { Text } from '@/shared/ui/kit/text';

import st from './explore-btn.module.scss';

export function ExploreBtn() {
  return (
    <Link href="/" className={st.exploreBtn}>
      <CaretRight />
      <Text weight={500} uppercase>
        Explore
      </Text>
    </Link>
  );
}
