'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { observeGeometry, onScrollFrame, requestScrollFrame } from '@/lib/scrollFrame';
import { ApproachFigure } from './ApproachFigure';
import styles from './Approach.module.css';

type Step = { title: string; text: string; scope: readonly string[]; output: string; figure: string };
type Props = {
  title: string;
  intro: string;
  scopeLabel: string;
  outputLabel: string;
  steps: readonly Step[];
  /** Diyagramdaki risk satırı etiketleri */
  riskLevels: readonly string[];
};

/*
  Masaüstü: bölüm uzun bir iz (track) içinde yapışık durur; scroll ilerlemesi sıradaki aşamayı
  öne çıkarır, ince dikey çizgi ilerlemeyi gösterir.
  Sağ kolonun başında tek, ortak diyagram durur; noktalar aşamadan aşamaya yer değiştirir.
  Altında aktif aşamanın "dosyası": açıklama, kapsam ve çıktı. Dört dosya aynı hücrede üst üste
  durur, yalnızca aktif olan görünür.
  Mobil/tablet: aşamalar dikey yığın; her aşama diyagramın kendi hâlini statik gösterir,
  ekranın ortasına gelen aşama vurgulanır.
  İki hareket türü: opaklık + çizgi/maske kayması (transform). Hareket azaltmada hepsi tam görünür, yapışma yok.
*/
export function ApproachSteps({ title, intro, scopeLabel, outputLabel, steps, riskLevels }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const desktop = window.matchMedia('(min-width: 1100px)');

    /*
      Masaüstü: izin konumu ResizeObserver'da ölçülür; scroll karesinde yalnızca scrollY ile
      ilerleme hesaplanır (DOM okunmaz, zorunlu reflow yok).
    */
    let top = 0;
    let height = 0;
    let lastLine = '';
    const stopGeometry = observeGeometry(track, (t, h) => {
      top = t;
      height = h;
    });
    const stopFrame = onScrollFrame(({ y, vh }) => {
      if (!desktop.matches || height <= vh) return;
      const progress = Math.min(1, Math.max(0, (y - top) / (height - vh)));
      setActive(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
      const line = `scaleY(${progress.toFixed(3)})`;
      if (line !== lastLine && lineRef.current) {
        lastLine = line;
        lineRef.current.style.transform = line;
      }
    });

    /*
      Mobil/tablet: üstü ekranın %60'ını geçen son aşama vurgulanır. IntersectionObserver
      kök alanı ekranın üst %60'ı; kesişme bilgisi tarayıcıdan hazır gelir, ölçüm yapılmaz.
    */
    const items = Array.from(track.querySelectorAll<HTMLElement>('[data-step]'));
    const passed = items.map(() => false);
    const syncMobile = () => {
      if (!desktop.matches) setActive(Math.max(0, passed.lastIndexOf(true)));
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const line = entry.rootBounds?.bottom ?? 0;
          passed[items.indexOf(entry.target as HTMLElement)] = entry.boundingClientRect.top < line;
        });
        syncMobile();
      },
      { rootMargin: '0px 0px -40% 0px' }
    );
    items.forEach((el) => io.observe(el));

    // Kırılım değişince doğru kaynağa geç
    const onBreakpoint = () => (desktop.matches ? requestScrollFrame() : syncMobile());
    desktop.addEventListener('change', onBreakpoint);

    return () => {
      stopGeometry();
      stopFrame();
      io.disconnect();
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [steps.length]);

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
          {/* Masaüstü sahnesindeki ortak diyagram; diğer düzenlerde CSS ile gizlenir */}
          <ApproachFigure
            stage={active}
            total={steps.length}
            caption={steps[active].figure}
            captions={steps.map((s) => s.figure)}
            riskLevels={riskLevels}
            className={styles.figShared}
          />
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
                    {/* Yığın düzeninde aşamanın kendi diyagramı (masaüstü sahnesinde gizli) */}
                    <ApproachFigure
                      stage={i}
                      total={steps.length}
                      caption={step.figure}
                      riskLevels={riskLevels}
                      className={styles.figInline}
                    />
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
