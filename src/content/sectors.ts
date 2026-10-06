// Sektörler: her sektörün kendine özgü vergi, tasdik ve raporlama yükümlülükleri ile bunlarla
// ilişkili hizmetlerimiz. Müşteri sayısı, referans ya da "deneyim yılı" gibi iddia içermez (BRIEF §05–06).
// [BİLGİ GİRİLECEK] Sektör listesi, firmanın fiilen hizmet verdiği alanlarla yayın öncesi doğrulanmalı;
// metinler genel bilgilendirme niteliğindedir ve sorumlu YMM tarafından gözden geçirilmelidir.
// Görseller Unsplash Lisansı ile (ticari kullanım serbest, atıf zorunlu değil):
//   İhracat: Patryk Jasiński (unsplash.com/photos/BQSsGu0he24)
//   İnşaat: EJ Yao (unsplash.com/photos/D46mXLsQRJw)
//   Enerji: Matthew Henry (unsplash.com/photos/yETqkLnhsUI)
//   Finans: Declan Sun (unsplash.com/photos/rKWN4f52_Ns)
//   Sanayi: Homa Appliances (unsplash.com/photos/pWUyHVJgLhg)
//   Teknoloji: hizmet görseli (service-bilgi-sistemleri)
export type Sector = {
  slug: string;
  /** Başka dildeki karşılığın anahtarı; İngilizce kayıtlar Türkçe slug'ı taşır */
  pair?: string;
  num: string;
  title: string;
  summary: string;
  image: string;
  /** İlgili hizmetler (services.ts slug'ları); sektör matrisi ve detay sayfası bunu kullanır */
  services: string[];
  /** Genel bakış paragrafı */
  intro: string;
  /** Sektöre özgü konular: detay sayfasında her biri ayrı kart */
  topics: string[];
  /** "Nasıl destek oluyoruz?" paneli metni */
  support: string;
};

