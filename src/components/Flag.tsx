'use client';

import { useId } from 'react';

/*
  Dil seçicideki bayraklar. Emoji bayrak kullanılmaz: Windows'ta bayrak yerine "TR"/"GB" harfleri
  görünür. SVG her ekranda aynı ve keskindir; dekoratiftir (aria-hidden), dil adı yanında yazılıdır.
  Türk bayrağı: ay-yıldız ölçüleri Türk Bayrağı Kanunu oranlarından (3:2); İngilizce için
  Birleşik Krallık bayrağı (2:1, kutuya "slice" ile oturur).
*/
export function Flag({ locale, className }: { locale: string; className?: string }) {
  const id = useId();
  if (locale === 'tr') {
    return (
      <svg className={className} viewBox="0 0 30 20" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
        <rect width="30" height="20" fill="#E30A17" />
        <circle cx="7.5" cy="10" r="5" fill="#fff" />
        <circle cx="8.75" cy="10" r="4" fill="#E30A17" />
        <path d="M13.92 10 19.79 8.09 16.16 13.09V6.91L19.79 11.91Z" fill="#fff" />
      </svg>
    );
  }
  // Union Jack
  const clipAll = `${id}-a`;
  const clipDiag = `${id}-d`;
  return (
    <svg className={className} viewBox="0 0 60 30" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <defs>
        <clipPath id={clipAll}>
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <clipPath id={clipDiag}>
          <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipAll})`}>
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" clipPath={`url(#${clipDiag})`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
