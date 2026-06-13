"use client";

import React, { useState } from "react";
import styles from "./IngredientStack.module.css";

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
    <section className={styles.stackSection}>
      <div className={styles.stack}>
        {layers.map((layer, i) => (
          <button
            key={layer.name}
            type="button"
            className={`${styles.layer} ${active === i ? styles.layerActive : ""}`}
            style={{ background: layer.color }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span className={styles.layerName}>{layer.name}</span>
          </button>
        ))}
      </div>
      <div className={styles.detail}>
        <span className={styles.detailTag}>{current.tag}</span>
        <h2 className={styles.detailTitle}>{current.name}</h2>
        <p className={styles.detailCopy}>{current.description}</p>
        <div className={styles.detailIndex}>
          {String(active + 1).padStart(2, "0")} / {String(layers.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}