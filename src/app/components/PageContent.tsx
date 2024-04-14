import styles from "./components.module.css";

export default function PageContent({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <div className={styles.pageContent}>
        {children}
      </div>
  );
}