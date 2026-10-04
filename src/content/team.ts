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
    biography: placeholder,
    lead: true,
  },
  {
    slug: 'samet-koz',
    name: 'Samet Köz',
    titles: ['SMMM', 'Sorumlu Denetçi'],
    image: '/brand/samet_JPG.jpg',
    biography: placeholder,
    lead: true,
  },
  {
    slug: 'sukran-kisa',
    name: 'Şükran Kısa',
    titles: ['Vergi İade Uzmanı'],
    image: '/brand/p1.png',
    biography: placeholder,
  },
  {
    slug: 'ozgur-yurt',
    name: 'Özgür Yurt',
    titles: ['Vergi Direktörü'],
    image: '/brand/p2.png',
    biography: placeholder,
  },
  {
    slug: 'mehmet-ozkurt',
    name: 'Mehmet Özkurt',
    titles: ['Vergi İade Uzmanı'],
    image: '/brand/p4.png',
    biography: placeholder,
  },
  {
    slug: 'aydin-kurutkan',
    name: 'Aydın Kurutkan',
    titles: ['Vergi İade Uzmanı'],
    image: '/brand/p3.png',
    biography: placeholder,
  },
];
