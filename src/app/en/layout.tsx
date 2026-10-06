import { LangSync } from '@/components/LangSync';

/*
  İngilizce bölümün layout'u (/en/...). Kök layout tek kalır; iki kök layout + deneysel
  global-not-found yerine bu yol seçildi (Next 16 belgesi: çoklu kök layout'ta eşleşmeyen
  adresler için 404 yalnızca deneysel global-not-found ile çalışıyor).
  - İçerik lang="en" ile sarılır: ekran okuyucu telaffuzu ve CSS büyük harf dönüşümü (i → I).
  - İlk boyamadan önce <html lang> güncellenir; LangSync istemci geçişlerinde senkron tutar.
  `display: contents`: sarmalayıcı düzeni etkilemez.
*/
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" style={{ display: 'contents' }}>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='en'" }} />
      <LangSync lang="en" />
      {children}
    </div>
  );
}
