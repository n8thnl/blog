"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./components.module.css";
import '../themes/prism.css';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import parse from 'html-react-parser';

export default function MultiArticle(props: Readonly<{ markdownBody?: string, htmlBody?: string }>) {

  const [articleIsCollapsed, setArticleIsCollapsed] = useState(true);
  const [articleClassName, setArticleClassName] = useState(`${styles.acContentCollapsed} ${styles.acContent}`);

  const [itemClassName, setItemClassName] = useState(`${styles.acItem} ${styles.acItemCollapsed}`);
  const [verticalLineClassName, setVerticalLineClassName] = useState(`${styles.acItemVerticalLine} ${styles.acItemVerticalLineCollapsed}`);

  const onArticleSidebarClick = () => {
    if (!articleIsCollapsed) {
      setArticleIsCollapsed(true);
      setArticleClassName(`${styles.acContentCollapsed} ${styles.acContent}`);
      setItemClassName(`${styles.acItem} ${styles.acItemCollapsed}`);
      setVerticalLineClassName(`${styles.acItemVerticalLine} ${styles.acItemVerticalLineCollapsed}`);
    }
  };

  const onArticleContentClick = () => {
    if (articleIsCollapsed) {
      setArticleIsCollapsed(false);
      setArticleClassName(`${styles.acContent} ${styles.acContentExpanded}`);
      setItemClassName(`${styles.acItem} ${styles.acItemExpanded}`);
      setVerticalLineClassName(`${styles.acItemVerticalLine} ${styles.acItemVerticalLineExpanded}`);
    }
  }

  useEffect(() => {
    const script = document.createElement('script');

    script.src = '/static/prism.js';
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className={itemClassName}>
      <div onClick={onArticleSidebarClick} className={verticalLineClassName}></div>
      <div className={articleClassName} onClick={onArticleContentClick}>
        {props.markdownBody ?
        <Markdown className={styles.articleMarkdown} rehypePlugins={[rehypeRaw]}>
          {props.markdownBody}
        </Markdown>
        :
        <div className={styles.articleMarkdown}>
        { parse(props.htmlBody!) }
        </div> }
      </div>
    </div>
  );
}