import {
  groupElementsByH2,
  parseJSONToElements,
} from '@/features/policies/lib/payload';
import { getPolicy } from '@/features/policies/services';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './policy.module.scss';
import { PulsingEllipse } from '@/app/request-form/components';

export async function Policy({ id, title }: { title: string; id: string }) {
  const res = await getPolicy({ id });
  const { elements, lastUpdate } = parseJSONToElements(
    res.content.root.children,
  );
  const groupedElements = groupElementsByH2(elements);

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <PulsingEllipse />
      <section className={st.title}>
        <Title>{title}</Title>
        <Text>{lastUpdate}</Text>
      </section>
      <section className={st.layout}>{groupedElements}</section>
    </main>
  );
}
