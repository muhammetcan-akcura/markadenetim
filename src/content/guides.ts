// Rehberler: müşterinin gerçekten sorduğu sorulara sade cevaplar.
// [BİLGİ GİRİLECEK] Metinler genel bilgilendirme amaçlıdır ve yayın öncesi sorumlu YMM tarafından
// gözden geçirilmelidir. Tutar, oran, süre ve madde numarası bilinçli olarak yazılmadı: bunlar sık
// değişir ve yanlış bir rakam güveni zedeler. Ayrıntı için ilgili hizmet sayfasına ve görüşmeye yönlendirilir.
import type { ArticleBlock } from './insights';

export type Guide = {
  slug: string;
  num: string;
  title: string;
  summary: string;
  /** Başka dildeki karşılığıyla ortak anahtar (lib/alternates.ts); yoksa sayfa yalnızca bu dilde yaşar */
  pair?: string;
  /** Konu: dizindeki filtre için */
  topic: string;
  /** İlgili hizmet sayfası (services.ts slug) */
  service: string;
  /** Dizin kartı görseli (dekoratif); hizmet görsellerinden, kartlar arasında tekrar etmeyecek şekilde */
  image: string;
  body: ArticleBlock[];
};

export const guides: Guide[] = [
  {
    slug: 'tam-tasdik-nedir',
    pair: 'tam-tasdik',
    topic: 'Tasdik',
    num: '01',
    title: 'Tam tasdik: kimleri kapsar, süreç nasıl işler?',
    summary:
      'Tam tasdik sözleşmesinin ne anlama geldiği, hangi durumlarda söz konusu olduğu ve sözleşmeden rapora kadar sürecin adımları.',
    service: 'yeminli-mali-musavirlik',
    image: '/img/service-ymm.webp',
    body: [
      {
        type: 'p',
        text: 'Tam tasdik, yeminli mali müşavirin bir işletmenin yıllık beyannamesini yasal defter ve belgeler üzerinden inceleyerek doğruluğunu yazılı olarak teyit etmesidir. Bu teyit, 3568 sayılı Kanun ve ona dayanan tasdik mevzuatı çerçevesinde verilir ve imzalayan meslek mensubuna kişisel sorumluluk yükler.',
      },
      { type: 'h2', id: 'kimler', text: 'Kimler için söz konusu olur?' },
      {
        type: 'p',
        text: 'Mevzuat, belirli ölçütleri aşan işletmeler için tam tasdiki zorunlu tutabilir. Bunun dışında birçok işletme, kayıt düzenini güvence altına almak, vergi incelemelerine hazırlıklı olmak ya da iş ortaklarına ve finans kuruluşlarına güvence sunmak için isteğe bağlı olarak tam tasdik sözleşmesi yapar.',
      },
      {
        type: 'p',
        text: 'İşletmenizin zorunluluk kapsamında olup olmadığı, ilgili dönemin ölçütlerine göre değerlendirilmelidir. Bu ölçütler zaman içinde değişebildiği için kesin cevap, güncel mevzuat üzerinden verilir.',
      },
      { type: 'h2', id: 'surec', text: 'Süreç adım adım' },
      {
        type: 'list',
        items: [
          'Sözleşme: Yeminli mali müşavir ile işletme arasında tam tasdik sözleşmesi yapılır ve süresi içinde vergi dairesine bildirilir.',
          'Dönem içi çalışma: Kayıtlar ve belgeler dönem boyunca incelenir; tespitler çalışma kâğıtlarına işlenir.',
          'Yıl sonu incelemesi: Değerleme, karşılık ve dönem sonu işlemleri dayanaklarıyla birlikte gözden geçirilir.',
          'Beyanname ve rapor: Beyanname yeminli mali müşavirin imzasıyla verilir; tasdik raporu mevzuatın öngördüğü biçimde düzenlenir.',
        ],
      },
      { type: 'h2', id: 'hazirlik', text: 'İşletmenin hazırlaması gerekenler' },
      {
        type: 'p',
        text: 'Sürecin sağlıklı yürümesi, kayıt düzenine bağlıdır. Yasal defterlerin güncel tutulması, belgelerin düzenli dosyalanması ve ilişkili kişi işlemlerinin sözleşmelerle desteklenmesi, raporun hem hızını hem de güvenilirliğini belirler.',
      },
      {
        type: 'quote',
        text: 'Tasdik bir imzadan ibaret değildir; imzanın arkasındaki inceleme, tasdikin kendisidir.',
      },
      { type: 'h2', id: 'sik-sorulanlar', text: 'Sık sorulan bir soru: tasdik vergi incelemesini engeller mi?' },
      {
        type: 'p',
        text: 'Hayır. Tam tasdik, idarenin inceleme yetkisini ortadan kaldırmaz. Ancak dönemin kayıt ve belge düzeninin bağımsız bir meslek mensubu tarafından incelenmiş ve raporlanmış olması, olası bir incelemede işletmenin elini güçlendirir.',
      },
    ],
  },
  {
    slug: 'kdv-iadesinde-ymm-raporu',
    pair: 'kdv-raporu',
    topic: 'KDV',
    num: '02',
    title: 'KDV iadesinde YMM raporu ne zaman gerekir?',
    summary:
      'KDV iadesinin hangi yollarla alınabildiği, yeminli mali müşavir raporunun bu yollar arasındaki yeri ve rapor öncesi hazırlık.',
    service: 'kdv-iadesi',
    image: '/img/service-kdv.webp',
    body: [
      {
        type: 'p',
        text: 'KDV iadesi, iade hakkı doğuran işlemlerden kaynaklanan verginin mükellefe geri ödenmesi ya da borçlarına mahsup edilmesidir. Mevzuat, iadenin türüne ve tutarına göre farklı yollar öngörür; yeminli mali müşavir raporu bu yolların en sık kullanılanlarından biridir.',
      },
      { type: 'h2', id: 'iade-yollari', text: 'İade hangi yollarla alınabilir?' },
      {
        type: 'list',
        items: [
          'Yeminli mali müşavir KDV iadesi tasdik raporu ile',
          'Vergi inceleme raporu sonucuna göre',
          'Teminat gösterilmesi karşılığında',
          'Mevzuatın belirlediği sınırlar içinde, rapor aranmaksızın',
        ],
      },
      {
        type: 'p',
        text: 'Hangi yolun uygulanabileceği; iade türüne, talep edilen tutara ve mükellefin durumuna göre değişir. Bu sınırlar dönemsel olarak güncellendiği için talep öncesinde güncel mevzuatın kontrol edilmesi gerekir.',
      },
      { type: 'h2', id: 'raporun-yeri', text: 'YMM raporunun sağladığı' },
      {
        type: 'p',
        text: 'Rapor yolu, teminat yükü olmadan iadenin belgeye dayalı olarak sonuçlandırılmasını sağlar. Raporda iadeye konu işlemler, yüklenilen vergiler ve satıcılara ilişkin kontroller tek tek ortaya konur.',
      },
      { type: 'h2', id: 'hazirlik', text: 'Rapor öncesi hazırlık' },
      {
        type: 'list',
        items: [
          'İade listelerinin defter kayıtlarıyla mutabakatı',
          'İstisna kapsamındaki teslimlere ait gümrük ve fatura belgeleri',
          'Yüklenilen vergiye ait alış belgelerinin asıllarına erişim',
          'Satıcılarla ilgili olumsuz tespit kontrolü',
        ],
      },
      {
        type: 'p',
        text: 'Hazırlık ne kadar düzenliyse rapor süreci o kadar kısalır. Eksiklikler rapor aşamasında değil, talep hazırlanırken giderilmelidir.',
      },
    ],
  },
  {
    slug: 'yatirim-tesvik-belgesi-kapama',
    topic: 'Teşvik',
    num: '03',
    title: 'Yatırım teşvik belgesi nasıl kapatılır?',
    summary:
      'Yatırımı tamamlanan teşvik belgesinin kapatılması, tespit raporunun rolü ve kapama öncesi hazırlanması gereken kayıtlar.',
    service: 'yeminli-mali-musavirlik',
    image: '/img/service-finansal.webp',
    body: [
      {
        type: 'p',
        text: 'Yatırım teşvik belgesi, yatırım dönemi boyunca sağlanan desteklerin dayanağıdır. Yatırım tamamlandığında belgenin kapatılması, bu desteklerin kesinleşmesi için gerekli son adımdır.',
      },
      { type: 'h2', id: 'kapama', text: 'Kapama ne anlama gelir?' },
      {
        type: 'p',
        text: 'Kapama, gerçekleşen yatırımın belgede taahhüt edilen koşullarla karşılaştırılması ve sonucun idare tarafından onaylanmasıdır. Belgedeki makine-teçhizat listeleri, harcama kalemleri ve süreler bu karşılaştırmanın temelini oluşturur.',
      },
      { type: 'h2', id: 'tespit-raporu', text: 'Yeminli mali müşavir tespit raporu' },
      {
        type: 'p',
        text: 'Mevzuat, belgenin kapsamına ve tutarına bağlı olarak kapama işleminde yeminli mali müşavir tespit raporu arayabilir. Rapor, yatırım harcamalarının belge koşullarına uygunluğunu fatura, ödeme ve kayıt düzeyinde ortaya koyar.',
      },
      { type: 'h2', id: 'hazirlik', text: 'Kapama öncesi hazırlık' },
      {
        type: 'list',
        items: [
          'Yerli ve ithal makine-teçhizat listelerinin fiilî alımlarla karşılaştırılması',
          'Yatırım harcamalarına ait faturaların ve ödeme belgelerinin dosyalanması',
          'Belge üzerindeki revizyonların ve ek sürelerin kontrolü',
          'Gerçekleşen istihdam ve kapasite bilgilerinin belgelendirilmesi',
        ],
      },
      { type: 'h2', id: 'dikkat', text: 'Dikkat edilmesi gerekenler' },
      {
        type: 'p',
        text: 'Belge kapsamı dışında kalan harcamalar ya da belgeye işlenmemiş revizyonlar, kapama sırasında desteklerin bir kısmının sorgulanmasına yol açabilir. Bu nedenle yatırım dönemi boyunca belge ile fiilî uygulamanın uyumu düzenli olarak izlenmelidir.',
      },
    ],
  },
  {
    slug: 'bagimsiz-denetime-kimler-tabidir',
    topic: 'Denetim',
    num: '04',
    title: 'Bağımsız denetime kimler tabidir?',
    summary:
      'Bağımsız denetime tabi şirketlerin nasıl belirlendiği, ölçütlerin nasıl değerlendirildiği ve denetim sürecinin ana adımları.',
    service: 'denetim',
    image: '/img/service-denetim-beton.webp',
    body: [
      {
        type: 'p',
        text: 'Bağımsız denetim, finansal tabloların ilgili raporlama çerçevesine uygunluğu hakkında bağımsız bir denetçinin görüş bildirmesidir. Türk Ticaret Kanunu çerçevesinde belirli ölçütleri aşan şirketler bu denetime tabidir.',
      },
      { type: 'h2', id: 'olcutler', text: 'Ölçütler nasıl belirlenir?' },
      {
        type: 'p',
        text: 'Denetime tabi şirketler aktif toplamı, net satış hasılatı ve çalışan sayısı gibi ölçütlerle belirlenir. Ölçütlerin değerleri Cumhurbaşkanı kararıyla belirlenir ve zaman içinde değişebilir. Bazı faaliyet alanlarındaki şirketler ise ölçütlerden bağımsız olarak denetime tabidir.',
      },
      { type: 'h2', id: 'surec', text: 'Denetim süreci' },
      {
        type: 'list',
        items: [
          'Denetçinin seçimi: Genel kurul tarafından seçilir ve tescil edilir.',
          'Planlama: Şirketin faaliyetleri ve riskleri anlaşılır, denetim stratejisi belirlenir.',
          'Saha çalışması: Kayıtlar, belgeler ve iç kontroller test edilir.',
          'Raporlama: Finansal tablolara ilişkin görüş, bağımsız denetçi raporuyla bildirilir.',
        ],
      },
      { type: 'h2', id: 'istege-bagli', text: 'Zorunlu değilse?' },
      {
        type: 'p',
        text: 'Denetime tabi olmayan şirketler de finansman, ortaklık ya da satın alma süreçlerinde isteğe bağlı olarak bağımsız denetim yaptırabilir. Bu, iş ortaklarına ve finans kuruluşlarına bağımsız bir güvence sunar.',
      },
    ],
  },
  {
    slug: 'transfer-fiyatlandirmasi-temel-kavramlar',
    topic: 'Vergi',
    num: '05',
    title: 'Transfer fiyatlandırması: temel kavramlar',
    summary:
      'İlişkili kişiler, emsallere uygunluk ilkesi, yöntemler ve belgelendirme yükümlülüğü hakkında sade bir giriş.',
    service: 'vergi-danismanligi',
    image: '/img/service-vergi-defter.webp',
    body: [
      {
        type: 'p',
        text: 'Transfer fiyatlandırması, ilişkili kişilerle yapılan mal ve hizmet alım satımlarında uygulanan fiyatların, birbirinden bağımsız taraflar arasında oluşacak fiyatlara uygun olmasını konu alır.',
      },
      { type: 'h2', id: 'iliskili-kisi', text: 'İlişkili kişi kimdir?' },
      {
        type: 'p',
        text: 'Ortaklar, ortakların yakınları, ortakların doğrudan ya da dolaylı olarak kontrol ettiği şirketler ve grup şirketleri ilişkili kişi kapsamında değerlendirilebilir. Kapsamın tam sınırları mevzuatta tanımlanmıştır.',
      },
      { type: 'h2', id: 'emsal', text: 'Emsallere uygunluk ilkesi' },
      {
        type: 'p',
        text: 'İlişkili kişilerle yapılan işlemlerde fiyatın, benzer koşullarda bağımsız taraflar arasında oluşacak fiyatla uyumlu olması gerekir. Uyumun nasıl gösterileceği, işlemin niteliğine uygun bir yöntemle belgelendirilir.',
      },
      { type: 'h2', id: 'yontemler', text: 'Yöntemler' },
      {
        type: 'list',
        items: [
          'Karşılaştırılabilir fiyat yöntemi',
          'Maliyet artı yöntemi',
          'Yeniden satış fiyatı yöntemi',
          'İşlemsel kâr yöntemleri',
        ],
      },
      {
        type: 'p',
        text: 'Hangi yöntemin seçildiği kadar, seçimin neden yapıldığının raporda gerekçelendirilmesi de önemlidir.',
      },
    ],
  },
  {
    slug: 'vergi-incelemesine-hazirlik',
    topic: 'Vergi',
    num: '06',
    title: 'Vergi incelemesine nasıl hazırlanılır?',
    summary:
      'İnceleme bildiriminden tutanağa kadar sürecin adımları, mükellefin hakları ve hazırlıkta dikkat edilecek noktalar.',
    service: 'vergi-danismanligi',
    image: '/img/guide-inceleme.webp',
    body: [
      {
        type: 'p',
        text: 'Vergi incelemesi, beyan edilen matrahın doğruluğunun defter, belge ve kayıtlar üzerinden araştırılmasıdır. İyi hazırlanmış bir işletme için inceleme, kayıt düzeninin doğrulandığı bir süreçtir.',
      },
      { type: 'h2', id: 'baslangic', text: 'İnceleme nasıl başlar?' },
      {
        type: 'p',
        text: 'İnceleme, mükellefe yapılan bildirim ve defter-belge ibraz talebiyle başlar. Bildirimde incelemenin konusu ve dönemi belirtilir; ibraz süreleri mevzuatta ve yazıda gösterilir.',
      },
      { type: 'h2', id: 'haklar', text: 'Mükellefin hakları' },
      {
        type: 'list',
        items: [
          'İncelemenin konusu hakkında bilgi alma',
          'Görüş ve açıklamalarını yazılı olarak sunma',
          'Tutanakları okuyarak imzalama ve şerh düşme',
          'Süreç boyunca bir meslek mensubundan destek alma',
        ],
      },
      { type: 'h2', id: 'hazirlik', text: 'Hazırlıkta dikkat edilecekler' },
      {
        type: 'p',
        text: 'Belgelerin düzenli dosyalanması, önemli işlemlerin gerekçelerinin yazılı olarak saklanması ve sorulara belgeye dayalı yanıt verilmesi, incelemenin sağlıklı sonuçlanmasını kolaylaştırır.',
      },
    ],
  },
  {
    slug: 'kvkk-uyumunda-ilk-adimlar',
    topic: 'Uyum',
    num: '07',
    title: 'KVKK uyumunda ilk adımlar',
    summary:
      'Kişisel veri envanteri, aydınlatma yükümlülüğü, VERBİS ve veri güvenliği tedbirleriyle uyum sürecine başlangıç.',
    service: 'kvkk-uyum',
    image: '/img/service-kvkk.webp',
    body: [
      {
        type: 'p',
        text: '6698 sayılı Kişisel Verilerin Korunması Kanunu, kişisel veri işleyen her kuruluşa belirli yükümlülükler getirir. Uyum, tek seferlik bir belge hazırlığı değil, sürekli işleyen bir süreçtir.',
      },
      { type: 'h2', id: 'envanter', text: '1. Veri envanteri' },
      {
        type: 'p',
        text: 'Hangi kişisel verinin, hangi amaçla, hangi hukuki dayanakla ve ne süreyle işlendiği birimler bazında kayıt altına alınır. Diğer bütün adımlar bu envantere dayanır.',
      },
      { type: 'h2', id: 'aydinlatma', text: '2. Aydınlatma ve rıza' },
      {
        type: 'p',
        text: 'Veri sahipleri, verilerinin işlenmesi hakkında aydınlatılır. Açık rızanın gerekli olduğu durumlar envantere göre belirlenir ve rıza metinleri ayrıca hazırlanır.',
      },
      { type: 'h2', id: 'verbis', text: '3. VERBİS' },
      {
        type: 'p',
        text: 'Kayıt yükümlülüğü bulunan veri sorumluları, Veri Sorumluları Sicili’ne (VERBİS) kayıt olur. Yükümlülüğün kapsamı Kurul kararlarıyla belirlenir.',
      },
      { type: 'h2', id: 'guvenlik', text: '4. Teknik ve idari tedbirler' },
      {
        type: 'list',
        items: [
          'Erişim yetkilerinin görev bazında sınırlandırılması',
          'Saklama ve imha politikasının hazırlanması',
          'Çalışanlara yönelik farkındalık eğitimleri',
          'Veri ihlali durumunda izlenecek sürecin tanımlanması',
        ],
      },
    ],
  },
  {
    slug: 'e-belge-sureclerinde-bilgi-sistemleri-denetimi',
    topic: 'Uyum',
    num: '08',
    title: 'Elektronik belge süreçlerinde bilgi sistemleri denetimi',
    summary:
      'Özel entegratörler ve elektronik belge kullanan şirketler için bilgi sistemleri denetiminin amacı ve kapsamı.',
    service: 'ozel-entegrator-bilgi-sistemleri-denetimi',
    image: '/img/service-ozel-entegrator.webp',
    body: [
      {
        type: 'p',
        text: 'Elektronik fatura, elektronik defter ve diğer elektronik belgeler, kâğıt belgenin yerini aldıkça bu belgeleri üreten ve saklayan sistemlerin güvenilirliği de vergi güvenliğinin parçası hâline gelmiştir.',
      },
      { type: 'h2', id: 'amac', text: 'Denetimin amacı' },
      {
        type: 'p',
        text: 'Bilgi sistemleri denetimi, elektronik belgelerin bütünlüğünün, gizliliğinin ve erişilebilirliğinin sağlanıp sağlanmadığını bağımsız olarak değerlendirir. Özel entegratörler için bu denetim, Gelir İdaresi Başkanlığı düzenlemelerinin bir gereğidir.',
      },
      { type: 'h2', id: 'kapsam', text: 'Kapsamda neler var?' },
      {
        type: 'list',
        items: [
          'Erişim ve yetki yönetimi',
          'Belge üretimi, iletimi ve saklama süreçleri',
          'Yedekleme ve iş sürekliliği',
          'Değişiklik yönetimi ve olay kayıtları',
        ],
      },
      { type: 'h2', id: 'hazirlik', text: 'Hazırlık' },
      {
        type: 'p',
        text: 'Süreç belgeleri, politika ve prosedürler ile sistem envanterinin güncel olması, denetimin hem süresini hem de bulguların niteliğini doğrudan etkiler.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
