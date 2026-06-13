"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useCart, getProductById } from "@/context/CartContext";

const DELIVERY_FEE = 3.5;
const TAX_RATE = 0.08;

export default function CheckoutPage() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const tax = subtotal * TAX_RATE;
  const total = subtotal > 0 ? subtotal + DELIVERY_FEE + tax : 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const number = `GB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(number);
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-bg-primary">
        <Navigation />
        <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
          <span className="mb-4 text-[13px] font-semibold tracking-[0.15em] text-gold uppercase">
            Order placed
          </span>
          <h1 className="font-display mb-4 max-w-xl text-4xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Thanks. We&apos;re firing up the grill.
          </h1>
          <p className="mb-2 max-w-md text-base leading-relaxed text-text-secondary">
            Your order number is
          </p>
          <p className="mb-8 text-2xl font-semibold text-gold">{orderNumber}</p>
          <p className="mb-10 max-w-md text-base leading-relaxed text-text-secondary">
            We&apos;ll have it ready in 20&ndash;30 minutes. A confirmation has been sent to your
            email.
          </p>
          <Link
            href="/order"
            className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-bg-primary transition-transform duration-200 hover:scale-105"
          >
            Back to menu
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-bg-primary">
        <Navigation />
        <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
          <h1 className="font-display mb-4 text-3xl font-bold tracking-tight text-text-primary">
            Your cart is empty.
          </h1>
          <p className="mb-8 max-w-md text-base leading-relaxed text-text-secondary">
            Add something from the menu before checking out.
          </p>
          <Link
            href="/order"
            className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-bg-primary transition-transform duration-200 hover:scale-105"
          >
            Browse the menu
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />
      <PageHero
        eyebrow="Checkout"
        title="Almost there."
        subtitle="Confirm your order details and delivery information below."
      />

      <section className="grid grid-cols-1 gap-12 px-[8%] pb-24 lg:grid-cols-[1.2fr_1fr] sm:px-[6%]">
        {/* Order form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <fieldset className="flex flex-col gap-4">
            <legend className="font-display mb-2 text-xl font-bold tracking-tight text-text-primary">
              Contact details
            </legend>
            <label className="flex flex-col gap-2 text-sm text-text-secondary">
              Full name
              <input
                required
                type="text"
                name="name"
                placeholder="Jordan Smith"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-text-secondary">
              Email
              <input
                required
                type="email"
                name="email"
                placeholder="jordan@email.com"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-text-secondary">
              Phone number
              <input
                required
                type="tel"
                name="phone"
                placeholder="(555) 123-4567"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              />
            </label>
          </fieldset>

          <fieldset className="flex flex-col gap-4">
            <legend className="font-display mb-2 text-xl font-bold tracking-tight text-text-primary">
              Delivery address
            </legend>
            <label className="flex flex-col gap-2 text-sm text-text-secondary">
              Street address
              <input
                required
                type="text"
                name="address"
                placeholder="123 Main Street, Apt 4B"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col gap-2 text-sm text-text-secondary">
                City
                <input
                  required
                  type="text"
                  name="city"
                  placeholder="Abuja"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-text-secondary">
                Postal code
                <input
                  required
                  type="text"
                  name="postal"
                  placeholder="900001"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-text-secondary">
              Delivery notes (optional)
              <textarea
                name="notes"
                rows={3}
                placeholder="Gate code, building instructions, etc."
                className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              />
            </label>
          </fieldset>

          <fieldset className="flex flex-col gap-4">
            <legend className="font-display mb-2 text-xl font-bold tracking-tight text-text-primary">
              Payment
            </legend>
            <label className="flex flex-col gap-2 text-sm text-text-secondary">
              Card number
              <input
                required
                type="text"
                name="card"
                placeholder="1234 5678 9012 3456"
                inputMode="numeric"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col gap-2 text-sm text-text-secondary">
                Expiry
                <input
                  required
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-text-secondary">
                CVC
                <input
                  required
                  type="text"
                  name="cvc"
                  placeholder="123"
                  inputMode="numeric"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                />
              </label>
            </div>
          </fieldset>

          <button
            type="submit"
            className="rounded-full bg-gold py-4 text-base font-semibold text-bg-primary transition-transform duration-200 hover:scale-[1.02]"
          >
            Place order &mdash; ₦{total.toFixed(2)}
          </button>
        </form>

        {/* Order summary */}
        <aside className="h-fit rounded-2xl border border-white/5 bg-bg-secondary p-8">
          <h2 className="font-display mb-6 text-xl font-bold tracking-tight text-text-primary">
            Order summary
          </h2>
          <ul className="flex flex-col gap-4">
            {items.map((item) => {
              const product = getProductById(item.productId);
              if (!product) return null;
              return (
                <li key={item.productId} className="flex items-start justify-between gap-3">
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-semibold text-text-primary">
                      {product.name}
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="flex items-center rounded-full border border-white/10">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          aria-label={`Decrease ${product.name} quantity`}
                          className="px-2.5 py-0.5 text-text-primary transition-colors hover:text-gold focus-visible:outline focus-visible:outline-text-primary"
                        >
                          −
                        </button>
                        <span className="min-w-[2ch] text-center text-xs text-text-primary">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          aria-label={`Increase ${product.name} quantity`}
                          className="px-2.5 py-0.5 text-text-primary transition-colors hover:text-gold focus-visible:outline focus-visible:outline-text-primary"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                        className="text-xs text-text-secondary underline-offset-2 transition-colors hover:text-text-primary hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-text-primary">
                    ₦{(product.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-col gap-2 border-t border-white/5 pt-6 text-sm">
            <div className="flex justify-between text-text-secondary">
              <span>Subtotal</span>
              <span>₦{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>Delivery</span>
              <span>₦{DELIVERY_FEE.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>Tax (8%)</span>
              <span>₦{tax.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-white/5 pt-3 text-base font-semibold text-text-primary">
              <span>Total</span>
              <span>₦{total.toFixed(2)}</span>
            </div>
          </div>

          <Link
            href="/order"
            className="mt-6 block text-center text-sm text-text-secondary underline-offset-2 transition-colors hover:text-text-primary hover:underline"
          >
            Add more items
          </Link>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
