import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturedBooks } from "@/components/featured-books";
import { CategoriesSection } from "@/components/categories-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FeaturedBooks />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
}
