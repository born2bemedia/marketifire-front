import {
  groupElementsByH2,
  parseJSONToElements,
} from '@/features/policies/lib/payload';
import { getPolicy } from '@/features/policies/services';

import { Hero } from './hero';
import st from './policy.module.scss';
import { PulsingEllipse } from '@/app/[locale]/request-form/components';

export async function Policy({
  id,
  title,
  locale,
}: {
  title: string;
  id: string;
  locale: string;
}) {
  const res = await getPolicy({ id, locale });
  const { elements } = parseJSONToElements(res.content.root.children);
  const groupedElements = groupElementsByH2(elements);

  return (
    <main style={{ position: 'relative' }}>
      <PulsingEllipse />
      <Hero title={title} />
      <section className={st.layout}>{groupedElements}</section>
    </main>
  );
}
