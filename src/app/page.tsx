import Hero from '@/components/hero';
import Features from '@/components/features';
import HowItWorks from '@/components/how-it-works';
import TrustSection from '@/components/trust-section';

export default function HomePage() {
  return (
    <div className="flex-1">
      <Hero />
      <Features />
      <HowItWorks />
      <TrustSection />
    </div>
  );
}
