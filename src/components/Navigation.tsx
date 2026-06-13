"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Menu } from "lucide-react";

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
  const { itemCount, openCart } = useCart();
  const [isMobileNavlinkVisible, setIsMobileNavlinkVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-100 flex h-[60px] w-full items-center justify-between px-5 lg:px-10 transition-colors duration-400 ease-out sm:px-5 ${
        scrolled
          ? "border-b border-white/5 bg-black/70 backdrop-blur-md"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="flex flex-1">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-wide text-text-primary no-underline"
        >
          Burger Kingdom
        </Link>
      </div>

      <div className="hidden flex-[2] items-center justify-center gap-8 sm:flex">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 text-[13px] font-medium no-underline transition-colors duration-200 ${
                isActive
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
              )}
            </Link>
          );
        })}
      </div>

      <div className="flex flex-1 items-center justify-end gap-3">
        <button
          type="button"
          onClick={openCart}
          aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
          className="relative inline-flex items-center justify-center rounded-full bg-white/10 p-2.5 text-text-primary cursor-pointer transition-colors duration-200 hover:bg-text-primary hover:text-bg-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-bg-primary">
              {itemCount}
            </span>
          )}
        </button>

        <Link
          href="/order"
          className="lg:inline-block hidden rounded-full bg-white/10 px-4 py-2 text-[13px] font-medium text-text-primary no-underline truncate transition-colors duration-200 hover:bg-text-primary cursor-pointer hover:text-bg-primary"
        >
          Order Now
        </Link>

<div
onClick={() => {
  setIsMobileNavlinkVisible(!isMobileNavlinkVisible)
}}
 className="rounded-full lg:hidden block hover:bg-text-primary cursor-pointer hover:text-bg-primary bg-white/10 p-2.5">
  {isMobileNavlinkVisible ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) :  <Menu className="w-[18px] h-[18px]"/>}
    
</div>
      </div>


      {isMobileNavlinkVisible && (
  <div className="fixed top-[60px] left-0 z-[99] w-full border-b border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
    <div className="flex flex-col p-6">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileNavlinkVisible(false)}
            className={`border-b border-white/5 py-4 text-base no-underline transition-colors ${
              isActive
                ? "text-gold"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {link.label}
          </Link>
        );
      })}

      <Link
        href="/order"
        onClick={() => setIsMobileNavlinkVisible(false)}
        className="mt-6 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-bg-primary no-underline"
      >
        Order Now
      </Link>
    </div>
  </div>
)}
    </nav>
  );
}
