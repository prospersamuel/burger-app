import React from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden px-[8%] pt-[180px] pb-[100px] sm:px-[6%] sm:pt-[140px] sm:pb-[60px]">
      <div
        className="pointer-events-none absolute -top-[220px] -right-[160px] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(230,184,0,0.16), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <p className="mb-4 text-[13px] font-semibold tracking-[0.15em] text-gold uppercase">
        {eyebrow}
      </p>
      <h1 className="font-display mb-5 max-w-3xl text-[50px] font-bold leading-[1.08] tracking-tight text-text-primary">
        {title}
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-text-secondary sm:text-base">
        {subtitle}
      </p>
    </header>
  );
}
