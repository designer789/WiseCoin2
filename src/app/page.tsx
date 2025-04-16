import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import CoreFeatures from '@/components/sections/CoreFeatures';
import Roadmap from '@/components/sections/Roadmap';
import TechnicalAdvantages from '@/components/sections/TechnicalAdvantages';
import Tokenomics from '@/components/sections/Tokenomics';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <CoreFeatures />
      <TechnicalAdvantages />
      <Tokenomics />
      <Roadmap />
    </main>
  );
}
