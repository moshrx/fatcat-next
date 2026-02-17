import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact | Fatcat Bakery",
  description: "Get in touch with Fatcat Bakery in Charlottetown, PEI.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero banner with image */}
      <section className="relative flex h-64 items-center justify-center overflow-hidden md:h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-brown-900/70" />
        <div className="relative z-10 text-center">
          <h1 className="mb-3 text-4xl font-bold text-cream-50 md:text-5xl">
            Get In Touch
          </h1>
          <p className="text-cream-200/80">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="space-y-8">
              {/* Location with image */}
              <div className="img-zoom overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=800&q=80"
                  alt="Bakery storefront"
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-brown-700">
                  Visit Our Shop
                </h3>
                <div className="space-y-2 text-brown-500">
                  <p>447 University Avenue</p>
                  <p>Charlottetown, PE</p>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-brown-700">
                  Contact Info
                </h3>
                <div className="space-y-2 text-brown-500">
                  <p>
                    <span className="font-medium text-brown-600">Phone:</span>{" "}
                    (902) 367-1321
                  </p>
                  <p>
                    <span className="font-medium text-brown-600">
                      Facebook:
                    </span>{" "}
                    <a
                      href="https://www.facebook.com/fatcatbakerypei/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent transition-colors hover:text-accent-hover hover:underline"
                    >
                      @fatcatbakerypei
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-brown-600">
                      Instagram:
                    </span>{" "}
                    <a
                      href="https://www.instagram.com/fatcatbakery_pei/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent transition-colors hover:text-accent-hover hover:underline"
                    >
                      @fatcatbakery_pei
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold text-brown-700">
                  Hours
                </h3>
                <div className="space-y-2 text-sm text-brown-500">
                  <div className="flex justify-between rounded-lg bg-warm-50 px-4 py-2">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-brown-700">
                      8:00 AM – 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-warm-50 px-4 py-2">
                    <span>Saturday</span>
                    <span className="font-medium text-brown-700">
                      9:00 AM – 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-warm-50 px-4 py-2">
                    <span>Sunday</span>
                    <span className="font-medium text-brown-700">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
