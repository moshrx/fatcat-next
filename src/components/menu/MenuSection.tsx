import { MenuCategory } from "@/types/menu";
import MenuCard from "./MenuCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section className="mb-16">
      <ScrollReveal>
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-bold text-brown-700 md:text-3xl">
            {category.name}
          </h2>
          <div className="divider ml-0!" />
        </div>
      </ScrollReveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item, i) => (
          <MenuCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
