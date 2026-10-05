'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowIcon } from '@/components/ArrowIcon';
import styles from './Member.module.css';

type Props = { href: string; label: string; name: string; image: string };

/*
  Sonraki uzman satırı. Üzerine gelince (veya odakta) satır soldan koyu zeminle dolar;
  fareyle sıradaki kişinin küçük portresi imleci izler
  (BRIEF §08: özel imleç/önizleme yalnızca görsel alanlarında, dokunmatikte kapalı).
  Konum doğrudan stile yazılır, React render'ı tetiklenmez. Görsel dekoratiftir (alt=""):
  isim zaten satırda.
*/
export function NextMember({ href, label, name, image }: Props) {
  const preview = useRef<HTMLSpanElement>(null);

  const move = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse' || !preview.current) return;
    const box = e.currentTarget.getBoundingClientRect();
    preview.current.style.setProperty('--x', `${e.clientX - box.left}px`);
    preview.current.style.setProperty('--y', `${e.clientY - box.top}px`);
  };

  return (
    <Link href={href} className={styles.next} onPointerMove={move}>
      <span className="label">{label}</span>
      <span className={styles.nextName}>{name}</span>
      <span className={styles.nextArrow} aria-hidden="true">
        <ArrowIcon className={`link-arrow__icon ${styles.nextIcon}`} />
      </span>
      <span ref={preview} className={styles.nextPreview} aria-hidden="true">
        <Image src={image} alt="" fill sizes="160px" quality={70} />
      </span>
    </Link>
  );
}
