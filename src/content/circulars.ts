// Sirküler: numaralı, tarihli ve imzalı mevzuat duyuruları. Yayın sistemi kurulana kadar burada tutulur.
// [BİLGİ GİRİLECEK] Aşağıdakiler ÖRNEKTİR (sample: true): yeni bir mevzuat değişikliği ileri sürmezler;
// süregelen yükümlülükleri genel olarak hatırlatırlar. Yayın öncesi gerçek sirkülerlerle değiştirilmeli,
// numara ve tarih gerçek değerlerle girilmelidir. Süre, tutar ve oran bilinçli olarak yazılmadı.
import type { ArticleBlock } from './insights';

export type Circular = {
  slug: string;
  /** Sirküler numarası (ör. "2026/14"); örneklerde "Örnek 01" */
  no: string;
  /** Gerçek tarih girilince "14 Ekim 2026" biçiminde yazılır (JSON-LD'ye çevrilir) */
  date: string;
  topic: 'Tasdik' | 'KDV' | 'Teşvik' | 'Denetim' | 'Vergi';
  title: string;
  summary: string;
  /** İmzalayan meslek mensubu: team.ts slug'ı */
  signedBy: string;
  sample?: boolean;
  body: ArticleBlock[];
};

export const circulars: Circular[] = [
  {
    slug: 'ortulu-sermaye-tasdik-oncesi-kontrol',
    no: 'Örnek 09',
    date: '[TARİH GİRİLECEK]',
    topic: 'Tasdik',
    title: 'İlişkili kişi borçlanmalarında tasdik öncesi kontrol',
    summary:
      'Ortaklardan ve ilişkili kişilerden sağlanan borçlanmaların, tasdik raporu öncesinde örtülü sermaye ve faiz yönünden gözden geçirilmesi.',
    signedBy: 'fatih-olgun',
    sample: true,
    body: [
      {
        type: 'p',
        text: 'Ortaklardan ya da ilişkili kişilerden sağlanan borçlanmalar, mevzuatta belirli koşullarda örtülü sermaye olarak değerlendirilebilir. Bu değerlendirme, tasdik sürecinde en sık üzerinde durulan konulardan biridir.',
      },
      { type: 'h2', id: 'kontrol', text: 'Tasdik öncesi kontrol edilmesi gerekenler' },
      {
        type: 'list',
        items: [
          'İlişkili kişilerden sağlanan borçların dönem içindeki seyri',
          'Borçlanmaya ilişkin sözleşmeler ve faiz koşulları',
          'Öz sermaye ile borç tutarının mevzuattaki ölçütlere göre karşılaştırılması',
          'Hesaplanan faiz ve kur farklarının kayıtlardaki karşılığı',
        ],
      },
      { type: 'h2', id: 'sonuc', text: 'Değerlendirme' },
      {
        type: 'p',
        text: 'Örtülü sermaye tespit edilen durumlarda, ilgili faiz ve kur farklarının vergi matrahına etkisi beyan öncesinde değerlendirilmelidir. Bu değerlendirmenin dayanakları tasdik raporunda ayrıca yer alır.',
      },
    ],
  },
  {
    slug: 'vergi-incelemesinde-belge-ibraz-hazirligi',
    no: 'Örnek 08',
    date: '[TARİH GİRİLECEK]',
    topic: 'Vergi',
    title: 'Vergi incelemesinde defter ve belge ibraz talebine hazırlık',
    summary:
      'İnceleme kapsamında defter ve belge ibrazı istendiğinde, sürecin düzenli yürümesi için hazır tutulması önerilen kayıtlar.',
    signedBy: 'fatih-olgun',
    sample: true,
    body: [
      {
        type: 'p',
        text: 'Vergi incelemesinde ilk adım, çoğu zaman defter ve belgelerin ibrazına ilişkin yazılı taleptir. Talebe süresinde ve eksiksiz yanıt verilmesi, incelemenin sağlıklı ilerlemesi için belirleyicidir.',
      },
      { type: 'h2', id: 'hazir-tutulacaklar', text: 'Hazır tutulması önerilenler' },
      {
        type: 'list',
        items: [
          'Yasal defterler ve elektronik defter beratları',
          'İnceleme dönemine ait alış ve satış belgeleri',
          'Önemli sözleşmeler ve yönetim kurulu kararları',
          'Banka hesap ekstreleri ve mutabakatlar',
        ],
      },
      { type: 'h2', id: 'surec', text: 'Süreç boyunca' },
      {
        type: 'p',
        text: 'İbraz edilen belgelerin listesi tutanakla kayıt altına alınmalı, inceleme elemanının yazılı soruları belgeye dayalı olarak yanıtlanmalıdır. Süreler, ilgili yazıdaki ve mevzuattaki hükümlere göre izlenmelidir.',
      },
    ],
  },
  {
    slug: 'sinirli-denetim-ara-donem',
    no: 'Örnek 07',
    date: '[TARİH GİRİLECEK]',
    topic: 'Denetim',
    title: 'Ara dönem finansal tablolarda sınırlı bağımsız denetim',
    summary:
      'Ara dönem finansal tabloların sınırlı bağımsız denetiminin kapsamı ve tam kapsamlı denetimden farkı.',
    signedBy: 'samet-koz',
    sample: true,
    body: [
      {
        type: 'p',
        text: 'Sınırlı bağımsız denetim, ara dönem finansal tablolar hakkında daha dar kapsamlı bir güvence sağlar. Tam kapsamlı denetimden farklı olarak ağırlıklı olarak sorgulama ve analitik prosedürlere dayanır.',
      },
      { type: 'h2', id: 'kapsam', text: 'Kapsam ve sonuç' },
      {
        type: 'p',
        text: 'Sınırlı denetim sonucunda olumlu bir görüş yerine, finansal tabloların önemli yönlerden uygun olmadığına dair bir hususa rastlanıp rastlanmadığı raporlanır. Bu fark, raporu okuyanların sağlanan güvencenin düzeyini doğru anlaması için önemlidir.',
      },
      { type: 'h2', id: 'hazirlik', text: 'Şirketlerin hazırlığı' },
      {
        type: 'list',
        items: [
          'Ara dönem kapanış işlemlerinin zamanında tamamlanması',
          'Önemli tahmin ve değerlemelerin dayanaklarının hazırlanması',
          'Dönem içindeki olağan dışı işlemlerin ayrıca açıklanması',
        ],
      },
    ],
  },
  {
    slug: 'tevkifatli-islemlerde-iade-belgelendirme',
    no: 'Örnek 06',
    date: '[TARİH GİRİLECEK]',
    topic: 'KDV',
    title: 'Tevkifatlı işlemlerden doğan iadelerde belgelendirme',
    summary:
      'Kısmi tevkifat uygulanan işlemlerden kaynaklanan KDV iadesi taleplerinde belge ve kayıt düzenine ilişkin hatırlatma.',
    signedBy: 'fatih-olgun',
    sample: true,
    body: [
      {
        type: 'p',
        text: 'Kısmi tevkifat uygulanan işlemlerde, alıcı tarafından sorumlu sıfatıyla beyan edilen vergi nedeniyle satıcı lehine iade hakkı doğabilir. Bu iadelerin belgelendirilmesi, işlem türüne göre farklı ayrıntılar gerektirir.',
      },
      { type: 'h2', id: 'belgeler', text: 'Belgelendirmede dikkat edilecekler' },
      {
        type: 'list',
        items: [
          'Faturalarda tevkifat oranının ve tutarının doğru gösterilmesi',
          'Alıcı tarafından yapılan beyanın kontrol edilebilir olması',
          'İade listelerinin kayıtlarla mutabakatı',
        ],
      },
      {
        type: 'p',
        text: 'Hangi işlemlerin tevkifat kapsamında olduğu ve iadenin hangi yolla alınabileceği, güncel uygulama tebliği hükümlerine göre değerlendirilmelidir.',
      },
    ],
  },
  {
    slug: 'transfer-fiyatlandirmasi-yillik-hazirlik',
    no: 'Örnek 05',
    date: '[TARİH GİRİLECEK]',
    topic: 'Vergi',
    title: 'Transfer fiyatlandırması yıllık raporu için dönem içi hazırlık',
    summary:
      'İlişkili kişilerle yapılan işlemlerin yıllık raporlamasına ilişkin, yıl sonunu beklemeden yürütülmesi önerilen hazırlıklar.',
    signedBy: 'fatih-olgun',
    sample: true,
    body: [
      {
        type: 'p',
        text: 'Transfer fiyatlandırması raporu çoğu zaman yıl sonuna sıkışan bir çalışmaya dönüşür. Oysa raporun dayanağı olan bilgilerin büyük bölümü dönem içinde toplanabilir.',
      },
      { type: 'h2', id: 'donem-ici', text: 'Dönem içinde toplanabilecek bilgiler' },
      {
        type: 'list',
        items: [
          'İlişkili kişilerin ve aralarındaki işlemlerin güncel listesi',
          'İşlemlere ait sözleşmeler ve fiyatlandırma esasları',
          'Üstlenilen işlevlere ve risklere ilişkin açıklamalar',
          'Emsal araştırması için kullanılacak veri kaynakları',
        ],
      },
      { type: 'h2', id: 'rapor', text: 'Rapor aşaması' },
      {
        type: 'p',
        text: 'Raporun içeriği ve teslim süreleri ilgili mevzuatla belirlenir. Dönem içinde hazırlanan dosya, yıl sonunda yalnızca güncellenmesi gereken bir çalışma hâline gelir.',
      },
    ],
  },
  {
    slug: 'bagimsiz-denetim-olcutlerinin-degerlendirilmesi',
    no: 'Örnek 04',
    date: '[TARİH GİRİLECEK]',
    topic: 'Denetim',
    title: 'Bağımsız denetime tabi olma ölçütlerinin dönem başında değerlendirilmesi',
    summary:
      'Şirketlerin bağımsız denetime tabi olup olmadığının, güncel ölçütler üzerinden dönem başında değerlendirilmesine ilişkin hatırlatma.',
    signedBy: 'samet-koz',
    sample: true,
    body: [
      {
        type: 'p',
        text: 'Bağımsız denetime tabi şirketler, aktif toplamı, net satış hasılatı ve çalışan sayısı gibi ölçütlere göre belirlenir. Bu ölçütler Cumhurbaşkanı kararıyla belirlenir ve dönemsel olarak değişebilir.',
      },
      { type: 'h2', id: 'degerlendirme', text: 'Değerlendirme nasıl yapılır?' },
      {
        type: 'p',
        text: 'Değerlendirme, mevzuatta öngörülen dönemlere ait finansal büyüklükler üzerinden yapılır. Ölçütlerin aşılıp aşılmadığı, şirketin ve gerektiğinde grup şirketlerinin rakamlarıyla birlikte incelenmelidir.',
      },
      { type: 'h2', id: 'sonrasi', text: 'Denetime tabi olunması hâlinde' },
      {
        type: 'list',
        items: [
          'Denetçinin genel kurul tarafından seçilmesi ve tescili',
          'Finansal tabloların denetime hazırlanma takviminin belirlenmesi',
          'Önceki dönem açılış bakiyelerinin gözden geçirilmesi',
        ],
      },
    ],
  },
  {
    slug: 'tam-tasdik-sozlesmelerinin-bildirimi',
    no: 'Örnek 03',
    date: '[TARİH GİRİLECEK]',
    topic: 'Tasdik',
    title: 'Tam tasdik sözleşmelerinin bildirimi ve dönem içi hazırlık',
    summary:
      'Tam tasdik sözleşmesinin süresinde bildirilmesi ve tasdik raporuna kadar dönem içinde yürütülmesi gereken hazırlıklara ilişkin hatırlatma.',
    signedBy: 'fatih-olgun',
    sample: true,
    body: [
      {
        type: 'p',
        text: 'Tam tasdik, yalnızca yıl sonunda imzalanan bir rapor değildir. Sözleşmenin kurulmasından raporun teslimine kadar süren, dönem boyunca belgelendirilen bir çalışmadır. Bu sirkülerle, sözleşme bildirimine ve dönem içi hazırlığa ilişkin temel noktaları hatırlatıyoruz.',
      },
      { type: 'h2', id: 'bildirim', text: 'Sözleşmenin bildirimi' },
      {
        type: 'p',
        text: 'Tam tasdik sözleşmesi, mevzuatta öngörülen süre içinde ilgili vergi dairesine bildirilmelidir. Süresinde bildirilmeyen sözleşme, tasdik sürecinin tamamını etkileyebilir. Bildirim tarihleri ve usulü için Tasdik Yönetmeliği hükümleri esas alınır.',
      },
      { type: 'h2', id: 'donem-ici', text: 'Dönem içinde yapılması gerekenler' },
      {
        type: 'p',
        text: 'Raporun dayanağı, dönem içinde düzenli olarak tutulan kayıtlar ve saklanan belgelerdir. Mükelleflerin özellikle şu konulara dikkat etmesini öneriyoruz:',
      },
      {
        type: 'list',
        items: [
          'Yasal defter kayıtlarının dönem içinde güncel tutulması',
          'Alış ve satış belgelerinin kayıtlarla düzenli olarak eşleştirilmesi',
          'İlişkili kişi işlemlerine ait sözleşme ve belgelerin ayrıca dosyalanması',
          'Dönem sonu değerleme ve karşılık işlemlerinin dayanaklarının hazırlanması',
        ],
      },
      { type: 'h2', id: 'rapor', text: 'Beyanname ve tasdik raporu' },
      {
        type: 'p',
        text: 'Kurumlar vergisi beyannamesi, tasdik sözleşmesi bulunan mükelleflerde yeminli mali müşavir tarafından imzalanır. Tasdik raporu, dönem içi çalışmaların ve yıl sonu incelemesinin sonuçlarını mevzuatın öngördüğü biçimde ortaya koyar.',
      },
    ],
  },
  {
    slug: 'kdv-iadesinde-rapor-oncesi-belge-kontrolu',
    no: 'Örnek 02',
    date: '[TARİH GİRİLECEK]',
    topic: 'KDV',
    title: 'KDV iadesi taleplerinde rapor öncesi belge kontrolü',
    summary:
      'İade talebinin yeminli mali müşavir raporuyla sonuçlandırılmasından önce belge ve kayıt düzeninde kontrol edilmesi önerilen başlıca konular.',
    signedBy: 'fatih-olgun',
    sample: true,
    body: [
      {
        type: 'p',
        text: 'KDV iadesi taleplerinde sürenin uzamasının en sık nedeni, rapor aşamasında ortaya çıkan belge eksiklikleridir. Bu eksikliklerin büyük bölümü, talep hazırlanırken yapılacak bir ön kontrolle önlenebilir.',
      },
      { type: 'h2', id: 'yuklenilen-kdv', text: 'Yüklenilen vergilerin belgelendirilmesi' },
      {
        type: 'p',
        text: 'İadeye konu yüklenilen vergilerin her biri alış belgesiyle karşılanmalı ve kayıtlarla birebir eşleşmelidir. Listelerde yer alan belgelerin asıllarına ulaşılabilir olması gerekir.',
      },
      { type: 'h2', id: 'kontrol-listesi', text: 'Ön kontrol listesi' },
      {
        type: 'list',
        items: [
          'İade listelerinin defter kayıtlarıyla mutabakatı',
          'İstisna kapsamındaki teslimlere ait gümrük ve fatura belgelerinin eksiksizliği',
          'Satıcılara ilişkin olumsuz tespit bulunup bulunmadığının kontrolü',
          'Önceki dönemlerden devreden tutarların dayanaklarının hazır tutulması',
        ],
      },
      { type: 'h2', id: 'rapor', text: 'Rapor aşaması' },
      {
        type: 'p',
        text: 'Ön kontrolde tespit edilen farklar, rapor öncesinde mükellefle yazılı olarak paylaşılır. Düzeltilebilir konular giderildikten sonra rapor, mevzuatın öngördüğü biçimde düzenlenir.',
      },
    ],
  },
  {
    slug: 'yatirim-tesvik-belgesi-kapama-hatirlatmasi',
    no: 'Örnek 01',
    date: '[TARİH GİRİLECEK]',
    topic: 'Teşvik',
    title: 'Yatırım teşvik belgelerinin kapatılmasında süreç hatırlatması',
    summary:
      'Yatırımı tamamlanan teşvik belgelerinin kapatılmasında başvuru öncesi hazırlanması gereken belge ve kayıtlar.',
    signedBy: 'fatih-olgun',
    sample: true,
    body: [
      {
        type: 'p',
        text: 'Yatırım teşvik belgesinin sağladığı destekler, belgenin usulüne uygun olarak kapatılmasıyla kesinleşir. Kapama süreci, yatırım dönemi boyunca tutulan kayıtların bir araya getirilmesini gerektirir.',
      },
      { type: 'h2', id: 'hazirlik', text: 'Başvuru öncesi hazırlık' },
      {
        type: 'list',
        items: [
          'Belge kapsamındaki yerli ve ithal makine-teçhizat listelerinin fiilî alımlarla karşılaştırılması',
          'Yatırım harcamalarına ait faturaların ve ödeme belgelerinin dosyalanması',
          'Belge üzerindeki revizyonların ve ek sürelerin kontrol edilmesi',
        ],
      },
      { type: 'h2', id: 'tespit-raporu', text: 'Yeminli mali müşavir tespit raporu' },
      {
        type: 'p',
        text: 'Mevzuat, belgenin kapsamına ve tutarına bağlı olarak kapama işleminde yeminli mali müşavir tespit raporu arayabilir. Rapor, gerçekleşen yatırımın belge koşullarına uygunluğunu belge ve kayıt düzeyinde ortaya koyar.',
      },
    ],
  },
];

export function getCircular(slug: string) {
  return circulars.find((c) => c.slug === slug);
}
