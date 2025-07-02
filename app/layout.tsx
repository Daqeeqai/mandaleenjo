import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Mandaleen - Revolutionary Technology Solutions',
    template: '%s | Mandaleen'
  },
  description: 'Discover cutting-edge technology solutions that transform businesses and drive innovation. Join thousands of satisfied customers worldwide.',
  keywords: ['technology', 'innovation', 'software', 'solutions', 'digital transformation', 'Jordan', 'Amman'],
  authors: [{ name: 'Mandaleen Team' }],
  creator: 'Mandaleen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mandaleen.com',
    title: 'Mandaleen - Revolutionary Technology Solutions',
    description: 'Discover cutting-edge technology solutions that transform businesses and drive innovation.',
    siteName: 'Mandaleen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mandaleen - Revolutionary Technology Solutions',
    description: 'Discover cutting-edge technology solutions that transform businesses and drive innovation.',
    creator: '@mandaleen',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'contact:phone_number': '+962796660020',
    'contact:email': 'hi@mandaleen.com',
    'contact:address': '14 Mecca Street, Amman, Jordan',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}