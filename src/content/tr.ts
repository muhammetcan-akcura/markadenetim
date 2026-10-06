// Türkçe metinler. EN eklenecekse aynı şekle sahip content/en.ts yazılır;
// bileşenler metni bu sözlükten alır, kendi içinde metin tutmaz.
import { legalName } from '@/lib/site';

export const tr = {
  meta: {
    // ~60 karakter: marka + ana hizmet; arama sonucunda kesilmeden görünür
    title: 'MarkaDenetim | Yeminli Mali Müşavirlik ve Bağımsız Denetim',
    // ~155 karakter: hizmetler + konum (İstanbul, Mardin); üstünlük iddiası yok (BRIEF §06)
    description:
      'İstanbul ve Mardin’de yeminli mali müşavirlik, tam tasdik, bağımsız denetim, vergi ve finansal danışmanlık. Kararlarınızı sağlam bir mali zemine oturtuyoruz.',
    ogDescription: 'Yeminli mali müşavirlik, bağımsız denetim, vergi ve finansal danışmanlık. İstanbul ve Mardin.',
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
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/#ekip', label: 'Ekibimiz' },
    { href: '/#yaklasim', label: 'Yaklaşımımız' },
    { href: '/#guncel', label: 'Güncel' },
    { href: '/iletisim', label: 'İletişim' },
  ],
  cta: { label: 'İletişime Geç', href: '/iletisim' },
  contact: {
    phoneLabel: 'Telefon',
    phone: '+90 535 029 79 13',
    emailLabel: 'E-posta',
    email: 'info@markadenetim.com.tr',
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
  // Hakkımızda sayfası (/hakkimizda). Mevzuat atıfları genel niteliktedir; yeni olgu eklenmez.
  // Yetki ve sicil bilgileri trust.credentials'tan, ortaklar content/team.ts'ten gelir.
  about: {
    metaTitle: 'Hakkımızda: Yeminli Mali Müşavirlik ve Denetim',
    metaDescription:
      'MarkaDenetim; 3568 sayılı Kanun çerçevesinde yeminli mali müşavirlik, tam tasdik, KDV iadesi tasdiki ve bağımsız denetim yapan bir meslek kuruluşudur.',
    hero: {
      kicker: 'Hakkımızda',
      lines: ['İmzamızın', 'arkasında', 'duruyoruz.'],
      lead: 'MarkaDenetim, 3568 sayılı Kanun’a tabi yeminli mali müşavirlik ve bağımsız denetim kuruluşudur. Tasdik ettiğimiz her belgenin sorumluluğunu taşırız.',
      facts: [
        { label: 'Meslek', value: 'Yeminli mali müşavirlik' },
        { label: 'Yasal dayanak', value: '3568 sayılı Kanun' },
        { label: 'Denetim yetkisi', value: 'KGK lisanslı bağımsız denetim' },
        { label: 'Ofisler', value: 'İstanbul · Mardin' },
      ],
      // Mühür kompozisyonunun çevresindeki yazı (dekoratif; ekran okuyucudan gizli)
      seal: 'YEMİNLİ MALİ MÜŞAVİRLİK · TAM TASDİK · BAĞIMSIZ DENETİM · 3568 SAYILI KANUN · ',
      sealCaption: 'İmza · Mühür · Tasdik',
    },
    lexicon: {
      label: 'Unvan',
      title: 'Unvanımız, işimizin tanımıdır.',
      // Sözlük kısaltmaları TDK kullanımıyla: sf. sıfat, a. ad
      words: [
        {
          word: 'Yeminli',
          kind: 'sf.',
          text: 'Mesleğe yeminle başlar. Dürüstlük, tarafsızlık ve sır saklama yükümlülüğü altında çalışır.',
        },
        {
          word: 'Mali',
          kind: 'sf.',
          text: 'Konusu işletmenin defterleri, beyanları ve finansal tablolarıdır. Her tutar belgesiyle değerlendirilir.',
        },
        {
          word: 'Müşavir',
          kind: 'a.',
          text: 'Yönetime görüş verir. Tespitlerini yazılı, dayanaklı ve anlaşılır biçimde paylaşır.',
        },
      ],
    },
    ledger: {
      label: 'Tasdik ve denetim',
      title: 'İmzamızın yer aldığı belgeler.',
      intro: 'Her tasdik ve denetim görevi yazılı bir kapsamla başlar, belgelendirilmiş bir rapor ile sonuçlanır.',
      columns: { subject: 'Konu', scope: 'Kapsam', basis: 'Dayanak', output: 'Çıktı' },
      rows: [
        {
          subject: 'Tam tasdik',
          scope: 'Kurumlar vergisi beyannamesinin yasal defter ve belgelerle uyumu',
          basis: '3568 sayılı Kanun ve tasdik yönetmeliği',
          output: 'Tam tasdik raporu',
        },
        {
          subject: 'KDV iadesi tasdiki',
          scope: 'İhracat, indirimli oran ve tevkifat kaynaklı iade talepleri',
          basis: '3065 sayılı KDV Kanunu ve uygulama tebliği',
          output: 'KDV iadesi tasdik raporu',
        },
        {
          subject: 'Teşvik belgesi kapama',
          scope: 'Teşvik belgesi kapsamındaki yatırım harcamaları ve kayıtları',
          basis: 'Yatırımlarda devlet yardımları mevzuatı',
          output: 'Tespit raporu',
        },
        {
          subject: 'Özel amaçlı tasdik',
          scope: 'Mevzuatın yeminli mali müşavir tasdiki aradığı diğer işlemler',
          basis: 'İlgili özel mevzuat',
          output: 'Özel amaçlı rapor',
        },
        {
          subject: 'Bağımsız denetim',
          scope: 'Finansal tabloların bağımsız denetim standartlarına göre denetimi',
          basis: '6102 sayılı TTK ve KGK düzenlemeleri',
          output: 'Bağımsız denetçi raporu',
        },
      ],
      cta: 'Uzmanlık alanlarını incele',
    },
    responsibility: {
      label: 'Sorumluluk',
      statement: 'Bir tasdik, rakamların doğruluğuna verilmiş yazılı bir sözdür.',
      lawMark: '3568 s. K. md. 12',
      law: 'Yeminli mali müşavir, tasdik ettiği belgelerin doğruluğundan sorumludur. Gerçeğe aykırı tasdik hâlinde, ziyaa uğratılan vergi ve cezalardan mükellefle birlikte müştereken ve müteselsilen sorumlu tutulur.',
      note: 'Bu yüzden her tasdiki, belgesiyle doğrulanmış ve izlenebilir bir çalışma dosyasına dayandırırız.',
      principlesLabel: 'Çalışma ilkelerimiz',
      principles: [
        { title: 'Uzmanlık', text: 'Her görevi, konusunda yetkili bir meslek mensubu üstlenir ve imzalar.' },
        { title: 'Güven', text: 'Edindiğimiz her bilgi mesleki sır yükümlülüğüyle korunur.' },
        { title: 'Disiplin', text: 'Her çalışma aynı adımları izler; her adım kayda geçer.' },
        { title: 'Şeffaflık', text: 'Bulgularımızı rapordan önce yönetimle açıkça paylaşırız.' },
      ],
    },
    partners: {
      label: 'Sorumlu ortaklar',
      title: 'Her raporun altında bir isim vardır.',
      intro: 'Her çalışma, sorumluluğu üstlenen bir yeminli mali müşavir veya sorumlu denetçinin gözetiminde yürür.',
      profile: 'Profili incele',
      all: 'Tüm ekibi gör',
    },
    authority: {
      label: 'Yetki ve kayıt',
      title: 'Kayıtlı, denetlenebilir bir yapı.',
      scopeLabel: 'Bağımsız denetim yetki alanları',
      // Kaynak: services.ts → denetim.basis. [BİLGİ GİRİLECEK] Yayın öncesi yetki belgeleriyle doğrulanmalı.
      bodies: [
        { abbr: 'KGK', name: 'Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu' },
        { abbr: 'SPK', name: 'Sermaye Piyasası Kurulu' },
        { abbr: 'BDDK', name: 'Bankacılık Düzenleme ve Denetleme Kurumu' },
        { abbr: 'EPDK', name: 'Enerji Piyasası Düzenleme Kurumu' },
        { abbr: 'Sigorta', name: 'Sigortacılık alanı' },
      ],
      registryLabel: 'Sicil bilgileri',
    },
    closing: {
      title: 'Rakamların arkasındaki yapıyı birlikte okuyalım.',
      lead: 'Tasdik, denetim veya vergi konusundaki ihtiyacınızı kısa bir görüşmede birlikte netleştirelim.',
      cta: 'Görüşme talep edin',
      secondary: 'Uzmanlık alanlarımız',
    },
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
    boardroomImage: '/img/services-boardroom.webp',
    // Hizmet içerikleri: src/content/services.ts
    // Hizmetler sayfası (/hizmetler): sekiz alan, iki grup. Sayı vaadi ve üstünlük iddiası yok.
    page: {
      metaTitle: 'Hizmetler: Tasdik, Denetim, Vergi ve Danışmanlık',
      metaDescription:
        'Yeminli mali müşavirlik ve tasdik, bağımsız denetim, vergi danışmanlığı, KDV iadesi, bilgi sistemleri denetimi ve KVKK uyumu. İstanbul ve Mardin.',
      kicker: 'Hizmetler',
      lines: ['Uzmanlık', 'alanlarımız.'],
      lead: 'Tasdikten bağımsız denetime, vergiden bilgi sistemlerine; her çalışma, sorumluluğu üstlenen bir meslek mensubunun gözetiminde yürür.',
      groups: { temel: 'Temel alanlar', uzman: 'Uzmanlaşmış hizmetler' },
      closing: { title: 'Hangi alan olduğundan emin değil misiniz?', cta: 'Birlikte belirleyelim' },
    },
    detail: {
      back: 'Tüm hizmetler',
      kicker: 'Uzmanlık alanı',
      onThisPage: 'Bu sayfada',
      scope: 'Kapsam',
      process: 'Çalışma yöntemi',
      processTitle: 'Her görev, aynı disiplinle dört adımda yürür.',
      deliverables: 'Çıktılar',
      deliverablesTitle: 'Her çalışma, yazılı bir çıktıyla sonuçlanır.',
      basis: 'Yetki ve mevzuat dayanağı',
      cta: 'Görüşme talep edin',
      others: 'Diğer uzmanlık alanları',
      disclaimer:
        'Bu sayfadaki bilgiler genel niteliktedir; somut durumunuza ilişkin değerlendirme yerine geçmez.',
    },
  },
  team: {
    title: 'Uzman Ekibimiz',
    intro: 'Her çalışma, sorumluluğu üstlenen bir yeminli mali müşavir veya sorumlu denetçinin gözetiminde yürür.',
    profile: 'Profili incele',
    back: 'Uzman ekibimiz',
    about: 'Hakkında',
    focus: 'Uzmanlık alanları',
    contact: 'İletişim',
    email: 'E-posta',
    next: 'Sonraki uzman',
    cta: 'Görüşme talep edin',
    emailCta: 'E-posta gönderin',
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
        figure: 'Dağınık veriler tek bir görünümde toplanır',
      },
      {
        title: 'Değerlendirme',
        text: 'Bulguları önem ve risk düzeyine göre sınıflandırırız. Her bulgu, dayandığı belgeyle birlikte kayda geçer.',
        scope: ['Önem ve risk düzeyine göre sınıflandırma', 'Bulguların dayanak belgeyle eşleştirilmesi', 'Yönetimle bulgu görüşmesi'],
        output: 'Belgelendirilmiş bulgu dosyası',
        figure: 'Bulgular risk düzeyine göre ayrışır',
      },
      {
        title: 'Strateji',
        text: 'Yönetimle birlikte öncelikleri ve uygulanabilir adımları belirleriz. Öneriler, işletmenin yapısına ve takvimine göre şekillenir.',
        scope: ['Önceliklerin yönetimle belirlenmesi', 'Uygulanabilir adımlar ve sorumluluklar', 'İşletme takvimine uygun yol haritası'],
        output: 'Önceliklendirilmiş eylem planı',
        figure: 'Adımlar öncelik sırasına girer',
      },
      {
        title: 'Sonuç',
        text: 'Rapor, tasdik veya görüş açık bir dille teslim edilir. Uygulama sürecindeki takibi birlikte yürütürüz.',
        scope: ['Raporun yönetimle birlikte okunması', 'Uygulama takviminin belirlenmesi', 'Dönemsel takip görüşmeleri'],
        output: 'Rapor, tasdik veya mesleki görüş',
        figure: 'Yapı netleşir, karar kayda geçer',
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
      { label: 'YMM Odası / TÜRMOB sicil numarası', value: 'İstanbul YMMO — Sicil No: 34/19284' },
      { label: 'KGK bağımsız denetim yetki belgesi', value: 'BDK / 2019 / 0482' },
      { label: 'Ticaret sicil ve MERSİS numarası', value: 'İTO: 842195-5 · MERSİS: 0612048192300001' },
      { label: 'Sorumlu yeminli mali müşavir', value: 'Fatih Olgun (YMM, Sorumlu Denetçi)' },
    ],
  },
  insights: {
    title: 'Güncel',
    sample: '',
    all: { label: 'Tüm yazılar', href: '/guncel' },
    // Yazıların kendisi content/insights.ts'te; burada yalnızca arayüz metinleri durur
    minutes: 'dk okuma',
    page: {
      title: 'Güncel',
      metaTitle: 'Güncel: Vergi, Denetim ve Finans Yazıları',
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
      cta: { label: 'Görüşme talep edin', href: '/iletisim' },
    },
  },
  contactSection: {
    kicker: 'İletişim',
    title: 'Finansal yapınızı daha net değerlendirelim.',
    lead: 'Görüşme talebinizi formla iletebilir ya da bize doğrudan ulaşabilirsiniz. Her başvuru gizlilik ilkelerimiz çerçevesinde ele alınır.',
    channelsLabel: 'Doğrudan ulaşın',
    // Tıklanabilir kanallar: mobilde tek dokunuşla arama / e-posta / mesaj
    channels: [
      { label: 'Telefon · İstanbul', value: '+90 535 029 79 13', href: 'tel:+905350297913' },
      { label: 'Telefon · Mardin', value: '+90 541 811 80 86', href: 'tel:+905418118086' },
      { label: 'E-posta', value: 'info@markadenetim.com.tr', href: 'mailto:info@markadenetim.com.tr' },
      {
        label: 'WhatsApp',
        value: 'Mesaj gönderin',
        href: 'https://wa.me/905350297913?text=Merhaba%2C%20MarkaDenetim%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
        external: true,
      },
    ],
    hours: { label: 'Çalışma saatleri', value: 'Pazartesi – Cuma · 08:30 – 18:00' },
    newTab: '(yeni sekmede açılır)',
    form: {
      title: 'Bize yazın',
      note: 'Aksi belirtilmedikçe tüm alanlar zorunludur.',
      // Konu seçimi: yazmak yerine dokunarak seçilir; değer doğrudan "konu" alanına gider
      topics: ['Yeminli mali müşavirlik', 'Bağımsız denetim', 'Vergi danışmanlığı', 'Finansal danışmanlık', 'Diğer'],
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
      successTitle: 'Teşekkür ederiz.',
      again: 'Yeni mesaj yaz',
      counter: 'karakter',
      errors: {
        name: 'Ad soyad gerekli.',
        email: 'Geçerli bir e-posta adresi yazın.',
        subject: 'Bir konu seçin.',
        message: 'Mesajınızı yazın (en az 10 karakter).',
        consent: 'Devam etmek için KVKK onayını işaretleyin.',
        summary: 'Formda düzeltilmesi gereken alanlar var.',
        server: 'Mesaj gönderilemedi. Birkaç dakika sonra tekrar deneyin ya da e-posta ile yazın.',
      },
    },
  },
  // İletişim sayfası (/iletisim). Kanallar, saatler ve form metinleri contactSection'dan gelir;
  // burada yalnızca sayfaya özgü giriş ve süreç metinleri durur. Süre/oran vaadi yok.
  contactPage: {
    metaTitle: 'İletişim: İstanbul ve Mardin Ofisleri',
    metaDescription:
      'MarkaDenetim ile görüşme talebinizi iletin. İstanbul ve Mardin ofislerimize telefon, e-posta, WhatsApp veya iletişim formuyla ulaşabilirsiniz.',
    kicker: 'İletişim',
    lines: ['Sorularınızı', 'birlikte', 'netleştirelim.'],
    lead: 'Telefon, e-posta veya formla bize ulaşabilirsiniz. Talebiniz, konusuna göre ilgili sorumlu ortağa iletilir.',
    offices: 'Ofis adresleri ve haritalar',
    // Koordinat levhası (dekoratif; ekran okuyucudan gizli). İstanbul: ofis konumu (footer haritasıyla
    // aynı nokta); Mardin: şehir merkezi. Derece-dakika, K = kuzey, D = doğu.
    plate: {
      points: [
        { city: 'İSTANBUL', coords: '41°00′ K · 28°39′ D' },
        { city: 'MARDİN', coords: '37°18′ K · 40°44′ D' },
      ],
      caption: 'İki ofis · Tek disiplin',
    },
    process: {
      label: 'Görüşme nasıl ilerler',
      title: 'Yazdığınız her talep bir kişiye ulaşır.',
      steps: [
        { title: 'Talebinizi alırız', text: 'Form, e-posta veya telefonla ilettiğiniz konu kayda alınır.' },
        { title: 'İlgili ortağa iletilir', text: 'Konu; tasdik, denetim, vergi veya finansal danışmanlık alanına göre yönlendirilir.' },
        { title: 'Ön görüşme yapılır', text: 'İhtiyacınızı ve kapsamı birlikte netleştiririz. Ön görüşme bir taahhüt doğurmaz.' },
      ],
      privacy: 'Paylaştığınız bilgiler meslek sırrı ve gizlilik ilkelerimiz çerçevesinde korunur.',
    },
  },
  footer: {
    // Marka tanımlayıcısı (header/footer imzası); resmi unvan legalName'de. Kısa tutulur: mobil header'a sığmalı
    descriptor: 'Yeminli Mali Müşavirlik ve Denetim A.Ş.',
    // İmza cümlesi: YMM tasdikinin kişisel sorumluluğuna dayanır; üstünlük iddiası yok (BRIEF §06)
    signature: 'Her tasdik bir sorumluluktur. İmzamızı bağımsızlık, gizlilik ve mesleki özenle atarız.',
    socialLabel: 'Bizi takip edin',
    // [BİLGİ GİRİLECEK] Gerçek hesap adresleri girilecek; şimdilik platform kök adresleri
    social: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/' },
      { name: 'Instagram', href: 'https://www.instagram.com/' },
      { name: 'X', href: 'https://x.com/' },
    ],
    copyright: legalName,
    officesLabel: 'Ofislerimiz',
    officesTitle: 'İstanbul ve Mardin’de, aynı disiplinle.',
    directionsLabel: 'Yol tarifi al',
    mapTitle: 'konum haritası',
    offices: [
      {
        city: 'İstanbul Merkez Ofis',
        address: 'Barış Mah. Necip Fazıl Kısakürek Sokak No:1 Lotus İş Merkezi C Blok Kat:5 Ofis No:15, Beylikdüzü / İstanbul',
        phone: '+90 535 029 79 13',
        phoneHref: 'tel:+905350297913',
        email: 'info@markadenetim.com.tr',
        mapUrl: 'https://maps.google.com/maps?q=41.0094323,28.6538803+(Marka%20Denetim%20%C4%B0stanbul%20Merkez%20Ofis)&t=&z=16&ie=UTF8&iwloc=&output=embed',
        directionsUrl: 'https://maps.google.com/?q=41.0094323,28.6538803',
      },
      {
        city: 'Mardin Ofis',
        address: 'Sanayi Mah. 705 Sokak Biriz Yapı İş Merkezi No:2 Ofis No:28 Merkez / Mardin',
        phone: '+90 541 811 80 86',
        phoneHref: 'tel:+905418118086',
        email: 'info@markadenetim.com.tr',
        mapUrl: 'https://maps.google.com/maps?q=Sanayi+Mah.+705+Sokak+Biriz+Yap%C4%B1+%C4%B0%C5%9F+Merkezi+No:2+Merkez+Mardin&t=&z=15&ie=UTF8&iwloc=&output=embed',
        directionsUrl: 'https://maps.google.com/?q=Sanayi+Mah.+705+Sokak+Biriz+Yap%C4%B1+%C4%B0%C5%9F+Merkezi+No:2+Merkez+Mardin',
      },
    ],
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
  // Çerez bildirimi. Sitenin tek üçüncü taraf kaynağı ofis haritaları (Google Haritalar);
  // metin bunu açıkça söyler. Reddetmek, kabul etmek kadar kolay olmalı (KVKK Kurul rehberi).
  cookies: {
    label: 'Çerezler',
    title: 'Çerez tercihiniz',
    text: 'Ofis haritalarımız Google Haritalar üzerinden yüklenir ve bu hizmet çerez kullanabilir. Onay vermezseniz haritalar yüklenmez; site diğer tüm işlevleriyle çalışmaya devam eder.',
    policy: 'Çerez Politikası',
    accept: 'Kabul et',
    reject: 'Yalnızca zorunlu',
    manage: 'Çerez tercihleri',
    mapBlocked: 'Harita, çerez tercihiniz nedeniyle yüklenmedi.',
    mapLoad: 'Haritayı göster',
  },
  // 404 ve hata sayfaları: sakin, suçlamayan dil; ziyaretçiye her zaman bir sonraki adım verilir
  status: {
    home: 'Ana sayfaya dön',
    linksLabel: 'Buradan devam edebilirsiniz',
    links: [
      { href: '/hizmetler', label: 'Uzmanlık alanlarımız' },
      { href: '/guncel', label: 'Güncel yazılar' },
      { href: '/iletisim', label: 'İletişim' },
    ],
    notFound: {
      code: '404',
      label: 'Sayfa bulunamadı',
      title: 'Aradığınız sayfa burada değil.',
      text: 'Bağlantı değişmiş ya da sayfa kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.',
    },
    error: {
      code: '500',
      label: 'Beklenmeyen bir hata',
      title: 'Sayfa şu anda görüntülenemiyor.',
      text: 'Geçici bir sorun oluştu. Sayfayı yeniden deneyebilir ya da ana sayfaya dönebilirsiniz.',
      retry: 'Yeniden dene',
      digest: 'Hata kodu',
    },
  },
  legal: {
    back: 'Ana sayfaya dön',
    updated: 'Son güncelleme',
    pages: {
      kvkk: {
        title: 'KVKK Aydınlatma Metni',
        description:
          `${legalName} tarafından kişisel verilerin işlenmesine ilişkin 6698 sayılı KVKK kapsamındaki aydınlatma metni.`,
      },
      gizlilik: {
        title: 'Gizlilik Politikası',
        description:
          `${legalName} gizlilik politikası: web sitesi ziyaretçilerine ait bilgilerin nasıl korunduğu.`,
      },
      cerez: {
        title: 'Çerez Politikası',
        description:
          'MarkaDenetim web sitesinde kullanılan çerezler, kullanım amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz.',
      },
    },
    // Metinlerin kendisi content/legal.ts'te
  },
};

export type Dictionary = typeof tr;
