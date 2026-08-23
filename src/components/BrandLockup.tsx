import Link from "next/link";
import Image from "next/image";
import styles from "./BrandLockup.module.css";

export default function BrandLockup({ variant = "nav" }: { variant?: "nav" | "footer" }) {
  return (
    <Link href="/" className={`${styles.lockup} ${variant === "footer" ? styles.footer : styles.nav}`}>
      <span className={styles.mark}>
        <Image src="/ayan-ai-studio-logo.png" alt="" fill sizes="40px" style={{ objectFit: "cover" }} />
      </span>
      <span className={styles.name}>Ayan AI Studio</span>
    </Link>
  );
}
