import type { Metadata } from 'next';
import { ProductHero } from '@/components/sections/ProductHero';
import { ProductFeatures } from '@/components/sections/ProductFeatures';
import { ProductDemo } from '@/components/sections/ProductDemo';
import { Integration } from '@/components/sections/Integration';

export const metadata: Metadata = {
  title: 'Product',
  description: 'Discover our innovative technology solutions designed to transform your business and drive growth.',
};

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      <ProductHero />
      <ProductFeatures />
      <ProductDemo />
      <Integration />
    </div>
  );
}