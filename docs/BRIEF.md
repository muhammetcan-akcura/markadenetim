# MarkaDenetim — Tasarım ve İçerik Brief'i

**Marka:** MarkaDenetim
**Tam unvan:** MarkaDenetim Yeminli Mali Müşavirlik ve Denetim A.Ş.
**Çıktı:** Tek sayfalık, üretim kalitesinde kurumsal landing page.

Teknik standartlar, çalışma şekli ve screenshot süreci için: `CLAUDE.md`.

---

## 00 — Rol ve hedef

Rol: editorial tasarım, marka kimliği ve ön yüz işini birlikte yapan kıdemli art director + front-end geliştirici.

Hedef: Türkiye'deki YMM ve bağımsız denetim sektöründe tasarım kalitesi, kurumsal algı ve güven hissi açısından **referans gösterilecek** bir site.

İlk 3 saniyede ziyaretçi şunu hissetmeli:
> "Bu sıradan bir mali müşavirlik firması değil. Sakin, güçlü ve çok ciddi bir yapı."

Başarı ölçütü: Siteyi gören bir CFO veya yönetim kurulu üyesi "Bunu büyük bir tasarım ajansı yapmış" demeli.

---

## 01 — Referans analizi

Aşağıdaki siteleri **kopyalamak için değil, prensip çıkarmak için** incele.

| Site | Öğrenilecek | Kaçınılacak |
|---|---|---|
| deloitte.com | Büyük, cesur tipografi; marka rengi disiplini; görsel hiyerarşi netliği | Mega-menü yoğunluğu; aşırı içerik katmanı |
| pwc.com.tr | Editorial içerik düzeni; bölümler arası ritim; içgörü alanlarının sunumu | Şablon tekrarı; kart ağırlıklı yapı |
| kpmg.com/tr | Sade ve düzenli grid; okunabilir içerik hiyerarşisi | Genel kurumsal soğukluk; jenerik görsel dili |
| gureli.com.tr | Yerel YMM markası olarak sade, güven veren ton | Tasarımda sıradanlaşma riski |
| bdo.com.tr | Net hizmet yapısı; erişilebilir navigasyon | Bilgi yoğunluğu; hizmet listesi görünümü |

**Ortak tespit:** Büyük ağlar kalabalık, çok katmanlı ve şablonlu. MarkaDenetim'in farkı:
**tek net fikir, çok az element, çok yüksek işçilik.**

Her bölüm için sor: "Bu bölüm referans sitelerde birebir görülebilir mi?" Evet ise tasarımı değiştir.

**Kendi gözlemlerim (kullanıcı dolduracak):**
- [Referans sitelerde beğendiğim somut şeyler buraya eklenecek]

---

## 02 — Tasarım felsefesi

Dil: premium, minimal, editorial, sofistike, kurumsal, zamansız, kendinden emin.

**Kesinlikle kaçınılacaklar:**
- Hazır template / WordPress tema hissi
- Her bölümde aynı kart yapısı
- Gradient metin, gereksiz gradient, glassmorphism
- Pill buton, yuvarlak köşe (radius 0–2px, istisna yok)
- Rastgele blob/soyut şekil, her yerde gölge
- Fazla ikon (neredeyse sıfır)
- SaaS / fintech / startup görünümü
- Stock fotoğraf klişeleri (hesap makinesi, para, grafik, el sıkışma, takım elbiseli iş insanı)
- Yapay hissettiren başlıklar, gereksiz İngilizce terimler

**Prensip:** Premium tasarım = daha fazla element değil, daha iyi kararlar. Bazı bölümler bilinçli olarak çok sade kalmalı. Her kararın bir gerekçesi olmalı.

---

## 03 — Tasarım token'ları (kesin değerler)

### Renk
```
--navy-950:   #070D1A   /* en koyu zemin */
--navy-900:   #0B1426   /* ana koyu */
--navy-800:   #101D36
--navy-700:   #1A2B4A
--charcoal:   #2A2F38
--stone-500:  #8A8F98   /* ikincil metin */
--stone-300:  #C9CCD1   /* koyu zeminde ince çizgi */
--warm-100:   #F6F3EE   /* ana açık zemin */
--warm-50:    #FBF9F6
--ink:        #0E1117   /* açık zeminde metin */
--gold:       #B89B6A   /* champagne / muted bronze, TEK vurgu */
--gold-soft:  rgba(184,155,106,.35)
```
**Altın kuralı:** Sayfa alanının %2'sinden azı. Yalnızca 1px çizgi, hover detayı, küçük numara/etiket, imleç vurgusu. Altın dolgu veya altın buton yok.

