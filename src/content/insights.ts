// Güncel yazıları. Yayın sistemi (CMS) kurulana kadar içerik burada tutulur.
// [BİLGİ GİRİLECEK] Tüm yazılar ÖRNEKTİR: yayın öncesi sorumlu YMM tarafından gözden geçirilmeli
// ya da gerçek yazılarla değiştirilmelidir. Metinler bilinçli olarak genel tutuldu; oran, tutar,
// süre ve madde numarası gibi doğrulanması gereken ayrıntı içermez.
// Görseller geçicidir ve dekoratiftir (alt=""); anlam başlıkta.

export type ArticleBlock =
  | { type: 'p'; text: string }
  /** id: içindekiler bağlantısı için çapa */
  | { type: 'h2'; id: string; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string };

export type Article = {
  slug: string;
  category: 'Vergi' | 'Denetim' | 'Finans';
  title: string;
  excerpt: string;
  /** [BİLGİ GİRİLECEK] Gerçek yayın tarihi; girilince ISO biçimine (YYYY-AA-GG) çevrilecek */
  date: string;
  image: string;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: 'transfer-fiyatlandirmasi-belgelendirme-hatalari',
    category: 'Vergi',
    title: 'Transfer fiyatlandırması belgelendirmesinde sık yapılan hatalar',
    excerpt:
      'Yıllık raporun hazırlanmasında karşılaştırılabilirlik analizi ve belge düzeni neden belirleyicidir?',
    date: '28 Eylül 2026',
    image: '/img/insight-1-new.jpg',
    body: [
      {
        type: 'p',
        text: 'İlişkili kişilerle yapılan işlemlerde fiyatın emsallere uygunluğu yalnızca bir hesaplama konusu değildir; aynı zamanda bir belgeleme konusudur. Yıllık raporlar çoğu zaman yıl sonunda, sıkışık bir takvimle hazırlanır. Hataların büyük bölümü de bu acelenin içinde doğar.',
      },
      { type: 'h2', id: 'karsilastirilabilirlik', text: 'Karşılaştırılabilirlik analizinin yüzeysel kalması' },
      {
        type: 'p',
        text: 'Emsal işlemler seçilirken üstlenilen işlevler, taşınan riskler ve kullanılan varlıklar ayrıntılı biçimde tanımlanmalıdır. Yalnızca sektör adı benzer olduğu için seçilen emsaller, bir inceleme sırasında ilk sorgulanan noktadır.',
      },
      { type: 'h2', id: 'yontem-secimi', text: 'Yöntem seçiminin gerekçelendirilmemesi' },
      {
        type: 'p',
        text: 'Hangi yöntemin neden seçildiği ve diğer yöntemlerin neden uygun görülmediği raporda açıkça yazılmalıdır. Gerekçesi yazılmamış bir seçim, sonuç doğru olsa bile raporu zayıflatır.',
      },
      { type: 'h2', id: 'kayit-uyumu', text: 'Rapor ile kayıtlar arasındaki uyumsuzluk' },
      {
        type: 'p',
        text: 'Raporun güvenilirliği, muhasebe kayıtlarıyla birebir örtüşmesine bağlıdır. Sık karşılaşılan uyumsuzluklar şunlardır:',
      },
      {
        type: 'list',
        items: [
          'Rapordaki işlem tutarlarının yevmiye kayıtlarıyla eşleşmemesi',
          'Sözleşme koşulları ile fiilî uygulamanın birbirinden ayrışması',
          'Faturalandırma dönemleri ile raporlama döneminin örtüşmemesi',
        ],
      },
      {
        type: 'quote',
        text: 'Belgelendirme, yıl sonunda yazılan bir rapor değil; yıl boyunca tutulan bir kayıt düzenidir.',
      },
      { type: 'h2', id: 'yil-ici-izleme', text: 'Yıl içinde izleme yapılmaması' },
      {
        type: 'p',
        text: 'Fiyatlandırma politikasının yıl içinde belirli aralıklarla gözden geçirilmesi, yıl sonu düzeltmelerine duyulan ihtiyacı azaltır. Sapmalar erken fark edildiğinde, düzeltme de belgeleriyle birlikte zamanında yapılabilir.',
      },
    ],
  },
  {
    slug: 'sinirli-denetim-ve-bagimsiz-denetim',
    category: 'Denetim',
    title: 'Sınırlı denetim ile bağımsız denetim arasındaki farklar',
    excerpt: 'İki çalışma da finansal tablolarla ilgilidir; ancak sundukları güvence düzeyi aynı değildir.',
    date: '15 Eylül 2026',
    image: '/img/insight-2-new.jpg',
    body: [
      {
        type: 'p',
        text: 'Finansal tablolar üzerinde yürütülen her çalışma aynı sonucu üretmez. Bağımsız denetim ile sınırlı denetim arasındaki fark, kapsamdan önce güvence düzeyinde başlar.',
      },
      { type: 'h2', id: 'guvence-duzeyi', text: 'Güvence düzeyi' },
      {
        type: 'p',
        text: 'Bağımsız denetim, finansal tabloların önemli yanlışlık içermediğine dair makul güvence sağlar ve sonuç olumlu bir görüşle ifade edilir. Sınırlı denetimde ise güvence sınırlıdır; sonuç, dikkat çeken bir husus bulunup bulunmadığı biçiminde bildirilir.',
      },
      { type: 'h2', id: 'prosedurler', text: 'Uygulanan prosedürler' },
      {
        type: 'p',
        text: 'Bağımsız denetimde iç kontrollerin değerlendirilmesi, dış teyitler, sayım gözlemi ve ayrıntılı maddi doğrulama yer alır. Sınırlı denetimde çalışma ağırlıklı olarak sorgulama ve analitik prosedürlere dayanır.',
      },
      {
        type: 'quote',
        text: 'Doğru soru “hangisi daha kapsamlı” değil, “bu karar için hangi güvence düzeyi gerekli” sorusudur.',
      },
      { type: 'h2', id: 'hangi-durumda', text: 'Hangi durumda hangisi?' },
      {
        type: 'p',
        text: 'Seçimi çoğu zaman yasal yükümlülükler ve raporu kullanacak tarafların beklentisi belirler. Değerlendirmede şu sorular yol gösterir:',
      },
      {
        type: 'list',
        items: [
          'Rapor yasal bir yükümlülük nedeniyle mi hazırlanıyor?',
          'Raporu kullanacak taraf, örneğin bir finans kuruluşu, hangi güvence düzeyini bekliyor?',
          'İncelenen dönem yıllık mı, ara dönem mi?',
        ],
      },
      {
        type: 'p',
        text: 'Kapsamın baştan netleştirilmesi, hem sürecin takvimini hem de raporun kullanım amacına uygunluğunu belirler.',
      },
    ],
  },
  {
    slug: 'enflasyon-duzeltmesi-sonrasi-finansal-tablolar',
    category: 'Finans',
    title: 'Enflasyon düzeltmesi sonrası finansal tabloları okumak',
    excerpt: 'Düzeltilmiş tablolar, aynı işletmeyi önceki dönemlerden farklı gösterebilir. Farkı okumak için nereye bakmalı?',
    date: '2 Eylül 2026',
    image: '/img/insight-3-new.jpg',
    body: [
      {
        type: 'p',
        text: 'Enflasyon düzeltmesi, tarihî maliyetle tutulan kayıtları raporlama tarihindeki satın alma gücüne taşır. Bu nedenle aynı işletmenin tabloları, düzeltme öncesindeki görünümünden belirgin biçimde farklılaşabilir.',
      },
      { type: 'h2', id: 'parasal-kalemler', text: 'Parasal ve parasal olmayan kalemler' },
      {
        type: 'p',
        text: 'Nakit, alacak ve borç gibi parasal kalemler zaten cari satın alma gücünü yansıtır ve düzeltilmez. Stoklar, maddi duran varlıklar ve özkaynak gibi parasal olmayan kalemler ise endeks değişimine göre yeniden ifade edilir.',
      },
      { type: 'h2', id: 'net-parasal-pozisyon', text: 'Net parasal pozisyon' },
      {
        type: 'p',
        text: 'Parasal varlıkları borçlarından fazla olan bir işletme, enflasyon döneminde satın alma gücü kaybeder; tersi durumda kazanç oluşur. Bu kalem, dönem sonucunu doğrudan etkiler ve faaliyet performansından ayrı okunmalıdır.',
      },
      {
        type: 'quote',
        text: 'Düzeltilmiş tablo yeni bir gerçeklik yaratmaz; mevcut gerçekliği aynı ölçü birimiyle gösterir.',
      },
      { type: 'h2', id: 'karsilastirma', text: 'Karşılaştırma yaparken' },
      {
        type: 'list',
        items: [
          'Önceki dönem tutarlarının da aynı satın alma gücüne getirildiğini kontrol edin.',
          'Kârlılık oranlarını, net parasal pozisyon etkisini ayırarak yeniden hesaplayın.',
          'Vergi amaçlı düzeltme ile finansal raporlama amaçlı düzeltmenin farklı sonuç verebileceğini göz önünde bulundurun.',
        ],
      },
      {
        type: 'p',
        text: 'Yönetim açısından asıl soru, düzeltmenin hangi kalemleri ne yönde etkilediğidir. Bu ayrım yapılmadan alınan kararlar, enflasyonun etkisini işletmenin performansı sanabilir.',
      },
    ],
  },
  {
    slug: 'kdv-iadesi-belge-duzeni',
    category: 'Vergi',
    title: 'KDV iadesi taleplerinde belge düzeni neden belirleyicidir?',
    excerpt: 'İade sürecinin hızı çoğu zaman talebin kendisinden çok, onu destekleyen belgelerin düzenine bağlıdır.',
    date: '18 Ağustos 2026',
    image: '/img/service-3-new.jpg',
    body: [
      {
        type: 'p',
        text: 'KDV iadesi, işletmelerin nakit akışını doğrudan etkileyen bir süreçtir. Talebin hızla sonuçlanması, büyük ölçüde başvurudan önce kurulan belge düzenine bağlıdır.',
      },
      { type: 'h2', id: 'iade-hakki', text: 'İade hakkını doğuran işlemin belgelenmesi' },
      {
        type: 'p',
        text: 'İadenin dayandığı işlem türüne göre istenen belgeler değişir. Bu nedenle ilk adım, iade hakkını doğuran işlemin doğru tanımlanması ve bu işleme ait belgelerin eksiksiz bir araya getirilmesidir.',
      },
      { type: 'h2', id: 'yuklenilen-kdv', text: 'Yüklenilen KDV listelerinin tutarlılığı' },
      {
        type: 'p',
        text: 'Listelerdeki her kaydın faturayla, faturanın da muhasebe kaydıyla eşleşmesi gerekir. Sık karşılaşılan sorunlar şunlardır:',
      },
      {
        type: 'list',
        items: [
          'Listedeki belge bilgilerinin faturalarla uyuşmaması',
          'İade dönemine ait olmayan belgelerin listeye dahil edilmesi',
          'Tedarikçi beyanlarıyla yapılan karşılaştırmada ortaya çıkan farklar',
        ],
      },
      {
        type: 'quote',
        text: 'Hızlı bir iade süreci, başvurudan önce kurulan düzenle başlar.',
      },
      { type: 'h2', id: 'tasdik-raporu', text: 'Tasdik raporu ile talebin uyumu' },
      {
        type: 'p',
        text: 'Yeminli mali müşavir tasdik raporu, talebin dayandığı işlemleri ve belgeleri tek bir çerçevede inceler. Raporun ve başvurunun aynı belge setine dayanması, sürecin ek yazışmalarla uzamasını önler.',
      },
    ],
  },
  {
    slug: 'bagimsiz-denetimde-onemlilik',
    category: 'Denetim',
    title: 'Bağımsız denetimde önemlilik kavramı',
    excerpt: 'Denetçinin hangi yanlışlığı önemli saydığı, raporun anlamını doğrudan belirler.',
    date: '4 Ağustos 2026',
    image: '/img/service-2-new.jpg',
    body: [
      {
        type: 'p',
        text: 'Bağımsız denetim, finansal tabloların her kuruşunu doğrulamaz. Denetçi, tabloları kullananların kararını etkileyebilecek yanlışlıklara odaklanır. Bu sınırın adı önemliliktir.',
      },
      { type: 'h2', id: 'nasil-belirlenir', text: 'Önemlilik nasıl belirlenir?' },
      {
        type: 'p',
        text: 'Önemlilik, işletmenin yapısına uygun bir ölçüt üzerinden mesleki muhakemeyle belirlenir. Kullanılan ölçüt ve seçilme gerekçesi denetim dosyasında belgelenir.',
      },
      { type: 'h2', id: 'nitel-onemlilik', text: 'Tutarın ötesinde: nitel önemlilik' },
      {
        type: 'p',
        text: 'Bazı yanlışlıklar tutar olarak küçük olsa da niteliği nedeniyle önemlidir. Örneğin:',
      },
      {
        type: 'list',
        items: [
          'İlişkili taraf işlemlerine ilişkin eksik açıklamalar',
          'Sözleşme koşullarına uyumu doğrudan etkileyen yanlışlıklar',
          'Bir zararı kâra ya da bir kârı zarara çeviren düzeltmeler',
        ],
      },
      {
        type: 'quote',
        text: 'Önemlilik bir eşik değil, tabloları kullanacak kişinin gözünden yapılan bir değerlendirmedir.',
      },
      { type: 'h2', id: 'yonetim-icin', text: 'Yönetim için anlamı' },
      {
        type: 'p',
        text: 'Önemlilik düzeyinin denetimin başında yönetimle konuşulması, beklentileri netleştirir. Düzeltilmeyen yanlışlıkların toplam etkisi de denetim sonunda yönetimle birlikte değerlendirilir.',
      },
    ],
  },
  {
    slug: 'nakit-akis-tablosunu-okumak',
    category: 'Finans',
    title: 'Nakit akış tablosunu yönetim için okumak',
    excerpt: 'Kâr ile nakit arasındaki fark, işletmenin gerçek finansal hareket alanını gösterir.',
    date: '21 Temmuz 2026',
    image: '/img/service-4-new.jpg',
    body: [
      {
        type: 'p',
        text: 'Gelir tablosu bir dönemin sonucunu, bilanço belirli bir anın fotoğrafını gösterir. Nakit akış tablosu ise paranın nereden gelip nereye gittiğini anlatır. Yönetim kararları için çoğu zaman en açıklayıcı tablo budur.',
      },
      { type: 'h2', id: 'uc-bolum', text: 'Üç bölüm, üç soru' },
      {
        type: 'list',
        items: [
          'Esas faaliyetler: İşletmenin asıl işi nakit üretiyor mu?',
          'Yatırım faaliyetleri: Üretilen nakit geleceğe nasıl yatırılıyor?',
          'Finansman faaliyetleri: Açık nasıl kapatılıyor, fazla nasıl kullanılıyor?',
        ],
      },
      { type: 'h2', id: 'kar-ve-nakit', text: 'Kâr ile nakit neden ayrışır?' },
      {
        type: 'p',
        text: 'Vadeli satışlar, stok artışı ve amortisman gibi kalemler kârı ve nakdi farklı yönlere götürebilir. Kârlı görünen bir işletmenin nakit sıkıntısı yaşaması, çoğu zaman işletme sermayesindeki değişimden kaynaklanır.',
      },
      {
        type: 'quote',
        text: 'Kâr bir görüştür; nakit ise bir gerçektir.',
      },
      { type: 'h2', id: 'birlikte-okumak', text: 'Tabloları birlikte okumak' },
      {
        type: 'p',
        text: 'Nakit akış tablosu tek başına değil, bilanço ve gelir tablosuyla birlikte okunduğunda anlam kazanır. Birkaç dönemin birlikte incelenmesi, tek bir yılın yanıltıcı olabilecek görünümünü dengeler.',
      },
    ],
  },
];

/** Gövde metninden hesaplanan okuma süresi (dakika); dakikada ~200 kelime varsayımıyla */
export function readingMinutes(article: Article): number {
  const text = article.body
    .map((block) => (block.type === 'list' ? block.items.join(' ') : block.text))
    .join(' ');
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
