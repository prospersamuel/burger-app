import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import IngredientStack from "@/components/IngredientStack";

export default function IngredientsPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />
      <PageHero
        eyebrow="What's inside"
        title="Every layer, accounted for."
        subtitle="Hover or tap a layer to see what it brings to the build, from the brioche crown down to the base."
      />
      <IngredientStack />
      <Footer />
    </main>
  );
}
