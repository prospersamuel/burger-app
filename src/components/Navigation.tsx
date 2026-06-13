"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const links = [
  { href: "/", label: "Overview" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/taste", label: "Taste" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact us" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          G BURGER
        </Link>
      </div>
      <div className={styles.center}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? styles.active : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className={styles.right}>
        <Link href="/order" className={styles.cta}>
          Order Now
        </Link>
      </div>
    </nav>
  );
}