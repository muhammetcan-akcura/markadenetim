'use client';

import type { Dictionary } from '@/content/tr';
import { useHeroVideo } from './HeroStage';

/*
  Cephedeki "pencere" videosu: kaynak videodan seçilmiş üç sahne (şehir silueti, rüzgâr
  türbinleri, hasat sıraları), 1.25x yavaşlatılmış, navy duotone, sessiz, 8 sn döngü.
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

// Kutu yok: küçük işaret + etiket. Video cephe katmanında, buton metin katmanında durur.
export function HeroVideoToggle({
  t,
  className,
  glyphClassNames,
}: {
  t: Dictionary;
  className: string;
  glyphClassNames: { pause: string; play: string };
}) {
  const { playing, toggle } = useHeroVideo();
  return (
    <button
      className={className}
      type="button"
      onClick={toggle}
      aria-label={playing ? t.a11y.pauseVideo : t.a11y.playVideo}
    >
      <span className={playing ? glyphClassNames.pause : glyphClassNames.play} aria-hidden="true" />
      <span className="label" aria-hidden="true">
        {playing ? t.hero.video.pause : t.hero.video.play}
      </span>
    </button>
  );
}
