import styles from "./components.module.css";
import PageWithNavBar from "./PageWithNavBar";
import Markdown from 'react-markdown';
import Image from 'next/image';

export default function Article(props: Readonly<{ markdownBody: string, images: string[] }>) {
  return (
    <PageWithNavBar>
      { props.images.map(image => <Image src={`${image}`} alt="" key={image} width={0} height={0} hidden />) }
      <div className={styles.articleWrapper}>
        <Markdown className={styles.articleMarkdown}>
          {props.markdownBody}
        </Markdown>
      </div>
    </PageWithNavBar>
  );
}