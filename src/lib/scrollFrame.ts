/*
  Ortak scroll karesi. Sayfadaki tüm scroll efektleri tek bir pasif dinleyici ve tek bir
  requestAnimationFrame paylaşır: scrollY ve innerHeight karede bir kez, herhangi bir stil
  yazılmadan önce okunur. Böylece bir efektin yazdığı stil, diğerinin okumasında zorunlu
  reflow (forced reflow) tetiklemez. Abonelere yalnızca sayılar gider; DOM ölçmezler.
*/
export type Frame = { y: number; vh: number };
type Subscriber = (frame: Frame) => void;

const subscribers = new Set<Subscriber>();
let ticking = false;

function flush() {
  ticking = false;
  const frame = { y: window.scrollY, vh: window.innerHeight };
  subscribers.forEach((fn) => fn(frame));
}

function schedule() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(flush);
}

/** Scroll/resize'da (ve ilk karede) çağrılır. Dönen fonksiyon aboneliği bırakır. */
export function onScrollFrame(fn: Subscriber) {
  if (subscribers.size === 0) {
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
  }
  subscribers.add(fn);
  schedule();
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0) {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    }
  };
}

/** Bir sonraki ortak karede tüm aboneleri yeniden çalıştırır (ör. geometri değişince). */
export const requestScrollFrame = schedule;

/*
  Öğenin belge içindeki dikey konumu ve yüksekliği. Ölçüm scroll sırasında değil,
  ResizeObserver geri çağrısında yapılır: tarayıcı o anda layout'u zaten bitirmiştir.
  Belgenin kendisi de izlenir; üstteki bir bölüm büyüyüp küçülünce (font, görsel) konum güncellenir.
*/
export function observeGeometry(el: HTMLElement, onChange: (top: number, height: number) => void) {
  const measure = () => {
    const rect = el.getBoundingClientRect();
    onChange(rect.top + window.scrollY, rect.height);
    requestScrollFrame();
  };
  const ro = new ResizeObserver(measure);
  ro.observe(el);
  ro.observe(document.body);
  return () => ro.disconnect();
}
