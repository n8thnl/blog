import styles from "./components.module.css";
import PageWithNavBar from "./PageWithNavBar";
import CollapsibleArticle from "./CollapsibleArticle";
import { promises as fs } from 'fs';
import Image from 'next/image';

export default async function MultiArticle(props: Readonly<{ folderPath: string, images: string[] }>) {

  const mdFilenames = [];
  const mdContent = [];

  const dir = await fs.opendir(props.folderPath);
  for await (const dirent of dir) {
    if (dirent.isFile() && dirent.name !== 'introduction.md') {
      mdFilenames.push(dirent.name);
    }
  }

  mdFilenames.sort().reverse();
  for (const filename of mdFilenames) {
    const md = await fs.readFile(`${props.folderPath}/${filename}`, 'utf-8');
    mdContent.push({
      filename,
      md
    });

  }

  return (
    <PageWithNavBar>
      { props.images.map(image => <Image src={`${image}`} alt="" key={image} width={0} height={0} hidden />) }
      <div className={styles.sideNavBar}>
        <ul>
          {mdContent.map(content => <li key={content.filename}><a href={`#${content.filename}`}>{content.filename}</a></li>)}
        </ul>
      </div>
      <div className={styles.accordionContainer} >
        { mdContent.map(content => <CollapsibleArticle markdownBody={content.md} key={content.filename} />)}
      </div>
    </PageWithNavBar>
  );
}