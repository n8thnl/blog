import styles from './components.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          src="/general/n8thnl-logo.svg"
          alt="n8thnl logo"
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
        <a
          target='_blank'
          href='https://github.com/n8thnl'
          className={`${styles.navLink}`}
        >
          <Image src="/general/github-mark.svg" alt="GitHub logo" width={32} height={32} />
        </a>
      </div>
    </nav>
  );
}