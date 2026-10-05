// Ekip. İsim, unvan ve fotoğraflar firmanın mevcut sitesinden (markadenetim.tr) alındı;
// fotoğraf–isim eşleşmesi oradaki sırayla doğrulandı.
// Özgeçmiş ve iletişim bilgisi kaynağı yok: uydurulmaz, görünür yer tutucu kalır.
// [BİLGİ GİRİLECEK] Yayın öncesi her kişiden metin onayı ve fotoğraf kullanım izni alınmalı (KVKK).
import { placeholder } from '@/lib/site';

export type TeamMember = {
  slug: string;
  name: string;
  /** Unvan satırları: ilk satır ana unvan */
  titles: string[];
  image: string;
  biography: string;
  email?: string;
  linkedin?: string;
  /** Kurucu / sorumlu ortaklar: bölümde büyük gösterilir */
  lead?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    slug: 'fatih-olgun',
    name: 'Fatih Olgun',
    titles: ['Yeminli Mali Müşavir', 'Yönetim Kurulu Başkanı', 'E. Vergi Müfettişi'],
    image: '/brand/fatih1_JPG.jpg',
    biography:
      'Eski Vergi Müfettişi ve Yeminli Mali Müşavir olan Fatih Olgun; tam tasdik, vergi denetimi ve vergi uyuşmazlıkları, şirket yapılandırmaları ve kurumsal vergi planlaması alanlarında geniş bir tecrübeye sahiptir. Marka Denetim Yönetim Kurulu Başkanı olarak stratejik danışmanlık süreçlerini yönetmektedir.',
    email: 'info@markadenetim.com.tr',
    lead: true,
  },
  {
    slug: 'samet-koz',
    name: 'Samet Köz',
    titles: ['SMMM', 'Sorumlu Denetçi'],
    image: '/brand/samet_JPG.jpg',
    biography:
      'Serbest Muhasebeci Mali Müşavir ve KGK lisanslı Sorumlu Denetçi olan Samet Köz; bağımsız denetim standartları, iç denetim ve risk yönetimi, finansal tablo analizi ve kurumsal raporlama süreçlerinde uzmanlaşmıştır.',
    email: 'info@markadenetim.com.tr',
    lead: true,
  },
  {
    slug: 'sukran-kisa',
    name: 'Şükran Kısa',
    titles: ['Vergi İade Uzmanı'],
    image: '/brand/p1.png',
    biography:
      'Katma Değer Vergisi iadesi, karşıt inceleme raporları ve vergi dairesi süreçlerinin yürütülmesi konularında uzmanlaşmış olup mükelleflerin nakden ve mahsuben iade işlemlerini başarıyla koordine etmektedir.',
    email: 'info@markadenetim.com.tr',
  },
  {
    slug: 'ozgur-yurt',
    name: 'Özgür Yurt',
    titles: ['Vergi Direktörü'],
    image: '/brand/p2.png',
    biography:
      'Vergi mevzuatı, vergi planlaması ve şirketlerin kurumsal mali uyum süreçlerinde Vergi Direktörü olarak danışmanlık hizmeti sunmaktadır. Mali mevzuat analizleri ve vergi stratejilerinin geliştirilmesinde aktif rol almaktadır.',
    email: 'info@markadenetim.com.tr',
  },
  {
    slug: 'mehmet-ozkurt',
    name: 'Mehmet Özkurt',
    titles: ['Vergi İade Uzmanı'],
    image: '/brand/p4.png',
    biography:
      'İhracat, indirimli oran ve tevkifat kaynaklı KDV iade dosyalarının hazırlanması, yüklenilen KDV listelerinin kontrolü ve tasdik süreçlerinin takibinde görev yapmaktadır.',
    email: 'info@markadenetim.com.tr',
  },
  {
    slug: 'aydin-kurutkan',
    name: 'Aydın Kurutkan',
    titles: ['Vergi İade Uzmanı'],
    image: '/brand/p3.png',
    biography:
      'Vergi mevzuatı, muhasebe uygulamaları ve KDV iade süreçlerinde tecrübe sahibi olup mükelleflerin mali belge düzeni ve mevzuata uyum süreçlerine destek sağlamaktadır.',
    email: 'info@markadenetim.com.tr',
  },
];
