import { Hero } from './components/hero';
import { OurMission } from './components/our-mission';
import { PulsingEllipse } from './components/pulsing-ellipse';

export default function Home() {
  return (
    <main>
      <PulsingEllipse />
      <Hero />
      <OurMission />
    </main>
  );
}
