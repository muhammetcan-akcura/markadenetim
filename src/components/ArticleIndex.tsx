import Link from 'next/link';
import type { Dictionary } from '@/content/tr';
import { readingMinutes, type Article } from '@/content/insights';
import { ArrowIcon } from './ArrowIcon';
import styles from './ArticleIndex.module.css';

/*
  Yazı dizini: kart ve küçük görsel yok, yalnızca 1px çizgilerle ayrılmış satırlar.
  Ana sayfadaki dergi düzeninden bilinçli olarak farklı; bir kütüphane fihristi gibi okunur.
  Hareket tek tür: hover'da başlık kayar, altın çizgi soldan uzar (Hizmetler satırıyla aynı dil).
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
