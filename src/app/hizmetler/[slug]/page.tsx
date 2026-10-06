import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import { ArrowIcon } from '@/components/ArrowIcon';
import { Footer } from '@/components/Footer';
import { InView } from '@/components/InView';
import { SiteHeader } from '@/components/SiteHeader';
import { getService, services } from '@/content/services';
import { tr } from '@/content/tr';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import styles from './Service.module.css';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.lead,
    path: `/hizmetler/${service.slug}`,
    image: service.image,
    imageAlt: service.title,
  });
}

/*
  Uzmanlık alanı sayfası. Ana sayfanın koyu/açık ritmi tek sayfada, her bant farklı kompozisyonla:
  1. Giriş (koyu): solda başlık + sayfa içi dizin; masaüstünde görsel kabın dışına, ekran kenarına taşar.
  2. Kapsam (açık): solda yapışkan serif ara başlık, sağda çizgilerle ayrılmış numaralı liste.
  3. Yöntem (en koyu): dört aşama yan yana, dikey 1px çizgilerle; mobilde dikey yığın.
  4. Çıktılar (açık): büyük ifade + tanım listesi; yetki bilgisi için işaretli yer tutucu.
  5. Kapanış (koyu): davet başlığı, CTA ve diğer üç alan editoryal satırlar hâlinde.
  Kart, gölge, ikon yok; yapıyı ince çizgiler kurar.
*/
export default async function ServicePage({ params }: Params) {
  const t = tr;
  const d = t.services.detail;
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const total = String(services.length).padStart(2, '0');
  const sections = [
    { id: 'kapsam', label: d.scope },
    { id: 'yontem', label: d.process },
    { id: 'ciktilar', label: d.deliverables },
  ];

  const jsonLd = {
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        serviceType: service.title,
        description: service.lead,
        url: `${siteUrl}/hizmetler/${service.slug}`,
        image: `${siteUrl}${service.image}`,
        areaServed: { '@type': 'Country', name: 'Türkiye' },
        inLanguage: 'tr',
        provider: { '@id': `${siteUrl}/#organization` },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: service.title,
          itemListElement: service.scope.map((item) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: item.title, description: item.text },
          })),
        },
      },
      breadcrumbJsonLd([
        { name: 'Ana sayfa', path: '/' },
        { name: d.back, path: '/hizmetler' },
        { name: service.title, path: `/hizmetler/${service.slug}` },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={styles.main}>
        {/* 1 — Giriş */}
        <section className={styles.intro} aria-labelledby="service-title">
          <div className={`container grid ${styles.introGrid}`}>
            <div className={styles.introText}>
              <Link href="/hizmetler" className={`link-arrow link-arrow--plain ${styles.back}`}>
                <ArrowIcon className={`link-arrow__icon ${styles.backIcon}`} />
                <span>{d.back}</span>
              </Link>

              <p className={`label ${styles.kicker}`}>
                {d.kicker}
                <span className={styles.kickerNum}>
                  {service.num} / {total}
                </span>
              </p>

              {/* Kelime kelime maske içinden yükselme: satır kırılımı ekrana göre değiştiği için
                  satır yerine kelime maskelenir; görsel sonuç satır reveal'ı ile aynıdır */}
              <h1 className={styles.title} id="service-title">
                {service.title.split(' ').map((word, i) => (
                  <Fragment key={i}>
                    {i > 0 && ' '}
                    <span className={styles.word}>
                      <span className={styles.wordInner} style={{ animationDelay: `${120 + i * 90}ms` }}>
                        {word}
                      </span>
                    </span>
                  </Fragment>
                ))}
              </h1>

              <p className={styles.lead}>{service.lead}</p>

              <nav className={styles.index} aria-label={d.onThisPage}>
                <p className={`label ${styles.indexTitle}`}>{d.onThisPage}</p>
                <ol>
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`}>
                        <span className={styles.indexNum} aria-hidden="true">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* sizes: masaüstünde alan dikey ve görsel yatay; cover kırpımında gereken kaynak genişliği
                alan yüksekliği × görsel oranıdır (~ekran genişliği). 40vw denince görsel büyütülüp bulanıklaşıyordu */}
            <figure className={styles.media}>
              <Image
                src={service.image}
                alt=""
                fill
                preload
                sizes="100vw"
                quality={75}
                className={styles.mediaImg}
              />
            </figure>
          </div>
        </section>

        {/* 2 — Kapsam */}
        <section id="kapsam" className={styles.scope} aria-labelledby="scope-title">
          <div className={`container grid ${styles.scopeGrid}`}>
            <div className={styles.scopeHead}>
              <p className={`label ${styles.sectionLabel}`}>
                <span aria-hidden="true">01</span>
                {d.scope}
              </p>
              <h2 className={styles.scopeTitle} id="scope-title">
                {service.scopeHeading}
              </h2>
            </div>

            <ol className={styles.scopeList}>
              {service.scope.map((item, i) => (
                <li key={item.title}>
                  <span className={styles.scopeNum} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={styles.scopeItemTitle}>{item.title}</h3>
                  <p className={styles.scopeItemText}>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 3 — Çalışma yöntemi */}
        <section id="yontem" className={styles.process} aria-labelledby="process-title">
          <div className="container">
            <div className={styles.processHead}>
              <p className={`label ${styles.sectionLabel}`}>
                <span aria-hidden="true">02</span>
                {d.process}
              </p>
              <h2 className={styles.processTitle} id="process-title">
                {d.processTitle}
              </h2>
            </div>

            <InView as="ol" className={styles.steps} threshold={0.25}>
              {service.process.map((step, i) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.stepNum} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </li>
              ))}
            </InView>
          </div>
        </section>

        {/* 4 — Çıktılar */}
        <section id="ciktilar" className={styles.deliverables} aria-labelledby="deliverables-title">
          <div className={`container grid ${styles.deliverablesGrid}`}>
            <div className={styles.deliverablesHead}>
              <p className={`label ${styles.sectionLabel}`}>
                <span aria-hidden="true">03</span>
                {d.deliverables}
              </p>
              <h2 className={styles.deliverablesTitle} id="deliverables-title">
                {d.deliverablesTitle}
              </h2>
            </div>

            <div className={styles.deliverablesBody}>
              <dl className={styles.deliverablesList}>
                {service.deliverables.map((item) => (
                  <div key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.text}</dd>
                  </div>
                ))}
              </dl>

              <dl className={styles.basis}>
                <dt className="label">{d.basis}</dt>
                <dd>{service.basis}</dd>
              </dl>
              <p className={styles.disclaimer}>{d.disclaimer}</p>
            </div>
          </div>
        </section>

        {/* 5 — Kapanış */}
        <section className={styles.closing} aria-labelledby="closing-title">
          <div className={`container grid ${styles.closingGrid}`}>
            <div className={styles.closingMain}>
              <h2 className={styles.closingTitle} id="closing-title">
                {service.closing}
              </h2>
              <a className={`link-arrow ${styles.closingCta}`} href={t.cta.href}>
                <span>{d.cta}</span>
                <ArrowIcon />
              </a>
            </div>

            <nav className={styles.others} aria-labelledby="others-title">
              <p className={`label ${styles.othersTitle}`} id="others-title">
                {d.others}
              </p>
              <ol>
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/hizmetler/${s.slug}`} className={styles.otherRow}>
                      <span className={styles.otherNum} aria-hidden="true">
                        {s.num}
                      </span>
                      <span className={styles.otherName}>{s.title}</span>
                      <ArrowIcon className={`link-arrow__icon ${styles.otherIcon}`} />
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
