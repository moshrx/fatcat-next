import { MenuItem } from "@/types/menu";
import ScrollReveal from "@/components/ScrollReveal";

export default function MenuCard({ item, index = 0 }: { item: MenuItem; index?: number }) {
  return (
    <ScrollReveal delay={index * 80}>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold leading-snug text-brown-700 transition-colors duration-300 group-hover:text-accent">
              {item.name}
            </h3>
            <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
              ${item.price.toFixed(2)}
            </span>
          </div>
          <p className="mb-3 flex-1 text-sm leading-relaxed text-brown-400">
            {item.description}
          </p>
          <span className="text-xs font-medium uppercase tracking-wider text-warm-400">
            {item.category}
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}
