import { SiteHeader } from '@/components/SiteHeader';
import { Hero } from '@/components/Hero';
import { Statement } from '@/components/Statement';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Break } from '@/components/Break';
import { TeamSection } from '@/components/TeamSection';
import { Approach } from '@/components/Approach';
import { Trust } from '@/components/Trust';
import { Insights } from '@/components/Insights';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { tr } from '@/content/tr';
import { legalName, brandName, siteUrl, placeholder } from '@/lib/site';

// Yapılandırılmış veri: gerçek bilgi girilene kadar yer tutucularla
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: legalName,
      alternateName: brandName,
      url: `${siteUrl}/`,
      email: placeholder,
      telephone: placeholder,
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#service`,
      name: legalName,
      parentOrganization: { '@id': `${siteUrl}/#organization` },
      url: `${siteUrl}/`,
      areaServed: 'TR',
      knowsAbout: ['Yeminli mali müşavirlik', 'Bağımsız denetim', 'Vergi danışmanlığı', 'Finansal danışmanlık'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: placeholder,
        addressLocality: placeholder,
        addressCountry: 'TR',
      },
    },
  ],
};

export default function Home() {
  const t = tr;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <a className="skip-link" href="#main">{t.a11y.skip}</a>
      <SiteHeader t={t} />
      <main id="main">
        <Hero t={t} />
        <Statement t={t} />
        <Services t={t} />
        <About t={t} />
        <Break t={t} />
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
