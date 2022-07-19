import type { NextPage } from 'next';
import styles from "../../styles/Navigation.module.css";
import Link from 'next/link';

const Navigation: NextPage = () => {

  return (
    <div className={styles.navigation}>
      <Link href="/">
        <a>
          <div className={styles.item}>Home</div>
        </a>
      </Link>
      <Link href="/users">
        <a>
          <div className={styles.item}>Users</div>
        </a>
      </Link>
      <Link href="/about-us">
        <a>
          <div className={styles.item}>About</div>
        </a>
      </Link>
      <Link href="/contact-us">
        <a>
          <div className={styles.item}>Contact</div>
        </a>
      </Link>
    </div>
  );
}

export default Navigation;