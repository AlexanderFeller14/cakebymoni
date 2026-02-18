import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { LocalBusinessJsonLd } from '@/components/local-business-jsonld';
import { siteConfig } from '@/lib/site';

const playfair = Playfair_Display({ subsets: ['latin-ext'], variable: '--font-serif' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin-ext'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  icons: {
    icon: '/favicon.svg'
  },
  title: {
    default: 'Cake by Moni | Custom Cakes & Cupcakes in der Schweiz',
    template: '%s | Cake by Moni'
  },
  description: siteConfig.description,
  keywords: [
    'custom cakes schweiz',
    'cupcakes bestellen',
    'geburtstagstorte',
    'party desserts',
    'hochzeitstorte schweiz'
  ],
  openGraph: {
    title: 'Cake by Moni',
    description: siteConfig.description,
    type: 'website',
    locale: 'de_CH',
    url: siteConfig.domain,
    siteName: 'Cake by Moni',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Cake by Moni - Custom Cakes und Cupcakes'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cake by Moni',
    description: siteConfig.description,
    images: ['/og-image.svg']
  },
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="page-shell font-sans text-cocoa antialiased">
        <LocalBusinessJsonLd />
        <div className="min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
