'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/*
  Hafif paralaks: öğe ekrandan geçerken içeriği en fazla ±%3 (toplam %6) kaydırır.
  Yalnızca transform yazılır; ekran dışındayken dinleyici iş yapmaz; hareket azaltmada kapalı.
*/
export function Parallax({ className, children, range = 3 }: { className?: string; children: ReactNode; range?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const inner = el?.firstElementChild as HTMLElement | null;
    if (!el || !inner || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let visible = false;
    let ticking = false;
    const update = () => {
      ticking = false;
      if (!visible) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 (ekranın altında) → 1 (ekranın üstünde)
      const p = Math.max(-1, Math.min(1, (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2)));
      inner.style.transform = `translate3d(0, ${(-p * range).toFixed(2)}%, 0)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      onScroll();
    });
    io.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [range]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
