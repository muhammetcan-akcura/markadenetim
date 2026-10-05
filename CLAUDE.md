# MarkaDenetim — Proje Hafızası

## Proje
MarkaDenetim Yeminli Mali Müşavirlik ve Denetim A.Ş. için tek sayfalık kurumsal landing page.
Dil: Türkçe (`lang="tr"`). Yapı, ileride EN eklenebilecek şekilde kurulur.

**Tasarım, bölüm spesifikasyonu, renk, tipografi, hareket ve içerik tonu için tek kaynak:** @docs/BRIEF.md
Tasarımla ilgili her karardan önce BRIEF.md okunur. Bu dosya yalnızca çalışma şeklini, teknik standartları ve doğrulama sürecini tanımlar.

## Öncelik sırası
Tasarım kalitesi > Güven algısı > Performans > Erişilebilirlik > Gösteriş.

## Teknik yığın
- Next.js (App Router) + TypeScript. Sayfalar mümkün olduğunca statik üretilir (SSG); SEO için içerik sunucuda HTML olarak gelmeli.
- **Tailwind ve hazır UI kütüphanesi (shadcn, MUI vb.) kullanılmaz.** Stil: düz CSS (global token dosyası + bölüm bazlı CSS Modules).
- `"use client"` yalnızca gerçekten gerekli yerlerde (menü, scroll efektleri, form). Geri kalan her şey Server Component.
- Animasyon: CSS + IntersectionObserver. Framer Motion / GSAP için önce gerekçe yaz ve onay iste.
- Fontlar `next/font` ile (CLS ve performans için). Görseller `next/image` ile.
- Yeni bağımlılık eklemeden önce gerekçeyi yazıp onay iste.
- Playwright yalnızca geliştirme aracıdır (screenshot için), siteye dahil edilmez.
- Dosya yapısı:
  ```
  src/
    app/
      layout.tsx, page.tsx, globals.css
      kvkk/ gizlilik/ cerez/        (yasal sayfalar)
      not-found.tsx, error.tsx, global-error.tsx
      sitemap.ts, robots.ts
    components/   (Header, Hero, Statement, Services, About, Break, Approach, Trust, Insights, Contact, Footer)
    styles/       tokens.css
  public/         görseller
  scripts/        screenshot.mjs
  screenshots/    (git'e eklenmez)
  docs/           BRIEF.md, CONTENT.md
  ```
- Geliştirme: `npm run dev` → `http://localhost:3000`
- Performans ve screenshot doğrulaması için üretim sürümü: `npm run build && npm run start`

## Çalışma şekli
1. **Önce plan, sonra kod.** Her yeni aşamada kısa bir plan sun, onay al.
2. **Bölüm bölüm ilerle.** Tüm siteyi tek seferde üretme. Sıra: tokens + base → Header + Hero + Marka beyanı → diğer bölümler (BRIEF.md sırasıyla).
3. **Her bölüm sonrası dur.** 3–5 satırlık özet ver: ne yapıldı, hangi yer tutucular kaldı, hangi karar onay bekliyor.
4. **Büyük kararlar sorulur:** font seçimi, token sapması, yeni bağımlılık, bölüm kompozisyonunu değiştirme.
5. **Kapsam disiplini:** İstenmeyen bölümü veya özelliği ekleme. Kaldırılabilecek element varsa öner.
6. Tasarım kararlarına kod içinde kısa gerekçe yorumu yaz.

## Görsel doğrulama (screenshot döngüsü) — ZORUNLU
Bir bölümü "bitti" demeden önce kodu değil, **görüneni** değerlendir. Kod doğru görünüp ekranda kötü olabilir.

### Kurulum (bir kez)
```
npm i -D playwright
npx playwright install chromium
```
`scripts/screenshot.mjs` mevcuttur. Yoksa aynı işi yapan bir betik oluştur.

### Komutlar
```
# Sunucu açık olmalı (npm run dev, port 3000)
node scripts/screenshot.mjs                    # tüm sayfa, tüm kırılımlar
node scripts/screenshot.mjs "#hero" hero       # tek bölüm (seçici + dosya adı)
```
Not: Dev modunda animasyon ve font davranışı üretimden farklı olabilir. Bölüm tamamlanmadan önce son kontrolü `npm run build && npm run start` ile al.
Çıktı: `screenshots/<ad>-<genişlik>.png`. Varsayılan kırılımlar: 390 (mobil), 768 (tablet), 1440 (masaüstü).

