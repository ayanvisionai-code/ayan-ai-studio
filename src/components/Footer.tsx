import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.heading}>Building the operating systems<br/>of future businesses.</h2>
          <Link href="/start" className="btn-primary" style={{ padding: "1.25rem 2.5rem", fontSize: "1.1rem" }}>
            Start an Engagement
          </Link>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.col}>
            <h3>Ecosystem</h3>
            <Link href="/perspective">Perspective</Link>
            <Link href="/principles">Principles</Link>
            <Link href="/methodologies">Methodologies</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/transformations">Transformations</Link>
          </div>
          <div className={styles.col}>
            <h3>Knowledge</h3>
            <Link href="/insights">Insights</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/lab">Innovation Lab</Link>
          </div>
          <div className={styles.col}>
            <h3>Connect</h3>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Ayan AI Studio. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
