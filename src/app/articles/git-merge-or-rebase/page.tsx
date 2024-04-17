import Article from '../../components/Article'
import { promises as fs } from 'fs';

export default async function GitMergeOrRebase() {
  const md = await fs.readFile(process.cwd() + '/src/app/markdown/git-merge-or-rebase.md', 'utf-8');

  return (
    <Article
      markdownBody={md}
      images={[
        '/git-merge-or-rebase/bad-merge-double-margin.gif'
      ]}
    />
  );
}