### Döngü
1. Kodu yaz veya değiştir.
2. Sunucunun açık olduğunu doğrula, screenshot al.
3. Üretilen PNG dosyalarını **view/oku** (görseli gerçekten incele).
4. BRIEF.md'deki ilgili bölüm spesifikasyonu ve yasaklar listesiyle karşılaştır; somut sorunları listele (hizalama, boşluk, hiyerarşi, taşma, kontrast, mobil kırılma, Türkçe karakter).
5. Düzelt, tekrar screenshot al. En az bir düzeltme turu yapmadan bölümü bitirme.
6. Son halin kısa değerlendirmesini yaz: "Neyi düzelttim, neyi bilerek bıraktım."

### Kontrol edilecekler
- Masaüstü ve mobilde **ayrı kompozisyon** var mı (küçültülmüş masaüstü gibi durmamalı)?
- Yatay taşma, kesilen metin, üst üste binen element var mı?
- Başlık satır kırılmaları doğal mı (tek kelime yetim satır, kötü bölünme)?
- `İ ı Ğ Ş Ç Ö Ü` doğru görünüyor mu?
- Reveal animasyonları tamamlandıktan sonraki hâl doğru mu?
- Ekranı 3 saniye bakışla değerlendir: ciddi, sakin, güven veren bir his var mı?

Screenshot almadan "tamamlandı" deme.

## Kod standartları
- Semantik HTML (`header, main, section, nav, footer`), her section için `aria-labelledby`, tek `h1`.
- Klavye ile tam kullanım, görünür focus, skip link, form etiketleri, `prefers-reduced-motion` desteği.
- Dokunma hedefleri ≥ 44px. Mobil menüde focus trap ve ESC ile kapanma.
- Görsellerde anlamlı `alt`, `width/height`, hero hariç `loading="lazy"`.
- Font: `next/font` (`display: 'swap'`), subset `latin` + `latin-ext` (Türkçe karakterler için).
- Hedef: Lighthouse ≥ 95 (Performance, Accessibility, Best Practices, SEO), LCP < 2.0s, CLS ≈ 0.
- SEO (Next.js Metadata API ile): title, meta description, Open Graph, canonical, `lang="tr"`, `sitemap.ts`, `robots.ts`, `Organization` + `ProfessionalService` JSON-LD (yer tutucu verilerle). Tek `h1`, anlamlı başlık hiyerarşisi, görsellerde `alt`.
- İletişim formu: Netlify Forms (`public/__forms.html` statik tanım + `ContactForm.tsx` urlencoded POST); honeypot, istemci doğrulaması, KVKK onayı zorunlu. Alan adları iki dosyada aynı kalmalı. Bildirim e-postası Netlify panelinden ayarlanır.
- Hardcoded renk/ölçü yok; token değişkenleri kullanılır.
- Temiz, yorumlu, okunabilir kod. Ölü kod ve kullanılmayan CSS bırakma.

## Veri ve içerik güvenliği
- **Uydurma veri yasak:** müşteri sayısı, yıl, yüzde, ödül, sertifika, ekip, adres, telefon, lisans no.
- Gerçek bilgi yoksa görünür yer tutucu: `[BİLGİ GİRİLECEK]`.
- Görsel yoksa yer tutucu + üretim notu bırak.
- YMM reklam kısıtları: karşılaştırmalı veya üstünlük iddialı ifade yok.
- KVKK: form onay kutusu, aydınlatma metni linki, çerez bildirimi.

## Git
- Her tamamlanan bölüm sonrası anlamlı bir commit (örn. `feat: hero bölümü`).
- `.gitignore`: `node_modules/`, `screenshots/`.
- Onay olmadan force push veya geçmiş değiştirme yok.

## Teslim ve yayın öncesi
Her aşama sonunda: tamamlananlar, açık yer tutucular, onay bekleyen kararlar.
Yayın öncesi hatırlat:
- Hukuk / meslek odası (TÜRMOB) reklam kuralları kontrolü
- KVKK aydınlatma metni ve çerez politikasının gerçek metinleri
- Tüm `[BİLGİ GİRİLECEK]` yer tutucuları temizlendi mi
- Lighthouse raporu ve 360–1920px kırılım testi

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
