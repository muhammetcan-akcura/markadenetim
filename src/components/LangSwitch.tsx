'use client';

import { useEffect, useRef, useState } from 'react';
import { Flag } from './Flag';
import styles from './SiteHeader.module.css';

export type LanguageOption = {
  locale: string;
  short: string;
  /** Dilin kendi dilindeki adı ("Türkçe", "English") */
  name: string;
  href: string;
  current: boolean;
};

/*
  Masaüstü dil seçici: bayrak + kısaltma + ok; tıklayınca diğer açılır menülerle aynı dilde panel.
  Panelde her dil kendi adıyla yazılır, bulunulan dilin yanında altın onay işareti durur.
  Dışarı tıklama ve ESC kapatır; ESC'de odak butona döner.
*/
export function LangSwitch({ options, label }: { options: LanguageOption[]; label: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const current = options.find((o) => o.current) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      btnRef.current?.focus();
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={styles.langWrap}>
      <button
        ref={btnRef}
        type="button"
        className={styles.langBtn}
        aria-expanded={open}
        aria-controls="lang-panel"
        aria-label={`${label}: ${current.name}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Flag locale={current.locale} className={styles.flag} />
        <span>{current.short}</span>
        <svg className={styles.chevron} viewBox="0 0 10 6" aria-hidden="true" focusable="false">
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>
      <ul id="lang-panel" className={`${styles.langPanel}${open ? ` ${styles.langPanelOpen}` : ''}`}>
        {options.map((o) => (
          <li key={o.locale}>
            <a
              href={o.href}
              hrefLang={o.locale}
              lang={o.locale}
              className={styles.langOption}
              aria-current={o.current ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              <Flag locale={o.locale} className={styles.flag} />
              <span className={styles.langName}>{o.name}</span>
              <span className={styles.langShort}>{o.short}</span>
              {o.current && (
                <svg className={styles.check} viewBox="0 0 12 9" aria-hidden="true" focusable="false">
                  <path d="M1 4.5l3.2 3L11 1" />
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
