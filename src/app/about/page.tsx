import { CtaBlock } from '@/shared/ui/components/cta-block';

import { Hero } from './components/hero';
import { MarketfireApproach } from './components/marketfire-approach';
import { OurMission } from './components/our-mission';
import { WhatSetsApart } from './components/what-sets-apart';
import { WhoWeWorkWith } from './components/who-we-work-with';

export default function Home() {
  return (
    <main>
      <Hero />
      <OurMission />
      <WhatSetsApart />
      <WhoWeWorkWith />
      <MarketfireApproach />
      <CtaBlock
        title="Let’s Build Something Powerful Together"
        text="Marketfire isn’t just another marketing consultancy — we are your partners in growth. Let’s get started today if you’re ready to elevate your brand, expand your audience, and drive revenue. <br /><br /> Contact us to discuss your goals and take the first step toward realizing your vision."
        link="/request-form"
        buttonText="Get Your Free Consultation Today"
      />
    </main>
  );
}
