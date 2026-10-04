import type { Dictionary } from '@/content/tr';
import Image from 'next/image';
import { ScrollWords } from './ScrollWords';
import { InView } from './InView';
import { Parallax } from './Parallax';
import styles from './Statement.module.css';

// 4.3 Marka beyanı: sayfanın en geniş nefesi. Tek ifade, tek not ve altında bölümü
// koyu hizmetlere bağlayan geniş bir panorama (perdeyle açılır, hafif paralaks).
export function Statement({ t }: { t: Dictionary }) {
  return (
    <section id="beyan" className={styles.statement} aria-labelledby="statement-title">
      <div className="container grid">
        <ScrollWords
          text={t.statement.text}
          id="statement-title"
          className={`t-statement ${styles.text}`}
          wordClassName={styles.word}
        />
        <p className={styles.note}>{t.statement.note}</p>
      </div>
      <InView className={`container ${styles.panoramaWrap}`} threshold={0.15}>
        <Parallax className={styles.panorama} range={4}>
          <div className={styles.panoramaInner}>
            <Image src={t.statement.panorama} alt="" fill sizes="(min-width: 1440px) 1296px, 100vw" quality={70} />
          </div>
        </Parallax>
      </InView>
    </section>
  );
}
