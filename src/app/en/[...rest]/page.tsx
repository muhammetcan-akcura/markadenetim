import { notFound } from 'next/navigation';

// /en altında eşleşmeyen her adres İngilizce 404'e düşsün (aksi hâlde kökteki Türkçe 404 çizilir)
export default function UnknownEn() {
  notFound();
}
