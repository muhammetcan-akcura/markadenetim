import type { Dictionary } from '@/content/tr';
import { InView } from './InView';
import styles from './Trust.module.css';

/*
  4.8 Güven. Rakam, müşteri sayısı, yıl, yüzde yok (uydurma veri yasak).
  Güven; tek bir ilke cümlesi, üç taahhüt ve doğrulanabilir yetki bilgileriyle kurulur.
  Yetki bilgileri gerçek veri girilene kadar görünür yer tutucudur.
*/
export function Trust({ t }: { t: Dictionary }) {
  return (
    <section id="guven" className={styles.trust} aria-labelledby="trust-title">
      <div className={`container grid ${styles.layout}`}>
        <h2 className={`label ${styles.label}`} id="trust-title">
          {t.trust.label}
        </h2>

        <InView as="figure" className={styles.quote} threshold={0.4}>
          <blockquote>
            <p className="t-h2">{t.trust.quote}</p>
          </blockquote>
        </InView>

        <ul className={styles.commitments}>
          {t.trust.commitments.map((c) => (
            <li key={c.title}>
              <h3 className={styles.commitmentTitle}>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>

        <div className={styles.credentials}>
          <h3 className={`label ${styles.credentialsLabel}`}>{t.trust.credentialsLabel}</h3>
          <dl className={styles.credentialList}>
            {t.trust.credentials.map((c) => (
              <div key={c.label}>
                <dt>{c.label}</dt>
                <dd>{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
