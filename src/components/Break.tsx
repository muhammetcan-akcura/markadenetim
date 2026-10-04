import Image from 'next/image';
import type { Dictionary } from '@/content/tr';
import { InView } from './InView';
import styles from './Break.module.css';

// 4.6 Görsel kırılma: sayfanın ritmini kıran sessiz an. Kısık bir şehir dokusu ve tek cümle;
// başka hiçbir öğe yok. Tek hareket: cümlenin opaklıkla belirmesi.
export function Break({ t }: { t: Dictionary }) {
  return (
    <section id="kirilma" className={styles.break} aria-labelledby="break-title">
      {/* Dekoratif: hero videosundaki siluet sahnesinin logosuz alt bölgesi, çok kısık duotone */}
      <Image
        className={styles.image}
        src="/img/break-skyline.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={60}
      />
      <InView className={`container ${styles.inner}`} threshold={0.5}>
        <h2 className={`t-statement ${styles.text}`} id="break-title">
          {t.break.text}
        </h2>
      </InView>
    </section>
  );
}
