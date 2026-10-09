import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { Footer } from '@/components/Footer';
import { InView } from '@/components/InView';
import { ScrollWords } from '@/components/ScrollWords';
import { SiteHeader } from '@/components/SiteHeader';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import styles from '@/app/hakkimizda/About.module.css';

export function aboutMetadata(t: Dictionary): Metadata {
  return pageMetadata({ title: t.about.metaTitle, description: t.about.metaDescription, path: routes[t.locale].about });
}

/*
  Hakkımızda. Sayfanın tek fikri: "Yeminli mali müşavir imzasının arkasında durur."
  Her bant mesleğin bir nesnesinden kompozisyon alır, böylece ziyaretçi sektörü görselden okur:
  1. Giriş (koyu): satır maskeli dev başlık + meslek mührü (SVG) + künye şeridi.
  2. Unvan (açık): "Yeminli · Mali · Müşavir" sözlük maddesi gibi; dev serif kelime + tanım.
  3. Tasdik defteri (en koyu): muhasebe defteri düzeninde tablo; konu, kapsam, dayanak, çıktı.
  4. Sorumluluk (açık): kelime kelime belirginleşen ifade + kanun maddesi notu + dört ilke.
  5. Sorumlu ortaklar (koyu): iki portre, kademeli asimetrik yerleşim.
  6. Yetki ve kayıt (açık): yetki alanı kısaltmaları + sicil bilgileri.
  7. Kapanış (koyu): davet ve CTA.
  Kart, gölge, ikon yok; yapıyı 1px çizgiler kurar. Altın yalnızca numara, etiket ve çizgide.
*/
export function AboutView({ t }: { t: Dictionary }) {
  const a = t.about;
  const r = routes[t.locale];
  const partners = getContent(t.locale).team.filter((m) => m.lead);

  const jsonLd = {
    '@graph': [
      {
        '@type': 'AboutPage',
        url: `${siteUrl}${r.about}`,
        name: a.metaTitle,
        description: a.metaDescription,
        inLanguage: t.locale,
        about: { '@id': `${siteUrl}/#organization` },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: a.hero.kicker, path: r.about },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={styles.main}>
        {/* 1 — Giriş */}
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={`container grid ${styles.heroGrid}`}>
            <div className={styles.heroText}>
              <p className={`label ${styles.kicker}`}>{a.hero.kicker}</p>
              {/* Satır satır maske içinden yükselme (BRIEF 4.2 ile aynı dil); toplam ≤ 1.2s */}
              <h1 className={styles.title} id="about-title">
                {a.hero.lines.map((line, i) => (
                  <span key={line} className={styles.line}>
                    <span className={styles.lineInner} style={{ animationDelay: `${100 + i * 110}ms` }}>
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
              <p className={styles.lead}>{a.hero.lead}</p>
            </div>

            <Seal caption={a.hero.sealCaption} />

            <dl className={styles.facts}>
              {a.hero.facts.map((f) => (
                <div key={f.label}>
                  <dt className="label">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 2 — Unvan sözlüğü */}
        <section className={styles.lexicon} aria-labelledby="lexicon-title">
          <div className="container">
            <div className={styles.lexiconHead}>
              <p className={`label ${styles.sectionLabel}`}>
                <span aria-hidden="true">01</span>
                {a.lexicon.label}
              </p>
              <h2 className={styles.lexiconTitle} id="lexicon-title">
                {a.lexicon.title}
              </h2>
            </div>

            <dl className={styles.entries}>
              {a.lexicon.words.map((w) => (
                <InView key={w.word} className={styles.entry} threshold={0.4}>
                  <dt className={styles.entryWord}>
                    <span className={styles.entryWordInner}>{w.word}</span>
                  </dt>
                  <dd className={styles.entryText}>
                    <abbr className={styles.entryKind} title={w.kindTitle}>
                      {w.kind}
                    </abbr>
                    {w.text}
                  </dd>
                </InView>
              ))}
            </dl>
          </div>
        </section>

        {/* 3 — Tasdik defteri */}
        <section className={styles.ledger} aria-labelledby="ledger-title">
          <div className={`container grid ${styles.ledgerHead}`}>
            <div className={styles.ledgerHeading}>
              <p className={`label ${styles.sectionLabel}`}>
                <span aria-hidden="true">02</span>
                {a.ledger.label}
              </p>
              <h2 className={styles.ledgerTitle} id="ledger-title">
                {a.ledger.title}
              </h2>
            </div>
            <p className={styles.ledgerIntro}>{a.ledger.intro}</p>
          </div>

          <div className="container">
            {/* Gerçek tablo: masaüstünde defter satırları, mobilde her satır etiketli blok */}
            <table className={styles.table}>
              <caption className="sr-only">{a.ledger.title}</caption>
              <thead>
                <tr>
                  <th scope="col" className={styles.colNum}>
                    <span className="sr-only">No</span>
                  </th>
                  <th scope="col">{a.ledger.columns.subject}</th>
                  <th scope="col">{a.ledger.columns.scope}</th>
                  <th scope="col">{a.ledger.columns.basis}</th>
                  <th scope="col">{a.ledger.columns.output}</th>
                </tr>
              </thead>
              <InView as="tbody" threshold={0.15}>
                {a.ledger.rows.map((row, i) => (
                  <tr key={row.subject} style={{ transitionDelay: `${i * 80}ms` }}>
                    <td className={styles.colNum} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </td>
                    <th scope="row" className={styles.subject}>
                      {row.subject}
                    </th>
                    <td data-label={a.ledger.columns.scope}>{row.scope}</td>
                    <td data-label={a.ledger.columns.basis} className={styles.basis}>
                      {row.basis}
                    </td>
                    <td data-label={a.ledger.columns.output} className={styles.output}>
                      {row.output}
                    </td>
                  </tr>
                ))}
              </InView>
            </table>

            <Link href={r.service(getContent(t.locale).services[0].slug)} className={`link-arrow ${styles.ledgerCta}`}>
              <span>{a.ledger.cta}</span>
              <ArrowIcon />
            </Link>
          </div>
        </section>

        {/* 4 — Sorumluluk */}
        <section className={styles.duty} aria-labelledby="duty-title">
          <div className={`container grid ${styles.dutyGrid}`}>
            <div className={styles.dutyMain}>
              <p className={`label ${styles.sectionLabel}`}>
                <span aria-hidden="true">03</span>
                {a.responsibility.label}
              </p>
              <ScrollWords
                text={a.responsibility.statement}
                id="duty-title"
                className={styles.dutyStatement}
                wordClassName={styles.dutyWord}
              />
            </div>

            {/* Kanun maddesi: kenar notu gibi, solunda 1px altın çizgi */}
            <aside className={styles.law} aria-label={a.responsibility.lawMark}>
              <p className={`label ${styles.lawMark}`}>{a.responsibility.lawMark}</p>
              <p className={styles.lawText}>{a.responsibility.law}</p>
              <p className={styles.lawNote}>{a.responsibility.note}</p>
            </aside>

            <div className={styles.principles}>
              <h3 className={`label ${styles.principlesLabel}`}>{a.responsibility.principlesLabel}</h3>
              <ol>
                {a.responsibility.principles.map((p, i) => (
                  <li key={p.title}>
                    <span className={styles.principleNum} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className={styles.principleTitle}>{p.title}</h4>
                    <p className={styles.principleText}>{p.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 5 — Sorumlu ortaklar */}
        <section className={styles.partners} aria-labelledby="partners-title">
          <div className={`container grid ${styles.partnersGrid}`}>
            <div className={styles.partnersHead}>
              <p className={`label ${styles.sectionLabel}`}>
                <span aria-hidden="true">04</span>
                {a.partners.label}
              </p>
              <h2 className={styles.partnersTitle} id="partners-title">
                {a.partners.title}
              </h2>
              <p className={styles.partnersIntro}>{a.partners.intro}</p>
              <Link href={r.team} className={`link-arrow ${styles.partnersAll}`}>
                <span>{a.partners.all}</span>
                <ArrowIcon />
              </Link>
            </div>

            {partners.map((m, i) => (
              <article key={m.slug} className={styles.partner} aria-labelledby={`partner-${m.slug}`}>
                <Link href={r.member(m.slug)} className={styles.partnerLink}>
                  <InView threshold={0.2}>
                    <div className={styles.portrait}>
                      <Image
                        src={m.image}
                        alt={t.team.portraitAlt.replace('{name}', m.name)}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className={styles.portraitImg}
                      />
                    </div>
                  </InView>
                  <span className={`label ${styles.partnerNum}`} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={styles.partnerName} id={`partner-${m.slug}`}>
                    {m.name}
                  </h3>
                  <p className={styles.partnerTitles}>{m.titles.join(' · ')}</p>
                  <span className={`link-arrow link-arrow--plain ${styles.partnerMore}`}>
                    <span>{a.partners.profile}</span>
                    <ArrowIcon />
                  </span>
                </Link>
                {m.focus && (
                  <ul className={styles.partnerFocus}>
                    {m.focus.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* 6 — Yetki ve kayıt */}
        <section className={styles.authority} aria-labelledby="authority-title">
          <div className={`container grid ${styles.authorityGrid}`}>
            <div className={styles.authorityHead}>
              <p className={`label ${styles.sectionLabel}`}>
                <span aria-hidden="true">05</span>
                {a.authority.label}
              </p>
              <h2 className={styles.authorityTitle} id="authority-title">
                {a.authority.title}
              </h2>
            </div>

            <div className={styles.authorityBody}>
              <h3 className={`label ${styles.groupLabel}`}>{a.authority.scopeLabel}</h3>
              <ul className={styles.bodies}>
                {a.authority.bodies.map((b) => (
                  <li key={b.abbr}>
                    <span className={styles.bodyAbbr}>{b.abbr}</span>
                    <span className={styles.bodyName}>{b.name}</span>
                  </li>
                ))}
              </ul>

              <h3 className={`label ${styles.groupLabel}`}>{a.authority.registryLabel}</h3>
              <dl className={styles.registry}>
                {t.trust.credentials.map((c) => (
                  <div key={c.label}>
                    <dt>{c.label}</dt>
                    <dd>{c.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 7 — Kapanış */}
        <section className={styles.closing} aria-labelledby="closing-title">
          <div className={`container grid ${styles.closingGrid}`}>
            <h2 className={`t-h2 ${styles.closingTitle}`} id="closing-title">
              {a.closing.title}
            </h2>
            <div className={styles.closingSide}>
              <p className={styles.closingLead}>{a.closing.lead}</p>
              <a className={`link-arrow ${styles.closingCta}`} href={t.cta.href}>
                <span>{a.closing.cta}</span>
                <ArrowIcon />
              </a>
              <a className={`link-arrow link-arrow--plain ${styles.closingSecondary}`} href={r.services}>
                <span>{a.closing.secondary}</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}

/*
  Kaşe: logonun monogramı, hero'da büyük ölçekte. YMM raporlarının imza ve kaşeyle tasdik
  edilmesine gönderme; sitedeki tek mühür dili budur (logo kılavuzu, docs/brand).
  Sicil no veya isim taşımaz; dekoratif olduğu için ekran okuyucudan gizlidir.
*/
function Seal({ caption }: { caption: string }) {
  return (
    <figure className={styles.seal} aria-hidden="true">
      <Image
        src="/brand/markadenetim-monogram-koyu-zemin.svg"
        alt=""
        width={1465}
        height={1123}
        priority
        className={styles.sealMark}
      />
      <figcaption className={`label ${styles.sealCaption}`}>{caption}</figcaption>
    </figure>
  );
}
