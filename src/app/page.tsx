import Hero from "@/components/home/Hero";
import FeaturedItems from "@/components/home/FeaturedItems";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedItems />

      {/* Image + text section */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-0 md:grid-cols-2">
          <div className="img-zoom h-80 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1607151815172-254f6b0c9b4b?w=800&q=80"
              alt="Fresh baked bread"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="bg-warm-100 px-8 py-16 md:px-16">
            <ScrollReveal>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-warm-500">
                Our Promise
              </p>
              <h2 className="mb-4 text-3xl font-bold text-brown-800 md:text-4xl">
                Baked Fresh Every Day
              </h2>
              <p className="mb-8 leading-relaxed text-brown-500">
                We bake everything from scratch in small batches using quality
                ingredients sourced locally where possible. Every loaf, every cake,
                every cookie — made with care in the heart of Charlottetown.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="rounded-full bg-accent px-8 py-3 font-semibold text-cream-50 shadow-md transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:-translate-y-0.5"
                >
                  Full Menu
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border-2 border-brown-700 px-8 py-3 font-semibold text-brown-700 transition-all duration-300 hover:bg-brown-700 hover:text-cream-50"
                >
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial / tagline strip */}
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
              &ldquo;Good old fashioned baking — small batch, from scratch, made
              with love.&rdquo;
            </p>
            <div className="divider mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* Visit us CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <ScrollReveal>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-warm-500">
              Come Say Hello
            </p>
            <h2 className="mb-4 text-3xl font-bold text-brown-800 md:text-4xl">
              Visit Us in Charlottetown
            </h2>
            <p className="mb-2 text-lg text-brown-500">
              447 University Avenue, Charlottetown, PE
            </p>
            <p className="mb-8 text-brown-400">(902) 367-1321</p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-brown-800 px-10 py-4 font-semibold text-cream-100 shadow-md transition-all duration-300 hover:bg-brown-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact & Hours
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
