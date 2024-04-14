import styles from "./components.module.css";
import NavBar from "./NavBar";
import PageContent from "./PageContent";

export default function PageWithNavBar({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className={styles.main}>
      <div className={styles.pageWithNavBar}>
        <NavBar />
        <PageContent>
          {children}
        </PageContent>
      </div>
    </main>
  );
}