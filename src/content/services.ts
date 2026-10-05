// Uzmanlık alanları: ana sayfa listesi ve /hizmetler/[slug] detay sayfaları için tek kaynak.
// [BİLGİ GİRİLECEK] Metinler ÖRNEKTİR: yayın öncesi sorumlu YMM / sorumlu denetçi tarafından
// gözden geçirilmelidir. Bilinçli olarak genel tutuldu; oran, süre, tutar, madde numarası,
// müşteri veya sonuç vaadi içermez (BRIEF §05–06).
// Görseller geçicidir ve dekoratiftir (alt=""); anlam başlıkta.

export type ServiceEntry = { title: string; text: string };

export type Service = {
  slug: string;
  num: string;
  title: string;
  /** Ana sayfa satırındaki kısa açıklama */
  summary: string;
  /** Detay sayfası giriş paragrafı (≤ 30 kelime) */
  lead: string;
  image: string;
  /** Kapsam bölümünün serif ara başlığı */
  scopeHeading: string;
  scope: ServiceEntry[];
  /** Dört aşama; her biri iki cümle */
  process: ServiceEntry[];
  deliverables: ServiceEntry[];
  /** Kapanış başlığı: alanın adıyla, davet tonunda, iddiasız */
  closing: string;
};

export const services: Service[] = [
  {
    slug: 'yeminli-mali-musavirlik',
    num: '01',
    title: 'Yeminli Mali Müşavirlik',
    summary:
      'Tam tasdik, KDV iadesi tasdiki ve özel amaçlı raporlar. Her biri belgelendirilmiş bir inceleme sürecine dayanır.',
    lead: 'Tasdik, beyan edilen her tutarın belgeyle karşılandığını yazılı olarak teyit etmektir. Bu sorumluluğu kapsamı baştan tanımlanmış bir inceleme süreciyle üstleniriz.',
    image: '/img/service-ymm.jpg',
    scopeHeading: 'Tasdik, bir imzadan önce titiz bir incelemedir.',
    scope: [
      {
        title: 'Tam tasdik',
        text: 'Kurumlar vergisi beyannamesinin yasal defter ve belgelerle uyumunu inceler, sonuçlarını tasdik raporuyla belgeleriz.',
      },
      {
        title: 'KDV iadesi tasdiki',
        text: 'İade talebine konu işlemleri belge, kayıt ve mevzuat koşulları açısından inceler, raporu ilgili vergi dairesine sunulacak biçimde hazırlarız.',
      },
      {
        title: 'Yatırım teşvik belgesi kapama tasdiki',
        text: 'Teşvik belgesi kapsamında gerçekleştirilen yatırımın harcama ve kayıtlarını inceler, kapama sürecine dayanak raporu hazırlarız.',
      },
      {
        title: 'Özel amaçlı tasdik ve raporlar',
        text: 'Mevzuatın yeminli mali müşavir tasdiki aradığı diğer işlemlerde, kapsamı işin başında yazılı olarak belirleyerek çalışırız.',
      },
    ],
    process: [
      {
        title: 'Ön görüşme',
        text: 'Talebin konusunu, dönemini ve tasdikin dayandığı mevzuatı birlikte netleştiririz. Gerekli belge listesini bu aşamada paylaşırız.',
      },
      {
        title: 'Belge ve kayıt incelemesi',
        text: 'Defter kayıtlarını, belgeleri ve beyanları karşılaştırmalı olarak inceleriz. Her bulguyu çalışma kâğıdına dayanağıyla birlikte işleriz.',
      },
      {
        title: 'Bulguların paylaşılması',
        text: 'Rapordan önce tespitleri yönetimle açıkça paylaşırız. Düzeltilmesi gereken konular varsa nedenleriyle birlikte yazarız.',
      },
      {
        title: 'Rapor ve tasdik',
        text: 'Raporu mevzuattaki biçim ve içerik koşullarına uygun olarak düzenleriz. Teslim sonrasında idarenin sorularına ilişkin süreci de izleriz.',
      },
    ],
    deliverables: [
      { title: 'Tasdik raporu', text: 'Mevzuatın öngördüğü biçimde, imzalı ve dayanaklarıyla.' },
      { title: 'Bulgu yazısı', text: 'Rapor öncesi tespitler ve öneriler, yönetime ayrı bir yazıyla.' },
      { title: 'Çalışma dosyası', text: 'İncelemenin izlenebilir kaydı; mevzuattaki süre boyunca saklanır.' },
    ],
    closing: 'Tasdik gerektiren konunuzu birlikte değerlendirelim.',
  },
  {
    slug: 'denetim',
    num: '02',
    title: 'Denetim',
    summary:
      'Bağımsız denetim hizmetleri ile finansal tablolarınızın doğruluğunu, şeffaflığını ve güvenilirliğini sağlarız.',
    lead: 'Bağımsız denetim, finansal tabloların tüm önemli yönleriyle gerçeğe uygun sunulup sunulmadığına dair makul güvence sağlar. Bu görüşü bağımsızlık ilkesinden ödün vermeden oluştururuz.',
    image: '/img/service-denetim.jpg',
    scopeHeading: 'Bir görüşün değeri, ona ulaşılan yolun açıklığındadır.',
    scope: [
      {
        title: 'Finansal tabloların bağımsız denetimi',
        text: 'Yıllık finansal tabloları bağımsız denetim standartlarına uygun olarak denetler, görüşümüzü denetçi raporuyla sunarız.',
      },
      {
        title: 'Sınırlı bağımsız denetim',
        text: 'Ara dönem finansal bilgileri, standartların öngördüğü sınırlı güvence kapsamında inceleriz.',
      },
      {
        title: 'Özel amaçlı denetim',
        text: 'Belirli bir hesap, sözleşme veya düzenleyici bildirim için kapsamı önceden tanımlanmış denetim çalışmaları yürütürüz.',
      },
      {
        title: 'Üzerinde anlaşılmış prosedürler',
        text: 'Taraflarca belirlenen prosedürleri uygular, bulguları yorum katmadan raporlarız.',
      },
    ],
    process: [
      {
        title: 'Kabul ve bağımsızlık',
        text: 'Görevi kabul etmeden önce bağımsızlık ve etik değerlendirmemizi tamamlarız. Kapsam ve sorumluluklar sözleşmeyle yazılı hâle gelir.',
      },
      {
        title: 'Planlama ve risk',
        text: 'İşletmeyi, iç kontrol yapısını ve önemli yanlışlık risklerini anlarız. Denetim yaklaşımını bu risklere göre biçimlendiririz.',
      },
      {
        title: 'Saha çalışması',
        text: 'Kontrolleri ve hesap bakiyelerini, belirlenen prosedürlerle test ederiz. Her bulgu kanıtıyla birlikte belgelenir.',
      },
      {
        title: 'Görüş ve raporlama',
        text: 'Elde edilen kanıtları bir bütün olarak değerlendirir, görüşümüzü oluştururuz. Kontrollere ilişkin tespitleri yönetime ayrıca bildiririz.',
      },
    ],
    deliverables: [
      { title: 'Bağımsız denetçi raporu', text: 'Finansal tablolara ilişkin görüşümüzle birlikte.' },
      { title: 'Yönetim mektubu', text: 'İç kontrol ve süreçlere ilişkin tespitler ve öneriler.' },
      { title: 'Üst yönetime bildirim', text: 'Standartların öngördüğü konularda, yazılı olarak.' },
    ],
    closing: 'Denetim kapsamınızı birlikte netleştirelim.',
  },
  {
    slug: 'vergi-danismanligi',
    num: '03',
    title: 'Vergi Danışmanlığı',
    summary:
      'Vergi planlaması, vergi incelemeleri ve uyuşmazlıklar konusunda işletmenize özel çözümler sunarız.',
    lead: 'Vergi kararları, işin ilk adımında verildiğinde en az maliyetle sonuçlanır. Mevzuatı işletmenizin işlemleri üzerinden okur, seçenekleri gerekçeleriyle birlikte sunarız.',
    image: '/img/service-vergi.jpg',
    scopeHeading: 'Doğru soru, çoğu zaman beyannameden önce sorulur.',
    scope: [
      {
        title: 'Vergi planlaması',
        text: 'Yatırım, yeniden yapılanma ve büyük işlemlerin vergisel sonuçlarını işlem gerçekleşmeden önce değerlendiririz.',
      },
      {
        title: 'Vergi incelemelerine destek',
        text: 'İnceleme sürecinde belge hazırlığını, idareyle yazışmaları ve tutanak öncesi değerlendirmeleri birlikte yürütürüz.',
      },
      {
        title: 'Uzlaşma ve uyuşmazlık süreçleri',
        text: 'Tarhiyat sonrası seçenekleri hukuki dayanaklarıyla değerlendirir, uzlaşma görüşmelerine hazırlık sağlarız.',
      },
      {
        title: 'Transfer fiyatlandırması',
        text: 'İlişkili kişilerle yapılan işlemlerin emsallere uygunluğunu analiz eder, yıllık belgelendirmeyi hazırlarız.',
      },
      {
        title: 'Mevzuat etki analizi',
        text: 'Yeni düzenlemelerin işletmenize somut etkisini, uygulanabilir adımlarla birlikte raporlarız.',
      },
    ],
    process: [
      {
        title: 'Soru ve bağlam',
        text: 'Konuyu, işlemin ekonomik gerçekliğini ve zaman çizelgesini birlikte tanımlarız. Görüş istenen soruyu yazılı olarak netleştiririz.',
      },
      {
        title: 'Mevzuat ve içtihat',
        text: 'İlgili mevzuatı, idarenin görüşlerini ve yargı kararlarını inceleriz. Belirsiz alanları açıkça işaretleriz.',
      },
      {
        title: 'Seçeneklerin karşılaştırılması',
        text: 'Uygulanabilir seçenekleri risk ve maliyetleriyle birlikte yan yana koyarız. Karar için gerekli bilgiyi sade bir dille sunarız.',
      },
      {
        title: 'Uygulama ve izleme',
        text: 'Seçilen yolun kayıt ve beyan adımlarına eşlik ederiz. Mevzuat değişirse değerlendirmeyi güncelleriz.',
      },
    ],
    deliverables: [
      { title: 'Yazılı görüş', text: 'Soru, dayanaklar, seçenekler ve önerimizle birlikte.' },
      { title: 'Risk notu', text: 'Belirsiz alanlar ve olası sonuçları, açık bir dille.' },
      { title: 'Uygulama takvimi', text: 'Kayıt ve beyan adımları, sorumlularıyla.' },
    ],
    closing: 'Vergi konunuzu karar aşamasında birlikte ele alalım.',
  },
  {
    slug: 'finansal-danismanlik',
    num: '04',
    title: 'Finansal Danışmanlık',
    summary:
      'Finansal yapılandırma, raporlama ve sürdürülebilir büyüme için stratejik danışmanlık hizmetleri sunarız.',
    lead: 'Yönetimin önündeki kararlar, güvenilir ve zamanında üretilmiş finansal bilgiyle netleşir. Bu bilgiyi kurmak ve okumak için yönetimle birlikte çalışırız.',
    image: '/img/service-finansal.jpg',
    scopeHeading: 'Net bir finansal tablo, net bir karar demektir.',
    scope: [
      {
        title: 'Finansal yapılandırma',
        text: 'Sermaye yapısını, borç profilini ve nakit akışını birlikte değerlendirir, yeniden yapılanma seçeneklerini analiz ederiz.',
      },
      {
        title: 'Satın alma öncesi finansal inceleme',
        text: 'Hedef şirketin finansal durumunu, kazanç kalitesini ve olası yükümlülüklerini işlem öncesinde inceleriz.',
      },
      {
        title: 'Bütçe ve yönetim raporlaması',
        text: 'Yönetimin karar almak için ihtiyaç duyduğu raporlama yapısını, göstergeleri ve takvimiyle birlikte kurarız.',
      },
      {
        title: 'Uluslararası raporlama standartlarına geçiş',
        text: 'TFRS ve benzeri çerçevelere geçişte muhasebe politikalarını, açılış bakiyelerini ve dipnot yapısını birlikte hazırlarız.',
      },
    ],
    process: [
      {
        title: 'Karar sorusu',
        text: 'Yönetimin vermesi gereken kararı ve bunun için gereken bilgiyi tanımlarız. Kapsam ve takvim bu soruya göre belirlenir.',
      },
      {
        title: 'Veri ve analiz',
        text: 'Finansal verileri kaynağından doğrular, analizi bu doğrulanmış veri üzerine kurarız. Varsayımları ayrı ve açık olarak yazarız.',
      },
      {
        title: 'Senaryolar',
        text: 'Farklı seçeneklerin finansal sonuçlarını karşılaştırılabilir biçimde ortaya koyarız. Duyarlılıkları da gösteririz.',
      },
      {
        title: 'Karar ve uygulama',
        text: 'Bulguları yönetim kuruluna sunulabilir bir raporla paylaşırız. Kararın uygulamasında gerektiği ölçüde yanınızda oluruz.',
      },
    ],
    deliverables: [
      { title: 'Analiz raporu', text: 'Bulgular, varsayımlar ve senaryolarla birlikte.' },
      { title: 'Yönetim sunumu', text: 'Karar organına sunulmak üzere, özet biçimde.' },
      { title: 'Raporlama yapısı', text: 'Kurulduğu durumda, şablon ve takvimiyle birlikte.' },
    ],
    closing: 'Önünüzdeki finansal kararı birlikte değerlendirelim.',
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
