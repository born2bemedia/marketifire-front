import { Hero, PulsingEllipse } from './components';
import st from './page.module.scss';

export default function RequestForm() {
  return (
    <main className={st.layout}>
      <PulsingEllipse />
      <Hero />
    </main>
  );
}
