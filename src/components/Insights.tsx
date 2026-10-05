import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/content/tr';
import { articles, readingMinutes } from '@/content/insights';
import { ArrowIcon } from './ArrowIcon';
import styles from './Insights.module.css';

/*
  4.9 Güncel. Blog ızgarası değil, dergi düzeni: solda tek manşet, sağda üst üste iki kısa yazı.
  Kategori metni mürekkep renginde; altın yalnızca önündeki kısa çizgide (açık zeminde altın
  metin AA kontrastı sağlamaz). Son üç yazı gösterilir; tamamı /guncel'de. İçerikler örnektir,
  görseller geçicidir ve dekoratiftir (alt=""), anlam başlıkta.
*/
export function Insights({ t }: { t: Dictionary }) {
  const [lead, ...rest] = articles.slice(0, 3);

  return (
    <section id="guncel" className={styles.insights} aria-labelledby="insights-title">
      <div className="container">
        <header className={styles.head}>
          <h2 className="t-h2" id="insights-title">
            {t.insights.title}
          </h2>
          {t.insights.sample ? <span className={`label ${styles.sample}`}>{t.insights.sample}</span> : null}
          <Link className={`link-arrow ${styles.all}`} href={t.insights.all.href}>
            <span>{t.insights.all.label}</span>
            <ArrowIcon />
          </Link>
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
              <Link href={`/guncel/${lead.slug}`} className={styles.link}>
                {lead.title}
              </Link>
            </h3>
            <p className={styles.excerpt}>{lead.excerpt}</p>
            <p className={styles.meta}>
              <span>{lead.date}</span>
              <span>
                {readingMinutes(lead)} {t.insights.minutes}
              </span>
            </p>
          </article>

          <div className={styles.side}>
            {rest.map((item) => (
              <article key={item.slug} className={`${styles.article} ${styles.small}`}>
                <div className={styles.smallText}>
                  <p className={styles.category}>{item.category}</p>
                  <h3 className={styles.smallTitle}>
                    <Link href={`/guncel/${item.slug}`} className={styles.link}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className={styles.meta}>
                    <span>{item.date}</span>
                    <span>
                      {readingMinutes(item)} {t.insights.minutes}
                    </span>
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
