'use client';

import { Fragment, useEffect, useRef } from 'react';

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
    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // İfadenin üstü ekranın %85'ine girince başla, altı %55'e gelince bitir
      const start = vh * 0.85;
      const end = vh * 0.55;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end + rect.height)));
      const reach = progress * spans.length;
      spans.forEach((w, i) => {
        w.style.opacity = (0.25 + 0.75 * Math.min(1, Math.max(0, reach - i))).toFixed(3);
      });
      ticking = false;
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
