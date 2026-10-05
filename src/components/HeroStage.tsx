'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
  type RefObject,
} from 'react';
import { SCENE_JUMP_TO } from '@/lib/heroScenes';

/*
  Hero'nun tek client kabuğu. Metin ve düzen sunucuda render edilip children olarak gelir.
  Burada üç şey yönetilir:
  - video: oynat/durdur, ekran dışında durma, hareket azaltma / veri tasarrufunda otomatik oynatmama
  - tek rAF döngüsü ("ticker"): mercek motoru buraya abone olur; hero görünür ve sekme açıkken çalışır
  - sahne durumu: videodaki üç sahne; HUD ve mercek etiketi aynı durumu paylaşır
*/
export type Tick = (now: number, dt: number) => void;

type HeroContextValue = {
  videoRef: RefObject<HTMLVideoElement | null>;
  stageRef: RefObject<HTMLElement | null>;
  /** HUD'daki sahne ilerleme çubukları: hareket motoru doğrudan transform yazar (React render yok) */
  barsRef: MutableRefObject<(HTMLElement | null)[]>;
  /** Kullanıcı "Durdur"a bastıysa true: video ve kendiliğinden gezinme durur */
  userPausedRef: MutableRefObject<boolean>;
  playing: boolean;
  scene: number;
  setScene: (index: number) => void;
  toggle: () => void;
  jumpTo: (index: number) => void;
  subscribe: (cb: Tick) => () => void;
};

const HeroContext = createContext<HeroContextValue | null>(null);

export function useHero() {
  const ctx = useContext(HeroContext);
  if (!ctx) throw new Error('useHero yalnızca HeroStage içinde kullanılır');
  return ctx;
}

export function HeroStage({
  id,
  className,
  labelledBy,
  children,
}: {
  id: string;
  className: string;
  labelledBy: string;
  children: ReactNode;
}) {
  const stageRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barsRef = useRef<(HTMLElement | null)[]>([]);
  const userPausedRef = useRef(false);
  const subs = useRef(new Set<Tick>());
  const [playing, setPlaying] = useState(false);
  const [scene, setScene] = useState(0);

  const subscribe = useCallback((cb: Tick) => {
    subs.current.add(cb);
    return () => {
      subs.current.delete(cb);
    };
  }, []);

  /*
    Video: hareket azaltma veya veri tasarrufu açıksa otomatik oynamaz (poster görünür).
    Hero ekran dışındayken durur. Sayfa yüklendikten ve tarayıcı boşa çıktıktan sonra başlar:
    ilk boyamayla bant genişliği yarışmaz. 5 sn'den uzun otomatik hareket için durdurma
    kontrolü zorunludur (WCAG 2.2.2): HeroHud'daki düğme.
  */
  useEffect(() => {
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!video || !stage) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) userPausedRef.current = true;

    const io = new IntersectionObserver(([entry]) => {
      if (userPausedRef.current) return;
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });

    io.observe(stage);
    if (!userPausedRef.current) {
      video.play().catch(() => {});
    }

    return () => {
      io.disconnect();
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  /* Tek rAF döngüsü: yalnızca hero görünürken, sekme açıkken ve hareket azaltma kapalıyken */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;
    let running = false;
    let visible = false;
    let last = 0;
    const frame = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      subs.current.forEach((cb) => cb(now, dt));
      raf = requestAnimationFrame(frame);
    };
    const update = () => {
      const should = visible && !document.hidden && !mq.matches;
      if (should && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      } else if (!should && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    io.observe(stage);
    document.addEventListener('visibilitychange', update);
    mq.addEventListener('change', update);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener('visibilitychange', update);
      mq.removeEventListener('change', update);
    };
  }, []);

  const toggle = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      video.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  }, []);

  /* Sahne düğmesi: sahnenin net bölgesine atlar. Düğmeye basmak oynatmaya açık onaydır. */
  const jumpTo = useCallback((index: number) => {
    const video = videoRef.current;
    if (!video) return;
    const time = SCENE_JUMP_TO[index];
    userPausedRef.current = false;
    const seek = () => {
      video.currentTime = time;
    };
    if (video.readyState >= 1) seek();
    else video.addEventListener('loadedmetadata', seek, { once: true });
    video.play().catch(() => {});
  }, []);

  return (
    <HeroContext.Provider
      value={{ videoRef, stageRef, barsRef, userPausedRef, playing, scene, setScene, toggle, jumpTo, subscribe }}
    >
      <section ref={stageRef} id={id} className={className} aria-labelledby={labelledBy}>
        {children}
      </section>
    </HeroContext.Provider>
  );
}
