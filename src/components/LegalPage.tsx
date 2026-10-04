import type { Dictionary } from '@/content/tr';
import { SiteHeader } from './SiteHeader';
import { Footer } from './Footer';
import styles from './LegalPage.module.css';

/*
  Yasal metin sayfaları için ortak şablon: koyu başlık bandı (header bunun üstünde okunur),
  altında okunaklı tek kolon. Metinler hukuk incelemesinden sonra girilecek; o zamana kadar
  her başlığın altında görünür yer tutucu durur.
*/
export function LegalPage({ t, page }: { t: Dictionary; page: keyof Dictionary['legal']['pages'] }) {
  const data = t.legal.pages[page];
  return (
    <>
      <a className="skip-link" href="#main">
        {t.a11y.skip}
      </a>
      <SiteHeader t={t} />
      <main id="main">
        <header className={styles.band}>
          <div className="container">
            <h1 className={`t-h2 ${styles.title}`}>{data.title}</h1>
            <p className={styles.updated}>
              {t.legal.updated}: <span>[TARİH]</span>
            </p>
          </div>
        </header>
        <div className={`container ${styles.body}`}>
          <p className={styles.notice}>{t.legal.placeholder}</p>
          {t.legal.sections.map((heading) => (
            <section key={heading} className={styles.block}>
              <h2 className={styles.heading}>{heading}</h2>
              <p>{t.legal.placeholder}</p>
            </section>
          ))}
          <a className="link-arrow" href="/">
            <span>{t.legal.back}</span>
          </a>
        </div>
      </main>
      <Footer t={t} />
    </>
  );
}
