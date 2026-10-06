import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { DocHeader } from '@/components/DocHeader';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import docStyles from '@/components/Doc.module.css';
import { TaxCalendarView } from '@/app/vergi-takvimi/TaxCalendarView';
import styles from '@/app/vergi-takvimi/TaxCalendar.module.css';

export function taxCalendarMetadata(t: Dictionary): Metadata {
  return pageMetadata({ title: t.taxCalendar.metaTitle, description: t.taxCalendar.intro, path: routes[t.locale].taxCalendar });
}

/*
  Vergi takvimi: ayın beyan ve ödeme son günleri. Belge sayfalarının bandını kullanır;
  gövdede sade bir tarih listesi ve altında kalıcı bilgilendirme notu.
*/
export function TaxCalendarPageView({ t }: { t: Dictionary }) {
  const r = routes[t.locale];
  const c = t.taxCalendar;
  const now = new Date();

  const jsonLd = {
    '@graph': [
      {
        '@type': 'WebPage',
        url: `${siteUrl}${r.taxCalendar}`,
        name: c.metaTitle,
        description: c.intro,
        inLanguage: t.locale,
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: c.title, path: r.taxCalendar },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={docStyles.main} aria-labelledby="doc-title">
        <DocHeader kicker={c.kicker} title={c.title} lead={c.intro} />
        <div className={`container ${styles.wrap}`}>
          <TaxCalendarView t={t} initial={{ year: now.getFullYear(), month: now.getMonth() + 1 }} />

          <aside className={styles.note} aria-labelledby="note-title">
            <h2 className={`label ${styles.noteTitle}`} id="note-title">
              {c.noteTitle}
            </h2>
            <p>{c.note}</p>
            <div className={styles.noteLinks}>
              <a className="link-arrow link-arrow--plain" href={c.gib.href} target="_blank" rel="noopener noreferrer">
                <span>{c.gib.label}</span>
                <ArrowIcon />
                <span className="sr-only">{t.contactSection.newTab}</span>
              </a>
              <Link className="link-arrow" href={t.cta.href}>
                <span>{c.cta}</span>
                <ArrowIcon />
              </Link>
            </div>
          </aside>
        </div>
      </main>
      <Footer t={t} />
    </>
  );
}
