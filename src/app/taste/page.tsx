import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function TastePage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />
      <PageHero
        eyebrow="How it's made"
        title="Six steps to a perfect bite."
        subtitle="From the farm to the final check, every burger follows the same disciplined process."
      />
      <ProcessTimeline />
      <Footer />
    </main>
  );
}
