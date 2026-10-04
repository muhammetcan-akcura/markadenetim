#!/usr/bin/env bash
# Site görsellerini ham videodan üretir (yalnızca geliştirme; ffmpeg gerekir).
#   bash scripts/make-stills.sh [kaynak.mp4]
# Kullanılan sahneler: orman örtüsü (4.5 sn), rüzgâr türbinleri (10.5), hasat (13.5), kent silueti (19.8).
# Kent silueti yalnızca y ≥ 560 bölgesinden kırpılır: üstteki kulelerde banka logoları/tabelalar var.
# Orman yolu (bir referans sitenin hero'su), yat, kervan ve kayak sahneleri kullanılmaz.
set -euo pipefail
SRC="${1:-assets/video/file.mp4}"
OUT=public/img
mkdir -p "$OUT"
# Hero'dan bir ton açık navy duotone: açık zeminli bölümlerde de görsel olarak okunur
GRADE="hue=s=0,eq=contrast=1.1,curves=r='0/0.04 1/0.70':g='0/0.07 1/0.71':b='0/0.13 1/0.77'"

still() { # zaman kırpım ölçek çıktı
  ffmpeg -v error -y -ss "$1" -i "$SRC" -frames:v 1 -vf "$2,scale=$3:flags=lanczos,$GRADE" -q:v 2 "$OUT/$4"
}

still 19.8 "crop=416:520:720:560"  800:1000  about-skyline.jpg     # Hakkımızda, dikey 4:5
still 19.8 "crop=693:520:580:560"  1200:900  service-1.jpg         # Yeminli Mali Müşavirlik
still 4.5  "crop=1440:1080:240:0"  1200:900  service-2.jpg         # Denetim
still 13.5 "crop=1440:1080:240:0"  1200:900  service-3.jpg         # Vergi Danışmanlığı
still 10.5 "crop=1440:1080:480:0"  1200:900  service-4.jpg         # Finansal Danışmanlık
still 13.5 "crop=1920:823:0:257"   1920:823  statement-fields.jpg  # Beyan altı panorama 21:9
still 10.5 "crop=1620:1080:300:0"  1500:1000 insight-1.jpg         # Güncel manşet 3:2
still 4.5  "crop=1080:1080:840:0"  800:800   insight-2.jpg
still 19.8 "crop=520:520:700:560"  800:800   insight-3.jpg
ls -la "$OUT"
