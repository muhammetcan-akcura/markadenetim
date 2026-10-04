import type { Dictionary } from '@/content/tr';
import { ScrollWords } from './ScrollWords';
import styles from './Statement.module.css';

const PILLARS = [
  {
    num: '01',
    title: 'Bağımsızlık & Mesleki Özen',
    desc: 'KGK ve TÜRMOB standartlarına tam uyumla, her finansal tabloyu tarafsız ve sorgulayıcı bir yaklaşımla inceleriz.',
  },
  {
    num: '02',
    title: 'Belgelenmiş Şeffaflık',
    desc: 'Varsayımlara değil; kanıtlanabilir belgelere ve teyitli kayıtlara dayanan berrak bir raporlama sunarız.',
  },
  {
    num: '03',
    title: 'Stratejik Yönetim Güvencesi',
    desc: 'Rakamların arkasındaki yapıyı yönetim için okunur kılarak karar vericilerin önünü net görmesini sağlarız.',
  },
];

const METRICS = [
  { value: '4', label: 'Ana Uzmanlık Disiplini', sub: 'YMM, Denetim, Vergi & Danışmanlık' },
  { value: '%100', label: 'Mevzuat Uyumu', sub: 'Güncel yasal düzenlemelere tam sadakat' },
  { value: '25+', label: 'Yıllık Kıdemli Deneyim', sub: 'Sektörün öncü YMM ve denetçileri' },
  { value: '360°', label: 'Finansal Güvence', sub: 'Çok aşamalı çapraz kontrol mekanizması' },
];

export function Statement({ t }: { t: Dictionary }) {
  return (
    <section id="hakkimizda" className={styles.statement} aria-labelledby="statement-title">
      <div className="container">
        {/* Üst Kategori Etiketi */}
        <div className={styles.headerBar}>
          <span className={styles.tagRule} aria-hidden="true" />
          <span className={`label ${styles.tag}`}>Stratejik Perspektif & Denetim Disiplini</span>
        </div>

        {/* Ana İki Kolonlu Başlık ve Anlatım Bloğu */}
        <div className={styles.mainGrid}>
          <div className={styles.leftCol}>
            <ScrollWords
              text={t.statement.text}
              id="statement-title"
              className={`t-statement ${styles.text}`}
              wordClassName={styles.word}
            />
            <div className={styles.signatureBadge}>
              <span className={styles.badgeLine} />
              <p className={styles.badgeText}>
                <strong>MarkaDenetim</strong> — Güven, doğru belgelendirilmiş bilgiyle inşa edilir.
              </p>
            </div>
          </div>

          <div className={styles.rightCol}>
            <p className={styles.note}>{t.statement.note}</p>

            {/* Değer Odakları / Sütunlar */}
            <div className={styles.pillars}>
              {PILLARS.map((p) => (
                <div key={p.num} className={styles.pillarCard}>
                  <div className={styles.pillarHeader}>
                    <span className={styles.pillarNum}>{p.num}</span>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                  </div>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alt Metrik & Değer Şeridi */}
        <div className={styles.metricsBar}>
          {METRICS.map((m) => (
            <div key={m.label} className={styles.metricItem}>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
              <span className={styles.metricSub}>{m.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
