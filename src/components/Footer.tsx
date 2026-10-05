import Image from 'next/image';
import type { Dictionary } from '@/content/tr';
import { brandName } from '@/lib/site';
import { ArrowIcon } from './ArrowIcon';
import styles from './Footer.module.css';

// 4.11 Footer: sade. Wordmark + unvan, en fazla 5 bağlantı, yasal satır. Bağlantı duvarı yok.
// Üç sütun (marka / bölümler / iletişim) 1px çizgilerle kurulur; kapanışta tam genişlik imza.
export function Footer({ t }: { t: Dictionary }) {
  const year = new Date().getFullYear();
  const f = t.footer;
  // Brief: en fazla 5 bağlantı. İletişim, sağdaki iletişim sütunu ve hemen üstteki
  // kapanış bölümüyle zaten karşılandığı için gezinmeden çıkarılır.
  const links = t.nav.filter((item) => item.href !== t.cta.href);

  return (
    <footer className={styles.footer}>
      {/* Ofisler: kart değil, numaralı editoryal bloklar. Harita lacivert palete çekilir
          (gri ton + ters çevirme); ikon yok, satırlar etiketle okunur. */}
      {f.offices.length > 0 && (
        <section className={styles.offices} aria-labelledby="footer-offices">
          <div className="container">
            <div className={styles.officesHead}>
              <p className={`label ${styles.officesLabel}`}>{f.officesLabel}</p>
              <h2 className={styles.officesTitle} id="footer-offices">
                {f.officesTitle}
              </h2>
            </div>
            <div className={styles.officesGrid}>
              {f.offices.map((office, i) => (
                <article key={office.city} className={styles.office}>
                  <div className={styles.officeMap}>
                    <iframe
                      src={office.mapUrl}
                      title={`${office.city} ${f.mapTitle}`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className={styles.officeBody}>
                    <span className={styles.officeNum} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={styles.officeCity}>{office.city}</h3>
                    <address className={styles.officeAddress}>{office.address}</address>
                    <dl className={styles.officeMeta}>
                      <div>
                        <dt>{t.contact.phoneLabel}</dt>
                        <dd>
                          <a href={office.phoneHref}>{office.phone}</a>
                        </dd>
                      </div>
                      <div>
                        <dt>{t.contact.emailLabel}</dt>
                        <dd>
                          <a href={`mailto:${office.email}`}>{office.email}</a>
                        </dd>
                      </div>
                    </dl>
                    <a
                      href={office.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link-arrow ${styles.officeDirections}`}
                    >
                      <span>{f.directionsLabel}</span>
                      <ArrowIcon />
                      <span className="sr-only">{t.contactSection.newTab}</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className={`container grid ${styles.top}`}>
        <div className={styles.brand}>
          <a className={styles.brandLink} href="/#top" aria-label={t.a11y.home}>
            <Image
              src="/brand/logo-horizontal.png"
              alt="MarkaDenetim"
              width={240}
              height={50}
              className={styles.brandLogo}
            />
          </a>
          <p className={styles.legalName}>{f.descriptor}</p>
        </div>

        <nav className={`${styles.col} ${styles.colNav}`} aria-labelledby="footer-sections">
          <p className={`label ${styles.colLabel}`} id="footer-sections">
            {f.sectionsLabel}
          </p>
          <ul className={styles.nav}>
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${styles.col} ${styles.colContact}`}>
          <p className={`label ${styles.colLabel}`}>{f.contactLabel}</p>
          <dl className={styles.contact}>
            <div>
              <dt>{t.contact.emailLabel}</dt>
              <dd>
                <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
              </dd>
            </div>
            <div>
              <dt>{t.contact.phoneLabel}</dt>
              <dd>
                <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`}>{t.contact.phone}</a>
              </dd>
            </div>
          </dl>
          <a className={`link-arrow ${styles.cta}`} href={t.cta.href}>
            <span>{t.cta.label}</span>
            <ArrowIcon />
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {f.copyright}
        </p>
        <nav aria-label={f.legalNav}>
          <ul className={styles.legal}>
            {f.legal.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className={styles.toTop} href="/#top">
          {f.backToTop}
          {/* Yatay oku döndürmek ucu kaybettiriyor; kısa dikey ok ayrıca çizilir */}
          <svg className={styles.toTopIcon} viewBox="0 0 10 16" aria-hidden="true" focusable="false">
            <path d="M5 16V1M1 5l4-4 4 4" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
