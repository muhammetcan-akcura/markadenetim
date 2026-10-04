import type { Dictionary } from '@/content/tr';
import { ArrowIcon } from './ArrowIcon';
import Image from 'next/image';
import styles from './Insights.module.css';

/*
  4.9 Güncel. Blog ızgarası değil, dergi düzeni: solda tek manşet, sağda üst üste iki kısa yazı.
  Kategori metni mürekkep renginde; altın yalnızca önündeki kısa çizgide (açık zeminde altın
  metin AA kontrastı sağlamaz). İçerikler yayın sistemi kurulana kadar örnektir; görseller hero videosundan üretilmiş
  geçicilerdir ve dekoratiftir (alt=""), anlam başlıkta.
*/
export function Insights({ t }: { t: Dictionary }) {
  const [lead, ...rest] = t.insights.items;

  return (
    <section id="guncel" className={styles.insights} aria-labelledby="insights-title">
      <div className="container">
        <header className={styles.head}>
          <h2 className="t-h2" id="insights-title">
            {t.insights.title}
          </h2>
          <span className={`label ${styles.sample}`}>{t.insights.sample}</span>
          <a className={`link-arrow ${styles.all}`} href={t.insights.all.href}>
            <span>{t.insights.all.label}</span>
            <ArrowIcon />
          </a>
        </header>

        <div className={`grid ${styles.layout}`}>
          <article className={`${styles.article} ${styles.lead}`}>
            <div className={styles.media}>
              <div className={styles.mediaInner}>
                <Image src={lead.image} alt="" fill sizes="(min-width: 1100px) 55vw, 100vw" quality={70} />
              </div>
            </div>
            <p className={styles.category}>{lead.category}</p>
            <h3 className={styles.leadTitle}>
              {/* [BİLGİ GİRİLECEK] Yazı sayfası kurulunca gerçek bağlantı */}
              <a href={t.insights.all.href} className={styles.link}>
                {lead.title}
              </a>
            </h3>
            {'excerpt' in lead && <p className={styles.excerpt}>{lead.excerpt}</p>}
            <p className={styles.meta}>
              <span>{lead.date}</span>
              <span>{lead.readingTime}</span>
            </p>
          </article>

          <div className={styles.side}>
            {rest.map((item) => (
              <article key={item.title} className={`${styles.article} ${styles.small}`}>
                <div className={styles.smallText}>
                  <p className={styles.category}>{item.category}</p>
                  <h3 className={styles.smallTitle}>
                    <a href={t.insights.all.href} className={styles.link}>
                      {item.title}
                    </a>
                  </h3>
                  <p className={styles.meta}>
                    <span>{item.date}</span>
                    <span>{item.readingTime}</span>
                  </p>
                </div>
                <div className={`${styles.media} ${styles.thumb}`}>
                  <div className={styles.mediaInner}>
                    <Image src={item.image} alt="" fill sizes="(min-width: 768px) 160px, 1px" quality={70} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
