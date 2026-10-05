// Türkçe metinler. EN eklenecekse aynı şekle sahip content/en.ts yazılır;
// bileşenler metni bu sözlükten alır, kendi içinde metin tutmaz.
import { legalPlaceholder } from '@/lib/site';

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
    // Hizmet içerikleri: src/content/services.ts
    detail: {
      back: 'Uzmanlık alanlarımız',
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
    leadLabel: 'Sorumlu ortaklar',
    teamLabel: 'Ekip',
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
  footer: {
    descriptor: 'Yeminli Mali Müşavirlik ve Denetim A.Ş.',
    copyright: 'MarkaDenetim Yeminli Mali Müşavirlik ve Denetim A.Ş.',
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
