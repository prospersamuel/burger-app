import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Link href="/" className={styles.logo}>
          THE SIGNATURE BURGER
        </Link>
        <div className={styles.links}>
          <Link href="/ingredients">Ingredients</Link>
          <Link href="/craftsmanship">Craftsmanship</Link>
          <Link href="/taste">Taste</Link>
          <Link href="/order">Order</Link>
        </div>
      </div>
      <p className={styles.note}>
        Crafted layer by layer. &copy; {new Date().getFullYear()} The Signature Burger.
      </p>
    </footer>
  );
}