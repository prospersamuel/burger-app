"use client";

import React from "react";
import Link from "next/link";
import { useCart, getProductById } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem, subtotal, itemCount } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-200 bg-black/60 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-201 flex h-full w-full max-w-md flex-col border-l border-white/5 bg-bg-secondary transition-transform duration-300 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isCartOpen}
      >
        <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
          <h2 className="font-display text-lg font-semibold text-text-primary">
            Your cart {itemCount > 0 && `(${itemCount})`}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-full p-2 text-text-secondary transition-colors hover:bg-white/10 hover:text-text-primary focus-visible:outline focus-visible:outline-text-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-base text-text-primary">Your cart is empty.</p>
              <p className="mt-2 max-w-xs text-sm text-text-secondary">
                Add something from the menu to get started.
              </p>
              <Link
                href="/order"
                onClick={closeCart}
                className="mt-6 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-bg-primary transition-transform duration-200 hover:scale-105"
              >
                Browse the menu
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => {
                const product = getProductById(item.productId);
                if (!product) return null;
                return (
                  <li
                    key={item.productId}
                    className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <div
                      className="h-16 w-16 shrink-0 rounded-xl"
                      style={{ background: product.color }}
                      aria-hidden="true"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-text-primary">
                          {product.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId)}
                          aria-label={`Remove ${product.name} from cart`}
                          className="text-text-secondary transition-colors hover:text-text-primary focus-visible:outline focus-visible:outline-text-primary"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M18 6 6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-gold">
                        ₦{product.price.toFixed(2)}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex items-center rounded-full border border-white/10">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            aria-label="Decrease quantity"
                            className="px-3 py-1 text-text-primary transition-colors hover:text-gold focus-visible:outline focus-visible:outline-text-primary"
                          >
                            −
                          </button>
                          <span className="min-w-[2ch] text-center text-sm text-text-primary">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            aria-label="Increase quantity"
                            className="px-3 py-1 text-text-primary transition-colors hover:text-gold focus-visible:outline focus-visible:outline-text-primary"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm text-text-secondary">
                          ₦{(product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-white/5 px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-text-secondary">Subtotal</span>
              <span className="text-lg font-semibold text-text-primary">
                ₦{subtotal.toFixed(2)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full rounded-full bg-gold py-3.5 text-center text-sm font-semibold text-bg-primary transition-transform duration-200 hover:scale-[1.02]"
            >
              Proceed to checkout
            </Link>
            <Link
              href="/order"
              onClick={closeCart}
              className="mt-3 block w-full rounded-full border border-white/10 bg-white/5 py-3.5 text-center text-sm font-semibold text-text-primary transition-colors duration-200 hover:bg-white/10"
            >
              Continue shopping
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
