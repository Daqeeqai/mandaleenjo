import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Stats } from '@/components/sections/Stats';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CTA />
      <Stats />
    </div>
  );
}