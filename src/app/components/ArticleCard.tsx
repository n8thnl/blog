import styles from "./components.module.css";
import Link from "next/link";

export default function ArticleCard(props: Readonly<{ title: string, imageSrc?: string, linkPath?: string, comingSoon?: boolean }>) {
  if (props.comingSoon) {
    return (
      <div className={styles.articleCard}>
        <div className={styles.comingSoon}>
          Coming Soon
        </div>
        <div className={styles.articleCardTitle}>
          {props.title}
        </div>
      </div>
    )
  }
  
  return (
    <Link href={props.linkPath!} className={styles.articleCard}>
      <img
        src={props.imageSrc}
        alt="Article placeholder"
        className={styles.articleCardImage}
      />
      <div className={styles.articleCardTitle}>
        {props.title}
      </div>
    </Link>
  );
}