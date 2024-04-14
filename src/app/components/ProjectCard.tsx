import styles from "./components.module.css";
import Markdown from 'react-markdown';
import Link from 'next/link';

export default function ProjectCard(props: Readonly<{ 
  path: string, 
  imageFilename: string, 
  imageWidth: number,
  imageHeight: number,
  markdownBody: string }>) {
  return (
    <Link href={props.path} className={styles.projectCardRow}>
      <div className={styles.projectCardRowImageWrapper}>
        <img src={props.imageFilename} alt='thumbnail' height={props.imageHeight} width={props.imageWidth} className={styles.projectCardRowImage} />
      </div>
      <div className={styles.projectCardRowContent}>
        <Markdown className={styles.projectCardRowMarkdown}>
          {props.markdownBody}
        </Markdown>
      </div>
    </Link>
  );
}
