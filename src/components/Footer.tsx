"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLockup from "@/components/BrandLockup";
import SectionEyebrow from "@/components/SectionEyebrow";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  // Pages ending with their own closing form / action section
  const hasOwnClosingCTA = pathname === "/" || pathname === "/start" || pathname === "/methodologies" || pathname === "/lab" || pathname === "/transformations";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {!hasOwnClosingCTA && (
          <div className={styles.top}>
            <SectionEyebrow label="Work With Us" variant="teal" />
            <h2 className={styles.heading}>
              Building the operating systems of <br />
              <span className={styles.headingHighlight}>future businesses.</span>
            </h2>
            <Link href="/start" className="btn-growrev-primary" style={{ marginTop: "1rem" }}>
              Start a Business Conversation →
            </Link>
          </div>
        )}

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <BrandLockup variant="footer" />
            <p className={styles.brandDescription}>
              Business First. Technology Second. We design premium websites, intelligent automation, and custom software that connect into one coherent business system.
            </p>
          </div>

          <div className={styles.col}>
            <h3>Ecosystem</h3>
            <Link href="/perspective">How We Think</Link>
            <Link href="/principles">Operating Principles</Link>
            <Link href="/methodologies">How We Work</Link>
            <Link href="/solutions">Services &amp; Architecture</Link>
            <Link href="/transformations">Case Studies &amp; Transformations</Link>
          </div>

          <div className={styles.col}>
            <h3>Knowledge &amp; Lab</h3>
            <Link href="/insights">Insights &amp; Research</Link>
            <Link href="/resources">Resources &amp; Toolkits</Link>
            <Link href="/lab">Innovation Lab</Link>
            <Link href="/start">Diagnostic Inquiry</Link>
          </div>

          <div className={styles.col}>
            <h3>Connect</h3>
            <a href="https://www.linkedin.com/in/ayan-das-39773734b/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://x.com/ayanaistudio" target="_blank" rel="noopener noreferrer">X (Twitter) ↗</a>
            <a href="https://www.instagram.com/ayanaistudio/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
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
