// Uzmanlık alanları: ana sayfa listesi ve /hizmetler/[slug] detay sayfaları için tek kaynak.
// [BİLGİ GİRİLECEK] Metinler ÖRNEKTİR: yayın öncesi sorumlu YMM / sorumlu denetçi tarafından
// gözden geçirilmelidir. Bilinçli olarak genel tutuldu; oran, süre, tutar, madde numarası,
// müşteri veya sonuç vaadi içermez (BRIEF §05–06).
// Görseller dekoratiftir (alt=""); anlam başlıkta. 01 ve 04 görselleri geçicidir.
// 02 Denetim: Jonny James, 03 Vergi: Magic Fan (Unsplash Lisansı).
// 05–08 görselleri Unsplash Lisansı ile (ticari kullanım serbest, atıf zorunlu değil):
//   KDV iadesi: Kurt z (unsplash.com/photos/tp0BLGIv4dU)
//   Bilgi sistemleri denetimi: Scott Rodgerson (unsplash.com/photos/PSpf_XgOM5w)
//   Özel entegratör BS denetimi: Domaintechnik (unsplash.com/photos/VHmBX7FnXw0)
//   KVKK: Daniel (unsplash.com/photos/kAQo6CJCPN4)

export type ServiceEntry = { title: string; text: string };

export type Service = {
  slug: string;
  /** Başka dildeki karşılığın anahtarı (lib/alternates.ts). Türkçede slug'ın kendisi anahtardır;
   *  İngilizce kayıtlar burada Türkçe slug'ı taşır. */
  pair?: string;
  num: string;
  /** Ana sayfada dört temel alan listelenir (BRIEF 4.4); uzmanlaşmış hizmetler yalnızca /hizmetler'de */
  group: 'temel' | 'uzman';
  /** Dar alanlar için kısa ad (sektör matrisi sütun başlığı) */
  short: string;
  title: string;
  /** <title> ve og:title: aramada kullanılan ifadeyle (≤ 45 karakter; marka son eki ayrıca eklenir) */
  metaTitle: string;
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
  /** Yetki ve mevzuat dayanağı: kanun adları + firmanın mevcut sitesinde (markadenetim.tr) beyan ettiği yetkiler */
  basis: string;
};

