// Türkçe metinler. EN eklenecekse aynı şekle sahip content/en.ts yazılır;
// bileşenler metni bu sözlükten alır, kendi içinde metin tutmaz.
import { placeholder, realDataPlaceholder, legalPlaceholder } from '@/lib/site';

export const tr = {
  meta: {
    title: 'MarkaDenetim Yeminli Mali Müşavirlik ve Denetim A.Ş.',
    description:
      'Yeminli mali müşavirlik, bağımsız denetim, vergi ve finansal danışmanlık. MarkaDenetim, işletmelerin kararlarını sağlam bir mali zemine oturtur.',
    ogDescription: 'Yeminli mali müşavirlik, bağımsız denetim, vergi ve finansal danışmanlık.',
  },
  a11y: {
    skip: 'İçeriğe geç',
    home: 'MarkaDenetim, sayfa başı',
    mainNav: 'Ana gezinme',
    mobileNav: 'Mobil gezinme',
    menu: 'Menü',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    pauseVideo: 'Arka plan videosunu durdur',
    playVideo: 'Arka plan videosunu oynat',
  },
  nav: [
    { href: '/#hakkimizda', label: 'Hakkımızda' },
    { href: '/#hizmetler', label: 'Hizmetler' },
    { href: '/#ekip', label: 'Ekibimiz' },
    { href: '/#yaklasim', label: 'Yaklaşımımız' },
    { href: '/#guncel', label: 'Güncel' },
    { href: '/#iletisim', label: 'İletişim' },
  ],
  cta: { label: 'İletişime Geç', href: '/#iletisim' },
  contact: {
    phoneLabel: 'Telefon',
    phone: placeholder,
    emailLabel: 'E-posta',
    email: placeholder,
  },
  hero: {
    lines: ['Finansal güven.', 'Stratejik bakış.', 'Sürdürülebilir yapı.'],
    lead: 'Bağımsız denetim, vergi ve finansal danışmanlıkla işletmelerin kararlarını sağlam bir mali zemine oturtuyoruz.',
    cta: { label: 'Görüşme talep edin', href: '/#iletisim' },
    tag: 'Yeminli Mali Müşavirlik ve Denetim',
    // Videodaki üç sahne; sıra videodaki ve başlık satırlarındaki sırayla aynıdır
    scenes: ['Kent', 'Enerji', 'Hasat'],
    hud: { scene: 'Sahne', pause: 'Durdur', play: 'Oynat' },
  },
  statement: {
    panorama: '/img/statement-fields-new.jpg',
    text: 'Rakamların ötesinde, işletmelerin geleceğine daha net bakmak.',
    note: 'MarkaDenetim, yeminli mali müşavirlik ve bağımsız denetim alanında işletmelere eşlik eder. Her çalışmayı mevzuata uygunluk, belgelendirme ve açık iletişim üzerine kurarız. Amacımız, sayıların arkasındaki yapıyı yönetim için okunur hâle getirmek.',
  },
  services: {
    kicker: 'UZMANLIK ALANLARIMIZ',
    titleLine1: 'İşletmenize',
    titleEmphasis: 'değer katan',
    titleLine2: 'uzmanlık alanları.',
    intro:
      'Dört ana alanda, tek bir disiplinle çalışırız: Mevzuata uygunluk, finansal şeffaflık ve sürdürülebilir büyüme için güvenilir çözümler sunarız.',
    keywords: ['MEVZUAT', 'DENETİM', 'STRATEJİ', 'SÜRDÜRÜLEBİLİR BÜYÜME'],
    cta: 'TÜM HİZMETLERİ GÖR',
    boardroomImage: '/img/services-boardroom.jpg',
    items: [
      {
        num: '01',
        title: 'Yeminli Mali Müşavirlik',
        text: 'Tam tasdik, KDV iadesi tasdiki ve özel amaçlı raporlar. Her belgelendirilmiş bir inceleme sürecine dayanır.',
        image: '/img/service-ymm.jpg',
      },
      {
        num: '02',
        title: 'Denetim',
        text: 'Bağımsız denetim hizmetleri ile finansal tablolarınızın doğruluğunu, şeffaflığını ve güvenilirliğini sağlarız.',
        image: '/img/service-denetim.jpg',
      },
      {
        num: '03',
        title: 'Vergi Danışmanlığı',
        text: 'Vergi planlaması, vergi incelemeleri ve uyuşmazlıklar konusunda işletmenize özel çözümler sunarız.',
        image: '/img/service-vergi.jpg',
      },
      {
        num: '04',
        title: 'Finansal Danışmanlık',
        text: 'Finansal yapılandırma, raporlama ve sürdürülebilir büyüme için stratejik danışmanlık hizmetleri sunarız.',
        image: '/img/service-finansal.jpg',
      },
    ],
  },
  about: {
    title: 'MarkaDenetim',
    paragraphs: [
      'MarkaDenetim Yeminli Mali Müşavirlik ve Denetim A.Ş., işletmelerin finansal kayıtlarını mevzuat çerçevesinde inceleyen ve sonuçlarını açık bir dille raporlayan bir meslek kuruluşudur.',
      'Çalışmalarımızı bağımsızlık, mesleki özen ve gizlilik üzerine kurarız. Her görevde kapsamı baştan netleştirir, bulguları belgeleriyle birlikte sunar ve kararın yönetimde kalmasını gözetiriz.',
    ],
    principlesLabel: 'İlkelerimiz',
    principles: [
      { title: 'Uzmanlık', text: 'Her alanda, o alanın mevzuatını ve uygulamasını yakından izleyerek çalışırız.' },
      { title: 'Güven', text: 'Bulgularımızı belgeye dayandırır, varsayımlarımızı açıkça yazarız.' },
      { title: 'Disiplin', text: 'Her çalışmayı tanımlı bir yöntem ve kontrol adımlarıyla yürütürüz.' },
      { title: 'Şeffaflık', text: 'Kapsamı, takvimi ve ücretlendirmeyi işin başında paylaşırız.' },
    ],
    // Geçici görsel: hero videosundan üretilmiş kent dokusu (scripts/make-stills.sh).
    // [GÖRSEL GİRİLECEK] Önerilen kalıcı çekim: dikey 4:5, beton merdiven detayı, kuzey ışığı, navy ton.
    image: { src: '/img/about-skyline.jpg', alt: 'Gece, yukarıdan görülen kent dokusu: cam kuleler ve aydınlık bulvar' },
  },
  break: {
    text: 'Doğru kararlar, doğru finansal perspektifle başlar.',
  },
  team: {
    title: 'Uzman Ekibimiz',
    intro: 'Her çalışma, sorumluluğu üstlenen bir yeminli mali müşavir veya sorumlu denetçinin gözetiminde yürür.',
    leadLabel: 'Sorumlu ortaklar',
    teamLabel: 'Ekip',
    profile: 'Profili incele',
    back: 'Uzman ekibimiz',
    about: 'Hakkında',
    contact: 'İletişim',
    email: 'E-posta',
    next: 'Sonraki uzman',
    cta: 'Görüşme talep edin',
  },
  approach: {
    title: 'Yaklaşımımız',
    intro: 'Her görevde aynı dört aşamalı disiplini izleriz. Önce yapıyı anlar, sonra karar verilecek noktaları birlikte netleştiririz.',
    scopeLabel: 'Bu aşamada',
    outputLabel: 'Çıktı',
    steps: [
      {
        title: 'Analiz',
        text: 'Finansal tabloları, kayıt düzenini ve mevzuat yükümlülüklerini birlikte inceleriz. Çalışmanın kapsamını bu ilk tespitler belirler.',
        scope: ['Finansal tablolar ve hesap planı', 'Kayıt düzeni ve iç kontrol işleyişi', 'Mevzuat ve beyan yükümlülükleri'],
        output: 'Kapsam ve ilk tespit notu',
      },
      {
        title: 'Değerlendirme',
        text: 'Bulguları önem ve risk düzeyine göre sınıflandırırız. Her bulgu, dayandığı belgeyle birlikte kayda geçer.',
        scope: ['Önem ve risk düzeyine göre sınıflandırma', 'Bulguların dayanak belgeyle eşleştirilmesi', 'Yönetimle bulgu görüşmesi'],
        output: 'Belgelendirilmiş bulgu dosyası',
      },
      {
        title: 'Strateji',
        text: 'Yönetimle birlikte öncelikleri ve uygulanabilir adımları belirleriz. Öneriler, işletmenin yapısına ve takvimine göre şekillenir.',
        scope: ['Önceliklerin yönetimle belirlenmesi', 'Uygulanabilir adımlar ve sorumluluklar', 'İşletme takvimine uygun yol haritası'],
        output: 'Önceliklendirilmiş eylem planı',
      },
      {
        title: 'Sonuç',
        text: 'Rapor, tasdik veya görüş açık bir dille teslim edilir. Uygulama sürecindeki takibi birlikte yürütürüz.',
        scope: ['Raporun yönetimle birlikte okunması', 'Uygulama takviminin belirlenmesi', 'Dönemsel takip görüşmeleri'],
        output: 'Rapor, tasdik veya mesleki görüş',
      },
    ],
  },
  trust: {
    label: 'Çalışma ilkelerimiz',
    // Alıntı üç parçaya bölünür: vurgulu orta kısım tam parlaklıkta, çerçeve sözcükler kısık
    quote: {
      lead: 'Güven; ',
      emphasis: 'belgelenen, doğrulanan ve zamanında paylaşılan',
      tail: ' bilgiyle kurulur.',
    },
    commitments: [
      {
        mark: 'İlke I',
        title: 'Bağımsızlık',
        text: 'Denetim ve tasdik görevlerinde bağımsızlığımızı etkileyebilecek her ilişkiyi görev öncesinde değerlendiririz.',
      },
      {
        mark: 'İlke II',
        title: 'Gizlilik',
        text: 'Çalışma sırasında edindiğimiz her bilgi, mesleki sır yükümlülüğü ve KVKK kapsamında korunur.',
      },
      {
        mark: 'İlke III',
        title: 'Mesleki standartlar',
        text: 'Çalışmalarımızı yürürlükteki mevzuata, meslek ilkelerine ve ilgili denetim standartlarına uygun yürütürüz.',
      },
    ],
    credentialsLabel: 'Yetki ve kayıt bilgileri',
    credentials: [
      { label: 'YMM Odası / TÜRMOB sicil numarası', value: realDataPlaceholder },
      { label: 'KGK bağımsız denetim yetki belgesi', value: realDataPlaceholder },
      { label: 'Ticaret sicil ve MERSİS numarası', value: realDataPlaceholder },
      { label: 'Sorumlu yeminli mali müşavir', value: realDataPlaceholder },
    ],
  },
  insights: {
    title: 'Güncel',
    sample: '[ÖRNEK İÇERİK]',
    all: { label: 'Tüm yazılar', href: '/guncel' },
    // Yazıların kendisi content/insights.ts'te; burada yalnızca arayüz metinleri durur
    minutes: 'dk okuma',
    page: {
      title: 'Güncel',
      metaTitle: 'Güncel | MarkaDenetim',
      intro: 'Vergi, denetim ve finans alanındaki gelişmelere dair kısa ve uygulamaya dönük notlar.',
      featured: 'Öne çıkan',
      index: 'Tüm yazılar',
    },
    article: {
      back: 'Tüm yazılar',
      contents: 'Bu yazıda',
      more: 'Diğer yazılar',
      // Meslek kuralları: yazı danışmanlık yerine geçmez; okuru doğrudan görüşmeye yönlendirir
      disclaimer:
        'Bu yazı genel bilgilendirme amaçlıdır ve mesleki danışmanlık yerine geçmez. Kendi durumunuza ilişkin değerlendirme için bizimle görüşebilirsiniz.',
      cta: { label: 'Görüşme talep edin', href: '/#iletisim' },
    },
  },
  contactSection: {
    title: 'Finansal yapınızı daha net değerlendirelim.',
    cta: { label: 'İletişime Geç', href: '#iletisim-formu' },
    details: [
      { label: 'Adres', value: placeholder },
      { label: 'Telefon', value: placeholder },
      { label: 'E-posta', value: placeholder },
      { label: 'Çalışma saatleri', value: placeholder },
    ],
    form: {
      title: 'Bize yazın',
      fields: {
        name: 'Ad soyad',
        company: 'Şirket',
        email: 'E-posta',
        subject: 'Konu',
        message: 'Mesajınız',
      },
      optional: '(isteğe bağlı)',
      consentBefore: '',
      consentLink: 'KVKK Aydınlatma Metni',
      consentAfter: '’ni okudum; başvurumun yanıtlanması için kişisel verilerimin işlenmesini kabul ediyorum.',
      honeypot: 'Bu alanı boş bırakın',
      submit: 'Mesajı gönder',
      sending: 'Gönderiliyor',
      success: 'Mesajınız alındı. En kısa sürede size dönüş yapacağız.',
      errors: {
        name: 'Ad soyad gerekli.',
        email: 'Geçerli bir e-posta adresi yazın.',
        subject: 'Konu gerekli.',
        message: 'Mesajınızı yazın (en az 10 karakter).',
        consent: 'Devam etmek için KVKK onayını işaretleyin.',
        summary: 'Formda düzeltilmesi gereken alanlar var.',
        server: 'Mesaj gönderilemedi. Birkaç dakika sonra tekrar deneyin ya da e-posta ile yazın.',
      },
    },
  },
  footer: {
    descriptor: 'Yeminli Mali Müşavirlik ve Denetim A.Ş.',
    copyright: 'MarkaDenetim Yeminli Mali Müşavirlik ve Denetim A.Ş.',
    legal: [
      { href: '/gizlilik', label: 'Gizlilik' },
      { href: '/kvkk', label: 'KVKK Aydınlatma' },
      { href: '/cerez', label: 'Çerez Politikası' },
    ],
    legalNav: 'Yasal bilgiler',
    footerNav: 'Alt gezinme',
    sectionsLabel: 'Bölümler',
    contactLabel: 'İletişim',
    backToTop: 'Başa dön',
  },
  legal: {
    back: 'Ana sayfaya dön',
    updated: 'Son güncelleme',
    pages: {
      kvkk: {
        title: 'KVKK Aydınlatma Metni',
        description: 'MarkaDenetim kişisel verilerin işlenmesine ilişkin aydınlatma metni.',
      },
      gizlilik: {
        title: 'Gizlilik Politikası',
        description: 'MarkaDenetim gizlilik politikası.',
      },
      cerez: {
        title: 'Çerez Politikası',
        description: 'MarkaDenetim çerez politikası.',
      },
    },
    placeholder: legalPlaceholder,
    sections: ['Veri sorumlusu', 'İşlenen kişisel veriler', 'İşleme amaçları ve hukuki sebepler', 'Aktarım', 'Haklarınız', 'Başvuru yöntemi'],
  },
};

export type Dictionary = typeof tr;
