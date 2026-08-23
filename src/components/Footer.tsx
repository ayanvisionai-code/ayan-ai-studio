"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLockup from "@/components/BrandLockup";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  // These pages already end with their own closing CTA, so the global
  // engagement block immediately below it would just repeat the same message.
  const hasOwnClosingCTA = pathname === "/" || pathname === "/methodologies" || pathname === "/lab" || pathname === "/transformations";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {!hasOwnClosingCTA && (
          <div className={styles.top}>
            <h2 className={styles.heading}>Building the operating systems<br/>of future businesses.</h2>
            <Link href="/start" className="btn-primary" style={{ padding: "1.25rem 2.5rem", fontSize: "1.1rem" }}>
              Start a Conversation →
            </Link>
          </div>
        )}

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <BrandLockup variant="footer" />
          </div>
          <div className={styles.col}>
            <h3>Ecosystem</h3>
            <Link href="/perspective">How We Think</Link>
            <Link href="/principles">Principles</Link>
            <Link href="/methodologies">How We Work</Link>
            <Link href="/solutions">Services</Link>
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
            <a href="https://www.linkedin.com/in/ayan-das-39773734b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/ayanaistudio" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/ayanaistudio/" target="_blank" rel="noopener noreferrer">Instagram</a>
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
