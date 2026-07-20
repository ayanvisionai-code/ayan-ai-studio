import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Ayan AI Studio
        </Link>
        <div className={styles.links}>
          <Link href="/perspective">Perspective</Link>
          <Link href="/methodologies">Methodologies</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/transformations">Transformations</Link>
          <Link href="/insights">Insights</Link>
        </div>
        <div className={styles.cta}>
          <Link href="/start" className="btn-primary" style={{ padding: "0.5rem 1.5rem", fontSize: "0.95rem" }}>
            Begin Evolution
          </Link>
        </div>
      </div>
    </nav>
  );
}
