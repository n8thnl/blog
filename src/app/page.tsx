import styles from "./page.module.css";
import PageWithNavBar from "./components/PageWithNavBar";
import ArticleCard from "./components/ArticleCard";

export default function Home() {
  return (
    <PageWithNavBar>
      <div className={styles.greetingText}>
        Welcome, show yourself around.
      </div>
      <div className={styles.cardHolder}>
        <ArticleCard title="Introductions: Who Am I?" imageSrc="/introduction/whoami.gif" linkPath="/articles/introduction" />
        <ArticleCard title="To Rebase or to Merge: A Git Story" imageSrc="/git-merge-or-rebase/bad-merge-double-margin.gif" linkPath="/articles/git-merge-or-rebase" />
        <ArticleCard title="A FOSS AWS Console Macro Library" imageSrc="/aws-console-hotkeys/macropad-thumbnail-2.gif" linkPath="/articles/aws-console-hotkeys" />
      </div>
    </PageWithNavBar>
  );
}
