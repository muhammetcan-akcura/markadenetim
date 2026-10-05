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
  Burada iki şey yönetilir:
  - video: oynat/durdur, ekran dışında durma, hareket azaltma / veri tasarrufunda otomatik oynatmama
  - sahne durumu: videodaki üç sahne; HUD aynı durumu paylaşır
*/
type HeroContextValue = {
  videoRef: RefObject<HTMLVideoElement | null>;
  stageRef: RefObject<HTMLElement | null>;
  /** HUD'daki sahne ilerleme çubukları: HeroMedia doğrudan transform yazar (React render yok) */
  barsRef: MutableRefObject<(HTMLElement | null)[]>;
  playing: boolean;
  scene: number;
  setScene: (index: number) => void;
  toggle: () => void;
  jumpTo: (index: number) => void;
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
  /** Kullanıcı "Durdur"a bastıysa true: görünürlük değişse de video kendiliğinden başlamaz */
  const userPausedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [scene, setScene] = useState(0);

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

    // Video (preload="none") ancak sayfa yüklenip tarayıcı boşa çıkınca istenir:
    // LCP/TBT penceresinde ağ ve ana iş parçacığı metin ile stile kalır.
    let ready = false;
    let inView = true;
    const playIfAllowed = () => {
      if (ready && inView && !userPausedRef.current) video.play().catch(() => {});
    };

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) playIfAllowed();
      else video.pause();
    });
    io.observe(stage);

    let idleId = 0;
    const whenIdle = () => {
      const ric = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 200));
      idleId = ric(() => {
        ready = true;
        playIfAllowed();
      }, { timeout: 2000 });
    };
    if (document.readyState === 'complete') whenIdle();
    else window.addEventListener('load', whenIdle, { once: true });

    return () => {
      io.disconnect();
      window.removeEventListener('load', whenIdle);
      (window.cancelIdleCallback ?? window.clearTimeout)(idleId);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
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
      value={{ videoRef, stageRef, barsRef, playing, scene, setScene, toggle, jumpTo }}
    >
      <section ref={stageRef} id={id} className={className} aria-labelledby={labelledBy}>
        {children}
      </section>
    </HeroContext.Provider>
  );
}
