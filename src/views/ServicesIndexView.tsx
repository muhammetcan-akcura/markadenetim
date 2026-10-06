import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import styles from '@/app/hizmetler/ServicesIndex.module.css';

export function servicesIndexMetadata(t: Dictionary): Metadata {
  return pageMetadata({
    title: t.services.page.metaTitle,
    description: t.services.page.metaDescription,
    path: routes[t.locale].services,
  });
}

/*
  Hizmetler dizini: kısa ve sade. Görseller detay sayfalarında; burada yalnızca tipografi.
  1. Giriş (koyu, kısa): satır maskeli başlık + tek cümle.
  2. Kartlar (açık): iki grup, en fazla iki sütun. Masaüstünde kart yatay (solda fotoğraf,
     sağda numara, başlık, özet) ki sekiz alan kısa bir alana sığsın; tablet ve mobilde dikey.
     Köşe yok, gölge yok: kartı 1px çizgi ve bir ton açık zemin ayırır.
  3. Kapanış: listenin altında tek satırlık davet.
*/
export function ServicesIndexView({ t }: { t: Dictionary }) {
  const p = t.services.page;
  const r = routes[t.locale];
  const services = getContent(t.locale).services;
  const groups = (['temel', 'uzman'] as const).map((key) => ({
    key,
    label: p.groups[key],
    items: services.filter((s) => s.group === key),
  }));

  const jsonLd = {
    '@graph': [
      {
        '@type': 'CollectionPage',
        url: `${siteUrl}${r.services}`,
        name: p.metaTitle,
        description: p.metaDescription,
        inLanguage: t.locale,
        about: { '@id': `${siteUrl}/#organization` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: services.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.title,
            url: `${siteUrl}${r.service(s.slug)}`,
          })),
        },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: p.kicker, path: r.services },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={styles.main}>
        {/* 1 — Giriş */}
        <section className={styles.hero} aria-labelledby="services-page-title">
          <div className={`container grid ${styles.heroGrid}`}>
            <div className={styles.heroText}>
              <p className={`label ${styles.kicker}`}>{p.kicker}</p>
              <h1 className={styles.title} id="services-page-title">
                {p.lines.map((line, i) => (
                  <span key={line} className={styles.line}>
                    <span className={styles.lineInner} style={{ animationDelay: `${100 + i * 110}ms` }}>
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
            </div>
            <p className={styles.lead}>{p.lead}</p>
          </div>
        </section>

        {/* 2 — Liste */}
        <div className={styles.body}>
          {/* Grup etiketi numarasız: satır numaralarıyla (01–08) karışmasın */}
          {groups.map((g) => (
            <section key={g.key} className={`container grid ${styles.group}`} aria-labelledby={`group-${g.key}`}>
              <h2 className={`label ${styles.groupLabel}`} id={`group-${g.key}`}>
                {g.label}
              </h2>
              <ol className={styles.cards}>
                {g.items.map((s) => (
                  <li key={s.slug}>
                    <Link href={r.service(s.slug)} className={styles.card}>
                      {/* Görsel dekoratif; anlam başlıkta */}
                      <span className={styles.cardMedia}>
                        <Image
                          src={s.image}
                          alt=""
                          fill
                          sizes="(min-width: 1100px) 22vw, (min-width: 768px) 45vw, 100vw"
                          className={styles.cardImg}
                        />
                      </span>
                      <span className={styles.cardBody}>
                        <span className={styles.cardNum} aria-hidden="true">
                          {s.num}
                        </span>
                        <h3 className={styles.cardTitle}>{s.title}</h3>
                        <p className={styles.cardText}>{s.summary}</p>
                        <ArrowIcon className={`link-arrow__icon ${styles.cardArrow}`} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          ))}

          {/* 3 — Kapanış */}
          <div className={`container ${styles.closing}`}>
            <p className={styles.closingTitle}>{p.closing.title}</p>
            <a className="link-arrow" href={t.cta.href}>
              <span>{p.closing.cta}</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </main>
      <Footer t={t} />
    </>
  );
}
