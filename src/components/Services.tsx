import Link from 'next/link';
import { getContent } from '@/lib/content';
import { routes } from '@/lib/routes';
import type { Dictionary } from '@/content/tr';
import { ArrowIcon } from './ArrowIcon';
import { ServiceList } from './ServiceList';
import styles from './Services.module.css';

/*
  4.4 Uzmanlık alanları. Kart yok: solda yapışkan başlık, sağda ince çizgilerle ayrılmış
  büyük editoryal liste (numara + serif başlık + ok). Hover davranışı ve imleci takip eden
  önizleme ServiceList'te (tek istemci parçası); metin ve bağlantılar sunucuda üretilir.
*/
export function Services({ t }: { t: Dictionary }) {
  const s = t.services;
  const r = routes[t.locale];
  const items = getContent(t.locale).coreServices.map(({ slug, num, title, summary, image }) => ({
    href: r.service(slug),
    num,
    title,
    summary,
    image,
  }));

  return (
    <section id={routes[t.locale].ids.services} className={styles.services} aria-labelledby="services-title">
      <div className={`container grid ${styles.layout}`}>
        <div className={styles.intro}>
          <p className={`label ${styles.kicker}`}>{s.kicker}</p>
          <h2 className={`t-h2 ${styles.title}`} id="services-title">
            {s.title}
          </h2>
          <p className={styles.desc}>{s.intro}</p>
          <Link href={r.services} className={`link-arrow ${styles.all}`}>
            <span>{s.cta}</span>
            <ArrowIcon />
          </Link>
        </div>

        <ServiceList items={items} />
      </div>
    </section>
  );
}
