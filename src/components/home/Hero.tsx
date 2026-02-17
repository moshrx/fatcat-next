import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1600&q=80')",
        }}
      />
      {/* Dark warm overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-brown-900/70 via-brown-800/60 to-brown-900/80" />

      <div className="hero-content relative z-10 px-4 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cream-300">
          Est. in Charlottetown, PEI
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight text-cream-50 md:text-7xl lg:text-8xl">
          Fatcat Bakery
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-lg text-cream-200/90 md:text-xl">
          Small batch, from scratch baking made with love and quality local
          ingredients.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/menu"
            className="rounded-full bg-accent px-10 py-4 text-lg font-semibold text-cream-50 shadow-lg transition-all duration-300 hover:bg-accent-hover hover:shadow-xl hover:-translate-y-0.5"
          >
            View Our Menu
          </Link>
          <Link
            href="/about"
            className="rounded-full border-2 border-cream-200/50 px-10 py-4 text-lg font-semibold text-cream-100 transition-all duration-300 hover:border-cream-100 hover:bg-cream-100/10"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-cream-200/50 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-cream-200/70" />
        </div>
      </div>
    </section>
  );
}
