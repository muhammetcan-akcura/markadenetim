#!/usr/bin/env bash
# Hero videosunu ham kaynaktan üretir (yalnızca geliştirme; ffmpeg gerekir).
#   bash scripts/encode-hero-video.sh [kaynak.mp4]
#
# Kurgu: kent gecesi → rüzgâr → hasat. 8,25 sn KESİNTİSİZ döngü: son sahne ilk sahneye
# çapraz geçişle biter (karartma yok). Her sahne 2 sn net + 0,75 sn geçiş (geçişler kısa:
# mercekte iki sahnenin karışımı yerine net görüntü daha uzun süre görünür).
# Zaman çizelgesi src/lib/heroScenes.ts ile birebir aynı olmalı.
#
# Sahneler (kaynak 1920×1080 / 30 fps):
#   kent    18.2 sn  → kulelerde banka logoları var; yalnızca logosuz alt bölge (y ≥ 560) kırpılır
#   rüzgâr   9.1 sn
#   hasat   12.1 sn
# Orman yolu (bir referans sitenin hero'suyla aynı görüntü), yat, kervan ve kayak kullanılmaz.
#
# Çıktılar: public/video/hero-{l,p}.{mp4,webm}, public/img/hero-{l,p}.webp (ilk kare = poster)
#   l = yatay 1280×720, p = dikey 540×960 (her sahne için ayrı dikey kırpma penceresi)
set -euo pipefail
SRC="${1:-assets/video/file.mp4}"
OUT_V="${OUT_V:-public/video}"
OUT_I="${OUT_I:-public/img}"
# Çözünürlük ve kalite ayarları (deney için ortam değişkeniyle değiştirilebilir)
W_L="${W_L:-1280}"; H_L="${H_L:-720}"
CRF_H_L="${CRF_H_L:-28}"; CRF_W_L="${CRF_W_L:-38}"
CRF_H_P="${CRF_H_P:-28}"; CRF_W_P="${CRF_W_P:-38}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$OUT_V" "$OUT_I"

# 30 fps kayıt 24 fps'te oynar: kare tekrarı olmadan 1,25× yavaşlatma. Her klip 2,8 sn kaynak = 3,5 sn çıktı.
TIME="setpts=1.25*(PTS-STARTPTS),fps=24,format=yuv420p"
# Doğal renk, hafif kısık: parlaklık biraz düşer, üst uç (gökyüzü, güneş) yumuşar ki
# üstüne binen başlık okunur kalsın. Doygunluk kaynakla aynı.
GRADE="eq=brightness=-0.035:contrast=1.03,curves=all='0/0 0.80/0.76 1/0.90'"

# --- Sahne kırpmaları: "kent rüzgâr hasat" ---
declare -A CROP_L=( [a]="crop=924:520:498:560" [b]="null" [c]="null" )
declare -A CROP_P=( [a]="crop=292:520:814:560" [b]="crop=608:1080:596:0" [c]="crop=608:1080:656:0" )

build() { # yön ($1 = l|p), genişlik ($2), yükseklik ($3)
  local o="$1" w="$2" h="$3" ca cb cc
  if [ "$o" = l ]; then ca="${CROP_L[a]}"; cb="${CROP_L[b]}"; cc="${CROP_L[c]}"; else ca="${CROP_P[a]}"; cb="${CROP_P[b]}"; cc="${CROP_P[c]}"; fi
  local sc="scale=${w}:${h}:flags=lanczos,$TIME"
  # a0/a1: aynı kent klibi iki kez (döngü kapanışında başa çapraz geçiş için)
  ffmpeg -v error -y \
    -ss 18.2 -t 2.8 -i "$SRC" -ss 9.1 -t 2.8 -i "$SRC" -ss 12.1 -t 2.8 -i "$SRC" \
    -filter_complex "[0:v]${ca},${sc},split[a0][a1];\
[1:v]${cb},${sc}[b0];\
[2:v]${cc},${sc}[c0];\
[a0][b0]xfade=transition=fade:duration=0.75:offset=2.75[x1];\
[x1][c0]xfade=transition=fade:duration=0.75:offset=5.5[x2];\
[x2][a1]xfade=transition=fade:duration=0.75:offset=8.25,\
trim=start=0.75:end=9,setpts=PTS-STARTPTS,${GRADE},format=yuv420p[v]" \
    -map "[v]" -an -c:v libx264 -preset slow -crf 14 -g 24 -pix_fmt yuv420p "$TMP/master-$o.mp4"
  # Çıktılar: -g 24 (1 sn anahtar kare) sahne atlamalarında hızlı arama sağlar
  local crf_h="$CRF_H_L" crf_w="$CRF_W_L"
  [ "$o" = p ] && { crf_h="$CRF_H_P"; crf_w="$CRF_W_P"; }
  ffmpeg -v error -y -i "$TMP/master-$o.mp4" -c:v libx264 -preset slow -crf $crf_h -profile:v high \
    -g 24 -keyint_min 24 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart -an "$OUT_V/hero-$o.mp4"
  ffmpeg -v error -y -i "$TMP/master-$o.mp4" -c:v libvpx-vp9 -b:v 0 -crf $crf_w -g 24 -row-mt 1 \
    -deadline good -cpu-used 2 -pix_fmt yuv420p -an "$OUT_V/hero-$o.webm"
  # Poster = videonun ilk karesi: video başlayınca görsel sıçrama olmaz
  ffmpeg -v error -y -i "$TMP/master-$o.mp4" -frames:v 1 -c:v libwebp -quality 72 "$OUT_I/hero-$o.webp"
}

build l "$W_L" "$H_L"
build p 540 960

# Döngü kontrolü: ilk ve son kare birbirine yakın olmalı (SSIM ≈ 1'e yakın, ardışık kare benzerliği)
for o in l p; do
  n=$(ffprobe -v error -select_streams v:0 -count_frames -show_entries stream=nb_read_frames -of csv=p=0 "$TMP/master-$o.mp4")
  ffmpeg -v error -y -i "$TMP/master-$o.mp4" -vf "select=eq(n\,$((n-1)))" -frames:v 1 "$TMP/last-$o.png"
  ffmpeg -v error -y -i "$TMP/master-$o.mp4" -vf "select=eq(n\,0)" -frames:v 1 "$TMP/first-$o.png"
  echo -n "döngü $o ($n kare) SSIM ilk/son: "
  ffmpeg -hide_banner -i "$TMP/first-$o.png" -i "$TMP/last-$o.png" -lavfi ssim -f null - 2>&1 | grep -o "All:[0-9.]*" | head -1
done
ls -la "$OUT_V" "$OUT_I"/hero-*.webp
