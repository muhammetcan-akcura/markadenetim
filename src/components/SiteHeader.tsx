'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Dictionary } from '@/content/tr';
import { onScrollFrame } from '@/lib/scrollFrame';
import styles from './SiteHeader.module.css';

const FOCUSABLE = 'a[href], button:not([disabled])';

export function SiteHeader({ t }: { t: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  // mounted: menü DOM'da (hidden kalkmış); open: geçiş sınıfı uygulanmış
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  /* Scroll'da zemin + aşağıda gizlen, yukarıda görün. Sayfanın ortak scroll karesini paylaşır. */
  useEffect(() => {
    let lastY = -1;
    return onScrollFrame(({ y, vh }) => {
      if (lastY < 0) lastY = y;
      setScrolled(y > 24);
      // Küçük titreşimleri yok say; hero'nun ilk yarısında header hep görünür kalsın
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > vh * 0.5);
        lastY = y;
      }
    });
  }, []);

  const openMenu = () => {
    setMenuMounted(true);
    document.documentElement.classList.add('is-locked');
    // hidden kalktıktan sonraki karede sınıf ekle ki geçiş çalışsın
    requestAnimationFrame(() => requestAnimationFrame(() => setMenuOpen(true)));
  };

  const closeMenu = useCallback((restoreFocus = true) => {
    setMenuOpen(false);
    document.documentElement.classList.remove('is-locked');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(() => setMenuMounted(false), reduce ? 0 : 400);
    if (restoreFocus) openBtnRef.current?.focus();
  }, []);

  /* Menü açıkken: odak tuzağı + ESC */
  useEffect(() => {
    if (!menuMounted) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return closeMenu();
      if (e.key !== 'Tab' || !menuRef.current) return;
      const items = Array.from(menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
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
  }, [menuMounted, closeMenu]);

  const headerClass = [styles.header, scrolled && styles.scrolled, hidden && !menuMounted && styles.hidden]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={headerClass}>
        <div className={`container ${styles.inner}`}>
          <a className={styles.brandLink} href="/#top" aria-label={`MarkaDenetim - ${t.footer.descriptor}`}>
            <Image
              src="/brand/logo-monogram.svg"
              alt="MarkaDenetim Monogram"
              width={64}
              height={35}
              priority
              className={styles.brandMonogram}
            />
            <div className={styles.brandTextGroup}>
              <Image
                src="/brand/logo-wordmark.svg"
                alt="MarkaDenetim"
                width={130}
                height={20}
                priority
                className={styles.brandWordmark}
              />
              <span className={styles.brandSubtitle}>
                {t.footer.descriptor}
              </span>
            </div>
          </a>

          <nav className={styles.nav} aria-label={t.a11y.mainNav}>
            <ul className={styles.navList}>
              {t.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a className={`btn-frame ${styles.cta}`} href={t.cta.href}>
            {t.cta.label}
          </a>

          <button
            ref={openBtnRef}
            className={styles.toggle}
            type="button"
            aria-expanded={menuMounted}
            aria-controls="mobile-menu"
            onClick={openMenu}
          >
            <span className="sr-only">{t.a11y.openMenu}</span>
            <span className={styles.lines} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobil menü: tam ekran koyu katman, büyük serif linkler, altta iletişim */}
      <div
        ref={menuRef}
        className={`${styles.menu}${menuOpen ? ` ${styles.open}` : ''}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t.a11y.menu}
        hidden={!menuMounted}
      >
        <div className={`container ${styles.menuTop}`}>
          <a className={styles.brandLink} href="/#top" aria-label={`MarkaDenetim - ${t.footer.descriptor}`} onClick={() => closeMenu(false)}>
            <Image
              src="/brand/logo-monogram.svg"
              alt="MarkaDenetim Monogram"
              width={60}
              height={33}
              className={styles.brandMonogram}
            />
            <div className={styles.brandTextGroup}>
              <Image
                src="/brand/logo-wordmark.svg"
                alt="MarkaDenetim"
                width={120}
                height={19}
                className={styles.brandWordmark}
              />
              <span className={styles.brandSubtitle}>
                {t.footer.descriptor}
              </span>
            </div>
          </a>
          <button ref={closeBtnRef} className={styles.close} type="button" onClick={() => closeMenu()}>
            <span className="sr-only">{t.a11y.closeMenu}</span>
            <span className={styles.closeLines} aria-hidden="true" />
          </button>
        </div>
        <nav className={`container ${styles.menuNav}`} aria-label={t.a11y.mobileNav}>
          <ul>
            {t.nav.map((item) => (
              <li key={item.href}>
                {/* Bölüme gidilince menü kapanır; odak butona dönmez, kaydırma hedefe gider */}
                <a href={item.href} onClick={() => closeMenu(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`container ${styles.menuFoot}`}>
          <a className="btn-frame" href={t.cta.href} onClick={() => closeMenu(false)}>
            {t.cta.label}
          </a>
          <dl className={styles.contact}>
            <div>
              <dt className="label">{t.contact.phoneLabel}</dt>
              <dd>{t.contact.phone}</dd>
            </div>
            <div>
              <dt className="label">{t.contact.emailLabel}</dt>
              <dd>{t.contact.email}</dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
