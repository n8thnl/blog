import styles from './components.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          src="/n8thnl-logo.svg"
          alt="Next.js Logo"
          width={200}
          height={100}
          className={styles.logo}
          priority
        />
      </Link>
      <div className={styles.navLinks}>
        <Link
          href="/projects"
          className={`${styles.navLink}`}
        >
          Projects
        </Link>
        <Link
          href=""
          className={`${styles.navLink} disabled`}
        >
          <s className={`${styles.strikeThrough}`}>Quick Tips</s>
        </Link>
        <Link
          href="/random"
          className={`${styles.navLink}`}
        >
          Random
        </Link>
        <Link
          href='/contact'
          className={`${styles.navLink}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}