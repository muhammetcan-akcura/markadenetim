'use client';

import { useSyncExternalStore } from 'react';

// Çerez onayı. Tercih çerezde değil localStorage'da tutulur: onayı saklamak için çerez
// yerleştirmeye gerek yok. Değer yoksa tercih verilmemiştir ve bildirim görünür.
// Sürüm alanı: ileride analitik gibi yeni bir amaç eklenirse sürüm artırılır, bildirim yeniden sorulur.

export type Consent = 'all' | 'necessary';

const KEY = 'md-consent';
const VERSION = 1;
const EVENT = 'md-consent-change';

function read(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as { v?: number; value?: Consent };
    return data.v === VERSION && (data.value === 'all' || data.value === 'necessary') ? data.value : null;
  } catch {
    // Gizli sekme / engellenmiş depolama: tercih yok sayılır, bildirim yeniden gösterilir
    return null;
  }
}

export function setConsent(value: Consent | null) {
  try {
    if (value) localStorage.setItem(KEY, JSON.stringify({ v: VERSION, value, at: new Date().toISOString() }));
    else localStorage.removeItem(KEY);
  } catch {
    /* depolama yoksa tercih yalnızca bu sayfa görünümünde geçerli olur */
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  // Başka sekmede verilen tercih bu sekmeye de yansır
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

/**
 * Sunucuda ve ilk hidrasyonda 'pending' döner: tercih istemcide bilinmeden hiçbir şey
 * çizilmez (geri gelen ziyaretçide bildirim bir an görünüp kaybolmaz).
 */
export function useConsent(): Consent | null | 'pending' {
  return useSyncExternalStore(subscribe, read, () => 'pending' as const);
}
