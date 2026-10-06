import type { Metadata } from 'next';
import { Approach } from '@/components/Approach';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Insights } from '@/components/Insights';
import { Services } from '@/components/Services';
import { SiteHeader } from '@/components/SiteHeader';
import { TeamSection } from '@/components/TeamSection';
import { Trust } from '@/components/Trust';
import { en } from '@/content/en';
import { siteUrl } from '@/lib/site';
import { jsonLdString, pageMetadata } from '@/lib/seo';

// İngilizce ana sayfa. Başlık şablonsuz (marka zaten başlıkta); kurum JSON-LD'si Türkçe ana
// sayfada tanımlı, burada yalnızca İngilizce sayfa ona bağlanır.
const base = pageMetadata({ title: en.meta.title, description: en.meta.description, path: '/en' });
export const metadata: Metadata = {
  ...base,
  title: { absolute: en.meta.title },
  openGraph: { ...base.openGraph, title: en.meta.title, description: en.meta.ogDescription },
  twitter: { ...base.twitter, title: en.meta.title, description: en.meta.ogDescription },
};

const jsonLd = {
  '@type': 'WebPage',
  url: `${siteUrl}/en`,
  name: en.meta.title,
  description: en.meta.description,
  inLanguage: 'en',
  about: { '@id': `${siteUrl}/#organization` },
  isPartOf: { '@id': `${siteUrl}/#website` },
};

export default function HomeEn() {
  const t = en;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main">
        <Hero t={t} />
        <Services t={t} />
        <TeamSection t={t} />
        <Approach t={t} />
        <Trust t={t} />
        {/* İngilizce yazı olmadığı için bölüm kendiliğinden çizilmez */}
        <Insights t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
