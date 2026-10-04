import fs from 'fs';
import path from 'path';
import https from 'https';

const url = 'https://www.markadenetim.tr/';
const outputDir = path.join(process.cwd(), 'brand');

// Klasörü oluştur
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Dosya indirme fonksiyonu
const downloadImage = (imageUrl, filename) => {
  return new Promise((resolve, reject) => {
    https.get(imageUrl, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${imageUrl}' (${res.statusCode})`));
        return;
      }
      const fileStream = fs.createWriteStream(path.join(outputDir, filename));
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlinkSync(path.join(outputDir, filename)); // Hata olursa sil
        reject(err);
      });
    }).on('error', reject);
  });
};

const getExtension = (url) => {
  const ext = url.split('.').pop().split(/#|\?/)[0];
  return ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(ext.toLowerCase()) ? ext : 'jpg';
};

console.log(`${url} adresine istek atılıyor...`);

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', async () => {
    console.log('HTML başarıyla çekildi. Görseller taranıyor...');
    
    // Basit bir regex ile img src, veya href içindeki görsel linklerini bulalım
    const regex = /(?:src|href)=["']([^"']+\.(?:png|jpg|jpeg|gif|svg|webp)(?:\?[^"']*)?)["']/gi;
    let match;
    const imageUrls = new Set();
    
    while ((match = regex.exec(data)) !== null) {
      let imgUrl = match[1];
      if (imgUrl.startsWith('//')) {
        imgUrl = 'https:' + imgUrl;
      } else if (imgUrl.startsWith('/')) {
        imgUrl = new URL(imgUrl, url).href;
      } else if (!imgUrl.startsWith('http')) {
        imgUrl = new URL(imgUrl, url).href;
      }
      imageUrls.add(imgUrl);
    }
    
    const urls = Array.from(imageUrls);
    console.log(`Toplam ${urls.length} farklı görsel bulundu. İndirme başlıyor...`);
    
    for (let i = 0; i < urls.length; i++) {
      try {
        const imgUrl = urls[i];
        let filename = imgUrl.split('/').pop().split(/#|\?/)[0];
        
        if (!filename || filename === '') {
            filename = `image_${i}.${getExtension(imgUrl)}`;
        }
        
        await downloadImage(imgUrl, filename);
        console.log(`[${i+1}/${urls.length}] İndirildi: ${filename}`);
      } catch (err) {
        console.log(`[${i+1}/${urls.length}] HATA (${urls[i]}):`, err.message);
      }
    }
    
    console.log('İşlem tamamlandı! Görseller "brand" klasörüne kaydedildi.');
  });
}).on('error', (err) => {
  console.error('Siteye istek atılırken hata oluştu:', err.message);
});
