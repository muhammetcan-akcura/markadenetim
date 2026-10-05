'use client';

import { Fragment, useEffect, useRef } from 'react';
import { observeGeometry, onScrollFrame } from '@/lib/scrollFrame';

/*
  Scroll ilerlemesine göre kelime kelime opaklık (0.25 → 1). Yalnızca opacity yazılır.
  Metin sunucuda tam olarak render edilir; JS yoksa kelimeler zaten tam opak durur
  (başlangıç opaklığı CSS'te `.js` kapısının arkasında).
*/
export function ScrollWords({
  text,
  id,
  className,
  wordClassName,
}: {
  text: string;
  id: string;
  className: string;
  wordClassName: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(/\s+/);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const spans = Array.from(el.children) as HTMLElement[];
    // Konum ResizeObserver'da ölçülür; scroll karesinde DOM okunmaz, yalnızca opaklık yazılır
    let top = 0;
    let height = 0;
    let lastReach = -1;

    const stopGeometry = observeGeometry(el, (t, h) => {
      top = t;
      height = h;
    });
    const stopFrame = onScrollFrame(({ y, vh }) => {
      if (!height) return;
      // İfadenin üstü ekranın %85'ine girince başla, altı %55'e gelince bitir
      const start = vh * 0.85;
      const end = vh * 0.55;
      const progress = Math.min(1, Math.max(0, (start - (top - y)) / (start - end + height)));
      const reach = Math.round(progress * spans.length * 1000) / 1000;
      if (reach === lastReach) return; // ekran dışında gereksiz stil yazımı yok
      lastReach = reach;
      spans.forEach((w, i) => {
        w.style.opacity = (0.25 + 0.75 * Math.min(1, Math.max(0, reach - i))).toFixed(3);
      });
    });
    return () => {
      stopGeometry();
      stopFrame();
    };
  }, []);

  return (
    <h2 className={className} id={id} ref={ref}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className={wordClassName}>{word}</span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </h2>
  );
}
