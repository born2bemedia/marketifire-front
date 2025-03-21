import {
  groupElementsByH2,
  parseJSONToElements,
} from '@/features/policies/lib/payload';
import { getPolicy } from '@/features/policies/services';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './page.module.scss';
import { PulsingEllipse } from '@/app/request-form/components';

export default async function TermsAndConditions() {
  const res = await getPolicy({ id: '1' });
  const { elements, lastUpdate } = parseJSONToElements(
    res.content.root.children,
  );
  const groupedElements = groupElementsByH2(elements);

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <PulsingEllipse />
      <section className={st.title}>
        <Title>Terms and Conditions</Title>
        <Text>{lastUpdate}</Text>
      </section>
      <section className={st.layout}>{groupedElements}</section>
    </main>
  );
}
