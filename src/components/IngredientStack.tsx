"use client";

import React, { useState } from "react";

const layers = [
  {
    name: "Toasted Brioche Crown",
    tag: "Bakery",
    color: "linear-gradient(135deg, #F2C94C, #C99400)",
    description:
      "Butter-glazed and toasted to order, the crown bun adds a faint sweetness and a light crackle that gives way to a soft crumb underneath.",
  },
  {
    name: "Smoked Chili Aioli",
    tag: "Sauce",
    color: "linear-gradient(135deg, #FF8A00, #C2570A)",
    description:
      "House-made on roasted garlic and smoked chili oil, spread thin enough to season every bite without ever taking over.",
  },
  {
    name: "12-Month Aged Cheddar",
    tag: "Cheese",
    color: "linear-gradient(135deg, #F2D06B, #B8860B)",
    description:
      "Cave-aged for sharpness and melted directly onto the patty so it folds into every crevice of the seared crust.",
  },
  {
    name: "Smashed Beef Patty",
    tag: "Protein",
    color: "linear-gradient(135deg, #9A5A36, #5C2E18)",
    description:
      "100% grass-fed beef, smashed thin and seared at 450°F for a deep, lacy crust around a juicy, char-forward center.",
  },
  {
    name: "Heirloom Tomato & Crisp Lettuce",
    tag: "Produce",
    color: "linear-gradient(135deg, #8FBF5A, #4F7A2B)",
    description:
      "Sliced the morning of service. The tomato brings acidity, the lettuce brings the snap that holds the whole stack together.",
  },
  {
    name: "House Pickles",
    tag: "Brine",
    color: "linear-gradient(135deg, #B8D24A, #6B8E23)",
    description:
      "Quick-brined in-house for a sharp acidity that cuts through the richness of the cheese and the aioli.",
  },
  {
    name: "Soft Brioche Base",
    tag: "Bakery",
    color: "linear-gradient(135deg, #F2C94C, #C99400)",
    description:
      "Slightly sweet and dense enough to hold every layer above it without ever falling apart in hand.",
  },
];

export default function IngredientStack() {
  const [active, setActive] = useState(0);
  const current = layers[active];

  return (
    <section className="flex items-stretch gap-16 px-[8%] pb-[140px] max-[900px]:flex-col max-[900px]:gap-8">
      <div className="flex max-w-[460px] flex-1 flex-col gap-2.5 max-[900px]:max-w-none">
        {layers.map((layer, i) => (
          <button
            key={layer.name}
            type="button"
            className={`flex h-[58px] items-center rounded-xl px-6 text-left shadow-lg transition-all duration-250 ease-out focus-visible:outline focus-visible:outline-text-primary focus-visible:outline-offset-2 ${
              active === i
                ? "translate-x-7 opacity-100 shadow-[0_8px_28px_rgba(230,184,0,0.25)] max-[900px]:translate-x-3.5"
                : "translate-x-0 opacity-70"
            }`}
            style={{ background: layer.color }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span className="text-[15px] font-semibold tracking-tight text-bg-primary">
              {layer.name}
            </span>
          </button>
        ))}
      </div>
      <div className="relative flex min-h-[420px] flex-1 flex-col justify-center rounded-[20px] border border-white/5 bg-bg-secondary p-12">
        <span className="mb-4 text-xs font-semibold tracking-[0.15em] text-gold uppercase">
          {current.tag}
        </span>
        <h2 className="font-display mb-4 text-[32px] font-bold tracking-tight text-text-primary">
          {current.name}
        </h2>
        <p className="max-w-[440px] text-base leading-relaxed text-text-secondary">
          {current.description}
        </p>
        <div className="absolute bottom-8 right-10 text-[13px] tracking-[0.1em] text-text-secondary">
          {String(active + 1).padStart(2, "0")} / {String(layers.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}
