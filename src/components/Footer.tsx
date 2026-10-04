import type { Dictionary } from '@/content/tr';
import styles from './Footer.module.css';

// 4.11 Footer: sade. Wordmark + unvan, en fazla 5 bağlantı, yasal satır. Bağlantı duvarı yok.
export function Footer({ t }: { t: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <a className="wordmark" href="/#top" aria-label={t.a11y.home}>
            MarkaDenetim
          </a>
          <p className={styles.legalName}>{t.footer.descriptor}</p>
        </div>
        <nav aria-label={t.footer.footerNav}>
          <ul className={styles.nav}>
            {t.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Kapanış imzası: wordmark sayfa genişliğinde. Dekoratif; marka adı yukarıda zaten var. */}
      <div className={`container ${styles.giant}`} aria-hidden="true">
        <span>MarkaDenetim</span>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {t.footer.copyright}
        </p>
        <nav aria-label={t.footer.legalNav}>
          <ul className={styles.legal}>
            {t.footer.legal.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
