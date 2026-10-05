'use client';

import { useEffect } from 'react';
import { sceneAt } from '@/lib/heroScenes';
import { useHero } from './HeroStage';
import styles from './Hero.module.css';

type FrameCallback = (now: number, meta: { mediaTime: number }) => void;
type VideoWithRvfc = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: FrameCallback) => number;
  cancelVideoFrameCallback?: (id: number) => void;
};

export function HeroMedia() {
  const { videoRef, stageRef, barsRef, setScene } = useHero();

  useEffect(() => {
    const video = videoRef.current as VideoWithRvfc | null;
    const stage = stageRef.current;
    if (!video || !stage) return;

    let cancelled = false;
    let rvfcHandle = 0;
    let lastScene = -1;

    const onFrame = (time: number) => {
      const { index, progress } = sceneAt(time);
      if (index !== lastScene) {
        lastScene = index;
        stage.dataset.scene = String(index);
        setScene(index);
        barsRef.current.forEach((el, i) => {
          if (el) el.style.transform = `scaleX(${i < index ? 1 : 0})`;
        });
      }
      const bar = barsRef.current[index];
      if (bar) bar.style.transform = `scaleX(${progress.toFixed(3)})`;
    };

    const usingRvfc = typeof video.requestVideoFrameCallback === 'function';
    
    if (usingRvfc) {
      const loop: FrameCallback = (_now, meta) => {
        if (cancelled) return;
        onFrame(meta.mediaTime);
        rvfcHandle = video.requestVideoFrameCallback!(loop);
      };
      rvfcHandle = video.requestVideoFrameCallback!(loop);
    } else {
      const interval = setInterval(() => {
        if (!video.paused) onFrame(video.currentTime);
      }, 50);
      return () => {
        clearInterval(interval);
      };
    }

    return () => {
      cancelled = true;
      if (rvfcHandle) video.cancelVideoFrameCallback?.(rvfcHandle);
    };
  }, [videoRef, stageRef, barsRef, setScene]);

  return (
    <div className={styles.media} aria-hidden="true">
      <div className={styles.baseVideo}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
        >
          <source src="/video/file.mp4" type="video/mp4" />
        </video>
        <span className={styles.veil} />
      </div>
    </div>
  );
}
