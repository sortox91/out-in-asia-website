import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutFounders } from "@/components/about-founders";
import { PageTransition } from "@/components/page-transition";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "About Us | Out in Asia",
  description:
    "Meet the founders of Out in Asia, Filippo Rossi and Szilárd Daróczi. Discover our story and passion for LGBTQ+ travel in Southeast Asia.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="overflow-x-hidden">
          <PageHero
            image="/meet-us/meetus-cover.png"
            imageMobile="/meet-us/meetus_cover_mobile.png"
            eyebrow="OUR STORY"
            title="Two Guides"
            titleLine2="One"
            titleLine2Accent="Passion"
            subtitle={<>Guiding you through Asia with<br className="md:hidden" /> experience, care and passion</>}
          />

          {/* Our Mission */}
          <section className="py-14 md:py-24 bg-warm-cream">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="font-sans text-ocean-teal font-medium tracking-widest uppercase mb-4 text-xs">
                  Our Mission
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">
                  Creating Safe Spaces for{" "}
                  <span className="italic text-sunset-orange">
                    Authentic Travel
                  </span>
                </h2>
                <p className="font-sans leading-relaxed text-sm md:text-lg text-navy">
                  We launched Out in Asia to fill a gap: premium LGBTQ+ travel designed by gay travellers who know Southeast Asia intimately. Every trip is personally led by us, so you explore freely, connect authentically, and feel completely at home.
                </p>
              </div>

              {/* Stats with icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { Icon: Calendar, number: "10+", label: "Years Experience" },
                  { Icon: MapPin, number: "4", label: "Destinations" },
                  { Icon: Users, number: "Small", label: "Groups Only" },
                  { Icon: Sparkles, number: "100%", label: "Personalised" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-start gap-3 bg-navy rounded-xl px-4 py-4 md:px-5 md:py-5">
                    <stat.Icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#1F8A8F" }} strokeWidth={1.5} />
                    <div>
                      <p className="font-serif font-bold text-lg md:text-xl text-white leading-tight">{stat.number}</p>
                      <p className="font-sans text-xs text-white/60 mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <AboutFounders />

          {/* Our Values */}
          <section className="py-14 md:py-24 bg-warm-cream">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className="font-sans text-xs text-ocean-teal font-medium tracking-widest uppercase mb-4">
                  What We Stand For
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
                  Our <span className="italic text-sunset-orange">Values</span>
                </h2>
              </div>
              {/* Mobile: one sentence per value */}
              <div className="md:hidden space-y-4 mb-2">
                {[
                  { title: "Authenticity", desc: "Experiences beyond the surface, genuine, local, and deeply connected to each destination." },
                  { title: "Inclusivity", desc: "Every traveller deserves to feel welcome, safe, and completely themselves." },
                  { title: "Excellence", desc: "The highest standards across every hotel, itinerary, and experience we offer." },
                ].map((v) => (
                  <div key={v.title} className="pl-4 border-l-2 border-ocean-teal">
                    <p className="font-serif font-bold text-base italic text-sunset-orange">{v.title}</p>
                    <p className="font-sans text-xs text-navy/70 leading-relaxed mt-0.5">{v.desc}</p>
                  </div>
                ))}
              </div>

              {/* Desktop: full value cards */}
              <div className="hidden md:grid grid-cols-3 gap-0">
                {[
                  {
                    title: "Authenticity",
                    description:
                      "We create experiences that go beyond the surface, designed to give you a genuine understanding of each destination, its culture, and its people.",
                  },
                  {
                    title: "Inclusivity",
                    description:
                      "Every traveller deserves to feel welcome and safe. We create spaces where LGBTQ+ travellers can explore freely and be themselves completely.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "From carefully selected accommodations to thoughtfully planned itineraries, we maintain the highest standards across every aspect of your journey.",
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
                    <p className="font-sans text-navy leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-14 md:py-24 bg-navy">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance leading-snug">
                    Ready to Travel <span className="italic text-sunset-orange">With Us</span><span className="text-sunset-orange">?</span>
                  </h2>
                  <p className="font-sans text-base md:text-xl text-sand/80 mb-10 leading-relaxed">
                    Join Filippo and Szilard on an unforgettable journey through Southeast Asia.
                  </p>
                  <div className="flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-center md:gap-4 lg:justify-start">
                    <Link
                      href="/trips"
                      className="inline-flex items-center gap-2 font-sans font-semibold tracking-wide px-8 py-4 rounded-full bg-sunset-orange text-white hover:bg-ember transition-colors duration-300"
                    >
                      Explore Our Trips
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="md:hidden font-sans text-sm text-white/80 underline underline-offset-4 hover:text-white transition-colors"
                    >
                      Get in Touch
                    </Link>
                    <Link
                      href="/contact"
                      className="hidden md:inline-flex items-center font-sans font-semibold tracking-wide px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-navy transition-colors duration-300"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
                <div className="relative h-56 md:h-96 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/meet-us/meetus-bottom.png"
                    alt="Filippo and Szilard"
                    fill
                    className="object-cover object-top"
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
