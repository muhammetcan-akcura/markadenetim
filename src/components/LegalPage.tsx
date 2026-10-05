import type { Dictionary } from '@/content/tr';
import { legal } from '@/content/legal';
import { SiteHeader } from './SiteHeader';
import { Footer } from './Footer';
import styles from './LegalPage.module.css';

/*
  Yasal metin sayfaları için ortak şablon: koyu başlık bandı (header bunun üstünde okunur),
  altında okunaklı tek kolon. Metinler content/legal.ts'ten gelir; bir blok ya paragraf
  ya da madde listesidir.
*/
export function LegalPage({ t, page }: { t: Dictionary; page: keyof Dictionary['legal']['pages'] }) {
  const data = t.legal.pages[page];
  const doc = legal[page];
  return (
    <>
      <SiteHeader t={t} />
      <main id="main">
        <header className={styles.band}>
          <div className="container">
            <h1 className={`t-h2 ${styles.title}`}>{data.title}</h1>
            <p className={styles.updated}>
              {t.legal.updated}: <span>{doc.updated}</span>
            </p>
          </div>
        </header>
        <div className={`container ${styles.body}`}>
          <p className={styles.intro}>{doc.intro}</p>
          {doc.sections.map((section) => (
            <section key={section.heading} className={styles.block}>
              <h2 className={styles.heading}>{section.heading}</h2>
              {section.body.map((block, i) =>
                typeof block === 'string' ? (
                  <p key={i}>{block}</p>
                ) : (
                  <ul key={i} className={styles.list}>
                    {block.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ),
              )}
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
