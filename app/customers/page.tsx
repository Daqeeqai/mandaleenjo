import type { Metadata } from 'next';
import { CustomersHero } from '@/components/sections/CustomersHero';
import { CustomerStories } from '@/components/sections/CustomerStories';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { CustomerLogos } from '@/components/sections/CustomerLogos';

export const metadata: Metadata = {
  title: 'Customers',
  description: 'See how leading companies worldwide trust Mandaleen to transform their operations and achieve remarkable results.',
};

export default function CustomersPage() {
  return (
    <div className="min-h-screen">
      <CustomersHero />
      <CustomerLogos />
      <CustomerStories />
      <CaseStudies />
    </div>
  );
}