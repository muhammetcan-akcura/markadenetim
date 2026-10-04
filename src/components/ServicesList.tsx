'use client';

import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import { ArrowIcon } from './ArrowIcon';
import styles from './Services.module.css';

type Item = { title: string; text: string; image: string };

/*
  Hizmetler: solda sabit başlık + hizmete göre değişen görsel, sağda editoryal liste.
  - Masaüstü: satırın üzerine gelmek (veya klavyeyle odaklanmak) soldaki görseli o hizmetin
    görseline çevirir; açıklama satırın içinde açılır.
  - Mobil: her satır bir akordeon; açık satırın görseli başlığın altında görünür.
  Görseller dekoratiftir (alt=""): içerik satır metninde.
*/
export function ServicesList({ items, head }: { items: Item[]; head: ReactNode }) {
  const [open, setOpen] = useState<number | null>(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? open ?? 0;

  return (
    <>
      <div className={styles.head}>
        {head}
        <div className={styles.visual} aria-hidden="true">
          {items.map((item, i) => (
            <Image
              key={item.image}
              className={`${styles.visualImage}${i === active ? ` ${styles.visualOn}` : ''}`}
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 1100px) 30vw, 100vw"
              quality={70}
            />
          ))}
          <span className={styles.visualCount}>
            {String(active + 1).padStart(2, '0')} <span>/ {String(items.length).padStart(2, '0')}</span>
          </span>
        </div>
      </div>

      <div className={styles.listWrap} onPointerLeave={() => setHovered(null)}>
        <ol className={styles.list}>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.title}
                className={`${styles.row}${isOpen ? ` ${styles.open}` : ''}${active === i ? ` ${styles.current}` : ''}`}
                onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(i)}
              >
                <h3 className={styles.rowHeading}>
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={`hizmet-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                  >
                    <span className={styles.num} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
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
      </div>
    </>
  );
}
