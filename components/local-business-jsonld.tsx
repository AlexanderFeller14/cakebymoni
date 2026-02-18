import { siteConfig } from '@/lib/site';

export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.domain}/og-image.svg`,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressCountry: 'CH'
    },
    areaServed: siteConfig.serviceArea,
    sameAs: [siteConfig.instagram],
    servesCuisine: ['Dessert', 'Cakes', 'Cupcakes'],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Individuelle Torten' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cupcake Boxen' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dessert Table und Party Catering' } }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
