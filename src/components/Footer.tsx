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
