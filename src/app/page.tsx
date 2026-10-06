import { SiteHeader } from '@/components/SiteHeader';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { TeamSection } from '@/components/TeamSection';
import { Approach } from '@/components/Approach';
import { Trust } from '@/components/Trust';
import { Insights } from '@/components/Insights';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { tr } from '@/content/tr';
import { services } from '@/content/services';
import { legalName, brandName, siteUrl } from '@/lib/site';
import { jsonLdString } from '@/lib/seo';

// Yapılandırılmış veri. Kurum tek; iki ofis ayrı yerel işletme (AccountingService) olarak
// tanımlanır ki her şehir kendi adresi ve telefonuyla yerel aramada eşleşsin.
const openingHours = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '08:30',
  closes: '18:00',
};
const offerCatalog = {
  '@type': 'OfferCatalog',
  name: 'Uzmanlık alanları',
  itemListElement: services.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.title, url: `${siteUrl}/hizmetler/${s.slug}` },
  })),
};

const jsonLd = {
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: legalName,
      alternateName: brandName,
      url: `${siteUrl}/`,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon/web-app-manifest-512x512.png`, width: 512, height: 512 },
      image: `${siteUrl}/img/og-image.jpg`,
      email: tr.contact.email,
      telephone: tr.contact.phone,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: tr.contact.phone,
        email: tr.contact.email,
        areaServed: 'TR',
        availableLanguage: 'Turkish',
      },
      location: [{ '@id': `${siteUrl}/#istanbul` }, { '@id': `${siteUrl}/#mardin` }],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: brandName,
      inLanguage: 'tr',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'AccountingService',
      '@id': `${siteUrl}/#istanbul`,
      name: `${brandName} İstanbul Merkez Ofis`,
      parentOrganization: { '@id': `${siteUrl}/#organization` },
      url: `${siteUrl}/`,
      image: `${siteUrl}/img/og-image.jpg`,
      telephone: '+90 535 029 79 13',
      email: tr.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Barış Mah. Necip Fazıl Kısakürek Sokak No:1 Lotus İş Merkezi C Blok Kat:5 Ofis No:15',
        addressLocality: 'Beylikdüzü',
        addressRegion: 'İstanbul',
        postalCode: '34520',
        addressCountry: 'TR',
      },
      // Koordinat: footer'daki harita bağlantısıyla aynı nokta
      geo: { '@type': 'GeoCoordinates', latitude: 41.0094323, longitude: 28.6538803 },
      openingHoursSpecification: openingHours,
      areaServed: 'TR',
      hasOfferCatalog: offerCatalog,
    },
    {
      '@type': 'AccountingService',
      '@id': `${siteUrl}/#mardin`,
      name: `${brandName} Mardin Ofis`,
      parentOrganization: { '@id': `${siteUrl}/#organization` },
      url: `${siteUrl}/`,
      image: `${siteUrl}/img/og-image.jpg`,
      telephone: '+90 541 811 80 86',
      email: tr.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sanayi Mah. 705 Sokak Biriz Yapı İş Merkezi No:2 Ofis No:28',
        addressLocality: 'Merkez',
        addressRegion: 'Mardin',
        addressCountry: 'TR',
      },
      openingHoursSpecification: openingHours,
      areaServed: 'TR',
      hasOfferCatalog: offerCatalog,
    },
  ],
};

export default function Home() {
  const t = tr;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
      />
      <SiteHeader t={t} />
      <main id="main">
        <Hero t={t} />
        <Services t={t} />
        <TeamSection t={t} />
        <Approach t={t} />
        <Trust t={t} />
        <Insights t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
