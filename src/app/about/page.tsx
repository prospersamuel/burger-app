import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const values = [
  {
    title: "Small batches",
    description:
      "We cook in volumes that keep every patty seared to order, never held under a heat lamp.",
  },
  {
    title: "Sourced, not stocked",
    description:
      "Our ingredient list is short on purpose. Every item earns its place through flavor, not shelf life.",
  },
  {
    title: "Built by hand",
    description:
      "From the hand-trimmed beef to the quick-brined pickles, nothing here is mass-produced.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />
      <PageHero
        eyebrow="About us"
        title="A kitchen built around one burger."
        subtitle="We didn't set out to build a menu. We set out to get one burger exactly right, then built everything else around it."
      />
      <section className="grid grid-cols-1 gap-6 px-[8%] pb-24 sm:grid-cols-3 sm:px-[6%]">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-2xl border border-white/5 bg-bg-secondary p-8"
          >
            <h3 className="font-display mb-3 text-xl font-bold tracking-tight text-text-primary">
              {value.title}
            </h3>
            <p className="text-base leading-relaxed text-text-secondary">
              {value.description}
            </p>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
