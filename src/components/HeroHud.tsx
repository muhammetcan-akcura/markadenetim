'use client';

import { useHero } from './HeroStage';
import styles from './Hero.module.css';

type Labels = { scene: string; pause: string; play: string; ariaPause: string; ariaPlay: string };

/*
  Sahne göstergesi: üç ince ilerleme çizgisi (videoyla senkron, tıklanınca o sahneye atlar)
  ve Durdur/Oynat. Çizgiler kutu değil, 44 px'lik dokunma alanı içinde 1 px'lik izdir.
  İlerleme HeroMedia tarafından doğrudan transform olarak yazılır (React render yok).
*/
export function HeroHud({ sceneNames, labels }: { sceneNames: string[]; labels: Labels }) {
  const { barsRef, scene, playing, toggle, jumpTo } = useHero();
  return (
    <div className={styles.hud}>
      <ol className={styles.bars}>
        {sceneNames.map((name, i) => (
          <li key={name}>
            <button
              type="button"
              className={styles.bar}
              aria-label={`${labels.scene} ${i + 1}: ${name}`}
              aria-current={scene === i ? 'true' : undefined}
              onClick={() => jumpTo(i)}
            >
              <span className={styles.barTrack}>
                <span
                  className={styles.barFill}
                  ref={(el) => {
                    barsRef.current[i] = el;
                  }}
                />
              </span>
            </button>
          </li>
        ))}
      </ol>
      <button
        type="button"
        className={styles.toggle}
        onClick={toggle}
        aria-label={playing ? labels.ariaPause : labels.ariaPlay}
      >
        <span className={`${styles.glyph} ${playing ? styles.pause : styles.play}`} aria-hidden="true" />
        <span className="label" aria-hidden="true">
          {playing ? labels.pause : labels.play}
        </span>
      </button>
    </div>
  );
}
