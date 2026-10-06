'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { TeamMember } from '@/content/team';
import { ArrowIcon } from './ArrowIcon';
import styles from './TeamSection.module.css';

/*
  Etkileşimli dizin. Masaüstü: solda büyük serif isimler, sağda tek "sahne" portresi.
  Fare ya da klavye odağı bir isme gelince o kişi aktif olur: portre perde gibi açılır
  (clip-path), diğer isimler soluklaşır (opacity). Bölümde iki hareket türü var, fazlası yok.
  Mobil/tablet: sahne gizlenir, her satır kendi küçük portresini gösterir.
  Satırların kendisi profil bağlantısıdır; etkileşim yalnızca vurguyu değiştirir.
*/
export function TeamIndex({
  members,
  profileLabel,
}: {
  /** href sunucuda dile göre hesaplanır (istemci bileşenine fonksiyon geçirilemez) */
  members: (TeamMember & { href: string })[];
  profileLabel: string;
}) {
  const [active, setActive] = useState(0);
  const current = members[active];

  return (
    <div className={styles.index}>
      {/* Fare listeden çıkınca son kişi aktif kalır: sahne boşa düşmez */}
      <ul className={styles.list}>
        {members.map((m, i) => (
          <li key={m.slug} className={styles.item} data-active={i === active || undefined}>
            <Link
              href={m.href}
              className={styles.member}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className={styles.thumb}>
                <Image
                  src={m.image}
                  alt=""
                  fill
                  sizes="96px"
                  className={styles.thumbImg}
                />
              </span>
              <span className={`label ${styles.num}`} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={styles.nameWrap}>
                <span className={styles.name}>{m.name}</span>
                <span className={styles.role}>
                  {m.titles[0]}
                  {m.badge && <span className={styles.lead}>{m.badge}</span>}
                </span>
              </span>
              <span className="sr-only">{profileLabel}</span>
              <ArrowIcon className={`link-arrow__icon ${styles.arrow}`} />
            </Link>
          </li>
        ))}
      </ul>

      {/* Sahne: yalnızca masaüstünde. Tüm portreler üst üste durur; aktif olan açılır.
          Dekoratif tekrar (isim listede zaten var) → ekran okuyucudan gizli. */}
      <div className={styles.stage} aria-hidden="true">
        <div className={styles.frame}>
          {members.map((m, i) => (
            <div key={m.slug} className={styles.shot} data-active={i === active || undefined}>
              <Image
                src={m.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 34vw, 1px"
                className={styles.shotImg}
              />
            </div>
          ))}
        </div>
        <div className={styles.caption}>
          <span className={styles.frameNum}>
            {String(active + 1).padStart(2, '0')}
            <span>/{String(members.length).padStart(2, '0')}</span>
          </span>
          <p className={styles.captionTitles}>{current.titles.join(' · ')}</p>
          {current.focus && (
            <ul className={styles.focus}>
              {current.focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
