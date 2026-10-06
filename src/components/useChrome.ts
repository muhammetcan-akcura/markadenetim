'use client';

import { usePathname } from 'next/navigation';
import type { ChromeText, ChromeTexts } from '@/lib/chrome';
import { localeFromPath } from '@/lib/i18n';

/** Kök bileşenler için bulunulan sayfanın dilindeki metinler */
export function useChrome(texts: ChromeTexts): ChromeText {
  return texts[localeFromPath(usePathname())];
}
