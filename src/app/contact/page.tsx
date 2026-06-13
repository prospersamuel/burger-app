"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const topics = ["General enquiry", "Order issue", "Catering request", "Feedback", "Press & partnerships", "Other"];

const contactInfo = [
  {
    label: "Email",
    value: "hello@gburger.co",
    sub: "We reply within one business day.",
  },
  {
    label: "Phone",
    value: "+234 800 GBURGER",
    sub: "Mon – Sat, 10am – 8pm WAT.",
  },
  {
    label: "Address",
    value: "14 Aminu Kano Crescent, Wuse 2, Abuja",
    sub: "Kitchen open 11am – 10pm daily.",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState(topics[0]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />

      <PageHero
        eyebrow="Contact us"
        title="Let's talk."
        subtitle="Questions, catering enquiries, order issues, or just want to say something — we're here. Pick a topic below and we'll get back to the right person quickly."
      />

      <section className="grid grid-cols-1 gap-12 px-[8%] pb-28 lg:grid-cols-[1.4fr_1fr] sm:px-[6%]">

        {/* Form */}
        <div>
          {sent ? (
            <div className="rounded-2xl border border-white/5 bg-bg-secondary p-10">
              <span className="mb-4 block text-3xl" aria-hidden="true">✓</span>
              <h2 className="font-display mb-3 text-2xl font-bold tracking-tight text-text-primary">
                Message sent.
              </h2>
              <p className="mb-6 max-w-sm text-base leading-relaxed text-text-secondary">
                We've received your message and will reply to your email within one business day. For urgent order issues, call us directly.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-white/10"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Topic selector */}
              <div className="flex flex-col gap-2">
                <span className="text-sm text-text-secondary">What is this about?</span>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-gold ${
                        topic === t
                          ? "bg-gold text-bg-primary"
                          : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-text-secondary">
                  First name
                  <input
                    required
                    type="text"
                    name="firstName"
                    placeholder="Jordan"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-text-secondary">
                  Last name
                  <input
                    required
                    type="text"
                    name="lastName"
                    placeholder="Smith"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm text-text-secondary">
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="jordan@email.com"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-text-secondary">
                Phone number
                <input
                  type="tel"
                  name="phone"
                  placeholder="+234 800 000 0000 (optional)"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                />
              </label>

              {topic === "Catering request" && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-text-secondary">
                    Event date
                    <input
                      type="date"
                      name="eventDate"
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-text-secondary">
                    Guest count
                    <input
                      type="number"
                      name="guestCount"
                      min={10}
                      placeholder="e.g. 50"
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                    />
                  </label>
                </div>
              )}

              <label className="flex flex-col gap-2 text-sm text-text-secondary">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder={
                    topic === "Order issue"
                      ? "Include your order number and what went wrong."
                      : topic === "Catering request"
                      ? "Describe your event, preferred menu, and any dietary needs."
                      : "Tell us what's on your mind."
                  }
                  className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-primary placeholder:text-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                />
              </label>

              <input type="hidden" name="topic" value={topic} />

              <button
                type="submit"
                className="self-start rounded-full bg-gold px-8 py-4 text-sm font-semibold text-bg-primary transition-transform duration-200 hover:scale-105"
              >
                Send message
              </button>
            </form>
          )}
        </div>

        {/* Sidebar info */}
        <aside className="flex flex-col gap-6">
          {/* Contact details */}
          <div className="rounded-2xl border border-white/5 bg-bg-secondary p-7">
            <h3 className="font-display mb-5 text-lg font-bold tracking-tight text-text-primary">
              Get in touch directly
            </h3>
            <div className="flex flex-col gap-5">
              {contactInfo.map((info) => (
                <div key={info.label}>
                  <p className="mb-0.5 text-[11px] font-semibold tracking-[0.12em] text-gold uppercase">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium text-text-primary">{info.value}</p>
                  <p className="text-xs text-text-secondary">{info.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="rounded-2xl border border-white/5 bg-bg-secondary p-7">
            <h3 className="font-display mb-5 text-lg font-bold tracking-tight text-text-primary">
              Opening hours
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { day: "Monday – Friday", hours: "11:00am – 10:00pm" },
                { day: "Saturday", hours: "10:00am – 11:00pm" },
                { day: "Sunday", hours: "12:00pm – 9:00pm" },
                { day: "Public holidays", hours: "Hours may vary" },
              ].map((row) => (
                <div key={row.day} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-text-secondary">{row.day}</span>
                  <span className="text-sm font-medium text-text-primary">{row.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="rounded-2xl border border-white/5 bg-bg-secondary p-7">
            <h3 className="font-display mb-4 text-lg font-bold tracking-tight text-text-primary">
              Follow the kitchen
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary">
              Behind-the-scenes process, daily specials, and the occasional late-night burger post.
            </p>
            <div className="flex gap-3">
              {["Instagram", "TikTok", "X"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-text-secondary no-underline transition-colors hover:bg-white/10 hover:text-text-primary"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </aside>

      </section>

      <Footer />
    </main>
  );
}