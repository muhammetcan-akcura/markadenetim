// Türkçe metinler. EN eklenecekse aynı şekle sahip content/en.ts yazılır;
// bileşenler metni bu sözlükten alır, kendi içinde metin tutmaz.
import type { Locale } from '@/lib/i18n';
import { legalName } from '@/lib/site';

export const tr = {
  // Sözlüğün dili: header dil seçicisi ve lang niteliği buradan okur
  locale: 'tr' as Locale,
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
    // Breadcrumb (JSON-LD) ilk halkası
    breadcrumbHome: 'Ana sayfa',
    // Dil seçici etiketi (ekran okuyucu ve mobil menü başlığı)
    language: 'Dil',
    home: 'MarkaDenetim, sayfa başı',
    mainNav: 'Ana gezinme',
    mobileNav: 'Mobil gezinme',
    menu: 'Menü',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    pauseVideo: 'Arka plan videosunu durdur',
    playVideo: 'Arka plan videosunu oynat',
  },
  // İletişim menüde yok: header'daki "İletişime Geç" butonu karşılar.
  // footer: false → footer'da gösterilmez (BRIEF 4.11: footer'da en fazla 5 bağlantı)
  nav: [
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/sektorler', label: 'Sektörler', footer: false },
    { href: '/#ekip', label: 'Ekibimiz', footer: false },
    { href: '/guncel', label: 'Güncel' },
    { href: '/sirkuler', label: 'Sirküler' },
    { href: '/rehber', label: 'Rehberler' },
  ],
  // Açılır menüler: içerik services.ts ve team.ts'ten sunucuda üretilir (SiteHeader.tsx)
  navMenu: {
    insights: [
      { href: '/guncel', label: 'Yazılar', meta: 'Vergi, denetim ve finans' },
      { href: '/vergi-takvimi', label: 'Vergi takvimi', meta: 'Bu ayın son günleri' },
    ],
    allServices: 'Tüm hizmetler',
    allTeam: 'Ekibin tamamı',
    allSectors: 'Tüm sektörler',
    about: [
      { href: '/hakkimizda', label: 'Hakkımızda', meta: 'Kurum, yetki ve ilkeler' },
      { href: '/hakkimizda/baskanin-mesaji', label: 'Başkanın mesajı', meta: 'Fatih Olgun, YMM' },
      { href: '/kalite-ve-bagimsizlik', label: 'Kalite ve bağımsızlık', meta: 'Etik, şeffaflık, yetki' },
    ],
    // Ekran okuyucu: "Hizmetler alt menüsü"
    submenu: 'alt menüsü',
  },
  cta: { label: 'İletişime Geç', href: '/iletisim' },
  // Mobil hızlı iletişim şeridi (MobileActionBar); masaüstünde yok
  mobileBar: {
    label: 'Hızlı iletişim',
    whatsapp: {
      label: 'WhatsApp',
      href: 'https://wa.me/905350297913?text=Merhaba%2C%20MarkaDenetim%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
    },
    form: { label: 'Teklif alın', href: '/iletisim#iletisim-formu' },
    call: { label: 'Ara', href: 'tel:+905350297913' },
  },
  // Masaüstü sağ kenar kulakçığı (QuoteTab): sayfadan çıkmadan formu yan panelde açar
  quoteTab: {
    label: 'Teklif alın',
    kicker: 'Teklif ve görüşme',
    title: 'Talebinizi iletin',
    lead: 'Konunuzu kısaca yazın; ilgili sorumlu ortak sizinle iletişime geçsin. Bilgileriniz gizlilik ilkelerimiz çerçevesinde korunur.',
    close: 'Paneli kapat',
  },
  contact: {
    phoneLabel: 'Telefon',
    phone: '+90 535 029 79 13',
    emailLabel: 'E-posta',
    email: 'info@markadenetim.com.tr',
  },
  hero: {
    // Tasdik sürecinin üç fiili: mesleğin özü (imza ve kişisel sorumluluk, 3568 s. K. md. 12); iddiasız
    lines: ['İnceleriz.', 'Doğrularız.', 'İmzalarız.'],
    lead: 'Beyan edilen her rakamı belgesiyle inceler, doğrular ve sorumluluğunu imzamızla üstleniriz.',
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
      // Kaşe monogramının altındaki alt yazı
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
          kindTitle: 'sıfat',
          text: 'Mesleğe yeminle başlar. Dürüstlük, tarafsızlık ve sır saklama yükümlülüğü altında çalışır.',
        },
        {
          word: 'Mali',
          kind: 'sf.',
          kindTitle: 'sıfat',
          text: 'Konusu işletmenin defterleri, beyanları ve finansal tablolarıdır. Her tutar belgesiyle değerlendirilir.',
        },
        {
          word: 'Müşavir',
          kind: 'a.',
          kindTitle: 'ad',
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
    // Ana sayfa 4.4: sade başlık, vurgu ve slogan yok
    kicker: 'Uzmanlık alanları',
    title: 'Dört alan, tek disiplin.',
    intro:
      'Her çalışmanın kapsamını baştan yazılı olarak tanımlar, sorumluluğunu bir meslek mensubunun gözetiminde üstleniriz.',
    cta: 'Tüm hizmetler',
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
    // Portre alt metni; {name} kişinin adıyla değiştirilir
    portraitAlt: '{name} portresi',
    // Profil sayfası meta açıklamasında uzmanlık listesinin öneki
    focusMeta: 'Uzmanlık alanları',
  },
  approach: {
    title: 'Yaklaşımımız',
    intro: 'Her görevde aynı dört aşamalı disiplini izleriz. Önce yapıyı anlar, sonra karar verilecek noktaları birlikte netleştiririz.',
    scopeLabel: 'Bu aşamada',
    outputLabel: 'Çıktı',
    // Diyagramdaki risk satırı etiketleri (büyük harf CSS ile değil, metin olarak)
    riskLevels: ['YÜKSEK', 'ORTA', 'DÜŞÜK'],
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
      // Künye etiketleri (ekran okuyucu)
      dateLabel: 'Tarih',
      readingLabel: 'Okuma süresi',
      statusLabel: 'Durum',
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
  // Dizin araması ve konu filtresi (sirküler, rehber); tamamen tarayıcıda çalışır
  finder: {
    label: 'Ara',
    placeholder: 'Başlık veya içerikte ara',
    topics: 'Konu',
    all: 'Tümü',
    results: 'sonuç',
    none: 'Aramanızla eşleşen içerik bulunamadı.',
    clear: 'Filtreleri temizle',
  },
  // Dizin sayfalaması (sirküler, rehber)
  pagination: {
    label: 'Sayfalama',
    prev: 'Önceki',
    next: 'Sonraki',
    page: 'Sayfa',
    // Başlık eki: "Sirküler — Sayfa 2"
    titleSuffix: 'Sayfa',
  },
  // Vergi takvimi (/vergi-takvimi). Tarihler content/taxCalendar.ts kurallarından hesaplanır.
  taxCalendar: {
    kicker: 'Beyan ve ödeme son günleri',
    title: 'Vergi takvimi',
    metaTitle: 'Vergi Takvimi: Aylık Beyan ve Ödeme Son Günleri',
    intro: 'Bu ayın vergi beyan ve ödeme son günleri tek listede. Hafta sonu ve resmî tatile denk gelen tarihler ilk iş gününe kaydırılmıştır.',
    next: 'Sıradaki son gün',
    today: 'Bugün',
    daysLeft: 'gün kaldı',
    passed: 'Geçti',
    shifted: 'Tatil nedeniyle kaydı',
    period: 'Dönem',
    prev: 'Önceki ay',
    nextMonth: 'Sonraki ay',
    current: 'Bu ay',
    empty: 'Bu ay için listelenmiş son gün yok.',
    noteTitle: 'Önemli not',
    note: 'Bu takvim genel bilgilendirme amaçlıdır. Dini bayramlar, idari izinler ve mevzuat değişiklikleri nedeniyle tarihler değişebilir; kesin tarihler için Gelir İdaresi Başkanlığı vergi takvimi esas alınır.',
    // [BİLGİ GİRİLECEK] GİB vergi takvimi sayfasının güncel adresi doğrulanınca buraya yazılmalı
    gib: { label: 'Gelir İdaresi Başkanlığı', href: 'https://www.gib.gov.tr/' },
    cta: 'Beyan süreçleriniz için görüşelim',
  },
  // Sektörler (/sektorler). İçerik content/sectors.ts'te. Müşteri/deneyim iddiası yok.
  sectorsPage: {
    kicker: 'Sektöre özgü yükümlülükler',
    title: 'Sektörler',
    metaTitle: 'Sektörler: İhracat, İnşaat, Enerji, Finans, Sanayi ve Teknoloji',
    intro:
      'Her sektörün kendine özgü vergi, tasdik ve raporlama yükümlülükleri vardır. Hizmetlerimizi bu yükümlülüklere göre bir araya getiririz.',
    read: 'Sektörü incele',
    num: 'Sektör',
    servicesCount: 'ilgili hizmet',
    matrix: {
      label: 'Bir bakışta',
      title: 'Sektör ve hizmet eşleşmesi',
      text: 'Hangi sektörde hangi hizmetlerin öne çıktığını tek tabloda görebilirsiniz. Her işaret, ilgili hizmet sayfasına bağlanır.',
      sector: 'Sektör',
      related: 'İlgili',
      // Dar ekranda tablo yatay kayar; ipucu yalnızca mobilde görünür
      scrollHint: 'Tabloyu yana kaydırabilirsiniz',
    },
    back: 'Tüm sektörler',
    overview: 'Genel bakış',
    topics: 'Sektöre özgü konular',
    support: 'Nasıl destek oluyoruz?',
    related: 'İlgili hizmetler',
    others: 'Diğer sektörler',
    disclaimer:
      'Bu sayfadaki bilgiler genel niteliktedir; işletmenize özgü yükümlülükler ön görüşmede birlikte değerlendirilir.',
    cta: 'Görüşme talep edin',
  },
  // Sirküler (/sirkuler). İçerik content/circulars.ts'te.
  circularsPage: {
    kicker: 'Mevzuat duyuruları',
    title: 'Sirküler',
    metaTitle: 'Sirküler: Vergi ve Mevzuat Duyuruları',
    intro:
      'Vergi ve meslek mevzuatındaki gelişmelere ilişkin numaralı duyurularımız. Her sirküler, sorumlu meslek mensubunun imzasıyla yayımlanır.',
    sample: 'Örnek sirküler — yayın öncesi gerçek sirkülerle değiştirilecek',
    back: 'Tüm sirküler',
    contents: 'Bu sirkülerde',
    read: 'Sirküleri oku',
    date: 'Tarih',
    topic: 'Konu',
    signature: 'İmza',
    publisher: 'Yayımlayan',
    profile: 'Profili incele',
    disclaimer:
      'Bu sirküler genel bilgilendirme amaçlıdır ve mesleki danışmanlık yerine geçmez. Kendi durumunuza ilişkin değerlendirme için bizimle görüşebilirsiniz.',
    cta: 'Görüşme talep edin',
  },
  // Rehberler (/rehber). İçerik content/guides.ts'te.
  guidesPage: {
    kicker: 'Bilgi merkezi',
    title: 'Rehberler',
    metaTitle: 'Rehberler: Tasdik, Denetim, Vergi ve Uyum',
    intro:
      'Müşterilerimizin en sık sorduğu sorulara sade cevaplar: tasdik, iade, denetim, vergi ve uyum süreçleri adım adım.',
    back: 'Tüm rehberler',
    contents: 'Bu rehberde',
    read: 'Rehberi oku',
    // Kart numarası öneki: "Rehber 01"
    num: 'Rehber',
    service: 'İlgili hizmet',
    disclaimer:
      'Bu rehber genel bilgilendirme amaçlıdır; tutar, oran ve süreler dönemsel olarak değişebilir. Kendi durumunuza ilişkin değerlendirme için bizimle görüşebilirsiniz.',
    cta: 'Görüşme talep edin',
  },
  // Başkanın mesajı (/hakkimizda/baskanin-mesaji). Kişi bilgileri content/team.ts'ten (fatih-olgun).
  // [BİLGİ GİRİLECEK] Mesaj TASLAKTIR: Fatih Olgun'un onayı olmadan yayımlanmamalı. Yıllar bilinmiyor.
  chairman: {
    metaTitle: 'Başkanın Mesajı',
    metaDescription:
      'MarkaDenetim Yönetim Kurulu Başkanı, Yeminli Mali Müşavir Fatih Olgun’un mesajı ve meslekteki yolu.',
    kicker: 'Başkanın mesajı',
    quote: 'Bir imza, taşıdığı sorumluluk kadar değerlidir.',
    draft: 'Taslak — onay bekliyor',
    message: [
      'Vergi müfettişliğinden yeminli mali müşavirliğe uzanan meslek hayatım boyunca öğrendiğim en önemli şey şudur: Bir belgenin altındaki imza, o belgenin doğruluğuna verilmiş yazılı bir sözdür.',
      'MarkaDenetim’i bu sözün ağırlığını bilen bir yapı olarak kurduk. Tasdik ettiğimiz her raporda, denetlediğimiz her finansal tabloda aynı soruyu sorarız: Bu imzanın arkasında duruyor muyuz?',
      'Müşterilerimizle ilişkimizi bağımsızlık ve gizlilik üzerine kurarız. İşletmelerin kararlarını sağlam bir mali zemine oturtmak, ancak doğru bilgiyle ve açık bir dille mümkündür.',
      'Ekibimizle birlikte, mesleğimizin bize yüklediği sorumluluğu her gün aynı özenle taşımaya devam edeceğiz.',
    ],
    pathLabel: 'Meslekteki yolu',
    // Unvanlardan türetilmiş sıralama; yıllar [BİLGİ GİRİLECEK]
    path: [
      { title: 'Vergi Müfettişliği', text: 'Kamu görevinde vergi incelemesi ve denetimi.', year: '[YIL]' },
      { title: 'Yeminli Mali Müşavirlik', text: '3568 sayılı Kanun kapsamında tasdik ve danışmanlık.', year: '[YIL]' },
      { title: 'MarkaDenetim Yönetim Kurulu Başkanlığı', text: 'Kurumun yönetimi ve tasdik süreçlerinin sorumluluğu.', year: '[YIL]' },
    ],
    focusLabel: 'Uzmanlık alanları',
    profile: 'Profili incele',
    circulars: 'İmzalı sirküler',
  },
  // Kalite ve bağımsızlık (/kalite-ve-bagimsizlik). İlkeler meslek standartlarına dayanır; firmaya özgü
  // olgular (rapor yılları, kalite sistemi ayrıntıları) [BİLGİ GİRİLECEK] olarak işaretlidir.
  quality: {
    metaTitle: 'Kalite, Bağımsızlık ve Şeffaflık',
    metaDescription:
      'MarkaDenetim’in bağımsızlık ilkeleri, kalite güvencesi yaklaşımı, etik kuralları, şeffaflık raporları ve yetki bilgileri.',
    kicker: 'Kalite ve bağımsızlık',
    title: 'Güven, ilan edilmez; gösterilir.',
    lead: 'Tasdik ve bağımsız denetim, ancak bağımsızlığından şüphe edilmeyen bir yapıda anlam taşır. Çalışma ilkelerimizi, kalite güvencesi yaklaşımımızı ve yetki bilgilerimizi burada bir arada bulabilirsiniz.',
    contents: 'Bu sayfada',
    sections: [
      {
        id: 'bagimsizlik',
        title: 'Bağımsızlık',
        text: 'Bağımsızlık, görüşümüzün değerini belirleyen ilk koşuldur. Bağımsız Denetim Standartları ve Etik Kurallar’ın öngördüğü şekilde çalışırız:',
        items: [
          'Her görev öncesinde bağımsızlık ve çıkar çatışması değerlendirmesi yapılır.',
          'Denetim yapılan kuruluşa, bağımsızlığı zedeleyecek nitelikte hizmet verilmez.',
          'Görev ekibi, denetlenen kuruluşla mali çıkar ilişkisi bulunmadığını beyan eder.',
        ],
      },
      {
        id: 'kalite',
        title: 'Kalite güvencesi',
        text: 'Kalite, raporun son sayfasında değil, görevin kabul edildiği anda başlar. Kalite yönetimi yaklaşımımız şu unsurlar üzerine kuruludur:',
        items: [
          'Görev kabulü ve sürdürülmesi: Her görev, yetkinlik ve bağımsızlık açısından değerlendirilerek kabul edilir.',
          'Ekip yetkinliği: Görevler, alanında deneyimli meslek mensuplarının gözetiminde yürütülür.',
          'Gözden geçirme: Raporlar imzadan önce gözden geçirilir; standartların öngördüğü görevlerde bu gözden geçirme görev ekibi dışından bir meslek mensubunca yapılır.',
          'İzleme: Kalite yönetimi sistemi düzenli olarak izlenir ve iyileştirilir.',
        ],
        note: '[BİLGİ GİRİLECEK] Kalite yönetimi sistemine ilişkin firmaya özgü açıklama.',
      },
      {
        id: 'gizlilik',
        title: 'Gizlilik ve meslek sırrı',
        text: 'Görevlerimiz sırasında edindiğimiz bilgiler meslek sırrıdır. Bu bilgiler, yasal zorunluluklar dışında hiçbir koşulda üçüncü kişilerle paylaşılmaz; kişisel veriler 6698 sayılı Kanun çerçevesinde korunur.',
      },
      {
        id: 'etik',
        title: 'Etik kurallar',
        text: 'Çalışmalarımızda TÜRMOB meslek ahlakı kuralları ile Kamu Gözetimi Kurumu’nun yayımladığı Etik Kurallar esas alınır. Dürüstlük, tarafsızlık, mesleki yeterlilik ve özen, gizlilik ve mesleki davranış bu kuralların temelidir.',
      },
    ],
    reports: {
      id: 'seffaflik',
      title: 'Şeffaflık raporları',
      text: 'Mevzuatın öngördüğü durumlarda yayımlanan şeffaflık raporlarımız aşağıda yer alır.',
      // [BİLGİ GİRİLECEK] Gerçek rapor PDF'leri public/raporlar/ altına konunca href eklenecek
      items: [
        { year: '[YIL]', label: 'Şeffaflık raporu', status: '[PDF YÜKLENECEK]' },
        { year: '[YIL]', label: 'Şeffaflık raporu', status: '[PDF YÜKLENECEK]' },
      ],
    },
    credentials: { id: 'yetki', title: 'Yetki ve kayıt bilgileri' },
    cta: 'Görüşme talep edin',
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
