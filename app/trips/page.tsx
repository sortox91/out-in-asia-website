import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Car, Compass, Sparkles, Users, UtensilsCrossed } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TripCard } from "@/components/trip-card";
import { PageTransition } from "@/components/page-transition";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Our Trips | Out in Asia",
  description:
    "Explore our curated LGBTQ+ travel experiences across Southeast Asia — Thailand, Vietnam, and Bali. High-end journeys designed for gay travelers.",
};

export default function TripsPage() {
  return (
    <>
      <Header />
      <PageTransition>
      <main className="overflow-x-hidden">
        {/* Fullscreen-ish hero — 60vh with background image */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src="/trips/bali.jpg"
            alt="Southeast Asia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy/80" />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/50 mb-5">
              Our Destinations
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-5 leading-tight">
              Our Journeys
            </h1>
            <p className="font-sans text-lg text-sand/80 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
              Each trip is carefully designed to showcase the best of Southeast Asia
              while ensuring comfort, safety, and authentic experiences for LGBTQ+ travelers.
            </p>
          </div>
        </section>

        {/* Trips Grid */}
        <section className="py-14 md:py-20 bg-warm-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteConfig.trips.map((trip) => (
                <TripCard
                  key={trip.id}
                  id={trip.id}
                  title={trip.title}
                  subtitle={trip.subtitle}
                  description={trip.description}
                  duration={trip.duration}
                  image={trip.image}
                  price={trip.price}
                />
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-14 md:py-24 bg-navy">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-sans text-ocean-teal font-medium tracking-widest uppercase mb-4 text-xs">
                The Experience
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
                What&apos;s{" "}
                <span className="italic text-sunset-orange">Included</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
              {[
                { Icon: Home,             title: "Boutique Accommodations", description: "Handpicked hotels and resorts that combine local character with modern comfort and LGBTQ+ friendly atmospheres." },
                { Icon: Car,              title: "Local Transportation",     description: "Comfortable private transfers and unique local transport experiences, from long-tail boats to tuk-tuks." },
                { Icon: Compass,          title: "Expert Guidance",          description: "Personal guidance from our founders throughout your journey, with deep local knowledge and 24/7 support." },
                { Icon: Sparkles,         title: "Curated Experiences",      description: "Carefully selected activities that go beyond typical tourism: cooking classes, temple visits, and hidden gems." },
                { Icon: Users,            title: "Community Connection",     description: "Small group sizes that foster meaningful connections with fellow travelers and local communities." },
                { Icon: UtensilsCrossed,  title: "Culinary Adventures",      description: "Selected meals at outstanding local restaurants, street food tours, and authentic dining experiences." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="py-8 border-b border-white/10 flex gap-6 last:border-0"
                >
                  <item.Icon
                    className="flex-shrink-0 mt-0.5"
                    style={{ width: 20, height: 20, color: "#EA5A2A" }}
                    strokeWidth={1.75}
                  />
                  <div>
                    <h3 className="font-serif text-xl text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sand/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-warm-cream border-t-2 border-sunset-orange">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy max-w-lg leading-tight">
                Not sure which trip is right for you?
              </h2>
              <div className="text-center md:text-right flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-sans font-semibold tracking-wide px-8 py-4 rounded-full bg-sunset-orange text-white hover:bg-ember transition-colors duration-300 mb-3"
                >
                  Talk to Filippo &amp; Szilard
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="font-sans text-sm text-clay">
                  We reply within 24 hours
                </p>
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
