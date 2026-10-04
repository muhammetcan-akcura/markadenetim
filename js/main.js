/* ==========================================================================
   MarkaDenetim — Etkileşim katmanı
   Bağımlılık yok. Yalnızca transform/opacity değiştirilir; scroll işleri rAF ile tek karede toplanır.
   ========================================================================== */

(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Header: scroll'da zemin + aşağıda gizlen, yukarıda görün ---------- */
  const header = document.querySelector('[data-header]');
  let lastY = window.scrollY;

  function updateHeader() {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    // Küçük titreşimleri yok say; hero'nun ilk ekranında header hep görünür kalsın
    if (Math.abs(y - lastY) > 6) {
      const goingDown = y > lastY && y > window.innerHeight * 0.5;
      header.classList.toggle('is-hidden', goingDown && !document.documentElement.classList.contains('is-locked'));
      lastY = y;
    }
  }

  /* ---------- Marka beyanı: scroll ilerlemesine göre kelime kelime opaklık ---------- */
  const wordsEl = document.querySelector('[data-words]');
  let words = [];

  if (wordsEl) {
    // Metni kelimelere böl; boşlukları metin düğümü olarak koru ki satır kırılımı doğal kalsın
    const text = wordsEl.textContent.trim();
    wordsEl.textContent = '';
    text.split(/\s+/).forEach((word, i, all) => {
      const span = document.createElement('span');
      span.className = 'w';
      span.textContent = word;
      wordsEl.appendChild(span);
      if (i < all.length - 1) wordsEl.appendChild(document.createTextNode(' '));
    });
    words = Array.from(wordsEl.querySelectorAll('.w'));
  }

  function updateWords() {
    if (!words.length || reduceMotion.matches) return;
    const rect = wordsEl.getBoundingClientRect();
    const vh = window.innerHeight;
    // İfadenin üstü ekranın %85'ine girince başla, ifadenin altı %55'e gelince bitir
    const start = vh * 0.85;
    const end = vh * 0.55;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end + rect.height)));
    const span = progress * words.length;
    words.forEach((w, i) => {
      const local = Math.min(1, Math.max(0, span - i));
      w.style.opacity = (0.25 + 0.75 * local).toFixed(3);
    });
  }

  /* ---------- Scroll döngüsü ---------- */
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateHeader();
      updateWords();
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* ---------- Hero girişi ---------- */
  // Fontu bekle ki satırlar yedek fontla açılıp sonra zıplamasın; ama en fazla 700ms
  const hero = document.querySelector('.hero');
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise((r) => setTimeout(r, 700))]).then(() => {
    requestAnimationFrame(() => hero && hero.classList.add('is-in'));
  });

  /* ---------- Mobil menü: odak tuzağı, ESC, link tıklamasında kapanma ---------- */
  const menu = document.querySelector('[data-menu]');
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = menu.querySelector('[data-menu-close]');
  const focusableSel = 'a[href], button:not([disabled])';

  function openMenu() {
    menu.hidden = false;
    document.documentElement.classList.add('is-locked');
    openBtn.setAttribute('aria-expanded', 'true');
    // hidden kalktıktan sonraki karede sınıf ekle ki geçiş çalışsın
    requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add('is-open')));
    closeBtn.focus();
    document.addEventListener('keydown', onMenuKey);
  }

  function closeMenu({ restoreFocus = true } = {}) {
    menu.classList.remove('is-open');
    document.documentElement.classList.remove('is-locked');
    openBtn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', onMenuKey);
    const done = () => { menu.hidden = true; };
    if (reduceMotion.matches) done();
    else setTimeout(done, 400);
    if (restoreFocus) openBtn.focus();
  }

  function onMenuKey(e) {
    if (e.key === 'Escape') { closeMenu(); return; }
    if (e.key !== 'Tab') return;
    const items = Array.from(menu.querySelectorAll(focusableSel));
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', () => closeMenu());
  // Bir bölüme gidilince menü kapanır; odak geri butona dönmez, kaydırma hedefe gider
  menu.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', () => closeMenu({ restoreFocus: false }))
  );
})();
