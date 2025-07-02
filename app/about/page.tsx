import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/AboutHero';
import { Mission } from '@/components/sections/Mission';
import { Values } from '@/components/sections/Values';
import { Timeline } from '@/components/sections/Timeline';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Mandaleen\'s mission, values, and the talented team driving innovation in technology solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <Mission />
      <Values />
      <Timeline />
    </div>
  );
}