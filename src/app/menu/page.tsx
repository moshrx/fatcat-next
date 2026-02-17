import { Metadata } from "next";
import { getMenuByCategory } from "@/lib/menu-data";
import MenuSection from "@/components/menu/MenuSection";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Menu | Fatcat Bakery",
  description:
    "Browse our full menu of cakes, cupcakes, cookies, squares, breads, and more.",
};

export const dynamic = "force-dynamic";

export default async function MenuPage() {
  const categories = await getMenuByCategory();

  return (
    <div>
      {/* Hero banner with image */}
      <section className="relative flex h-64 items-center justify-center overflow-hidden md:h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-brown-900/70" />
        <div className="relative z-10 text-center">
          <h1 className="mb-3 text-4xl font-bold text-cream-50 md:text-5xl">
            Our Menu
          </h1>
          <p className="mx-auto max-w-lg text-cream-200/80">
            Everything is baked from scratch in small batches
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16">
        <ScrollReveal>
          <p className="mb-10 text-center text-brown-400">
            Prices may vary for custom orders — give us a call at{" "}
            <span className="font-medium text-brown-600">(902) 367-1321</span>
          </p>
        </ScrollReveal>

        {categories.map((category) => (
          <MenuSection key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}
