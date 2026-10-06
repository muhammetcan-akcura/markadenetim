'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { ChromeTexts } from '@/lib/chrome';
import { routes } from '@/lib/routes';
import { ContactForm } from './ContactForm';
import styles from './QuoteTab.module.css';
import { useChrome } from './useChrome';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([tabindex="-1"]), textarea, select';

/*
  "Teklif alın" kulakçığı: sağ kenarda dikey sekme; basınca sayfa değişmez, form sağ kenardan
  sola doğru kayan bir panelde açılır. BRIEF §09'dan bilinçli sapma (kullanıcı talebi):
  yalnızca masaüstünde (CSS ile ≥1024px). İletişim sayfasında gösterilmez (form zaten ekranda).
  Panel: role="dialog", odak tuzağı, ESC ve arka plana tıklayınca kapanır, sayfa kaydırması kilitlenir.
  Form yalnızca panel ilk açıldığında DOM'a girer; kimlik çakışmasın diye "q-" önekiyle çizilir.
*/
export function QuoteTab({ texts }: { texts: ChromeTexts }) {
  const t = useChrome(texts);
  const q = t.quoteTab;
  const pathname = usePathname();
  // mounted: panel DOM'da; open: geçiş sınıfı uygulanmış (mobil menüyle aynı desen)
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const tabRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const show = () => {
    setMounted(true);
    document.documentElement.classList.add('is-locked');
    requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
  };

  const hide = useCallback(() => {
    setOpen(false);
    document.documentElement.classList.remove('is-locked');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(() => setMounted(false), reduce ? 0 : 500);
    tabRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return hide();
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mounted, hide]);

  if (pathname === routes[t.locale].contact) return null;

  return (
    <>
      <button
        ref={tabRef}
        type="button"
        className={styles.tab}
        aria-expanded={mounted}
        aria-controls="teklif-paneli"
        onClick={show}
      >
        <span className={styles.text}>{q.label}</span>
      </button>

      {mounted && (
        <div className={`${styles.layer}${open ? ` ${styles.open}` : ''}`}>
          {/* Arka plan: tıklayınca kapanır; ekran okuyucu için ayrıca kapat butonu var */}
          <div className={styles.backdrop} onClick={hide} aria-hidden="true" />
          <div
            ref={panelRef}
            id="teklif-paneli"
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby="teklif-baslik"
          >
            <div className={styles.head}>
              <div>
                <p className={`label ${styles.kicker}`}>{q.kicker}</p>
                <h2 className={styles.title} id="teklif-baslik">
                  {q.title}
                </h2>
              </div>
              <button ref={closeRef} type="button" className={styles.close} onClick={hide}>
                <span className="sr-only">{q.close}</span>
                <span className={styles.closeLines} aria-hidden="true" />
              </button>
            </div>
            <p className={styles.lead}>{q.lead}</p>
            <ContactForm t={t} idPrefix="q-" />
          </div>
        </div>
      )}
    </>
  );
}
