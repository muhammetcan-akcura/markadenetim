'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Approach.module.css';

type Step = { title: string; text: string };

/*
  Masaüstü: bölüm uzun bir iz (track) içinde yapışık durur; scroll ilerlemesi sıradaki aşamayı
  öne çıkarır, ince dikey çizgi ilerlemeyi gösterir.
  Mobil: aşamalar dikey yığın; ekranın ortasına gelen aşama vurgulanır.
  İki hareket türü: opaklık + çizgi uzaması. Hareket azaltmada hepsi tam görünür, yapışma yok.
*/
export function ApproachSteps({ title, steps }: { title: string; steps: Step[] }) {
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

  return (
    <div ref={trackRef} className={styles.track}>
      <div className={`container ${styles.stage}`}>
        <h2 className={`label ${styles.label}`} id="approach-title">
          {title}
        </h2>

        <div className={styles.body}>
          {/* Masaüstü: aktif aşamanın numarası dev serif rakamla; dekoratif (başlıkta zaten var) */}
          <span className={styles.bigNum} aria-hidden="true">
            <span key={active} className={styles.bigNumInner}>
              {String(active + 1).padStart(2, '0')}
            </span>
            <span className={styles.bigNumTotal}>/ {String(steps.length).padStart(2, '0')}</span>
          </span>
          <span className={styles.rail} aria-hidden="true">
            <span ref={lineRef} className={styles.railFill} />
          </span>
          <ol className={styles.steps}>
            {steps.map((step, i) => (
              <li key={step.title} data-step className={`${styles.step}${i === active ? ` ${styles.active}` : ''}`}>
                <h3 className={styles.stepTitle}>
                  <span className={styles.num} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {step.title}
                </h3>
                <p className={styles.stepText}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
