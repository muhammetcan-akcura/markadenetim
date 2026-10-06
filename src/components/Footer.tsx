import type { ReactNode } from 'react';
import Image from 'next/image';
import type { Dictionary } from '@/content/tr';
import { ArrowIcon } from './ArrowIcon';
import { ConsentMap } from './ConsentMap';
import { CookieSettingsButton } from './CookieNotice';
import styles from './Footer.module.css';

// Sosyal ikonlar: 1px çizgi, dolgusuz — sitenin ince çizgi diliyle aynı ağırlıkta, marka renkleri yok
function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    LinkedIn: (
      <>
        <rect x="3.5" y="9" width="3" height="11" />
        <circle cx="5" cy="5" r="1.6" />
        <path d="M10 20V9h3v1.6c.7-1.1 1.9-1.9 3.6-1.9 2.4 0 3.9 1.5 3.9 4.6V20h-3v-6.2c0-1.6-.6-2.4-1.9-2.4-1.4 0-2.6.9-2.6 2.8V20z" />
      </>
    ),
    Instagram: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r=".6" />
      </>
    ),
    X: <path d="M4 4l16 16M20 4l-6.6 7.2M10.6 12.8L4 20" />,
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}

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
        <section id="ofisler" className={styles.offices} aria-labelledby="footer-offices">
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
                    <ConsentMap
                      src={office.mapUrl}
                      title={`${office.city} ${f.mapTitle}`}
                      blockedText={t.cookies.mapBlocked}
                      loadLabel={t.cookies.mapLoad}
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
              src="/brand/logo-horizontal.svg"
              alt="MarkaDenetim"
              width={240}
              height={50}
              className={styles.brandLogo}
            />
          </a>
          <p className={styles.legalName}>{f.descriptor}</p>
          {/* İmza: serif alıntı, solunda kısa altın çizgi — tasdik imzasına gönderme */}
          <p className={styles.signature}>{f.signature}</p>
          <div className={styles.social}>
            <p className={`label ${styles.socialLabel}`} id="footer-social">
              {f.socialLabel}
            </p>
            <ul className={styles.socialList} aria-labelledby="footer-social">
              {f.social.map((item) => (
                <li key={item.name}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <SocialIcon name={item.name} />
                    <span className="sr-only">
                      {item.name} ({t.contactSection.newTab})
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
            <li>
              <CookieSettingsButton label={t.cookies.manage} className={styles.legalButton} />
            </li>
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