export const services: Service[] = [
  {
    slug: 'yeminli-mali-musavirlik',
    num: '01',
    group: 'temel',
    short: 'YMM ve tasdik',
    title: 'Yeminli Mali Müşavirlik',
    metaTitle: 'Yeminli Mali Müşavirlik ve Tam Tasdik',
    summary:
      'Tam tasdik, KDV iadesi tasdiki ve özel amaçlı raporlar. Her biri belgelendirilmiş bir inceleme sürecine dayanır.',
    lead: 'Tasdik, beyan edilen her tutarın belgeyle karşılandığını yazılı olarak teyit etmektir. Bu sorumluluğu kapsamı baştan tanımlanmış bir inceleme süreciyle üstleniriz.',
    image: '/img/service-ymm.webp',
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
    basis: '3568 sayılı Serbest Muhasebeci Mali Müşavirlik ve Yeminli Mali Müşavirlik Kanunu ile bu Kanuna dayanan tasdik mevzuatı.',
  },
  {
    slug: 'denetim',
    num: '02',
    group: 'temel',
    short: 'Bağımsız denetim',
    title: 'Denetim',
    metaTitle: 'Bağımsız Denetim ve Sınırlı Denetim',
    summary:
      'Bağımsız denetim hizmetleri ile finansal tablolarınızın doğruluğunu, şeffaflığını ve güvenilirliğini sağlarız.',
    lead: 'Bağımsız denetim, finansal tabloların tüm önemli yönleriyle gerçeğe uygun sunulup sunulmadığına dair makul güvence sağlar. Bu görüşü bağımsızlık ilkesinden ödün vermeden oluştururuz.',
    image: '/img/service-denetim-beton.webp',
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
    basis: '6102 sayılı Türk Ticaret Kanunu ve 660 sayılı KHK kapsamındaki bağımsız denetim düzenlemeleri. Şirketimiz KGK, SPK, BDDK, EPDK ve Hazine sigortacılık alanlarında bağımsız denetim yetkisine sahiptir.',
  },
  {
    slug: 'vergi-danismanligi',
    num: '03',
    group: 'temel',
    short: 'Vergi',
    title: 'Vergi Danışmanlığı',
    metaTitle: 'Vergi Danışmanlığı ve Transfer Fiyatlandırması',
    summary:
      'Vergi planlaması, vergi incelemeleri ve uyuşmazlıklar konusunda işletmenize özel çözümler sunarız.',
    lead: 'Vergi kararları, işin ilk adımında verildiğinde en az maliyetle sonuçlanır. Mevzuatı işletmenizin işlemleri üzerinden okur, seçenekleri gerekçeleriyle birlikte sunarız.',
    image: '/img/service-vergi-defter.webp',
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
    basis: '213 sayılı Vergi Usul Kanunu başta olmak üzere ilgili vergi kanunları ve 3568 sayılı Kanun kapsamındaki mesleki yetki.',
  },
  {
    slug: 'finansal-danismanlik',
    num: '04',
    group: 'temel',
    short: 'Finansal danışmanlık',
    title: 'Finansal Danışmanlık',
    metaTitle: 'Finansal Danışmanlık ve Kurumsal Finansman',
    summary:
      'Kurumsal finansman, finansal yapılandırma ve yönetim raporlaması. Kararı netleştiren bilgiyi yönetimle birlikte kurarız.',
    lead: 'Yönetimin önündeki kararlar, güvenilir ve zamanında üretilmiş finansal bilgiyle netleşir. Bu bilgiyi kurmak ve okumak için yönetimle birlikte çalışırız.',
    image: '/img/service-finansal.webp',
    scopeHeading: 'Net bir finansal tablo, net bir karar demektir.',
    scope: [
      {
        title: 'Finansal yapılandırma',
        text: 'Sermaye yapısını, borç profilini ve nakit akışını birlikte değerlendirir, yeniden yapılanma seçeneklerini analiz ederiz.',
      },
      {
        title: 'Kurumsal finansman',
        text: 'Birleşme, devralma, borç ve sermaye finansmanı süreçlerinde finansal analizleri ve işlem hazırlığını yönetimle birlikte yürütürüz.',
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
    basis: '3568 sayılı Kanun kapsamındaki mesleki yetki, 6102 sayılı Türk Ticaret Kanunu hükümleri ve mesleki etik kurallar.',
  },
  {
    slug: 'kdv-iadesi',
    num: '05',
    group: 'uzman',
    short: 'KDV iadesi',
    title: 'KDV İadesi',
    metaTitle: 'KDV İadesi Tasdiki ve İade Süreçleri',
    summary:
      'İade hakkı doğuran işlemlerin belge ve kayıt düzeniyle incelenmesi, tasdik raporunun hazırlanması ve sürecin izlenmesi.',
    lead: 'KDV iadesi, iade hakkının belgelerle eksiksiz ortaya konmasına dayanır. İade talebini, idareye sunulmadan önce kayıt ve belge düzeyinde inceleriz.',
    image: '/img/service-kdv.webp',
    scopeHeading: 'İade, belgesi tamam olan talebin hakkıdır.',
    scope: [
      {
        title: 'İhracat ve ihraç kayıtlı teslimler',
        text: 'İstisna kapsamındaki teslimlerin gümrük, fatura ve kayıt belgelerini iade talebiyle karşılaştırmalı olarak inceleriz.',
      },
      {
        title: 'İndirimli orana tabi işlemler',
        text: 'İndirimli oran uygulanan teslimlerden doğan iade tutarını, yüklenilen ve hesaplanan vergi ayrımıyla birlikte belgeleriz.',
      },
      {
        title: 'Tevkifat uygulanan işlemler',
        text: 'Kısmi tevkifat kapsamındaki işlemlerde iade hakkının dayanağını ve tutarın hesaplanmasını kayıtlarla doğrularız.',
      },
      {
        title: 'İade öncesi ön inceleme',
        text: 'Talebi sunmadan önce eksik belge, kayıt uyumsuzluğu ve hesaplama farklarını tespit eder, düzeltme önerilerini yazılı olarak iletiriz.',
      },
    ],
    process: [
      {
        title: 'İade türü ve dönem',
        text: 'İadenin dayandığı işlem türünü ve kapsadığı dönemleri birlikte belirleriz. Gerekli belge listesini bu aşamada paylaşırız.',
      },
      {
        title: 'Yüklenilen vergi incelemesi',
        text: 'İadeye konu yüklenilen vergileri alış belgeleri ve kayıtlarla eşleştiririz. Her tespiti çalışma kâğıdına dayanağıyla işleriz.',
      },
      {
        title: 'Bulguların paylaşılması',
        text: 'Rapordan önce eksiklik ve farkları yönetimle açıkça paylaşırız. Düzeltilebilecek konuları nedenleriyle birlikte yazarız.',
      },
      {
        title: 'Rapor ve izleme',
        text: 'Tasdik raporunu mevzuattaki biçim koşullarına uygun olarak düzenleriz. İdarenin ek bilgi taleplerini de süreç boyunca izleriz.',
      },
    ],
    deliverables: [
      { title: 'KDV iadesi tasdik raporu', text: 'Mevzuatın öngördüğü biçimde, imzalı ve dayanaklarıyla.' },
      { title: 'Ön inceleme notu', text: 'Talep öncesi tespit edilen eksiklikler ve öneriler.' },
      { title: 'Çalışma dosyası', text: 'İncelemenin izlenebilir kaydı; mevzuattaki süre boyunca saklanır.' },
    ],
    closing: 'KDV iadesi talebinizi birlikte değerlendirelim.',
    basis: '3065 sayılı Katma Değer Vergisi Kanunu, ilgili uygulama tebliğleri ve 3568 sayılı Kanun kapsamındaki tasdik yetkisi.',
  },
  {
    slug: 'bilgi-sistemleri-denetimi',
    num: '06',
    group: 'uzman',
    short: 'Bilgi sistemleri',
    title: 'Bilgi Sistemleri Denetimi',
    metaTitle: 'Bilgi Sistemleri Denetimi',
    summary:
      'İş uygulamalarının, bilgi teknolojileri altyapısının ve süreç kontrollerinin bağımsız olarak değerlendirilmesi.',
    lead: 'Finansal bilgi, onu üreten sistemler kadar güvenilirdir. Bilgi sistemlerindeki kontrolleri finansal raporlama ve düzenleyici gereklilikler açısından bağımsız olarak değerlendiririz.',
    image: '/img/service-bilgi-sistemleri.webp',
    scopeHeading: 'Rakamın güvenilirliği, onu üreten sistemle başlar.',
    scope: [
      {
        title: 'Bilgi teknolojileri genel kontrolleri',
        text: 'Erişim yönetimi, değişiklik yönetimi, yedekleme ve operasyon süreçlerindeki kontrollerin tasarımını ve işleyişini test ederiz.',
      },
      {
        title: 'İş uygulama kontrolleri',
        text: 'Muhasebe ve operasyon uygulamalarında veri girişi, işleme ve raporlama adımlarındaki otomatik kontrolleri değerlendiririz.',
      },
      {
        title: 'Düzenleyici kurum gereklilikleri',
        text: 'Bilgi sistemleri denetimi öngören düzenlemelere tabi kuruluşlarda, ilgili mevzuatın aradığı kontrol alanlarını kapsama alırız.',
      },
      {
        title: 'Bilgi güvenliği değerlendirmesi',
        text: 'Bilgi güvenliği politikalarını, rol ve yetki dağılımını ve olay yönetimi süreçlerini kurum yapısıyla birlikte inceleriz.',
      },
    ],
    process: [
      {
        title: 'Kapsam ve sistem envanteri',
        text: 'Denetime konu sistemleri, uygulamaları ve süreçleri birlikte belirleriz. Kapsamı ve dayanılan çerçeveyi yazılı olarak tanımlarız.',
      },
      {
        title: 'Risk ve kontrol eşlemesi',
        text: 'Her süreç için riskleri ve bunları karşılayan kontrolleri eşleriz. Test planını bu eşlemeye göre kurarız.',
      },
      {
        title: 'Kontrol testleri',
        text: 'Kontrollerin tasarımını ve dönem boyunca işleyişini örneklemle test ederiz. Her bulguyu kanıtıyla birlikte belgeleriz.',
      },
      {
        title: 'Raporlama',
        text: 'Bulguları önem derecesi ve öneriyle birlikte raporlarız. Yönetimin aksiyon planını izleyebileceği biçimde yazarız.',
      },
    ],
    deliverables: [
      { title: 'Bilgi sistemleri denetim raporu', text: 'Kapsam, yöntem, bulgular ve görüşle birlikte.' },
      { title: 'Bulgu ve öneri listesi', text: 'Önem derecesine göre sıralanmış, sorumlularıyla.' },
      { title: 'Kontrol matrisi', text: 'Risk ve kontrol eşlemesi; sonraki dönemlerde güncellenebilir biçimde.' },
    ],
    closing: 'Bilgi sistemleri denetimi kapsamınızı birlikte netleştirelim.',
    basis:
      'Bağımsız denetim standartları ile denetlenen kuruluşun tabi olduğu düzenleyici kurum mevzuatı. [BİLGİ GİRİLECEK] Kurum bazında yetki bilgisi yayın öncesi doğrulanmalıdır.',
  },
  {
    slug: 'ozel-entegrator-bilgi-sistemleri-denetimi',
    num: '07',
    group: 'uzman',
    short: 'Özel entegratör',
    title: 'Özel Entegratör Bilgi Sistemleri Denetimi',
    metaTitle: 'Özel Entegratör Bilgi Sistemleri Denetimi',
    summary:
      'Özel entegrasyon izni alan veya başvuran kuruluşların bilgi sistemlerinin Gelir İdaresi Başkanlığı düzenlemelerine uygunluk denetimi.',
    lead: 'Özel entegratörler, elektronik belge süreçlerini idarenin koşullarına uygun ve güvenli biçimde yürütmekle yükümlüdür. Bu yükümlülüğün bilgi sistemlerinde karşılanıp karşılanmadığını bağımsız olarak denetleriz.',
    image: '/img/service-ozel-entegrator.webp',
    scopeHeading: 'Elektronik belgenin güvencesi, sistemin denetlenebilirliğidir.',
    scope: [
      {
        title: 'İzin başvurusu öncesi denetim',
        text: 'Özel entegrasyon izni için başvuracak kuruluşların bilgi sistemlerini idarenin aradığı koşullar açısından başvuru öncesinde değerlendiririz.',
      },
      {
        title: 'Dönemsel uygunluk denetimi',
        text: 'İzin sahibi kuruluşlarda, düzenlemenin öngördüğü dönemsel bilgi sistemleri denetimini kapsam ve raporlama koşullarına uygun yürütürüz.',
      },
      {
        title: 'Güvenlik ve süreklilik kontrolleri',
        text: 'Veri güvenliği, saklama, yedekleme ve iş sürekliliği kontrollerinin tasarımını ve işleyişini test ederiz.',
      },
      {
        title: 'Bulguların giderilmesinin izlenmesi',
        text: 'Tespit edilen eksikliklerin giderilmesini yönetimin aksiyon planı üzerinden izler, sonucunu belgeleriz.',
      },
    ],
    process: [
      {
        title: 'Kapsam ve düzenleme',
        text: 'Denetimin türünü ve dayandığı düzenlemeyi birlikte netleştiririz. Gerekli belge ve erişim listesini bu aşamada paylaşırız.',
      },
      {
        title: 'Sistem ve süreç incelemesi',
        text: 'Elektronik belge süreçlerini uçtan uca inceler, ilgili kontrolleri belirleriz. Altyapı ve uygulama katmanlarını ayrı ayrı ele alırız.',
      },
      {
        title: 'Kontrol testleri',
        text: 'Kontrollerin işleyişini kanıta dayalı olarak test ederiz. Her bulguyu önem derecesiyle birlikte belgeleriz.',
      },
      {
        title: 'Rapor',
        text: 'Raporu idarenin aradığı biçim ve içerik koşullarına uygun olarak düzenleriz. Bulguları yönetimle rapordan önce paylaşırız.',
      },
    ],
    deliverables: [
      { title: 'Bilgi sistemleri denetim raporu', text: 'İdarenin öngördüğü biçimde, kapsam ve görüşle birlikte.' },
      { title: 'Bulgu ve öneri listesi', text: 'Önem derecesine göre sıralanmış, sorumlularıyla.' },
      { title: 'Çalışma dosyası', text: 'Testlerin ve kanıtların izlenebilir kaydı.' },
    ],
    closing: 'Özel entegratör denetiminizi birlikte planlayalım.',
    basis:
      '213 sayılı Vergi Usul Kanunu ve Gelir İdaresi Başkanlığı’nın özel entegrasyon izni ile elektronik belgelere ilişkin düzenlemeleri.',
  },
  {
    slug: 'kvkk-uyum',
    num: '08',
    group: 'uzman',
    short: 'KVKK',
    title: 'Kişisel Verilerin Korunması',
    metaTitle: 'KVKK Uyum Danışmanlığı',
    summary:
      '6698 sayılı Kanun kapsamında veri işleme süreçlerinin incelenmesi, uyum belgelerinin hazırlanması ve tedbirlerin değerlendirilmesi.',
    lead: 'Kişisel veri, işletmenin en sessiz yükümlülüklerinden biridir. Veri işleme süreçlerinizi Kanun’un aradığı ilkeler açısından inceler, uyumu belgelerle kurarız.',
    image: '/img/service-kvkk.webp',
    scopeHeading: 'Uyum, verinin nerede olduğunu bilmekle başlar.',
    scope: [
      {
        title: 'Veri envanteri ve işleme haritası',
        text: 'Hangi kişisel verinin hangi amaçla, hangi süreçte ve ne süreyle işlendiğini birimlerle birlikte kayıt altına alırız.',
      },
      {
        title: 'Aydınlatma ve rıza metinleri',
        text: 'Aydınlatma metinlerini ve gerektiği durumlarda açık rıza metinlerini işleme amaçlarıyla uyumlu olarak hazırlarız.',
      },
      {
        title: 'VERBİS kayıt süreci',
        text: 'Kayıt yükümlülüğünü değerlendirir, yükümlü kuruluşlarda Veri Sorumluları Sicili kaydının hazırlığını yürütürüz.',
      },
      {
        title: 'Teknik ve idari tedbirler',
        text: 'Erişim yetkileri, saklama ve imha süreçleri ile veri güvenliği tedbirlerini Kurul rehberleri çerçevesinde değerlendiririz.',
      },
    ],
    process: [
      {
        title: 'Mevcut durum',
        text: 'Veri işleyen birimleri ve süreçleri birlikte belirleriz. Görüşme takvimini ve belge listesini bu aşamada paylaşırız.',
      },
      {
        title: 'Envanter ve analiz',
        text: 'Veri işleme faaliyetlerini envantere işler, hukuki dayanak ve saklama süreleriyle eşleriz. Eksik alanları ayrıca not ederiz.',
      },
      {
        title: 'Uyum belgeleri',
        text: 'Aydınlatma metinlerini, politika ve prosedürleri işletmenin yapısına göre hazırlarız. Uygulanabilirliğini birimlerle birlikte sınarız.',
      },
      {
        title: 'Uygulama ve gözden geçirme',
        text: 'Tedbirlerin uygulanmasını izler, yönetime durum raporu sunarız. Süreçler değiştikçe envanterin güncellenmesini planlarız.',
      },
    ],
    deliverables: [
      { title: 'Kişisel veri envanteri', text: 'Süreç, amaç, dayanak ve saklama süresiyle birlikte.' },
      { title: 'Uyum belgeleri', text: 'Aydınlatma metinleri, politika ve prosedürler.' },
      { title: 'Durum raporu', text: 'Tespitler ve öncelikli aksiyonlar, yönetime yazılı olarak.' },
    ],
    closing: 'Kişisel veri süreçlerinizi birlikte gözden geçirelim.',
    basis: '6698 sayılı Kişisel Verilerin Korunması Kanunu, ikincil düzenlemeler ve Kişisel Verileri Koruma Kurulu kararları.',
  },
];

export const coreServices = services.filter((s) => s.group === 'temel');

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
