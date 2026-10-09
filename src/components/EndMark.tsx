import Image from 'next/image';
import styles from './EndMark.module.css';

/*
  Metin sonu işareti: dergilerde yazının bittiğini gösteren küçük işaretin markaya özgü hâli.
  Logonun kaşe monogramı; içerik "kapandı, doğrulandı" anlamını taşır (kesin toplam).
  Dekoratif: ekran okuyucudan gizli.
*/
export function EndMark() {
  return (
    <div className={styles.mark} aria-hidden="true">
      <Image
        src="/brand/markadenetim-monogram-kucuk-acik-zemin.svg"
        alt=""
        width={35}
        height={28}
        className={styles.img}
      />
    </div>
  );
}
