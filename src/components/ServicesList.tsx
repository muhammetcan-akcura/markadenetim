'use client';

import { useRef, useState } from 'react';
import { ArrowIcon } from './ArrowIcon';
import styles from './Services.module.css';

type Item = { title: string; text: string };

/*
  Her satır bir akordeon düğmesidir: dokunmatikte ve klavyede açıklama satırın içinde açılır.
  İnce imleçli cihazlarda ayrıca imleci izleyen küçük bir önizleme belirir (yalnızca görsel,
  aria-hidden; aynı metin satırın içinde zaten mevcut). Konum ref ile yazılır, React yeniden
  render edilmez; yalnızca transform değişir.
*/
export function ServicesList({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = previewRef.current;
    if (e.pointerType !== 'mouse' || !el) return;
    // İmlecin sağ üstünde durur: üzerine gelinen satırın başlığını örtmez
    el.style.transform = `translate3d(${e.clientX + 28}px, ${e.clientY - el.offsetHeight - 36}px, 0)`;
  };

  return (
    <div className={styles.listWrap} onPointerMove={onMove} onPointerLeave={() => setHovered(null)}>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const isOpen = open === i;
          const num = String(i + 1).padStart(2, '0');
          return (
            <li
              key={item.title}
              className={`${styles.row}${isOpen ? ` ${styles.open}` : ''}`}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(i)}
            >
              <h3 className={styles.rowHeading}>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={`hizmet-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={styles.num} aria-hidden="true">
                    {num}
                  </span>
                  <span className={styles.rowTitle}>{item.title}</span>
                  <ArrowIcon className={styles.arrow} />
                </button>
              </h3>
              <div className={styles.panel} id={`hizmet-${i}`} role="region" aria-label={item.title}>
                <p>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <div
        ref={previewRef}
        className={`${styles.preview}${hovered !== null && hovered !== open ? ` ${styles.previewOn}` : ''}`}
        aria-hidden="true"
      >
        {hovered !== null && (
          <>
            <span className={styles.previewNum}>{String(hovered + 1).padStart(2, '0')}</span>
            <p>{items[hovered].text}</p>
          </>
        )}
      </div>
    </div>
  );
}
