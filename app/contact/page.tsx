import type { Metadata } from 'next';
import { ContactInfo } from '@/components/sections/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team to discuss how Mandaleen can help transform your business with innovative technology solutions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactInfo />
    </div>
  );
}