import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google';

// next/font/google fontu build sırasında indirir ve kendi alan adımızdan sunar:
// ziyaretçiden Google'a istek gitmez (KVKK), preload ve CLS'i azaltan yedek metrikler otomatik.
// Türkçe için iki alt küme şart: "ı" latin'de, "ğ ş İ" latin-ext'te.
// Ayrı modülde: kök layout ve kendi <html>'ini çizen global-error aynı fontları kullanır.
//
// Seçim gerekçesi (brief listesinden onaylı sapma): Newsreader + Manrope ikilisi jenerik bir
// "yapay zekâ sitesi" görünümü veriyordu. Source Serif 4'ün optik boyut ekseni büyük başlıkta
// keskin, rapor/yayın ciddiyetinde bir kesim verir; IBM Plex Sans kurumsal ve teknik bir gövde
// sesi taşır. İkisi de belge ve tasdik dilini, trend bir kombinasyondan daha iyi karşılar.
const sourceSerif = Source_Serif_4({
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz'],
  // İtalik: ana sayfa hizmet başlığı vurgusu, footer imzası ve alıntılar
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-source-serif',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-plex-sans',
});

/** <html> üzerine konur; tokens.css'teki --font-serif / --font-sans bu değişkenlere bağlanır */
export const fontClassName = `${sourceSerif.variable} ${plexSans.variable}`;
