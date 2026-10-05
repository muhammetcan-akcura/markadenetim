// Yasal sayfa metinleri: KVKK aydınlatma metni, gizlilik politikası, çerez politikası.
// Metinler sitenin GERÇEK veri akışına göre yazıldı: iletişim formu, doğrudan iletişim kanalları,
// barındırma sağlayıcısının sunucu kayıtları ve footer'daki Google Haritalar yerleştirmesi.
// Sitede analitik, reklam veya takip çerezi yoktur. Google Haritalar yalnızca onayla yüklenir
// (CookieNotice + ConsentMap, tercih localStorage "md-consent"); davranış değişirse çerez metni de güncellenir.
// Kanun maddeleri 6698 sayılı KVKK'ya dayanır; sicil/MERSİS gibi doğrulanmamış bilgi içermez.
// YAYIN ÖNCESİ: Hukuk danışmanı tarafından gözden geçirilmelidir (CLAUDE.md — yayın öncesi kontrol).
import { legalName } from '@/lib/site';
import { tr } from '@/content/tr';

/** Bir blok: paragraf (string) ya da madde listesi (string[]) */
export type LegalBlock = string | string[];
export type LegalSection = { heading: string; body: LegalBlock[] };
export type LegalDoc = { updated: string; intro: string; sections: LegalSection[] };

const [hq, mardin] = tr.footer.offices;
const email = hq.email;

// Veri sorumlusunun kimlik ve iletişim bilgisi üç metinde de aynı kaynaktan gelir
const controller = [
  `${legalName} (“Şirket”)`,
  `İstanbul Merkez Ofis: ${hq.address}`,
  `Mardin Ofis: ${mardin.address}`,
  `E-posta: ${email}`,
];

const updated = '5 Ekim 2026';

