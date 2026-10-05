import type { Dictionary } from '@/content/tr';
import { ScrollWords } from './ScrollWords';
import styles from './Statement.module.css';

const PILLARS = [
  {
    num: '01',
    title: 'Bağımsızlık & Mesleki Özen',
    desc: 'KGK ve TÜRMOB standartlarına tam uyumla, her finansal tabloyu tarafsız ve sorgulayıcı yaklaşımla inceleriz.',
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

export function Statement({ t }: { t: Dictionary }) {
  return (
    <section id="hakkimizda" className={styles.statement} aria-labelledby="statement-title">
      <div className="container">
        {/* Üst Kategori / Kicker */}
        <div className={styles.kicker}>
          <span className={styles.kickerLine} aria-hidden="true" />
          <span className={`label ${styles.kickerLabel}`}>Hakkımızda · Stratejik Perspektif</span>
        </div>

        {/* Ana Editoryal Izgara: Sol Başlık, Sağ Açıklama */}
        <div className={styles.mainGrid}>
          <div className={styles.leftCol}>
            <ScrollWords
              text={t.statement.text}
              id="statement-title"
              className={`t-statement ${styles.text}`}
              wordClassName={styles.word}
            />
          </div>

          <div className={styles.rightCol}>
            <p className={styles.note}>{t.statement.note}</p>
          </div>
        </div>

        {/* İnce Editoryal İlkeler Şeridi: Kartsız, gölgesiz, zarif 1px mimari çizgi */}
        <div className={styles.pillarsStrip}>
          {PILLARS.map((p) => (
            <div key={p.num} className={styles.pillarItem}>
              <span className={styles.pillarNum} aria-hidden="true">{p.num}</span>
              <div className={styles.pillarContent}>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
