// Ekip. İsim, unvan ve fotoğraflar firmanın mevcut sitesinden (markadenetim.tr) alındı;
// fotoğraf–isim eşleşmesi oradaki sırayla doğrulandı.
// Özgeçmiş ve iletişim bilgisi kaynağı yok: uydurulmaz, görünür yer tutucu kalır.
// [BİLGİ GİRİLECEK] Yayın öncesi her kişiden metin onayı ve fotoğraf kullanım izni alınmalı (KVKK).

export type TeamMember = {
  slug: string;
  name: string;
  /** Unvan satırları: ilk satır ana unvan */
  titles: string[];
  image: string;
  biography: string;
  email?: string;
  linkedin?: string;
  /** Uzmanlık alanları: biyografiden türetildi, yeni bilgi eklenmedi.
      [BİLGİ GİRİLECEK] Yayın öncesi her kişiye onaylatılmalı. */
  focus?: string[];
  /** Kurucu / sorumlu ortaklar: Hakkımızda'daki ortaklar bölümünde gösterilir */
  lead?: boolean;
  /** Ekip dizininde isim yanındaki küçük etiket (ör. "Sorumlu ortak"); yoksa etiket çıkmaz */
  badge?: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: 'fatih-olgun',
    name: 'Fatih Olgun',
    titles: ['Yeminli Mali Müşavir', 'Yönetim Kurulu Başkanı', 'E. Vergi Müfettişi'],
    image: '/brand/fatih1_JPG.webp',
    biography:
      'Eski Vergi Müfettişi ve Yeminli Mali Müşavir olan Fatih Olgun; tam tasdik, vergi denetimi ve vergi uyuşmazlıkları, şirket yapılandırmaları ve kurumsal vergi planlaması alanlarında geniş bir tecrübeye sahiptir. Marka Denetim Yönetim Kurulu Başkanı olarak stratejik danışmanlık süreçlerini yönetmektedir.',
    email: 'info@markadenetim.com.tr',
    focus: ['Tam tasdik', 'Vergi denetimi ve uyuşmazlıkları', 'Şirket yapılandırmaları', 'Kurumsal vergi planlaması'],
    lead: true,
    badge: 'Sorumlu ortak',
  },
  {
    slug: 'samet-koz',
    name: 'Samet Köz',
    titles: ['SMMM', 'Sorumlu Denetçi'],
    image: '/brand/samet_JPG.webp',
    biography:
      'Serbest Muhasebeci Mali Müşavir ve KGK lisanslı Sorumlu Denetçi olan Samet Köz; bağımsız denetim standartları, iç denetim ve risk yönetimi, finansal tablo analizi ve kurumsal raporlama süreçlerinde uzmanlaşmıştır.',
    email: 'info@markadenetim.com.tr',
    focus: ['Bağımsız denetim', 'İç denetim ve risk yönetimi', 'Finansal tablo analizi', 'Kurumsal raporlama'],
    lead: true,
  },
  {
    slug: 'sukran-kisa',
    name: 'Şükran Kısa',
    titles: ['Vergi İade Uzmanı'],
    image: '/brand/p1.webp',
    biography:
      'Katma Değer Vergisi iadesi, karşıt inceleme raporları ve vergi dairesi süreçlerinin yürütülmesi konularında uzmanlaşmış olup mükelleflerin nakden ve mahsuben iade işlemlerini başarıyla koordine etmektedir.',
    email: 'info@markadenetim.com.tr',
    focus: ['KDV iadesi', 'Karşıt inceleme raporları', 'Vergi dairesi süreçleri', 'Nakden ve mahsuben iade'],
  },
  {
    slug: 'ozgur-yurt',
    name: 'Özgür Yurt',
    titles: ['Vergi Direktörü'],
    image: '/brand/p2.webp',
    biography:
      'Vergi mevzuatı, vergi planlaması ve şirketlerin kurumsal mali uyum süreçlerinde Vergi Direktörü olarak danışmanlık hizmeti sunmaktadır. Mali mevzuat analizleri ve vergi stratejilerinin geliştirilmesinde aktif rol almaktadır.',
    email: 'info@markadenetim.com.tr',
    focus: ['Vergi mevzuatı', 'Vergi planlaması', 'Kurumsal mali uyum', 'Vergi stratejileri'],
  },
  {
    slug: 'mehmet-ozkurt',
    name: 'Mehmet Özkurt',
    titles: ['Vergi İade Uzmanı'],
    image: '/brand/p4.webp',
    biography:
      'İhracat, indirimli oran ve tevkifat kaynaklı KDV iade dosyalarının hazırlanması, yüklenilen KDV listelerinin kontrolü ve tasdik süreçlerinin takibinde görev yapmaktadır.',
    email: 'info@markadenetim.com.tr',
    focus: ['İhracat kaynaklı KDV iadesi', 'İndirimli oran ve tevkifat iadeleri', 'Yüklenilen KDV kontrolü', 'Tasdik süreçleri'],
  },
  {
    slug: 'aydin-kurutkan',
    name: 'Aydın Kurutkan',
    titles: ['Vergi İade Uzmanı'],
    image: '/brand/p3.webp',
    biography:
      'Vergi mevzuatı, muhasebe uygulamaları ve KDV iade süreçlerinde tecrübe sahibi olup mükelleflerin mali belge düzeni ve mevzuata uyum süreçlerine destek sağlamaktadır.',
    email: 'info@markadenetim.com.tr',
    focus: ['Vergi mevzuatı', 'Muhasebe uygulamaları', 'KDV iade süreçleri', 'Mevzuata uyum'],
  },
];
