'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from './ArrowIcon';
import styles from './Services.module.css';

type Item = { href: string; num: string; title: string; summary: string; image: string };

/*
  Hizmet listesi + imleci takip eden önizleme (BRIEF 4.4, §08).
  Önizleme yalnızca fareli cihazlarda ve hareket tercihi kısıtlı değilse açılır; dokunmatikte
  liste düz bağlantılardan ibarettir. Konum React state'ine yazılmaz: pointermove doğrudan
  transform'u günceller (yeniden çizim yok). Dört görsel üst üste durur, etkin olanın opaklığı açılır.
*/
export function ServiceList({ items }: { items: Item[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const preview = previewRef.current;
    if (!enabled || !wrap || !preview) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = wrap.getBoundingClientRect();
        // Görsel imlecin sağ altında, biraz aralıklı durur: başlığın üstünü kapatmaz
        preview.style.transform = `translate3d(${e.clientX - box.left + 24}px, ${e.clientY - box.top + 24}px, 0)`;
      });
    };
    wrap.addEventListener('pointermove', onMove);
    return () => {
      cancelAnimationFrame(frame);
      wrap.removeEventListener('pointermove', onMove);
    };
  }, [enabled]);

  return (
    <div ref={wrapRef} className={styles.listWrap} onPointerLeave={() => setActive(null)}>
      <ol className={styles.list}>
        {items.map((item, i) => (
          <li key={item.href}>
            <Link href={item.href} className={styles.row} onPointerEnter={() => setActive(i)}>
              <span className={styles.num} aria-hidden="true">
                {item.num}
              </span>
              <h3 className={styles.rowTitle}>{item.title}</h3>
              <ArrowIcon className={`link-arrow__icon ${styles.arrow}`} />
              <p className={styles.summary}>{item.summary}</p>
            </Link>
          </li>
        ))}
      </ol>

      {enabled && (
        <div
          ref={previewRef}
          className={`${styles.preview}${active !== null ? ` ${styles.previewOn}` : ''}`}
          aria-hidden="true"
        >
          {items.map((item, i) => (
            <Image
              key={item.href}
              src={item.image}
              alt=""
              fill
              sizes="240px"
              className={`${styles.previewImg}${active === i ? ` ${styles.previewImgOn}` : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
