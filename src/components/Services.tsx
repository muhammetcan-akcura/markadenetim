import type { Dictionary } from '@/content/tr';
import { ServicesList } from './ServicesList';
import styles from './Services.module.css';

// 4.4 Hizmetler. Kart yok: solda sabit başlık, sağda ince çizgilerle ayrılmış editoryal liste.
// Koyu zemin: altın numaralar burada AA kontrastı sağlar (açık zeminde sağlamazdı).
export function Services({ t }: { t: Dictionary }) {
  return (
    <section id="hizmetler" className={styles.services} aria-labelledby="services-title">
      <div className={`container grid ${styles.layout}`}>
        <div className={styles.head}>
          <h2 className={`t-h2 ${styles.title}`} id="services-title">
            {t.services.title}
          </h2>
          <p className={styles.intro}>{t.services.intro}</p>
        </div>
        <ServicesList items={t.services.items} />
      </div>
    </section>
  );
}
