'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/content/tr';
import { useHeroVideo } from './HeroStage';

/*
  Hero paneli videosu: kaynak videodan seçilmiş üç sahne (kent dokusu, rüzgâr türbinleri,
  hasat sıraları), 1.25x yavaşlatılmış, navy duotone, sessiz, ~8.3 sn döngü.
  Üretim: scripts/encode-hero-video.sh
*/
export function HeroVideo({ className }: { className: string }) {
  const { ref } = useHeroVideo();
  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster="/img/hero-poster.webp"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/video/hero-640.webm" type="video/webm" media="(max-width: 767px)" />
      <source src="/video/hero-640.mp4" type="video/mp4" media="(max-width: 767px)" />
      <source src="/video/hero-960.webm" type="video/webm" />
      <source src="/video/hero-960.mp4" type="video/mp4" />
    </video>
  );
}

// Sahne geçişleri: encode betiğindeki xfade'lerin orta noktaları (sn). Son değer döngü sonu.
const SCENE_ENDS = [2.75, 5.25, 8.29];

type SceneClasses = {
  root: string;
  count: string;
  name: string;
  bars: string;
  bar: string;
  fill: string;
  toggle: string;
  pause: string;
  play: string;
};

/*
  Sahne göstergesi: 01 / 03 sayacı, sahne adı, videoyla senkron üç ince ilerleme çizgisi
  ve Durdur/Oynat. Çizgiler yalnızca transform ile güncellenir (rAF, oynarken).
*/
export function HeroScenes({ t, classes }: { t: Dictionary; classes: SceneClasses }) {
  const { ref, playing, toggle } = useHeroVideo();
  const [scene, setScene] = useState(0);
  const fills = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let raf = 0;
    const draw = () => {
      const time = video.currentTime;
      let current = SCENE_ENDS.findIndex((end) => time < end);
      if (current < 0) current = SCENE_ENDS.length - 1;
      fills.current.forEach((el, i) => {
        if (!el) return;
        const start = i === 0 ? 0 : SCENE_ENDS[i - 1];
        const p = i < current ? 1 : i > current ? 0 : (time - start) / (SCENE_ENDS[i] - start);
        el.style.transform = `scaleX(${Math.min(1, Math.max(0, p)).toFixed(3)})`;
      });
      setScene((prev) => (prev === current ? prev : current));
      if (!video.paused) raf = requestAnimationFrame(draw);
    };
    const onPlay = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    };
    video.addEventListener('play', onPlay);
    video.addEventListener('seeked', draw);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('seeked', draw);
    };
  }, [ref]);

  const total = t.hero.scenes.length;
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className={classes.root}>
      {/* Sahne adı değiştikçe ekran okuyucuya duyurulmaz: dekoratif bilgi */}
      <p className={classes.count} aria-hidden="true">
        {pad(scene + 1)} <span>/ {pad(total)}</span>
      </p>
      <p className={classes.name} aria-hidden="true">
        {t.hero.scenes[scene]}
      </p>
      <span className={classes.bars} aria-hidden="true">
        {t.hero.scenes.map((name, i) => (
          <span className={classes.bar} key={name}>
            <span
              className={classes.fill}
              ref={(el) => {
                fills.current[i] = el;
              }}
            />
          </span>
        ))}
      </span>
      <button
        className={classes.toggle}
        type="button"
        onClick={toggle}
        aria-label={playing ? t.a11y.pauseVideo : t.a11y.playVideo}
      >
        <span className={playing ? classes.pause : classes.play} aria-hidden="true" />
        <span className="label" aria-hidden="true">
          {playing ? t.hero.video.pause : t.hero.video.play}
        </span>
      </button>
    </div>
  );
}
