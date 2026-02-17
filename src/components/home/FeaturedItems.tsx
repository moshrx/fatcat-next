import { getMenuByCategory } from "@/lib/menu-data";
import MenuCard from "@/components/menu/MenuCard";
import ScrollReveal from "@/components/ScrollReveal";

export default async function FeaturedItems() {
  const categories = await getMenuByCategory();
  const allItems = categories.flatMap((c) => c.items);

  // Pick one item from different categories for variety
  const featured: typeof allItems = [];
  const seen = new Set<string>();
  for (const item of allItems) {
    if (!seen.has(item.category) && featured.length < 3) {
      featured.push(item);
      seen.add(item.category);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <ScrollReveal>
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-warm-500">
          From Our Kitchen
        </p>
        <h2 className="mb-2 text-center text-3xl font-bold text-brown-800 md:text-4xl">
          Our Favorites
        </h2>
        <div className="divider mb-10" />
      </ScrollReveal>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((item, i) => (
          <MenuCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
