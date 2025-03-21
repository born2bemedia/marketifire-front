import {
  RequestForm,
  RequestFormLayout,
} from '@/features/request-form/components';

import { Hero, PulsingEllipse } from './components';
import st from './page.module.scss';

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
