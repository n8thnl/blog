"use client";
import { useState } from "react";
import styles from "./components.module.css";
import Markdown from 'react-markdown';

export default function MultiArticle(props: Readonly<{ markdownBody: string }>) {

  const [articleIsCollapsed, setArticleIsCollapsed] = useState(true);
  const [articleClassName, setArticleClassName] = useState(`${styles.acContentCollapsed} ${styles.acContent}`);

  const [itemClassName, setItemClassName] = useState(`${styles.acItem} ${styles.acItemCollapsed}`);
  const [verticalLineClassName, setVerticalLineClassName] = useState(`${styles.acItemVerticalLine} ${styles.acItemVerticalLineCollapsed}`);

  const onArticleClick = () => {
    if (articleIsCollapsed) {
      setArticleIsCollapsed(false);
      setArticleClassName(`${styles.acContent} ${styles.acContentExpanded}`);
      setItemClassName(`${styles.acItem} ${styles.acItemExpanded}`);
      setVerticalLineClassName(`${styles.acItemVerticalLine} ${styles.acItemVerticalLineExpanded}`);
    } else {
      setArticleIsCollapsed(true);
      setArticleClassName(`${styles.acContentCollapsed} ${styles.acContent}`);
      setItemClassName(`${styles.acItem} ${styles.acItemCollapsed}`);
      setVerticalLineClassName(`${styles.acItemVerticalLine} ${styles.acItemVerticalLineCollapsed}`);
    }
  };

  return (
    <div className={itemClassName}>
      <div onClick={onArticleClick} className={verticalLineClassName}></div>
      <div className={articleClassName} onClick={() => {}}>
        <Markdown className={styles.articleMarkdown}>
          {props.markdownBody}
        </Markdown>
      </div>
    </div>
  );
}