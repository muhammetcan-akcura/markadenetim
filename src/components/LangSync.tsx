'use client';

import { useEffect } from 'react';

/*
  <html lang> değerini bulunulan dile eşitler. Kök layout tek (Türkçe) olduğu için sunucu
  HTML'i lang="tr" ile gelir; /en altındaki içerik ayrıca lang="en" ile sarılır (ekran okuyucu,
  büyük harf dönüşümü). Bu bileşen belge düzeyindeki değeri de düzeltir ve sayfadan
  çıkılınca eski değere döndürür (istemci tarafı geçişlerde Türkçe sayfaya dönüş).
*/
export function LangSync({ lang }: { lang: string }) {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.lang;
    root.lang = lang;
    return () => {
      root.lang = previous;
    };
  }, [lang]);
  return null;
}
