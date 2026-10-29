"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLockup from "@/components/BrandLockup";
import styles from "./Navigation.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/perspective", label: "How We Think" },
  { href: "/methodologies", label: "How We Work" },
  { href: "/solutions", label: "Services" },
  { href: "/transformations", label: "Transformations" },
  { href: "/insights", label: "Insights" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomepage = pathname === "/";

  // Close the mobile menu whenever the route changes.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  // Track scroll position for transparent → solid nav transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open, and allow Escape to close it.
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Build nav class: transparent when at top of homepage, solid otherwise
  const navClassName = [
    styles.nav,
    isHomepage && !isScrolled ? styles.navTransparent : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={navClassName}>
      <div className={styles.navContainer}>
        <BrandLockup variant="nav" />
        <div className={styles.links}>
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? styles.active : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className={styles.cta}>
          <Link href="/start" className={styles.ctaButton}>
            Start a Conversation →
          </Link>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarTopOpen : ""}`} />
          <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarMiddleOpen : ""}`} />
          <span className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarBottomOpen : ""}`} />
        </button>
      </div>

      <div
        id="mobile-nav-menu"
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.mobileLinks}>
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? styles.mobileActive : undefined}
                aria-current={active ? "page" : undefined}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className={styles.mobileCta}>
          <Link
            href="/start"
            className={styles.ctaButton}
            style={{ width: "100%", justifyContent: "center", padding: "1rem 2rem", fontSize: "1rem" }}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Start a Conversation →
          </Link>
        </div>
      </div>
    </nav>
  );
}
