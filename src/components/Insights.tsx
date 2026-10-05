import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/content/tr';
import { articles, readingMinutes } from '@/content/insights';
import { ArrowIcon } from './ArrowIcon';
import styles from './Insights.module.css';

/*
  4.9 Güncel. Blog ızgarası değil, dergi düzeni: solda manşet (7 kolon), sağda numaralı kısa liste.
  Manşet görseli bölümü domine etmesin diye tam genişlik yerine dikey, metinle yan yana durur;
  böylece bölüm kompakt kalır ve hiyerarşiyi tipografi kurar. Altın yalnızca kategori çizgisinde
  ve küçük sıra numaralarında. Son üç yazı gösterilir; tamamı /guncel'de. İçerikler örnektir,
  görseller geçicidir ve dekoratiftir (alt=""), anlam başlıkta.
*/
export function Insights({ t }: { t: Dictionary }) {
  const [lead, ...rest] = articles.slice(0, 3);

  return (
    <section id="guncel" className={styles.insights} aria-labelledby="insights-title">
      <div className="container">
        <header className={`grid ${styles.head}`}>
          <h2 className={`t-h2 ${styles.title}`} id="insights-title">
            {t.insights.title}
          </h2>
          <p className={styles.intro}>{t.insights.page.intro}</p>
          <Link className={`link-arrow ${styles.all}`} href={t.insights.all.href}>
            <span>{t.insights.all.label}</span>
            <ArrowIcon />
          </Link>
        </header>

        <div className={`grid ${styles.layout}`}>
          <article className={`${styles.article} ${styles.lead}`}>
            <div className={styles.media}>
              <div className={styles.mediaInner}>
                <Image src={lead.image} alt="" fill sizes="(min-width: 1100px) 22vw, (min-width: 768px) 40vw, 100vw" quality={70} />
              </div>
            </div>
            <div className={styles.leadText}>
              <p className={styles.category}>
                <span>{lead.category}</span>
                <span className={styles.date}>{lead.date}</span>
              </p>
              <h3 className={styles.leadTitle}>
                <Link href={`/guncel/${lead.slug}`} className={styles.link}>
                  {lead.title}
                </Link>
              </h3>
              <p className={styles.excerpt}>{lead.excerpt}</p>
              <p className={styles.read}>
                <span>
                  {readingMinutes(lead)} {t.insights.minutes}
                </span>
                <ArrowIcon />
              </p>
            </div>
          </article>

          <ol className={styles.side}>
            {rest.map((item, i) => (
              <li key={item.slug} className={`${styles.article} ${styles.small}`}>
                {/* Sıra numarası: manşet 01 sayılır, liste 02'den başlar */}
                <span className={styles.index} aria-hidden="true">
                  {String(i + 2).padStart(2, '0')}
                </span>
                <div>
                  <p className={styles.category}>
                    <span>{item.category}</span>
                    <span className={styles.date}>{item.date}</span>
                  </p>
                  <h3 className={styles.smallTitle}>
                    <Link href={`/guncel/${item.slug}`} className={styles.link}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className={styles.read}>
                    <span>
                      {readingMinutes(item)} {t.insights.minutes}
                    </span>
                    <ArrowIcon />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
