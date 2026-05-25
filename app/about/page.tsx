import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutFounders } from "@/components/about-founders";
import { PageTransition } from "@/components/page-transition";

export const metadata = {
  title: "About Us | Out in Asia",
  description:
    "Meet the founders of Out in Asia — Filippo Rossi and Szilard Utakon. Discover our story and passion for LGBTQ+ travel in Southeast Asia.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="pt-20">
          {/* Hero */}
          <section className="relative py-32 bg-navy overflow-hidden">
            <Image
              src="/founders/together.jpg"
              alt="Filippo and Szilard in Southeast Asia"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-navy/70" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="font-sans text-ocean-teal font-medium tracking-widest uppercase mb-4 text-xs">
                  Our Story
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Two Guides, One{" "}
                  <span className="italic text-sunset-orange">Passion</span>
                </h1>
                <p className="font-sans text-xl text-sand/90 leading-relaxed">
                  Out in Asia was born from a shared love of Southeast Asia and a
                  desire to create meaningful travel experiences for the LGBTQ+
                  community. We believe that travel should be transformative,
                  authentic, and most importantly, a space where you can be
                  completely yourself.
                </p>
              </div>
            </div>
          </section>

          {/* Our Mission */}
          <section className="py-24 bg-warm-cream">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="font-sans text-ocean-teal font-medium tracking-widest uppercase mb-4 text-xs">
                  Our Mission
                </p>
                <h2 className="font-serif text-4xl font-bold text-navy mb-8">
                  Creating Safe Spaces for{" "}
                  <span className="italic text-sunset-orange">
                    Authentic Travel
                  </span>
                </h2>
                <div className="space-y-4 font-sans leading-relaxed text-lg text-left" style={{ color: 'var(--clay)' }}>
                  <p>
                    We started Out in Asia because we saw a gap in the travel
                    industry. Too often, LGBTQ+ travelers have to compromise on
                    their experiences, worry about safety, or travel without the
                    support of a community.
                  </p>
                  <p>
                    Our mission is simple: to create high-end, curated travel
                    experiences where gay travelers can explore the wonders of
                    Southeast Asia without hesitation, surrounded by like-minded
                    people and led by guides who understand their needs.
                  </p>
                  <p>
                    Every trip is personally designed and led by us, ensuring
                    that you get not just a tour, but a genuine connection to
                    the places you visit and the people you meet along the way.
                  </p>
                </div>
              </div>

              {/* Stats bar */}
              <div className="bg-navy rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {[
                    "10+ Years Experience",
                    "4 Destinations",
                    "Small Groups Only",
                    "100% LGBTQ+ Led",
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className={`py-10 px-6 text-center ${
                        index % 2 !== 0 ? "border-l border-white/10" : ""
                      } ${
                        index >= 2
                          ? "border-t border-white/10 md:border-t-0 md:border-l"
                          : ""
                      }`}
                    >
                      <p className="font-sans text-white font-semibold text-sm">
                        {stat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <AboutFounders />

          {/* Our Values */}
          <section className="py-24 bg-warm-cream">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className="font-sans text-xs text-ocean-teal font-medium tracking-widest uppercase mb-4">
                  What We Stand For
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy">
                  Our <span className="italic text-sunset-orange">Values</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {[
                  {
                    title: "Authenticity",
                    description:
                      "We create experiences that go beyond the surface. Our trips are designed to give you a genuine understanding of each destination, its culture, and its people.",
                  },
                  {
                    title: "Inclusivity",
                    description:
                      "Every traveler deserves to feel welcome and safe. We create spaces where LGBTQ+ travelers can explore freely, connect openly, and be themselves completely.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "From carefully selected accommodations to thoughtfully planned itineraries, we maintain the highest standards to ensure every aspect of your journey is exceptional.",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="group p-8 border-l-2 border-l-transparent hover:border-l-ocean-teal transition-colors duration-300"
                  >
                    <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                      {value.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-ocean-teal mb-5" />
                    <p className="font-sans text-clay leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-navy">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
                    Ready to Travel <span className="italic text-sunset-orange">With Us</span>?
                  </h2>
                  <p className="font-sans text-xl text-sand/80 mb-10 leading-relaxed">
                    Join Filippo and Szilard on an unforgettable journey through Southeast Asia.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/trips"
                      className="inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide px-8 py-4 rounded-full bg-sunset-orange text-white hover:bg-ember transition-colors duration-300"
                    >
                      Explore Our Trips
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center font-sans font-semibold tracking-wide px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-navy transition-colors duration-300"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 w-80 rounded-2xl overflow-hidden mx-auto lg:ml-auto">
                  <Image
                    src="/founders/together-ai-2.jpg"
                    alt="Filippo and Szilard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
