import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-cream-200">
      {/* Top decorative image strip */}
      <div className="h-2 bg-accent" />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="mb-4 font-heading text-2xl font-bold text-cream-100">
            Fatcat Bakery
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-cream-300">
            PEI&apos;s local bakery specializing in good old fashioned baking.
            Small batch, from scratch, made with love.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/fatcatbakerypei/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brown-800 text-sm text-cream-300 transition-all duration-300 hover:bg-accent hover:text-cream-50"
            >
              FB
            </a>
            <a
              href="https://www.instagram.com/fatcatbakery_pei/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brown-800 text-sm text-cream-300 transition-all duration-300 hover:bg-accent hover:text-cream-50"
            >
              IG
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-cream-100">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream-300 transition-colors duration-200 hover:text-cream-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-cream-100">
            Visit Us
          </h4>
          <div className="space-y-3 text-sm text-cream-300">
            <p>447 University Avenue</p>
            <p>Charlottetown, PE</p>
            <p>(902) 367-1321</p>
            <div className="mt-4 space-y-1 text-xs">
              <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
              <p>Sat: 9:00 AM – 4:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-brown-800 py-5 text-center text-xs text-cream-300/60">
        &copy; {new Date().getFullYear()} Fatcat Bakery. All rights reserved.
      </div>
    </footer>
  );
}
