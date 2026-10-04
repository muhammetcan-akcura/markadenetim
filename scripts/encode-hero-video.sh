#!/usr/bin/env bash
# Hero videosunu ham kaynaktan üretir (yalnızca geliştirme; ffmpeg gerekir).
#   bash scripts/encode-hero-video.sh [kaynak.mp4]
# Seçilen sahneler: şehir silueti (18.3 sn), rüzgâr türbinleri (9.1 sn), hasat sıraları (12.1 sn).
# Orman yolu, yat, deve kervanı ve kayak sahneleri bilinçli olarak dışarıda:
# orman yolu bir referans sitenin hero'suyla aynı, diğerleri YMM tonuna uymuyor.
set -euo pipefail
SRC="${1:-assets/video/file.mp4}"
OUT_V=public/video
OUT_I=public/img
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$OUT_V" "$OUT_I"

# Kare kırpım, 1.25x yavaşlatma (30 fps kayıt 24 fps'te oynar: kare tekrarı yok)
TIME="setpts=1.25*(PTS-STARTPTS),fps=24,format=yuv420p"
PREP="crop=1080:1080,scale=960:960:flags=lanczos,$TIME"
# Siluet sahnesinde kule tepelerinde banka logoları ve tabelalar var (üçüncü taraf markası,
# müşteri ilişkisi ima eder). Yalnızca logosuz alt bölge (bulvar) kırpılır.
PREP_SKY="crop=520:520:700:560,scale=960:960:flags=lanczos,$TIME"
# Navy → soluk taş duotone; vurgular kısık tutulur ki üstüne binen başlık okunur kalsın
GRADE="hue=s=0,eq=contrast=1.08,curves=r='0/0.043 1/0.55':g='0/0.078 1/0.56':b='0/0.149 1/0.62'"

ffmpeg -v error -y \
  -ss 18.3 -t 2.6 -i "$SRC" -ss 9.1 -t 2.8 -i "$SRC" -ss 12.1 -t 2.8 -i "$SRC" \
  -filter_complex "[0:v]$PREP_SKY[a];[1:v]$PREP[b];[2:v]$PREP[c];\
[a][b]xfade=transition=fade:duration=1:offset=2.25[ab];\
[ab][c]xfade=transition=fade:duration=1:offset=4.75,\
fade=t=in:st=0:d=0.6,fade=t=out:st=7.6:d=0.7,$GRADE,format=yuv420p[v]" \
  -map "[v]" -an -c:v libx264 -preset slow -crf 26 -profile:v high -movflags +faststart "$TMP/master.mp4"

cp "$TMP/master.mp4" "$OUT_V/hero-960.mp4"
ffmpeg -v error -y -i "$TMP/master.mp4" -c:v libvpx-vp9 -b:v 0 -crf 38 -row-mt 1 -an "$OUT_V/hero-960.webm"
ffmpeg -v error -y -i "$TMP/master.mp4" -vf scale=640:640:flags=lanczos -c:v libx264 -preset slow -crf 27 -movflags +faststart -an "$OUT_V/hero-640.mp4"
ffmpeg -v error -y -i "$TMP/master.mp4" -vf scale=640:640:flags=lanczos -c:v libvpx-vp9 -b:v 0 -crf 40 -row-mt 1 -an "$OUT_V/hero-640.webm"
ffmpeg -v error -y -ss 0.8 -i "$TMP/master.mp4" -frames:v 1 -c:v libwebp -quality 72 "$OUT_I/hero-poster.webp"
# Kırılma bölümü arka planı: aynı logosuz bölgeden, daha da kısık duotone still
ffmpeg -v error -y -ss 19.6 -i "$SRC" -frames:v 1 \
  -vf "crop=924:520:498:560,scale=1920:1080:flags=lanczos,hue=s=0,eq=contrast=1.05,curves=r='0/0.027 1/0.36':g='0/0.051 1/0.37':b='0/0.102 1/0.42'" \
  -q:v 3 "$OUT_I/break-skyline.jpg"
ls -la "$OUT_V" "$OUT_I"
