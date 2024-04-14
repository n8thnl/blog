import Article from '../../components/Article'
import { promises as fs } from 'fs';

export default async function Introduction() {
  const md = await fs.readFile(process.cwd() + '/src/app/markdown/introduction.md', 'utf-8');

  return (
    <Article
      markdownBody={md}
      images={[
        '/whoami.gif'
      ]}
    />
  );
}
