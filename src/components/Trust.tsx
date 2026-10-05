import type { Dictionary } from '@/content/tr';
import { InView } from './InView';
import styles from './Trust.module.css';

/*
  4.8 Güven. Rakam, müşteri sayısı, yıl, yüzde yok (uydurma veri yasak).
  Güven; tek bir ilke cümlesi, üç taahhüt ve doğrulanabilir yetki bilgileriyle kurulur.
  Kompozisyon: Ekip → Yaklaşım → Güncel arasında art arda gelen açık zeminleri kırmak için
  koyu (--navy-950) bir "kayıt belgesi" anı. Yapıyı yalnızca 1px çizgiler kurar.
  Yetki bilgileri gerçek veri girilene kadar görünür yer tutucudur.
*/
export function Trust({ t }: { t: Dictionary }) {
  const { quote } = t.trust;
  return (
    <section id="guven" className={styles.trust} aria-labelledby="trust-title">
      <div className="container">
        <div className={styles.head}>
          <h2 className={`label ${styles.label}`} id="trust-title">
            {t.trust.label}
          </h2>
          <span className={styles.headRule} aria-hidden="true" />
        </div>

        <InView as="figure" className={styles.quote} threshold={0.4}>
          <blockquote>
            <p className="t-h2">
              <span className={styles.dim}>{quote.lead}</span>
              {quote.emphasis}
              <span className={styles.dim}>{quote.tail}</span>
            </p>
          </blockquote>
        </InView>

        {/* Üç taahhüt: yan yana üç sütun; üstte altın çizgi soldan uzar, metin ardından belirir */}
        <InView as="ol" className={styles.commitments} threshold={0.3}>
          {t.trust.commitments.map((c) => (
            <li key={c.title}>
              <span className={`label ${styles.mark}`}>{c.mark}</span>
              <h3 className={styles.commitmentTitle}>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </InView>

        {/* Yetki bilgileri: sayfanın en "belge" gibi duran yeri; çerçeveli bir sicil satırı */}
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
