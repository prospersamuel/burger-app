import React from "react";

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
    <ol className="relative mx-auto max-w-3xl list-none px-[8%] pb-[140px] sm:px-[6%] sm:pb-[100px]">
      <div
        className="absolute top-7 bottom-7 left-[calc(8%+27px)] w-px bg-white/[0.08] sm:left-[27px]"
        aria-hidden="true"
      />
      {steps.map((step, i) => (
        <li
          key={step.number}
          className={`relative flex gap-8 sm:gap-5 ${
            i === steps.length - 1 ? "pb-0" : "pb-16"
          }`}
        >
          <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-bg-primary sm:h-11 sm:w-11">
            <span className="font-display text-base font-bold text-gold">
              {step.number}
            </span>
          </div>
          <div className="flex-1 pt-2">
            <h3 className="font-display mb-3 text-[26px] font-bold tracking-tight text-text-primary sm:text-[22px]">
              {step.title}
            </h3>
            <p className="max-w-[480px] text-base leading-relaxed text-text-secondary">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
