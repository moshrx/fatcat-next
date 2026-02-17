import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About | Fatcat Bakery",
  description:
    "Learn about Fatcat Bakery — PEI's local bakery specializing in good old fashioned baking.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero banner with image */}
      <section className="relative flex h-64 items-center justify-center overflow-hidden md:h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-brown-900/70" />
        <div className="relative z-10 text-center">
          <h1 className="mb-3 text-4xl font-bold text-cream-50 md:text-5xl">
            Our Story
          </h1>
          <p className="text-cream-200/80">
            Good old fashioned baking from the heart of Charlottetown
          </p>
        </div>
      </section>

      {/* Story section with side image */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center md:grid-cols-2">
          <div className="px-6 py-16 md:px-16">
            <ScrollReveal>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-warm-500">
                Who We Are
              </p>
              <h2 className="mb-6 text-3xl font-bold text-brown-800">
                A Boutique Bake Shop
              </h2>
              <div className="space-y-5 leading-relaxed text-brown-500">
                <p>
                  Fatcat Bakery is a boutique bake shop in Charlottetown, PEI,
                  specializing in small batch, from scratch baking. We use
                  quality ingredients, sourced locally where possible, to bring
                  you a wide variety of delicious home-baked goods.
                </p>
                <p>
                  From our classic cakes and cupcakes to our beloved cookies,
                  squares, and fresh breads — everything is made with care and a
                  whole lot of love.
                </p>
                <p>
                  We also offer vegan and gluten-free options because we believe
                  everyone deserves great baked goods. Whether you&apos;re
                  looking for an everyday treat, something special for an
                  occasion, or a custom order — we&apos;d love to bake for you.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="img-zoom h-80 md:h-[550px]">
            <img
              src="https://images.unsplash.com/photo-1549488344-cab7d6164423?w=800&q=80"
              alt="Baker shaping fresh bread"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-warm-50 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-warm-500">
              Our Values
            </p>
            <h2 className="mb-2 text-center text-3xl font-bold text-brown-800">
              What We Stand For
            </h2>
            <div className="divider mb-12" />
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80",
                title: "Quality Ingredients",
                text: "We source locally where possible and always choose the best ingredients for our bakes.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
                title: "Made Fresh Daily",
                text: "Small batch, from scratch — our baked goods are made fresh every day for the best taste.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
                title: "Community First",
                text: "We're proud to be part of the Charlottetown community and love serving our neighbours.",
              },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 120}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="img-zoom h-48 overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="mb-2 text-lg font-bold text-brown-700">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brown-400">
                      {value.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote strip */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486427944544-d2c246c4df14?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-brown-900/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <ScrollReveal>
            <p className="font-heading text-2xl leading-relaxed text-cream-100 italic md:text-3xl">
              &ldquo;We believe baking is an act of love — every crumb, every
              layer, every bite tells a story.&rdquo;
            </p>
            <div className="divider mt-6" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
