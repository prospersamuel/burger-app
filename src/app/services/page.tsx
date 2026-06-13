import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const services = [
  {
    icon: "🛵",
    title: "Delivery",
    tag: "30–45 min",
    description:
      "Order online and we'll bring it straight to your door. Every burger is wrapped to hold heat and assembled so it arrives exactly as it left the kitchen — nothing soggy, nothing cold.",
    details: ["Available 11am – 10pm daily", "Flat ₦1,500 delivery fee", "Real-time order tracking", "Minimum order ₦3,000"],
    cta: "Start a delivery order",
    href: "/order",
  },
  {
    icon: "🏪",
    title: "Pickup",
    tag: "Ready in 15 min",
    description:
      "Order ahead, skip the queue. We'll have your order bagged and waiting at the counter the moment you arrive. No waiting, no compromises on freshness.",
    details: ["Open 7 days a week", "Curbside available on request", "Order up to 2 hours ahead", "No minimum order"],
    cta: "Order for pickup",
    href: "/order",
  },
  {
    icon: "🎉",
    title: "Catering",
    tag: "Groups of 10+",
    description:
      "Feeding a team, an event, or a celebration? We build custom platters sized for your group, delivered on time and ready to serve. Every item made fresh on the day.",
    details: ["Custom menu packages", "Minimum 24h notice", "Setup & serving available", "Corporate billing accepted"],
    cta: "Request a catering quote",
    href: "/contact",
  },
];

const faqs = [
  {
    q: "How far do you deliver?",
    a: "We currently deliver within a 10km radius of our kitchen. Enter your address at checkout to confirm coverage.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Orders can be modified or cancelled within 5 minutes of placing them. After that, the kitchen has already started preparing your food.",
  },
  {
    q: "Do you accommodate dietary needs?",
    a: "Yes. We can adapt most items for gluten-free, dairy-free, or vegetarian diets. Note any requirements in your order or contact us directly for catering.",
  },
  {
    q: "How does catering pricing work?",
    a: "Catering is priced per head based on your selected package. Get in touch with your guest count and event date and we'll send a tailored quote within 24 hours.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />

      <PageHero
        eyebrow="Services"
        title="However you'd like it."
        subtitle="Delivery, pickup, or catering for any size gathering. Every option held to the same standard as what you'd get sitting at our counter."
      />

      {/* Service cards */}
      <section className="px-[8%] pb-20 sm:px-[6%]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-white/5 bg-bg-secondary p-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold uppercase">
                  {service.tag}
                </span>
              </div>
              <h3 className="font-display mb-3 text-2xl font-bold tracking-tight text-text-primary">
                {service.title}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <ul className="mb-8 flex flex-col gap-2">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="h-px w-4 shrink-0 bg-gold opacity-50" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  href={service.href}
                  className="block rounded-full bg-white/10 px-5 py-3 text-center text-sm font-semibold text-text-primary no-underline transition-colors duration-200 hover:bg-text-primary hover:text-bg-primary"
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promise strip */}
      <section className="mx-[8%] mb-20 rounded-2xl border border-white/5 bg-bg-secondary px-10 py-12 sm:mx-[6%]">
        <p className="mb-2 text-[13px] font-semibold tracking-[0.15em] text-gold uppercase">Our promise</p>
        <h2 className="font-display mb-8 max-w-2xl text-3xl font-bold tracking-tight text-text-primary sm:text-2xl">
          Same kitchen. Same standard. Every time.
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { label: "Fresh to order", copy: "Nothing is pre-made or held. Every patty is seared, every bun toasted when your order comes in." },
            { label: "Packed with intention", copy: "Our delivery packaging is engineered to keep heat in and prevent anything from shifting in transit." },
            { label: "On time or we fix it", copy: "If your order arrives late or not as expected, reach out and we'll make it right — no friction." },
          ].map((item) => (
            <div key={item.label}>
              <h3 className="mb-2 text-base font-semibold text-text-primary">{item.label}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-[8%] pb-28 sm:px-[6%]">
        <p className="mb-2 text-[13px] font-semibold tracking-[0.15em] text-gold uppercase">FAQ</p>
        <h2 className="font-display mb-10 text-3xl font-bold tracking-tight text-text-primary sm:text-2xl">
          Common questions.
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-white/5 bg-bg-secondary p-6">
              <h4 className="mb-3 text-base font-semibold text-text-primary">{faq.q}</h4>
              <p className="text-sm leading-relaxed text-text-secondary">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}