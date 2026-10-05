/*
  Hero videosunun (public/video/file.mp4) kurgu zaman çizelgesi:
  8,25 sn kesintisiz döngü, üç sahne, aralarında 0,75 sn çapraz geçiş.

    döngü zamanı (sn)   0 ──── 2.375 ──────── 5.125 ──────── 7.875 ─ 8.25
    sahne               kent  │    rüzgâr     │     hasat     │ kent (başa dönüş)
                              ↑ geçişlerin orta noktaları

  Sınırlar çapraz geçişlerin orta noktasıdır; her sahne 2,75 sn sürer. Kent sahnesi döngü
  sonuna taşar ([7.875, 8.25) → -0.375…0), bu yüzden sceneAt zamanı o aralıkta eksiye çevirir.
*/
export const LOOP_SECONDS = 8.25;
export const SCENE_SPAN = 2.75;
/** Sahne bitiş (= sonraki sahne başlangıç) zamanları: kent|rüzgâr, rüzgâr|hasat, hasat|kent */
export const SCENE_BOUNDS = [2.375, 5.125, 7.875] as const;
/** Sahne düğmesine basınca gidilecek zaman: sahnenin geçişsiz (net) bölgesi */
export const SCENE_JUMP_TO = [0.3, 3.2, 6.0] as const;

export function sceneAt(time: number): { index: number; progress: number } {
  let t = time % LOOP_SECONDS;
  if (t >= SCENE_BOUNDS[2]) t -= LOOP_SECONDS;
  const index = t < SCENE_BOUNDS[0] ? 0 : t < SCENE_BOUNDS[1] ? 1 : 2;
  const start = index === 0 ? SCENE_BOUNDS[0] - SCENE_SPAN : SCENE_BOUNDS[index - 1];
  return { index, progress: Math.min(1, Math.max(0, (t - start) / SCENE_SPAN)) };
}
