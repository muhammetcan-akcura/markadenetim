import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/content/tr';
import { readingMinutes, type Article } from '@/content/insights';
import { ArrowIcon } from './ArrowIcon';
import styles from './ArticleIndex.module.css';

/*
  Yazı dizini: kart yok; 1px çizgilerle ayrılmış satırlar, her satırda yazının görseli.
  Görsel satırın solunda sabit oranda durur, başlığı gölgelemez; fihrist düzeni korunur.
  Hareket iki tür: hover'da altın çizgi soldan uzar, görsel hafifçe ölçeklenir (ok bunlara eşlik eder).
  Görseller geçici ve dekoratiftir (alt=""); anlam başlıkta.
*/
export function ArticleIndex({
  t,
  items,
  headingLevel = 'h3',
}: {
  t: Dictionary;
  items: Article[];
  headingLevel?: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  return (
    <ol className={styles.list}>
      {items.map((item) => (
        <li key={item.slug} className={styles.row}>
          <div className={styles.media}>
            <div className={styles.mediaInner}>
              <Image src={item.image} alt="" fill sizes="(min-width: 1100px) 22vw, (min-width: 768px) 30vw, 112px" quality={70} />
            </div>
          </div>
          <p className={styles.category}>{item.category}</p>
          <Heading className={styles.title}>
            <Link href={`/guncel/${item.slug}`} className={styles.link}>
              {item.title}
            </Link>
          </Heading>
          <p className={styles.meta}>
            <span>{item.date}</span>
            <span>
              {readingMinutes(item)} {t.insights.minutes}
            </span>
          </p>
          <ArrowIcon className={`link-arrow__icon ${styles.icon}`} />
        </li>
      ))}
    </ol>
  );
}
