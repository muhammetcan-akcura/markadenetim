import { Manrope, Newsreader } from 'next/font/google';

// next/font/google fontu build sırasında indirir ve kendi alan adımızdan sunar:
// ziyaretçiden Google'a istek gitmez (KVKK), preload ve CLS'i azaltan yedek metrikler otomatik.
// Türkçe için iki alt küme şart: "ı" latin'de, "ğ ş İ" latin-ext'te.
// Ayrı modülde: kök layout ve kendi <html>'ini çizen global-error aynı fontları kullanır.
const newsreader = Newsreader({
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz'],
  display: 'swap',
  variable: '--font-newsreader',
});

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-manrope',
});

/** <html> üzerine konur; tokens.css'teki --font-serif / --font-sans bu değişkenlere bağlanır */
export const fontClassName = `${newsreader.variable} ${manrope.variable}`;