export const sectors: Sector[] = [
  {
    slug: 'ihracat-ve-dis-ticaret',
    num: '01',
    title: 'İhracat ve dış ticaret',
    summary:
      'İhracat istisnasından doğan KDV iadeleri, kur farkları ve dış ticaret işlemlerinin belge düzeni.',
    image: '/img/sector-ihracat.webp',
    services: ['kdv-iadesi', 'yeminli-mali-musavirlik', 'vergi-danismanligi'],
    intro:
      'İhracat yapan işletmelerde vergi yükünün önemli bir bölümü iade süreçleri üzerinden yönetilir. Gümrük, fatura ve kayıt belgelerinin birbiriyle uyumu, nakit akışını doğrudan etkiler.',
    topics: [
      'İhracat istisnası ve ihraç kayıtlı teslimlerden doğan KDV iadeleri',
      'Döviz cinsinden işlemlerde kur farkları ve değerleme',
      'Dahilde işleme gibi rejimler kapsamındaki belgelerin kapatılması',
      'Gümrük beyannameleri ile kayıtlar arasındaki mutabakat',
    ],
    support:
      'İade taleplerini belge ve kayıt düzeyinde inceler, yeminli mali müşavir raporuyla sonuçlandırırız. Dış ticaret işlemlerinin vergisel sonuçlarını işlem öncesinde değerlendiririz.',
  },
  {
    slug: 'insaat-ve-gayrimenkul',
    num: '02',
    title: 'İnşaat ve gayrimenkul',
    summary:
      'Yıllara sari işler, hakediş ve tevkifat uygulamaları, konut teslimlerinden doğan iadeler ve proje bazlı raporlama.',
    image: '/img/sector-insaat.webp',
    services: ['yeminli-mali-musavirlik', 'kdv-iadesi', 'vergi-danismanligi', 'denetim'],
    intro:
      'İnşaat projeleri birden fazla döneme yayılır; gelir, maliyet ve vergi sonuçlarının doğru dönemle eşleştirilmesi bu sektörün temel sorusudur.',
    topics: [
      'Yıllara sari inşaat ve onarım işlerinde gelir ve maliyetin dönemlere dağılımı',
      'Hakedişlerde KDV tevkifatı ve tevkifattan doğan iadeler',
      'Konut teslimlerinde uygulanan oranlardan doğan KDV iadeleri',
      'Kat karşılığı inşaat ve arsa işlemlerinin vergilendirilmesi',
    ],
    support:
      'Proje bazında maliyet ve gelir kayıtlarını inceler, iade ve tasdik süreçlerini proje takvimiyle uyumlu yürütürüz. Bağımsız denetime tabi şirketlerde proje muhasebesini finansal tablo düzeyinde değerlendiririz.',
  },
  {
    slug: 'enerji',
    num: '03',
    title: 'Enerji',
    summary:
      'Düzenlemeye tabi lisanslı şirketlerin bağımsız denetimi, yatırım teşvikleri ve sektörel raporlama.',
    image: '/img/sector-enerji.webp',
    services: ['denetim', 'yeminli-mali-musavirlik', 'bilgi-sistemleri-denetimi', 'finansal-danismanlik'],
    intro:
      'Enerji sektöründe faaliyet gösteren lisanslı şirketler, genel mevzuatın yanında düzenleyici kurumun raporlama ve denetim gerekliliklerine de tabidir. Büyük ölçekli yatırımlar, teşvik ve finansman süreçlerini de beraberinde getirir.',
    topics: [
      'Düzenleyici kurum mevzuatına tabi şirketlerin bağımsız denetimi',
      'Yatırım teşvik belgelerinin kullanımı ve kapatılması',
      'Proje finansmanına yönelik finansal raporlama',
      'Operasyonel sistemlerde bilgi sistemleri kontrolleri',
    ],
    support:
      'Bağımsız denetimi sektörel düzenlemelerin aradığı kapsamla birlikte planlarız. Teşvik ve finansman süreçlerinde tasdik ve raporlama ihtiyaçlarını yatırım takvimine göre ele alırız.',
  },
  {
    slug: 'finans-ve-sigortacilik',
    num: '04',
    title: 'Finans ve sigortacılık',
    summary:
      'Düzenleyici kurumlara tabi finans ve sigorta kuruluşlarında bağımsız denetim, bilgi sistemleri denetimi ve veri koruma.',
    image: '/img/sector-finans.webp',
    services: ['denetim', 'bilgi-sistemleri-denetimi', 'kvkk-uyum', 'vergi-danismanligi'],
    intro:
      'Finans ve sigorta kuruluşları, sektörlerine özgü düzenleyici kurumların ayrıntılı denetim ve raporlama gerekliliklerine tabidir. Bu kuruluşlarda bilgi sistemlerinin güvenilirliği ve kişisel verilerin korunması da denetimin doğal parçasıdır.',
    topics: [
      'Düzenleyici kurum mevzuatı kapsamındaki bağımsız denetim',
      'Bilgi sistemleri ve iş süreçlerine yönelik denetim gereklilikleri',
      'Müşteri verilerinin korunması ve veri güvenliği tedbirleri',
      'Sektöre özgü vergisel uygulamalar',
    ],
    support:
      'Finansal tabloların bağımsız denetimini, bilgi sistemleri denetimi ve veri koruma değerlendirmesiyle birlikte ele alırız. Yetki kapsamımız Kalite ve bağımsızlık sayfasında yer alır.',
  },
  {
    slug: 'sanayi-ve-uretim',
    num: '05',
    title: 'Sanayi ve üretim',
    summary:
      'Yatırım teşvik belgeleri, tam tasdik, maliyet ve stok değerlemesi ile üretim yatırımlarının finansal yönetimi.',
    image: '/img/sector-sanayi.webp',
    services: ['yeminli-mali-musavirlik', 'kdv-iadesi', 'denetim', 'finansal-danismanlik'],
    intro:
      'Üretim yapan işletmelerde makine-teçhizat yatırımları, maliyet hesapları ve stok değerlemesi, hem vergi hem de finansal raporlama açısından belirleyicidir.',
    topics: [
      'Yatırım teşvik belgelerinin kullanımı ve kapama süreci',
      'Maliyet muhasebesi ve stok değerleme yöntemleri',
      'Yatırım malları ve ihracattan doğan KDV iadeleri',
      'Kapasite artışı ve finansman kararlarının finansal etkisi',
    ],
    support:
      'Teşvik belgelerinin kapatılmasında tespit raporu, tam tasdik ve iade süreçlerini birlikte yürütürüz. Maliyet ve stok kayıtlarını finansal tablolarla uyumlu hâle getirmek için yönetimle birlikte çalışırız.',
  },
  {
    slug: 'teknoloji-ve-elektronik-belge',
    num: '06',
    title: 'Teknoloji ve elektronik belge',
    summary:
      'Özel entegratörlerin bilgi sistemleri denetimi, elektronik belge süreçleri, Ar-Ge teşvikleri ve kişisel veri uyumu.',
    image: '/img/service-bilgi-sistemleri.webp',
    services: ['ozel-entegrator-bilgi-sistemleri-denetimi', 'bilgi-sistemleri-denetimi', 'kvkk-uyum', 'vergi-danismanligi'],
    intro:
      'Teknoloji şirketlerinde iş modeli, çoğu zaman veriye ve bilgi sistemlerine dayanır. Elektronik belge hizmeti verenler için bu sistemlerin denetlenebilirliği ayrıca bir mevzuat yükümlülüğüdür.',
    topics: [
      'Özel entegratörlerin Gelir İdaresi düzenlemelerine uygunluk denetimi',
      'Elektronik fatura, defter ve arşiv süreçlerinin kontrolleri',
      'Ar-Ge ve teknoloji geliştirme bölgesi teşviklerine ilişkin kayıt düzeni',
      'Kişisel verilerin işlenmesi ve veri güvenliği',
    ],
    support:
      'Bilgi sistemleri denetimini, vergi ve veri koruma değerlendirmesiyle aynı çerçevede ele alırız. Böylece teknik kontroller ile mevzuat yükümlülükleri tek bir resimde görünür.',
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
