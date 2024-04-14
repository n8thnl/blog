import Article from '../components/Article'
import { promises as fs } from 'fs';

export default async function Contact() {
  const md = await fs.readFile(process.cwd() + '/src/app/markdown/contact-info.md', 'utf-8');

  return (
    <Article
      markdownBody={md}
      images={[]}
    />
  );
}