Kontrast: tüm metinler WCAG AA (normal metin ≥ 4.5:1).

### Tipografi
- Başlık: modern editorial serif (**Fraunces**, **Newsreader**, **Instrument Serif**; Playfair Display kullanma). Seçimi gerekçelendir.
- Gövde/UI: **Geist**, **Manrope** veya **Inter**.
- **Onaylı sapma (Ekim 2026):** Başlık **Source Serif 4** (optik boyut ekseniyle, ağırlık 400), gövde **IBM Plex Sans**. Newsreader + Manrope jenerik bir "yapay zekâ sitesi" görünümü verdiği için değiştirildi; Inter ve Geist aynı nedenle kullanılmaz.
- Küçük etiketler: büyük harf, letter-spacing 0.12–0.18em, 11–12px.
- Türkçe karakter ve büyük harf dönüşümünü doğrula. `uppercase` kullanırken `lang="tr"` set et.

Ölçek (`clamp()` ile akışkan):
```
Display (hero):  clamp(3.5rem, 8vw, 9rem)   line-height 0.98   tracking -0.025em
H2 (bölüm):      clamp(2.25rem, 5vw, 5rem)  line-height 1.04
H3:              clamp(1.5rem, 2.4vw, 2.25rem)
Gövde:           1.0625rem / 1.65  (max-width 62ch)
Etiket:          0.75rem, uppercase, tracking .16em
```
Serif yalnızca büyük başlık ve alıntıda. Gövde ve UI her zaman sans.

### Grid ve boşluk
- 12 kolon, container max 1440px, yan boşluk `clamp(20px, 5vw, 80px)`.
- 8px baz spacing. Bölüm dikey boşlukları **farklı** (96 / 160 / 240px gibi).
- Asimetrik yerleşim: metin 5–7 kolon, görsel 4–6 kolon.
- Yapıyı 1px ince çizgiler kurar (kartlar yerine).

### Hareket
- Süreler: 200ms (hover) / 600–900ms (reveal) / 1200ms (hero giriş).
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Yalnızca `transform` ve `opacity`.
- `prefers-reduced-motion: reduce` durumunda hareket kapalı.
- Animasyon fark edilmemeli ama kaliteyi hissettirmeli.

---

## 04 — Bölüm bölüm spesifikasyon

Her bölümün **farklı bir kompozisyonu** olmalı. Sıra ve ritim zorunlu.

