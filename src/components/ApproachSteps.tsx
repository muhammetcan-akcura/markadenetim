'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import styles from './Approach.module.css';

type Step = { title: string; text: string; scope: readonly string[]; output: string };
type Props = {
  title: string;
  intro: string;
  scopeLabel: string;
  outputLabel: string;
  steps: readonly Step[];
};

/*
  Masaüstü: bölüm uzun bir iz (track) içinde yapışık durur; scroll ilerlemesi sıradaki aşamayı
  öne çıkarır, ince dikey çizgi ilerlemeyi gösterir.
  Sağ kolon aktif aşamanın "dosyası"dır: numara, açıklama, kapsam ve çıktı. Dört dosya aynı
  hücrede üst üste durur, yalnızca aktif olan görünür.
  Mobil: aşamalar dikey yığın; ekranın ortasına gelen aşama vurgulanır.
  İki hareket türü: opaklık + çizgi/maske kayması (transform). Hareket azaltmada hepsi tam görünür, yapışma yok.
*/
export function ApproachSteps({ title, intro, scopeLabel, outputLabel, steps }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const desktop = window.matchMedia('(min-width: 1100px)');
    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      if (desktop.matches) {
        const rect = track.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -rect.top / (rect.height - vh)));
        setActive(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
        if (lineRef.current) lineRef.current.style.transform = `scaleY(${progress.toFixed(3)})`;
      } else {
        const items = Array.from(track.querySelectorAll<HTMLElement>('[data-step]'));
        let current = 0;
        items.forEach((el, i) => {
          if (el.getBoundingClientRect().top < vh * 0.6) current = i;
        });
        setActive(current);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [steps.length]);

  const total = String(steps.length).padStart(2, '0');

  return (
    <div ref={trackRef} className={styles.track}>
      <div className={`container ${styles.stage}`}>
        <div className={styles.head}>
          <h2 className={`label ${styles.label}`} id="approach-title">
            {title}
          </h2>
          <p className={styles.intro}>{intro}</p>
        </div>

        <div className={styles.body}>
          <span className={styles.rail} aria-hidden="true">
            <span ref={lineRef} className={styles.railFill} />
          </span>
          <ol className={styles.steps}>
            {steps.map((step, i) => {
              const num = String(i + 1).padStart(2, '0');
              return (
                <li
                  key={step.title}
                  data-step
                  className={`${styles.step}${i === active ? ` ${styles.active}` : ''}`}
                  // Masaüstünde başlık kendi satırına yerleşir (1. ve 6. satır boşluk dengesi içindir)
                  style={{ '--row': i + 2 } as CSSProperties}
                >
                  <h3 className={styles.stepTitle}>
                    <span className={styles.num} aria-hidden="true">
                      {num}
                    </span>
                    {step.title}
                  </h3>

                  <div className={styles.detail}>
                    {/* Dev numara dekoratif; başlıkta zaten var */}
                    <span className={styles.bigNum} aria-hidden="true">
                      <span className={styles.bigNumInner}>{num}</span>
                      <span className={styles.bigNumTotal}>/ {total}</span>
                    </span>
                    <p className={styles.stepText}>{step.text}</p>

                    <p className={`label ${styles.metaLabel}`}>{scopeLabel}</p>
                    <ul className={styles.scope}>
                      {step.scope.map((item, j) => (
                        <li key={item}>
                          <span className={styles.scopeNum} aria-hidden="true">
                            {i + 1}.{j + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className={styles.output}>
                      <span className={`label ${styles.outputLabel}`}>{outputLabel}</span>
                      <span className={styles.outputText}>{step.output}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
