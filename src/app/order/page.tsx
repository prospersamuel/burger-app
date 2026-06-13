"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function OrderPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />
      <PageHero
        eyebrow="Order online"
        title="Build your order."
        subtitle="Every item is made fresh when you order it. Add what you like, then check out when you're ready."
      />

      <section className="px-[4%] lg:px-[8%] pb-20 sm:px-[6%]">
        <div className="mb-10 flex flex-whrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full cursor-pointer lg:px-5 lg:py-2.5 px-3 py-2 text-xs font-semibold transition-colors duration-200 focus-visible:outlinefocus-visible:outline-text-primary ${
                activeCategory === category
                  ? "bg-gold text-bg-primary"
                  : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