### 4.1 Header / Navigasyon
- Sol: **MARKADENETİM** wordmark (geniş harf aralığı, logo işareti yok, sadece tipografi).
- Orta/sağ: Hakkımızda · Hizmetler · Yaklaşımımız · Güncel · İletişim
- Sağ uç: **İletişime Geç** (ince çerçeveli dikdörtgen, radius 0; hover'da altın alt çizgi veya dolgu kayması).
- Hero üzerinde şeffaf; scroll'da `--navy-900` yarı opak zemin (blur yok), yükseklik küçülür.
- Aşağı kaydırırken gizlenir, yukarı kaydırırken görünür.
- Mobil: iki çizgili minimal menü, tam ekran koyu overlay, büyük serif linkler, altta telefon/e-posta. Focus trap ve ESC ile kapanma.

### 4.2 Hero (sayfanın en güçlü bölümü)
- 100svh, koyu zemin (`--navy-900`).
- Büyük serif headline, 3 satır:
  > Finansal güven.
  > Stratejik bakış.
  > Sürdürülebilir yapı.
- Altında tek cümlelik açıklama (≤ 20 kelime) ve minimal CTA (metin + ince ok, buton kutusu değil).
- Sağ/alt tarafta kontrollü görsel: mimari detay, belge/rapor makro çekimi, geometrik cephe. **Gerçek görsel yoksa** CSS/SVG ile geometrik kompozisyon (ince çizgiler, kesişen düzlemler); stock fotoğraf taklidi yapma.
- İnce scroll göstergesi (1px dikey çizgi, yavaş hareket).
- Giriş: satır satır text reveal (maske içinden yukarı kayma), toplam ≤ 1.2s.
- Sol altta küçük etiket: `YEMİNLİ MALİ MÜŞAVİRLİK VE DENETİM`.

### 4.3 Marka beyanı
- Açık zemin (`--warm-100`), çok geniş boşluk.
- Dev serif ifade (3–4 satır):
  > Rakamların ötesinde, işletmelerin geleceğine daha net bakmak.
- Altında sağa kaydırılmış küçük açıklama paragrafı (en fazla 3 cümle).
- Scroll'da kelime kelime opaklık geçişi (0.25 → 1). Başka öğe yok.

### 4.4 Hizmetler — "Uzmanlık Alanlarımız"
- Kart yok. Sol kolonda sticky başlık; sağda ince çizgilerle ayrılmış büyük **editorial liste**:
  01 Yeminli Mali Müşavirlik · 02 Denetim · 03 Vergi Danışmanlığı · 04 Finansal Danışmanlık
- Her satır: numara (altın, küçük) + büyük serif başlık + sağda ok.
- Hover: başlık 12–16px sağa kayar, altın çizgi soldan uzar, kısa açıklama ve (varsa) imleci takip eden küçük önizleme belirir.
- Mobilde accordion.
- Satır yüksekliği ≥ 120px (masaüstü).

### 4.5 Hakkımızda
- Asimetrik iki kolon: solda büyük dikey editorial görsel (parallax en fazla %6), sağda **MarkaDenetim** başlığı ve 2 paragraf güçlü metin.
- Altında ikonsuz, ince çizgiyle ayrılmış dikey liste: 01 Uzmanlık · 02 Güven · 03 Disiplin · 04 Şeffaflık (her biri tek cümle).
- Görsel reveal: clip-path ile perde gibi açılma.

### 4.6 Görsel kırılma
- Tam genişlik, tam ekran, `--navy-950`. Koyu, kısık tonlu görsel veya geometrik kompozisyon.
- Ortada tek ifade:
  > Doğru kararlar, doğru finansal perspektifle başlar.
- Başka element yok. Sayfanın ritmini kıran sessiz bir an.

### 4.7 Yaklaşımımız
- Kart/timeline yok. Dört aşama dev tipografiyle: **ANALİZ → DEĞERLENDİRME → STRATEJİ → SONUÇ**
- Masaüstü: scroll ile sıradaki aşama öne çıkar (sticky; diğerleri soluk). İnce dikey ilerleme çizgisi.
- Her aşamada 2 cümlelik açıklama.
- Mobil: dikey yığın, görünen aşama vurgulanır.

### 4.8 Güven bölümü
- **Uydurma rakam, müşteri sayısı, yıl, yüzde yazma.**
- Güveni şunlarla kur: bağımsızlık ve gizlilik taahhüdü, mesleki standartlara bağlılık ifadesi, çalışma ilkeleri, yetki/lisans bilgileri için işaretli yer tutucular (`[GERÇEK VERİ GİRİLECEK]`).
- Düzen: geniş boşluk, tek büyük ilke cümlesi + yanında ince çizgili 3 taahhüt maddesi.

### 4.9 Güncel / Insights (magazine yaklaşımı)
- Blog grid'i değil: 1 büyük manşet (sol, 7 kolon) + 2 küçük içerik (sağ, üst üste, 5 kolon).
- Kategoriler: Vergi · Denetim · Finans (küçük altın etiket).
- Başlık serif; tarih ve okuma süresi küçük gri.
- Hover: başlıkta alt çizgi, görselde hafif ölçek (1.03, 700ms).
- Başlıklar gerçekçi ve sektörel olsun (örn. "Transfer fiyatlandırması belgelendirmesinde sık yapılan hatalar"), ama yer tutucu olarak işaretle.

### 4.10 İletişim (güçlü kapanış)
- Koyu zemin (`--navy-900`), 100svh'a yakın.
- Dev serif headline:
  > Finansal yapınızı daha net değerlendirelim.
- Altında **İletişime Geç** (ana CTA).
- İletişim bilgileri iki kolonda: adres, telefon, e-posta, çalışma saatleri (yer tutucu).
- Form: ad soyad, şirket, e-posta, konu, mesaj. Alt çizgili alanlar (kutu yok). KVKK onay kutusu zorunlu, aydınlatma metnine bağlantılı. Honeypot anti-spam. Başarı/hata durumları tasarlanmış.

### 4.11 Footer
- Sade. **MARKADENETİM** + altında *Yeminli Mali Müşavirlik ve Denetim A.Ş.*
- 5 linkten fazla navigasyon yok.
- En altta: © yıl, Gizlilik / KVKK Aydınlatma / Çerez Politikası.
- Link duvarı yok.

---

## 05 — İçerik ve dil kuralları

- Ton: sakin, net, kendinden emin. Abartı, ünlem, "en iyi", "lider", "benzersiz" yok.
- Kısa cümleler, aktif çatı. Türkçe karşılığı olan İngilizce terim kullanılmaz.
- Türkçe yazım kurallarına uygun (kesme işareti, "de/da", büyük/küçük harf).
- **Gerçek bilgi yoksa uydurma:** sayı, referans müşteri, ödül, sertifika, ekip, adres. Görünür yer tutucu kullan: `[BİLGİ GİRİLECEK]`.
- Stok kişi fotoğrafı veya sahte ekip yok.

---

## 06 — Sektörel ve hukuki uyum

- YMM ve denetim firmalarının reklam/tanıtım faaliyetleri meslek mevzuatı ve etik kurallarla sınırlıdır. Karşılaştırmalı, üstünlük iddialı veya müşteri çekmeye yönelik agresif ifade kullanma.
- Yayın öncesi hukuk / meslek odası kontrolü gerektiği son notlarda belirtilir.
- KVKK: aydınlatma metni, açık rıza (form), çerez bildirimi (analitik varsa onaya bağlı).
- Müşteri sırlarına ima eden içerik yok.

---

## 07 — Görsel yön

- Fotoğraf stili: düşük doygunluk, yumuşak doğal ışık, derin gölgeler, navy-tonlu renk dengesi.
- Konular: mimari cepheler, merdiven/cam/beton detayları, kağıt ve mürekkep makro çekimleri, sessiz modern ofis iç mekânı, insansız veya yüzsüz kompozisyon.
- Görsel dosya yoksa her görsel için net bir **yer tutucu + üretim notu** bırak (örn. "Dikey 4:5, beton merdiven detayı, yumuşak kuzey ışığı, navy ton").

---

## 08 — Etkileşim detayları (sessiz)

- Metin reveal (satır maskesi), görsel reveal (clip-path), çizgi uzaması
- Navigasyon scroll davranışı
- Hizmet satırı hover önizlemesi
- Özel imleç **yalnızca** hizmet ve görsel alanlarında; küçük, minimal; dokunmatikte kapalı
- Anchor linklerde yumuşak kaydırma (`scroll-margin-top`)
- Hiçbir bölümde 2'den fazla animasyon türü yok

---

## 09 — Mobil (yeniden tasarla, küçültme)

- Mobil-first: güçlü tipografi, net dikey ritim.
- Hero: başlık 3 satır, CTA başparmak erişiminde.
- Hizmetler: accordion. Yaklaşım: dikey vurgulu yığın. Insights: yatay kaydırma yerine manşet + liste.
- Sabit alt CTA çubuğu **yok**; CTA menüde ve kapanışta belirgin olsun.
- Test: 360, 390, 768, 1024, 1440, 1920px.

---

## 10 — Yasaklar (özet kontrol listesi)

- [ ] Aynı kart yapısının tekrarı
- [ ] Gradient, glass, blob, yoğun gölge
- [ ] Pill buton, yuvarlak köşe, ikon yığını
- [ ] Sahte istatistik / müşteri / ödül
- [ ] Stock klişe görsel
- [ ] "Lider, en iyi, benzersiz" iddiaları
- [ ] Bir bölümde 2'den fazla animasyon türü
- [ ] Tüm bölümlerin aynı yükseklik ve boşlukta olması

---

## 11 — Son kalite kontrolü (her bölüm sonunda)

1. Referans sitelerden herhangi birine benziyor mu? Benziyorsa değiştir.
2. Her bölümün kompozisyonu birbirinden farklı mı?
3. Altın, toplam alanın %2'sinin altında mı?
4. 3 saniyelik ekran görüntüsünden "premium ve ciddi" hissi var mı?
5. Uydurma veri var mı? (Olmamalı.)
6. Mobil, masaüstünün küçültülmüş hâli gibi mi duruyor? (Durmamalı.)
7. Kaldırabileceğim bir element var mı? Varsa kaldır.

**DESIGN QUALITY > HER ŞEY.**
Az element, yüksek işçilik. Cesur ol, ama güveni ve kurumsallığı asla kaybetme.