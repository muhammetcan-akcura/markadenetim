'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import type { Dictionary } from '@/content/tr';
import { routes } from '@/lib/routes';
import { onScrollFrame } from '@/lib/scrollFrame';
import { ArrowIcon } from './ArrowIcon';
import { Flag } from './Flag';
import { LangSwitch } from './LangSwitch';
import styles from './SiteHeader.module.css';

const FOCUSABLE = 'a[href], button:not([disabled])';

type MenuLink = { href: string; label: string; meta?: string };
/** Açılır menü içeriği; anahtar, t.nav'daki üst bağlantının href'i */
export type NavMenus = Record<
  string,
  { wide?: boolean; groups: { label?: string; items: MenuLink[] }[]; all?: MenuLink }
>;

/* Aşağı bakan küçük ok: alt menü olduğunu gösterir (tek işlevsel ikon) */
function Chevron({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 10 6" aria-hidden="true" focusable="false">
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}

export type LanguageLink = {
  locale: string;
  short: string;
  name: string;
  home: string;
  current: boolean;
  map: Record<string, string>;
};

export function SiteHeaderClient({ t, menus, languages }: { t: Dictionary; menus: NavMenus; languages: LanguageLink[] }) {
  const pathname = usePathname();
  // Bulunduğumuz sayfanın diğer dildeki hedefi; tabloda yoksa o dilin ana sayfası
  const langHref = (l: LanguageLink) => (l.current ? pathname : (l.map[pathname] ?? l.home));
  const langOptions = languages.map((l) => ({ locale: l.locale, short: l.short, name: l.name, current: l.current, href: langHref(l) }));
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  // mounted: menü DOM'da (hidden kalkmış); open: geçiş sınıfı uygulanmış
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Masaüstü açılır panel (href anahtarı) ve mobil menüde açık alt liste
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const closeTimer = useRef<number>(0);

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

  /* Header gizlenince açık panel de kapanır */
  useEffect(() => {
    if (hidden) setDropdown(null);
  }, [hidden]);

  /* Açılır panel: fareyle girince açılır, çıkınca kısa gecikmeyle kapanır (çapraz geçişte
     panel kaybolmasın). ESC kapatır ve odağı tetikleyici butona döndürür. */
  const openDropdown = (key: string) => {
    window.clearTimeout(closeTimer.current);
    setDropdown(key);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setDropdown(null), 160);
  };
  useEffect(() => {
    if (!dropdown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      document.querySelector<HTMLButtonElement>(`[data-dropdown-toggle="${dropdown}"]`)?.focus();
      setDropdown(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [dropdown]);

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
          <a className={styles.brandLink} href={routes[t.locale].top} aria-label={`MarkaDenetim - ${t.footer.descriptor}`}>
            {/* Kaşe monogramı + yazı: kılavuzdaki yatay logonun oranları (unvan bu boyutta okunmaz; aria-label'da) */}
            <Image
              src="/brand/markadenetim-monogram-kucuk-koyu-zemin.svg"
              alt=""
              width={42}
              height={34}
              priority
              className={styles.brandMonogram}
            />
            <Image
              src="/brand/markadenetim-yazi-koyu-zemin.svg"
              alt="MarkaDenetim"
              width={128}
              height={12}
              priority
              className={styles.brandWordmark}
            />
          </a>

          <nav className={styles.nav} aria-label={t.a11y.mainNav}>
            <ul className={styles.navList}>
              {t.nav.map((item) => {
                const menu = menus[item.href];
                if (!menu) {
                  return (
                    <li key={item.href}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  );
                }
                // Alt menülü öğe: üst bağlantı gezinir, yanındaki buton paneli açar (disclosure deseni)
                const isOpen = dropdown === item.href;
                const panelId = `dd-${item.href.replace(/[^a-z]/g, '')}`;
                return (
                  <li
                    key={item.href}
                    className={styles.hasMenu}
                    onMouseEnter={() => openDropdown(item.href)}
                    onMouseLeave={scheduleClose}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDropdown(null);
                    }}
                  >
                    <a href={item.href}>{item.label}</a>
                    <button
                      type="button"
                      className={styles.ddToggle}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      data-dropdown-toggle={item.href}
                      onClick={() => (isOpen ? setDropdown(null) : openDropdown(item.href))}
                    >
                      <span className="sr-only">
                        {item.label} {t.navMenu.submenu}
                      </span>
                      <Chevron className={styles.chevron} />
                    </button>
                    <div
                      id={panelId}
                      className={`${styles.dd}${menu.wide ? ` ${styles.ddWide}` : ''}${isOpen ? ` ${styles.ddOpen}` : ''}`}
                    >
                      <div className={styles.ddGroups}>
                        {menu.groups.map((group, gi) => (
                          <div key={group.label ?? gi} className={styles.ddGroup}>
                            {group.label && <p className={`label ${styles.ddLabel}`}>{group.label}</p>}
                            <ul>
                              {group.items.map((link) => (
                                <li key={link.href}>
                                  <a href={link.href} className={styles.ddLink} onClick={() => setDropdown(null)}>
                                    <span className={styles.ddName}>{link.label}</span>
                                    {link.meta && <span className={styles.ddMeta}>{link.meta}</span>}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {menu.all && (
                        <a href={menu.all.href} className={`link-arrow link-arrow--plain ${styles.ddAll}`} onClick={() => setDropdown(null)}>
                          <span>{menu.all.label}</span>
                          <ArrowIcon />
                        </a>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          {langOptions.length > 1 && <LangSwitch options={langOptions} label={t.a11y.language} />}

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
          <a className={styles.brandLink} href={routes[t.locale].top} aria-label={`MarkaDenetim - ${t.footer.descriptor}`} onClick={() => closeMenu(false)}>
            {/* Kaşe monogramı + yazı: kılavuzdaki yatay logonun oranları (unvan bu boyutta okunmaz; aria-label'da) */}
            <Image
              src="/brand/markadenetim-monogram-kucuk-koyu-zemin.svg"
              alt=""
              width={42}
              height={34}
              className={styles.brandMonogram}
            />
            <Image
              src="/brand/markadenetim-yazi-koyu-zemin.svg"
              alt="MarkaDenetim"
              width={128}
              height={12}
              className={styles.brandWordmark}
            />
          </a>
          <button ref={closeBtnRef} className={styles.close} type="button" onClick={() => closeMenu()}>
            <span className="sr-only">{t.a11y.closeMenu}</span>
            <span className={styles.closeLines} aria-hidden="true" />
          </button>
        </div>
        <nav className={`container ${styles.menuNav}`} aria-label={t.a11y.mobileNav}>
          <ul>
            {t.nav.map((item) => {
              const menu = menus[item.href];
              const subOpen = mobileSub === item.href;
              const subId = `m-${item.href.replace(/[^a-z]/g, '')}`;
              return (
                <li key={item.href}>
                  <div className={styles.menuRow}>
                    {/* Bölüme gidilince menü kapanır; odak butona dönmez, kaydırma hedefe gider */}
                    <a href={item.href} onClick={() => closeMenu(false)}>
                      {item.label}
                    </a>
                    {menu && (
                      <button
                        type="button"
                        className={styles.subToggle}
                        aria-expanded={subOpen}
                        aria-controls={subId}
                        onClick={() => setMobileSub(subOpen ? null : item.href)}
                      >
                        <span className="sr-only">
                          {item.label} {t.navMenu.submenu}
                        </span>
                        <Chevron className={styles.chevron} />
                      </button>
                    )}
                  </div>
                  {menu && (
                    <ul id={subId} className={styles.subList} hidden={!subOpen}>
                      {menu.groups.flatMap((group) => group.items).map((link) => (
                        <li key={link.href}>
                          <a href={link.href} className={styles.subLink} onClick={() => closeMenu(false)}>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={`container ${styles.menuFoot}`}>
          <a className="btn-frame" href={t.cta.href} onClick={() => closeMenu(false)}>
            {t.cta.label}
          </a>
          {langOptions.length > 1 && (
            <nav className={styles.menuLangs} aria-label={t.a11y.language}>
              {langOptions.map((o) => (
                <a
                  key={o.locale}
                  href={o.href}
                  hrefLang={o.locale}
                  lang={o.locale}
                  className={styles.menuLang}
                  aria-current={o.current ? 'true' : undefined}
                  onClick={() => closeMenu(false)}
                >
                  <Flag locale={o.locale} className={styles.flag} />
                  {o.name}
                </a>
              ))}
            </nav>
          )}
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
