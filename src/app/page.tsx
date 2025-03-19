import {
  Hero,
  HowWeDeliver,
  InsightsAndExecution,
  OurServiceOfferings,
  ProvidedServices,
  SeamlessSuccess,
  SeeOurImpact,
  TransformYourBusiness,
  WhyBusinessesTrust,
} from './components';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProvidedServices />
      <TransformYourBusiness />
      <OurServiceOfferings />
      <WhyBusinessesTrust />
      <SeeOurImpact />
      <SeamlessSuccess />
      <InsightsAndExecution />
      <HowWeDeliver />
    </main>
  );
}
