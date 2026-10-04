// Türkçe metinler. EN eklenecekse aynı şekle sahip content/en.ts yazılır;
// bileşenler metni bu sözlükten alır, kendi içinde metin tutmaz.
import { placeholder } from '@/lib/site';

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
    video: { pause: 'Durdur', play: 'Oynat' },
  },
  statement: {
    text: 'Rakamların ötesinde, işletmelerin geleceğine daha net bakmak.',
    note: 'MarkaDenetim, yeminli mali müşavirlik ve bağımsız denetim alanında işletmelere eşlik eder. Her çalışmayı mevzuata uygunluk, belgelendirme ve açık iletişim üzerine kurarız. Amacımız, sayıların arkasındaki yapıyı yönetim için okunur hâle getirmek.',
  },
};

export type Dictionary = typeof tr;
