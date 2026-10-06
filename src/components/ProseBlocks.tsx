import type { ArticleBlock } from '@/content/insights';

/* Yazı, rehber, sirküler ve kalite sayfalarının ortak blok çizicisi. Stil, çağıran sayfanın
   okuma kolonundan (.prose) gelir; burada yalnızca semantik HTML üretilir. */
export function ProseBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={i} id={block.id}>
                {block.text}
              </h2>
            );
          case 'list':
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case 'quote':
            return (
              <blockquote key={i}>
                <p>{block.text}</p>
              </blockquote>
            );
          default:
            return <p key={i}>{block.text}</p>;
        }
      })}
    </>
  );
}
