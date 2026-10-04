import type { Dictionary } from '@/content/tr';
import Image from 'next/image';
import { InView } from './InView';
import { Parallax } from './Parallax';
import styles from './About.module.css';

// 4.5 Hakkımızda. Asimetrik: solda dikey görsel, sağda başlık ve metin; altında ikonsuz ilkeler.
// İki hareket türü: görselin perde ile açılması + hafif paralaks.
export function About({ t }: { t: Dictionary }) {
  return (
    <section id="hakkimizda" className={styles.about} aria-labelledby="about-title">
      <div className={`container grid ${styles.layout}`}>
        <InView as="figure" className={styles.figure} threshold={0.2}>
          <Parallax className={styles.parallax}>
            <div className={styles.media}>
              <Image src={t.about.image.src} alt={t.about.image.alt} fill sizes="(min-width: 1100px) 30vw, 75vw" quality={72} />
            </div>
          </Parallax>
        </InView>

        <div className={styles.body}>
          <h2 className={`t-h2 ${styles.title}`} id="about-title">
            {t.about.title}
          </h2>
          {t.about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className={styles.paragraph}>
              {p}
            </p>
          ))}

          <h3 className={`label ${styles.principlesLabel}`}>{t.about.principlesLabel}</h3>
          <ol className={styles.principles}>
            {t.about.principles.map((item, i) => (
              <li key={item.title} className={styles.principle}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.principleTitle}>{item.title}</span>
                <span className={styles.principleText}>{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
