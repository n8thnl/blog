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
        <ArticleCard title="Wifi Thermometer" imageSrc="/wifi-thermometer/circuit-fritzing.png" linkPath="/articles/wifi-thermometer" />
        <ArticleCard title="Smart Knob" imageSrc="/smart-knob/knob_5.jpg" linkPath="/articles/smart-knob" />
      </div>
    </PageWithNavBar>
  );
}
