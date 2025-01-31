import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Shop } from "@/components/Shop";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-[48px]">
      <Header />
      <Hero />
      <Gallery />
      <Shop />
      <Footer />
    </main>
  );
}
