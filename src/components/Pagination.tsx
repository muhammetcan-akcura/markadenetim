import Link from 'next/link';
import type { Dictionary } from '@/content/tr';
import { pageCount, pageHref as rawPageHref } from '@/lib/paginate';
import { routes } from '@/lib/routes';
import { ArrowIcon } from './ArrowIcon';
import styles from './Doc.module.css';

/*
  Sayfalama: önceki / sayfa numaraları / sonraki. Etkin sayfa dolu lacivert kare (aria-current),
  diğerleri çerçeveli kare; hepsi ≥ 44px dokunma hedefi. Tek sayfa varsa hiç çizilmez.
  Önceki/sonraki olmayan uçta yer tutucu bırakılır ki numaralar kaymasın.
*/
export function Pagination({
  t,
  base,
  page,
  total,
}: {
  t: Dictionary;
  base: string;
  page: number;
  total: number;
}) {
  const pages = pageCount(total);
  // Sayfa kelimesi dile göre: /sayfa/2, /page/2
  const pageHref = (b: string, n: number) => rawPageHref(b, n, routes[t.locale].pageSegment);
  if (pages <= 1) return null;
  const p = t.pagination;

  return (
    <nav className={styles.pagination} aria-label={p.label}>
      {page > 1 ? (
        <Link href={pageHref(base, page - 1)} className={`${styles.pageStep} ${styles.pagePrev}`} rel="prev">
          <ArrowIcon className={`link-arrow__icon ${styles.pagePrevIcon}`} />
          <span>{p.prev}</span>
        </Link>
      ) : (
        <span className={styles.pageStep} aria-hidden="true" />
      )}

      <ol className={styles.pageList}>
        {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <Link
              href={pageHref(base, n)}
              className={`${styles.pageNum}${n === page ? ` ${styles.pageCurrent}` : ''}`}
              aria-current={n === page ? 'page' : undefined}
            >
              <span className="sr-only">{p.page} </span>
              {n}
            </Link>
          </li>
        ))}
      </ol>

      {page < pages ? (
        <Link href={pageHref(base, page + 1)} className={`${styles.pageStep} ${styles.pageNext}`} rel="next">
          <span>{p.next}</span>
          <ArrowIcon className="link-arrow__icon" />
        </Link>
      ) : (
        <span className={styles.pageStep} aria-hidden="true" />
      )}
    </nav>
  );
}
