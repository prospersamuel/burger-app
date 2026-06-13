"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-bg-secondary transition-transform duration-200 hover:-translate-y-1">
      <div
        className="h-40 w-full"
        style={{ background: product.color }}
        aria-hidden="true"
      />
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-2 text-[11px] font-semibold tracking-[0.15em] text-gold uppercase">
          {product.tag}
        </span>
        <h3 className="font-display mb-2 text-lg font-bold tracking-tight text-text-primary">
          {product.name}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-text-primary">
            ₦{product.price.toFixed(2)}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline cursor-pointer focus-visible:outline-text-primary ${
              added
                ? "bg-gold text-bg-primary"
                : "bg-white/10 text-text-primary hover:bg-text-primary hover:text-bg-primary"
            }`}
          >
            {added ? "Added ✓" : "Add to cart"}
          </button>
        </div>
      </div>
    </article>
  );
}
