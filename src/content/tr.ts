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
    link: { label: 'Uzmanlık alanlarımız', href: '/#hizmetler' },
    tag: 'Yeminli Mali Müşavirlik ve Denetim',
    cta: { label: 'Görüşme talep edin', href: '/#iletisim' },
    video: { pause: 'Durdur', play: 'Oynat' },
    // Videodaki üç sahnenin adları (sahne göstergesi). Sıra videodaki sırayla aynıdır.
    scenes: ['Kent dokusu', 'Enerji', 'Üretim'],
    indexLabel: 'Uzmanlık alanları',
  },
  statement: {
    panorama: '/img/statement-fields.jpg',
    text: 'Rakamların ötesinde, işletmelerin geleceğine daha net bakmak.',
    note: 'MarkaDenetim, yeminli mali müşavirlik ve bağımsız denetim alanında işletmelere eşlik eder. Her çalışmayı mevzuata uygunluk, belgelendirme ve açık iletişim üzerine kurarız. Amacımız, sayıların arkasındaki yapıyı yönetim için okunur hâle getirmek.',
  },
  services: {
    title: 'Uzmanlık Alanlarımız',
    intro: 'Dört alanda tek bir disiplinle çalışırız: kayıtların doğruluğu, mevzuata uygunluk ve yönetime açık raporlama.',
    items: [
      {
        title: 'Yeminli Mali Müşavirlik',
        text: 'Tam tasdik, KDV iadesi tasdiki ve özel amaçlı raporlar. Her tasdik, belgelendirilmiş bir inceleme sürecine dayanır.',
        image: '/img/service-1.jpg',
      },
      {
        title: 'Denetim',
        text: 'Finansal tabloların bağımsız denetimi ve sınırlı denetimi. Mesleki şüphecilik ve bağımsızlık ilkesiyle yürütülür.',
        image: '/img/service-2.jpg',
      },
      {
        title: 'Vergi Danışmanlığı',
        text: 'Vergi planlaması, mevzuat değişikliklerinin etkisinin değerlendirilmesi ve vergi incelemelerinde süreç desteği.',
        image: '/img/service-3.jpg',
      },
      {
        title: 'Finansal Danışmanlık',
        text: 'Finansal yapı analizi, raporlama düzeninin kurulması ve yatırım kararlarına yönelik değerlendirme.',
        image: '/img/service-4.jpg',
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
  approach: {
    title: 'Yaklaşımımız',
    steps: [
      {
        title: 'Analiz',
        text: 'Finansal tabloları, kayıt düzenini ve mevzuat yükümlülüklerini birlikte inceleriz. Çalışmanın kapsamını bu ilk tespitler belirler.',
      },
      {
        title: 'Değerlendirme',
        text: 'Bulguları önem ve risk düzeyine göre sınıflandırırız. Her bulgu, dayandığı belgeyle birlikte kayda geçer.',
      },
      {
        title: 'Strateji',
        text: 'Yönetimle birlikte öncelikleri ve uygulanabilir adımları belirleriz. Öneriler, işletmenin yapısına ve takvimine göre şekillenir.',
      },
      {
        title: 'Sonuç',
        text: 'Rapor, tasdik veya görüş açık bir dille teslim edilir. Uygulama sürecindeki takibi birlikte yürütürüz.',
      },
    ],
  },
  trust: {
    label: 'Çalışma ilkelerimiz',
    quote: 'Güven; belgelenen, doğrulanan ve zamanında paylaşılan bilgiyle kurulur.',
    commitments: [
      {
        title: 'Bağımsızlık',
        text: 'Denetim ve tasdik görevlerinde bağımsızlığımızı etkileyebilecek her ilişkiyi görev öncesinde değerlendiririz.',
      },
      {
        title: 'Gizlilik',
        text: 'Çalışma sırasında edindiğimiz her bilgi, mesleki sır yükümlülüğü ve KVKK kapsamında korunur.',
      },
      {
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
    all: { label: 'Tüm yazılar', href: '/#guncel' },
    // [BİLGİ GİRİLECEK] Yayın sistemi kurulunca gerçek yazılar ve bağlantılarıyla değiştirilir
    items: [
      {
        category: 'Vergi',
        title: 'Transfer fiyatlandırması belgelendirmesinde sık yapılan hatalar',
        excerpt: 'Yıllık raporun hazırlanmasında karşılaştırılabilirlik analizi ve belge düzeni neden belirleyicidir?',
        date: '[TARİH]',
        readingTime: '[OKUMA SÜRESİ]',
        image: '/img/insight-1.jpg',
      },
      {
        category: 'Denetim',
        title: 'Sınırlı denetim ile bağımsız denetim arasındaki farklar',
        date: '[TARİH]',
        readingTime: '[OKUMA SÜRESİ]',
        image: '/img/insight-2.jpg',
      },
      {
        category: 'Finans',
        title: 'Enflasyon düzeltmesi sonrası finansal tabloları okumak',
        date: '[TARİH]',
        readingTime: '[OKUMA SÜRESİ]',
        image: '/img/insight-3.jpg',
      },
    ],
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
