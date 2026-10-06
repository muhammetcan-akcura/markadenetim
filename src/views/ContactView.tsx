import type { Metadata } from 'next';
import { ArrowIcon } from '@/components/ArrowIcon';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import type { Dictionary } from '@/content/tr';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import { siteUrl } from '@/lib/site';
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from '@/lib/seo';
import styles from '@/app/iletisim/ContactPage.module.css';

export function contactMetadata(t: Dictionary): Metadata {
  return pageMetadata({ title: t.contactPage.metaTitle, description: t.contactPage.metaDescription, path: routes[t.locale].contact });
}

/*
  İletişim sayfası. Tek fikir: "Aradığınız her şey ilk bakışta görünsün."
  Ana sayfadaki kapanış bölümü yerinde kalır; bu sayfa onun sakin, okunaklı hâlidir.
  1. Giriş (koyu): satır maskeli başlık + iki ofisin koordinat levhası (Hakkımızda'daki
     mührün karşılığı) + tüm doğrudan kanallar tek şeritte. Ziyaretçi kaydırmadan arayabilir.
  2. Form (açık zemin): solda görüşmenin nasıl ilerlediği ve çalışma saatleri, sağda
     koyu form paneli. Açık "kâğıt" üzerinde koyu panel, formu sayfanın odağı yapar.
  3. Ofisler ve haritalar footer'dan gelir (her sayfada aynı blok; burada tekrarlanmaz).
  Uzun okuma alanları açık zeminde ve 1.0625rem+ gövdeyle tutulur: göz yormayan sayfa.
*/
export function ContactView({ t }: { t: Dictionary }) {
  const r = routes[t.locale];
  const p = t.contactPage;
  const c = t.contactSection;

  const jsonLd = {
    '@graph': [
      {
        '@type': 'ContactPage',
        url: `${siteUrl}${r.contact}`,
        name: p.metaTitle,
        description: p.metaDescription,
        inLanguage: t.locale,
        about: { '@id': `${siteUrl}/#organization` },
      },
      breadcrumbJsonLd([
        { name: t.a11y.breadcrumbHome, path: r.home },
        { name: p.kicker, path: r.contact },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <SiteHeader t={t} />
      <main id="main" className={styles.main}>
        {/* 1 — Giriş ve doğrudan kanallar */}
        <section className={styles.hero} aria-labelledby="contact-page-title">
          <div className={`container grid ${styles.heroGrid}`}>
            <div className={styles.heroText}>
              <p className={`label ${styles.kicker}`}>{p.kicker}</p>
              {/* Hakkımızda ile aynı satır maskesi; toplam ≤ 1.2s */}
              <h1 className={styles.title} id="contact-page-title">
                {p.lines.map((line, i) => (
                  <span key={line} className={styles.line}>
                    <span className={styles.lineInner} style={{ animationDelay: `${100 + i * 110}ms` }}>
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
              <p className={styles.lead}>{p.lead}</p>
              <a className={`link-arrow ${styles.toOffices}`} href="#ofisler">
                <span>{p.offices}</span>
                <ArrowIcon />
              </a>
            </div>

            <Plate points={p.plate.points} caption={p.plate.caption} />

            {/* Kanallar: kart değil, 1px çizgilerle bölünmüş şerit. Her hücre tek dokunuşla çalışır */}
            <ul className={styles.channels} aria-label={c.channelsLabel}>
              {c.channels.map((ch) => (
                <li key={ch.href}>
                  <a
                    className={styles.channel}
                    href={ch.href}
                    {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className={`label ${styles.channelLabel}`}>{ch.label}</span>
                    <span className={styles.channelValue}>{ch.value}</span>
                    <ArrowIcon className={`link-arrow__icon ${styles.channelArrow}`} />
                    {ch.external && <span className="sr-only">{c.newTab}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2 — Süreç + form */}
        <section className={styles.write} aria-labelledby="process-title">
          <div className={`container grid ${styles.writeGrid}`}>
            <div className={styles.process}>
              <p className={`label ${styles.sectionLabel}`}>
                <span aria-hidden="true">01</span>
                {p.process.label}
              </p>
              <h2 className={styles.processTitle} id="process-title">
                {p.process.title}
              </h2>
              <ol className={styles.steps}>
                {p.process.steps.map((s, i) => (
                  <li key={s.title}>
                    <span className={styles.stepNum} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepText}>{s.text}</p>
                  </li>
                ))}
              </ol>
              <dl className={styles.meta}>
                <div>
                  <dt className="label">{c.hours.label}</dt>
                  <dd>{c.hours.value}</dd>
                </div>
              </dl>
              <p className={styles.privacy}>{p.process.privacy}</p>
            </div>

            {/* Form paneli kendi koyu zeminini taşır; metin rengi burada açığa çevrilir */}
            <div className={styles.formSlot}>
              <ContactForm t={t} />
            </div>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}

/*
  Koordinat levhası: iki ofis, ızgara üzerinde gerçek konumlarıyla (eşdikdörtgen izdüşüm,
  39° enlemde boylam × 0.777). Harita taklidi değil; kıyı çizgisi yok, yalnızca ızgara,
  iki nokta ve onları bağlayan tek altın yay. Teknik çizim / belge kılavuzu dili.
  x = 40 + (boylam − 26) × 20,  y = 40 + (44 − enlem) × 25.74
*/
const LON = [28, 32, 36, 40, 44];
const LAT = [42, 40, 38, 36];
const lonX = (lon: number) => 40 + (lon - 26) * 20;
const latY = (lat: number) => 40 + (44 - lat) * 25.74;
const IST = { x: lonX(28.654), y: latY(41.009) };
const MAR = { x: lonX(40.734), y: latY(37.313) };

function Plate({ points, caption }: { points: { city: string; coords: string }[]; caption: string }) {
  const [ist, mar] = points;
  return (
    <figure className={styles.plate} aria-hidden="true">
      <svg viewBox="0 0 480 305" className={styles.plateSvg} focusable="false">
        <rect x="40" y="40" width="400" height="257" className={styles.plateFrame} />
        {LON.map((lon) => (
          <g key={lon}>
            <line x1={lonX(lon)} y1="40" x2={lonX(lon)} y2="297" className={styles.plateGrid} />
            <text x={lonX(lon)} y="28" textAnchor="middle" className={styles.plateTick}>
              {lon}°
            </text>
          </g>
        ))}
        {LAT.map((lat) => (
          <g key={lat}>
            <line x1="40" y1={latY(lat)} x2="440" y2={latY(lat)} className={styles.plateGrid} />
            <text x="30" y={latY(lat) + 3} textAnchor="end" className={styles.plateTick}>
              {lat}°
            </text>
          </g>
        ))}
        {/* İki ofisi bağlayan yay */}
        <path
          d={`M${IST.x},${IST.y} Q${(IST.x + MAR.x) / 2},${IST.y - 70} ${MAR.x},${MAR.y}`}
          className={styles.plateArc}
        />
        {[
          { pt: IST, label: ist, anchor: 'start' as const, dx: -12 },
          { pt: MAR, label: mar, anchor: 'end' as const, dx: 12 },
        ].map(({ pt, label, anchor, dx }) => (
          <g key={label.city}>
            <line x1={pt.x - 9} y1={pt.y} x2={pt.x + 9} y2={pt.y} className={styles.plateCross} />
            <line x1={pt.x} y1={pt.y - 9} x2={pt.x} y2={pt.y + 9} className={styles.plateCross} />
            <circle cx={pt.x} cy={pt.y} r="5" className={styles.platePoint} />
            <text x={pt.x + dx} y={pt.y + 30} textAnchor={anchor} className={styles.plateCity}>
              {label.city}
            </text>
            <text x={pt.x + dx} y={pt.y + 46} textAnchor={anchor} className={styles.plateCoords}>
              {label.coords}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className={`label ${styles.plateCaption}`}>{caption}</figcaption>
    </figure>
  );
}
