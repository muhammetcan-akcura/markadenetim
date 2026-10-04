'use client';

import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type RefObject } from 'react';

/*
  Hero'nun tek client kabuğu. İçerik (başlık, SVG cephe, alt satır) sunucuda render edilip
  children olarak gelir; burada yalnızca iki durum tutulur:
  - giriş: fontlar hazır olunca section'a "giriş tamam" sınıfı eklenir
  - video: cephedeki <video> ile metin katmanındaki Durdur/Oynat butonu aynı durumu paylaşır
*/
type VideoState = {
  ref: RefObject<HTMLVideoElement | null>;
  playing: boolean;
  toggle: () => void;
};

const VideoContext = createContext<VideoState | null>(null);

export function useHeroVideo() {
  const ctx = useContext(VideoContext);
  if (!ctx) throw new Error('useHeroVideo yalnızca HeroStage içinde kullanılır');
  return ctx;
}

export function HeroStage({
  id,
  className,
  enteredClassName,
  labelledBy,
  children,
}: {
  id: string;
  className: string;
  enteredClassName: string;
  labelledBy: string;
  children: ReactNode;
}) {
  const [entered, setEntered] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  // Fontu bekle ki satırlar yedek fontla açılıp sonra zıplamasın; ama en fazla 700ms
  useEffect(() => {
    let cancelled = false;
    Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 700))]).then(() => {
      if (!cancelled) requestAnimationFrame(() => setEntered(true));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  /*
    Video: hareket azaltma veya veri tasarrufu açıksa otomatik oynamaz (poster görünür);
    ekran dışındayken durur. 5 sn'den uzun otomatik hareket için durdurma kontrolü
    zorunludur (WCAG 2.2.2) — buton HeroVideoToggle'da.
  */
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) userPaused.current = true;

    const io = new IntersectionObserver(([entry]) => {
      if (userPaused.current) return;
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => {
      io.disconnect();
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    userPaused.current = !video.paused;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <VideoContext.Provider value={{ ref, playing, toggle }}>
      <section id={id} className={entered ? `${className} ${enteredClassName}` : className} aria-labelledby={labelledBy}>
        {children}
      </section>
    </VideoContext.Provider>
  );
}
