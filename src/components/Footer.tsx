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
      {f.offices && f.offices.length > 0 && (
        <div className={styles.officesSection}>
          <div className="container">
            <div className={styles.officesHeader}>
              <p className={`label ${styles.officesLabel}`}>{f.officesLabel}</p>
            </div>
            <div className={`grid ${styles.officesGrid}`}>
              {f.offices.map((office) => (
                <div key={office.city} className={styles.officeCard}>
                  <div className={styles.officeMapWrapper}>
                    <iframe
                      src={office.mapUrl}
                      title={`${office.city} Konumu`}
                      className={styles.officeMapIframe}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className={styles.officeInfo}>
                    <div className={styles.officeHeadingRow}>
                      <span className={styles.officeCity}>{office.city}</span>
                      <a
                        href={office.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`link-arrow ${styles.officeDirections}`}
                      >
                        <span>{f.directionsLabel}</span>
                        <ArrowIcon />
                      </a>
                    </div>
                    <p className={styles.officeAddress}>{office.address}</p>
                    <div className={styles.officeContactRow}>
                      <a href={office.phoneHref} className={styles.officeLink}>
                        <svg className={styles.officeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>{office.phone}</span>
                      </a>
                      <a href={`mailto:${office.email}`} className={styles.officeLink}>
                        <svg className={styles.officeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span>{office.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={`container grid ${styles.top}`}>
        <div className={styles.brand}>
          <a className="wordmark" href="/#top" aria-label={t.a11y.home}>
            {brandName}
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
              <dd>{t.contact.email}</dd>
            </div>
            <div>
              <dt>{t.contact.phoneLabel}</dt>
              <dd>{t.contact.phone}</dd>
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

      {/* Kapanış imzası. SVG textLength ile her kırılımda container'ı tam doldurur;
          harf aralığı açılır, glif biçimi bozulmaz. Dekoratif: marka adı yukarıda zaten var. */}
      <div className={`container ${styles.signature}`} aria-hidden="true">
        <svg viewBox="0 0 1000 96" focusable="false">
          <text x="0" y="92" textLength="1000" lengthAdjust="spacing">
            {brandName.toLocaleUpperCase('tr')}
          </text>
        </svg>
      </div>
    </footer>
  );
}