export const legal: Record<'kvkk' | 'gizlilik' | 'cerez', LegalDoc> = {
  kvkk: {
    updated,
    intro: `Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (“KVKK”) 10. maddesi uyarınca, web sitemiz ve doğrudan iletişim kanallarımız aracılığıyla elde edilen kişisel verilerinizin işlenmesine ilişkin olarak veri sorumlusu sıfatıyla ${legalName} tarafından hazırlanmıştır.`,
    sections: [
      {
        heading: 'Veri sorumlusu',
        body: ['KVKK kapsamında veri sorumlusu aşağıda bilgileri yer alan Şirketimizdir:', controller],
      },
      {
        heading: 'İşlenen kişisel veriler',
        body: [
          'Web sitemiz üzerinden yalnızca aşağıdaki veriler işlenir:',
          [
            'Kimlik ve iletişim bilgisi: ad soyad, e-posta adresi, varsa şirket adı',
            'Talep bilgisi: seçtiğiniz konu ve mesajınızın içeriği',
            'İşlem güvenliği bilgisi: IP adresi, tarayıcı türü, erişim tarihi ve saati (barındırma altyapısının sunucu kayıtları)',
          ],
          'Telefon, e-posta veya WhatsApp üzerinden bize doğrudan ulaştığınızda, iletişim için paylaştığınız bilgiler de işlenir. Lütfen mesajlarınızda gerekli olmayan özel nitelikli kişisel veri (sağlık, inanç vb.) paylaşmayın.',
        ],
      },
      {
        heading: 'Toplama yöntemi',
        body: [
          'Kişisel verileriniz; web sitemizdeki iletişim formu, e-posta, telefon ve mesajlaşma kanalları aracılığıyla sizin tarafınızdan iletilmesi ve sitenin çalışması sırasında sunucu kayıtlarının otomatik olarak oluşması yoluyla, elektronik ortamda toplanır.',
        ],
      },
      {
        heading: 'İşleme amaçları ve hukuki sebepler',
        body: [
          'Kişisel verileriniz aşağıdaki amaçlarla ve KVKK’nın 5. maddesinde sayılan hukuki sebeplere dayanılarak işlenir:',
          [
            'Görüşme ve bilgi talebinizin alınması, değerlendirilmesi ve yanıtlanması — bir sözleşmenin kurulmasıyla doğrudan ilgili olması (m. 5/2-c) ve ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaat (m. 5/2-f)',
            'Web sitesinin güvenliğinin sağlanması ve kötüye kullanımın önlenmesi — meşru menfaat (m. 5/2-f)',
            'Mevzuattan doğan saklama, bildirim ve bilgi verme yükümlülüklerinin yerine getirilmesi — kanunlarda açıkça öngörülmesi ve hukuki yükümlülük (m. 5/2-a, m. 5/2-ç)',
            'Bir hakkın tesisi, kullanılması veya korunması — m. 5/2-e',
          ],
        ],
      },
      {
        heading: 'Aktarım',
        body: [
          'Kişisel verileriniz satılmaz ve pazarlama amacıyla üçüncü kişilerle paylaşılmaz. Yalnızca yukarıdaki amaçlarla sınırlı olarak şu alıcılara aktarılabilir:',
          [
            'Web sitemizin barındırma, altyapı ve iletişim formu hizmetini sağlayan hizmet sağlayıcı (Netlify, Inc., Amerika Birleşik Devletleri); form mesajları bu sağlayıcının sistemlerinde saklanır',
            'Form mesajlarının tarafımıza bildirilmesinde kullanılan e-posta hizmet sağlayıcısı',
            'Talep edilmesi hâlinde, yetkili kamu kurum ve kuruluşları ile adli makamlar',
          ],
          'Hizmet sağlayıcılarının sunucularının yurt dışında bulunması nedeniyle gerçekleşen aktarımlar, KVKK’nın 9. maddesinde öngörülen usul ve güvencelere uygun olarak yapılır.',
        ],
      },
      {
        heading: 'Saklama süresi',
        body: [
          'Kişisel verileriniz, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen saklama süreleri boyunca saklanır. Bu sürelerin sona ermesiyle silinir, yok edilir veya anonim hâle getirilir. Talebiniz bir hizmet ilişkisine dönüşürse, verileriniz bu ilişkiye ilişkin mevzuattaki süreler boyunca saklanır.',
        ],
      },
      {
        heading: 'Haklarınız',
        body: [
          'KVKK’nın 11. maddesi uyarınca Şirketimize başvurarak aşağıdaki haklarınızı kullanabilirsiniz:',
          [
            'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
            'İşlenmişse buna ilişkin bilgi talep etme',
            'İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme',
            'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
            'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
            'KVKK’nın 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme',
            'Düzeltme, silme ve yok etme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme',
            'Münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme',
            'Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme',
          ],
        ],
      },
      {
        heading: 'Başvuru yöntemi',
        body: [
          'Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ’e uygun olarak; kimliğinizi tespit etmeye yarayan bilgilerle birlikte yazılı olarak İstanbul Merkez Ofis adresimize iletebilir ya da güvenli elektronik imza, mobil imza veya sistemlerimizde kayıtlı e-posta adresinizi kullanarak ' +
            email +
            ' adresine gönderebilirsiniz.',
          'Başvurunuz, talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel Verileri Koruma Kurulu’nca belirlenen tarifedeki ücret alınabilir.',
        ],
      },
    ],
  },

  gizlilik: {
    updated,
    intro: `Bu politika, ${legalName} web sitesini ziyaret ettiğinizde hangi bilgilerin işlendiğini ve bu bilgilerin nasıl korunduğunu açıklar. Kişisel verilerin işlenmesine ilişkin ayrıntılı bilgi KVKK Aydınlatma Metni’nde yer alır.`,
    sections: [
      {
        heading: 'Kapsam',
        body: [
          'Bu politika yalnızca bu web sitesi için geçerlidir. Sitede üyelik veya kullanıcı hesabı bulunmaz; siteyi gezmek için herhangi bir kişisel bilgi vermeniz gerekmez.',
        ],
      },
      {
        heading: 'Hangi bilgileri işliyoruz',
        body: [
          [
            'İletişim formunu kullandığınızda paylaştığınız ad soyad, e-posta, şirket, konu ve mesaj bilgileri',
            'Sitenin güvenli çalışması için barındırma altyapısının tuttuğu teknik sunucu kayıtları (IP adresi, tarayıcı türü, erişim zamanı)',
          ],
          'Sitede ziyaretçi davranışını ölçen analitik araç, reklam veya yeniden hedefleme teknolojisi kullanılmaz.',
        ],
      },
      {
        heading: 'Bilgilerin kullanımı',
        body: [
          'Form üzerinden ilettiğiniz bilgiler yalnızca talebinizi değerlendirmek ve size dönüş yapmak için kullanılır. Bilgileriniz satılmaz, kiralanmaz ve pazarlama amacıyla üçüncü kişilerle paylaşılmaz.',
        ],
      },
      {
        heading: 'Mesleki sır ve gizlilik',
        body: [
          'Yeminli mali müşavirlik ve bağımsız denetim faaliyetleri, meslek mevzuatı gereği sır saklama yükümlülüğüne tabidir. Bize iletilen bilgiler bu yükümlülük ve mesleki etik kurallar çerçevesinde, yalnızca görevle ilgili kişilerin erişimine açık biçimde ele alınır.',
          'Görüşme öncesinde form veya e-posta yoluyla gizli finansal belge göndermemenizi öneririz; belge paylaşımının yöntemi görüşme sonrasında birlikte belirlenir.',
        ],
      },
      {
        heading: 'Güvenlik',
        body: [
          'Site ile tarayıcınız arasındaki tüm bağlantılar şifreli (HTTPS) olarak kurulur. Form verileri sunucu tarafında doğrulanır ve yalnızca yetkili kişilerin erişebildiği kanallarla iletilir. İnternet üzerinden yapılan hiçbir iletimin tümüyle risksiz olmadığını hatırlatırız.',
        ],
      },
      {
        heading: 'Üçüncü taraf içerik ve bağlantılar',
        body: [
          'Ofis konumlarımız, onayınız hâlinde Google Haritalar yerleştirmesiyle gösterilir; WhatsApp bağlantısı ise sizi Meta Platforms tarafından işletilen hizmete yönlendirir. Bu hizmetlerin veri işleme faaliyetleri kendi gizlilik politikalarına tabidir.',
        ],
      },
      {
        heading: 'Değişiklikler ve iletişim',
        body: [
          'Bu politika gerektiğinde güncellenir; güncel sürüm her zaman bu sayfada yayımlanır ve sayfanın üstündeki tarih değişir. Sorularınız için bize ulaşabilirsiniz:',
          controller,
        ],
      },
    ],
  },

  cerez: {
    updated,
    intro:
      'Bu politika, web sitemizde kullanılan çerezleri ve benzeri teknolojileri, kullanım amaçlarını ve tercihlerinizi nasıl yönetebileceğinizi açıklar.',
    sections: [
      {
        heading: 'Çerez nedir',
        body: [
          'Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Sitenin çalışmasını sağlamak, tercihleri hatırlamak veya kullanım istatistiği toplamak gibi amaçlarla kullanılabilirler.',
        ],
      },
      {
        heading: 'Sitemizin kullandığı çerezler',
        body: [
          'Sitemiz kendi adına çerez yerleştirmez. Analitik, reklam, yeniden hedefleme veya sosyal medya takip çerezi kullanılmaz.',
          'Çerez tercihinizi hatırlamak için tarayıcınızın yerel depolama alanına (localStorage) “md-consent” adlı tek bir kayıt yazılır. Bu kayıt yalnızca tercihinizi (“Kabul et” ya da “Yalnızca zorunlu”) ve tercihin tarihini içerir; sunucumuza gönderilmez ve sizi tanımlamak için kullanılmaz.',
        ],
      },
      {
        heading: 'Üçüncü taraf çerezleri',
        body: [
          'Sayfanın alt bölümünde ofis konumlarımızı göstermek için Google Haritalar yerleştirmesi kullanılır. Bu haritalar varsayılan olarak yüklenmez; yalnızca çerez bildiriminde “Kabul et” seçeneğini işaretlemeniz ya da ilgili harita alanındaki “Haritayı göster” düğmesine basmanız hâlinde yüklenir.',
          'Harita yüklendiğinde Google LLC, kendi politikaları doğrultusunda tarayıcınıza çerez yerleştirebilir ve bu çerezler üzerinden veri işleyebilir. Bu çerezler Şirketimizin kontrolünde değildir. Ayrıntılı bilgi için Google’ın gizlilik ve çerez politikalarını inceleyebilirsiniz.',
        ],
      },
      {
        heading: 'Çerezleri nasıl yönetebilirsiniz',
        body: [
          'Siteye ilk girişinizde ekranın alt kısmında bir çerez bildirimi gösterilir. “Kabul et” ile harita içeriğinin yüklenmesine onay verir, “Yalnızca zorunlu” ile onay vermeden devam edersiniz. Onay vermemeniz sitenin hiçbir işlevini kısıtlamaz.',
          'Tercihinizi dilediğiniz zaman sayfanın en altındaki “Çerez tercihleri” bağlantısıyla değiştirebilir ya da onayınızı geri alabilirsiniz. Onayınızı geri aldığınızda haritalar bir sonraki görüntülemeden itibaren yüklenmez; daha önce yerleştirilmiş üçüncü taraf çerezlerini tarayıcı ayarlarınızdan silebilirsiniz.',
          'Ayrıca tarayıcınızın ayarlarından çerezleri görüntüleyebilir, silebilir veya üçüncü taraf çerezlerini tamamen engelleyebilirsiniz:',
          [
            'Google Chrome: Ayarlar → Gizlilik ve güvenlik → Üçüncü taraf çerezleri',
            'Mozilla Firefox: Ayarlar → Gizlilik ve Güvenlik → Çerezler ve site verileri',
            'Safari: Ayarlar → Gizlilik → Siteler arası izlemeyi engelle',
            'Microsoft Edge: Ayarlar → Çerezler ve site izinleri',
          ],
        ],
      },
      {
        heading: 'Değişiklikler',
        body: [
          'Sitemizde ileride analitik veya benzeri isteğe bağlı çerezler kullanılması hâlinde, bu çerezler yalnızca açık onayınızla etkinleştirilir ve bu politika güncellenir. Sorularınız için ' +
            email +
            ' adresinden bize ulaşabilirsiniz.',
        ],
      },
    ],
  },
};
