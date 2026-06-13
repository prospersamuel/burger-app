import React from "react";
import styles from "./ProcessTimeline.module.css";

const steps = [
  {
    number: "01",
    title: "Source",
    description:
      "We work with a short list of family farms for beef, dairy, and produce, chosen for consistency over scale.",
  },
  {
    number: "02",
    title: "Hand-trim",
    description:
      "Each cut is trimmed by hand to a consistent 80/20 ratio before it ever reaches the grinder.",
  },
  {
    number: "03",
    title: "Grind & season",
    description:
      "Coarse-ground in small batches and seasoned with nothing more than salt, so the beef does the talking.",
  },
  {
    number: "04",
    title: "Sear",
    description:
      "Smashed onto a 450°F flat-top for a deep, lacy crust that locks in juice without drying the center.",
  },
  {
    number: "05",
    title: "Build",
    description:
      "Assembled hot to cold, in the exact order that keeps every layer at its best texture until it reaches you.",
  },
  {
    number: "06",
    title: "Final check",
    description:
      "Every order is checked against a 12-point standard for build, temperature, and presentation before it goes out.",
  },
];

export default function ProcessTimeline() {
  return (
    <ol className={styles.timeline}>
      {steps.map((step) => (
        <li key={step.number} className={styles.step}>
          <div className={styles.marker}>
            <span className={styles.number}>{step.number}</span>
          </div>
          <div className={styles.content}>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepCopy}>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}