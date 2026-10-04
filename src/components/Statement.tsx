import type { Dictionary } from '@/content/tr';
import { ScrollWords } from './ScrollWords';
import styles from './Statement.module.css';

// 4.3 Marka beyanı: sayfanın en geniş nefesi. Tek ifade, tek not; başka öğe yok.
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
    </section>
  );
}
