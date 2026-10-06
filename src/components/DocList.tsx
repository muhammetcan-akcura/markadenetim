import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from './ArrowIcon';
import styles from './Doc.module.css';

export type DocListItem = {
  href: string;
  /** Antet / üst satırdaki numara (ör. "Sirküler 2026/14", "Rehber 01") */
  num: string;
  /** Antetin sağındaki ikincil bilgi (tarih ya da okuma süresi) */
  aside: string;
  /** Belirgin konu etiketi (yalnızca belge görünümünde) */
  tag?: string;
  title: string;
  text: string;
  /** Verilirse kart fotoğraflı görünür (rehberler) */
  image?: string;
};

/*
  Sirküler ve rehber dizini: sınırları net, tamamı tıklanabilir kartlar (en fazla 3 sütun).
  - Belge görünümü (sirküler): üstte lacivert antet bandı (numara + tarih), altında konu etiketi;
    resmî bir yazı gibi okunur.
  - Fotoğraflı görünüm (rehber): üstte dekoratif görsel, numara ve okuma süresi.
  Her kartın altında açık bir "oku" bağlantısı var: nereye tıklanacağı tartışmasız.
*/
export function DocList({ items, readLabel }: { items: DocListItem[]; readLabel: string }) {
  return (
    <ol className={styles.cards}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={`${styles.card}${item.image ? ` ${styles.cardPhoto}` : ''}`}>
            {item.image ? (
              <span className={styles.cardMedia}>
                <Image src={item.image} alt="" fill sizes="(min-width: 1100px) 30vw, (min-width: 768px) 45vw, 100vw" />
              </span>
            ) : (
              <span className={styles.cardBand}>
                <span className={styles.cardNum}>{item.num}</span>
                <span>{item.aside}</span>
              </span>
            )}

            <span className={styles.cardBody}>
              {item.image ? (
                <span className={styles.cardMeta}>
                  <span className={styles.cardNumDark}>{item.num}</span>
                  <span>{item.aside}</span>
                </span>
              ) : (
                item.tag && <span className={styles.cardTag}>{item.tag}</span>
              )}
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <p className={styles.cardText}>{item.text}</p>
              <span className={styles.cardRead}>
                {readLabel}
                <ArrowIcon className={`link-arrow__icon ${styles.cardArrow}`} />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
