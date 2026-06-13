import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-[8%] py-16">
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-wide text-text-primary no-underline"
        >
          THE SIGNATURE BURGER
        </Link>
        <div className="grid grid-cols-2 lg:flex gap-6 text-sm text-text-secondary">
          <Link href="/ingredients" className="no-underline transition-colors hover:text-text-primary">
            Ingredients
          </Link>
          <Link href="/craftsmanship" className="no-underline transition-colors hover:text-text-primary">
            Craftsmanship
          </Link>
          <Link href="/taste" className="no-underline transition-colors hover:text-text-primary">
            Taste
          </Link>
          <Link href="/order" className="no-underline transition-colors hover:text-text-primary">
            Order
          </Link>
        </div>
      </div>
      <p className="mt-10 text-xs text-text-secondary">
        Crafted layer by layer. &copy; {new Date().getFullYear()} Burger Kingdom.
      </p>
    </footer>
  );
}
