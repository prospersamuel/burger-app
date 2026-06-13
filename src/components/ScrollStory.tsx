"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Each section is a full-viewport sticky panel inside its own scroll-height container.
// The burger canvas (fixed, z=-1) listens to window.scrollY independently so it stays in sync.

function StorySection({
  children,
  isFirst = false,
}: {
  children: React.ReactNode;
  isFirst?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Fade in from slightly below, hold, then fade out upward
const opacity = useTransform(
  scrollYProgress,
  [0, 0.28, 0.8, 1],
  isFirst ? [1, 1, 1, 0] : [0, 1, 1, 0]
);

const y = useTransform(
  scrollYProgress,
  [0, 0.08, 0.8, 1],
  isFirst ? [0, 0, 0, -36] : [36, 0, 0, -36]
);

  return (
    // Each container is 200vh: first 100vh the panel is sticky & visible, next 100vh it scrolls away
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen">
        <motion.div
          className="flex h-full w-full items-center"
          style={{ opacity, y }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

// Final CTA section — stays static (no fade-out), just fades in
function FinalSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start center"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <div ref={ref} className="relative h-screen">
      <div className="sticky top-0 h-screen">
        <motion.div
          className="flex h-full w-full items-center justify-center"
          style={{ opacity, y }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

const textShadowStrong = "0 2px 28px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)";
const textShadowSub = "0 1px 12px rgba(0,0,0,0.7)";

export default function ScrollStory() {
  return (
    // z-10 keeps text above the fixed canvas (z=-1), but below nav (z-100)
    <div className="relative z-10">

      {/* Section 1 — Hero intro */}
      <StorySection isFirst>
        <div className="absolute left-[7%] max-w-[460px]">
          <p
            className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-gold uppercase"
            style={{ textShadow: textShadowSub }}
          >
            G Burger
          </p>
          <h1
            className="font-display mb-5 text-[56px] font-bold leading-[1.06] tracking-tight text-text-primary max-[768px]:text-[38px]"
            style={{ textShadow: textShadowStrong }}
          >
            The Signature<br />Burger.
          </h1>
          <h2
            className="mb-4 text-2xl font-medium text-gold"
            style={{ textShadow: textShadowSub }}
          >
            Crafted layer by layer.
          </h2>
          <p
            className="text-[17px] leading-relaxed text-text-secondary"
            style={{ textShadow: textShadowSub }}
          >
            A premium burger experience built on precision, balance, and ingredients that earn their place.
          </p>
        </div>
      </StorySection>

      {/* Section 2 — Ingredients */}
      <StorySection>
        <div className="absolute left-[7%] max-w-[440px]">
          <p
            className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-gold uppercase"
            style={{ textShadow: textShadowSub }}
          >
            The ingredients
          </p>
          <h1
            className="font-display mb-6 text-[52px] font-bold leading-[1.08] tracking-tight text-text-primary max-[768px]:text-[36px]"
            style={{ textShadow: textShadowStrong }}
          >
            Every ingredient has a purpose.
          </h1>
          <div className="flex flex-col gap-2">
            {["100% grass-fed beef, smashed & seared.", "12-month cave-aged cheddar.", "Toasted brioche, glazed with butter.", "House-brined pickles. House-made aioli."].map((line) => (
              <p key={line} className="flex items-center gap-3 text-[17px] text-text-secondary" style={{ textShadow: textShadowSub }}>
                <span className="h-px w-5 shrink-0 bg-gold opacity-60" />
                {line}
              </p>
            ))}
          </div>
        </div>
      </StorySection>

      {/* Section 3 — Precision */}
      <StorySection>
        <div className="absolute left-[7%] max-w-[440px]">
          <p
            className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-gold uppercase"
            style={{ textShadow: textShadowSub }}
          >
            The process
          </p>
          <h1
            className="font-display mb-6 text-[52px] font-bold leading-[1.08] tracking-tight text-text-primary max-[768px]:text-[36px]"
            style={{ textShadow: textShadowStrong }}
          >
            Built with precision.
          </h1>
          <div className="flex flex-col gap-2">
            {["Hand-trimmed to an 80/20 ratio.", "Seared at 450°F for a deep, lacy crust.", "Assembled hot-to-cold, in exact order.", "Checked against a 12-point standard."].map((line) => (
              <p key={line} className="flex items-center gap-3 text-[17px] text-text-secondary" style={{ textShadow: textShadowSub }}>
                <span className="h-px w-5 shrink-0 bg-gold opacity-60" />
                {line}
              </p>
            ))}
          </div>
        </div>
      </StorySection>

      {/* Section 4 — Flavor */}
      <StorySection>
        <div className="absolute left-[7%] max-w-[460px]">
          <p
            className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-gold uppercase"
            style={{ textShadow: textShadowSub }}
          >
            The result
          </p>
          <h1
            className="font-display mb-6 text-[52px] font-bold leading-[1.08] tracking-tight text-text-primary max-[768px]:text-[36px]"
            style={{ textShadow: textShadowStrong }}
          >
            Flavor engineered to perfection.
          </h1>
          <p
            className="mb-4 text-[17px] leading-relaxed text-text-secondary"
            style={{ textShadow: textShadowSub }}
          >
            Every element is tuned for how it interacts with the layer above and below it. The result isn't just a burger — it's a calibrated sequence of textures and flavors.
          </p>
          <p
            className="text-[17px] leading-relaxed text-text-secondary"
            style={{ textShadow: textShadowSub }}
          >
            Rich. Juicy. Sharp. Sweet. Every bite hits the same way.
          </p>
        </div>
      </StorySection>

      {/* Section 5 — CTA */}
      <FinalSection>
        <div className="absolute left-[7%] max-w-[460px]">
          <p
            className="mb-3 text-[13px] font-semibold tracking-[0.15em] text-gold uppercase"
            style={{ textShadow: textShadowSub }}
          >
            Ready?
          </p>
          <h1
            className="font-display mb-4 text-[52px] font-bold leading-[1.08] tracking-tight text-text-primary max-[768px]:text-[36px]"
            style={{ textShadow: textShadowStrong }}
          >
            More than a burger.
          </h1>
          <h2
            className="mb-3 text-2xl font-medium text-gold"
            style={{ textShadow: textShadowSub }}
          >
            A masterpiece of flavor.
          </h2>
          <p
            className="mb-10 text-[17px] leading-relaxed text-text-secondary"
            style={{ textShadow: textShadowSub }}
          >
            Order now and experience every layer.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/order"
              className="rounded-full bg-gold px-8 py-4 text-base font-semibold text-bg-primary transition-all duration-200 hover:scale-105 hover:opacity-90"
            >
              Order Now
            </Link>
            <Link
              href="/ingredients"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-text-primary backdrop-blur-md transition-colors duration-200 hover:bg-white/20"
            >
              View Ingredients
            </Link>
          </div>
        </div>
      </FinalSection>

    </div>
  );
}