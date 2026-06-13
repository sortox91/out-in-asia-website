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
    "Explore our curated LGBTQ+ travel experiences across Southeast Asia: Thailand, Vietnam, and Bali. High-end journeys designed for gay travelers.",
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
        <section className="py-8 md:py-24 bg-navy">
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
                { Icon: Home,             title: "Boutique Accommodations", description: "Handpicked 4 & 5-star hotels, LGBTQ+ friendly." },
                { Icon: Car,              title: "Local Transportation",     description: "Private transfers, long-tail boats and tuk-tuks." },
                { Icon: Compass,          title: "Expert Guidance",          description: "Personal guidance by our founders, 24/7 support." },
                { Icon: Sparkles,         title: "Curated Experiences",      description: "Cooking classes, temple visits and hidden gems." },
                { Icon: Users,            title: "Community Connection",     description: "Small groups that create lasting connections." },
                { Icon: UtensilsCrossed,  title: "Culinary Adventures",      description: "Local restaurants, street food tours and authentic dining." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="py-3 md:py-8 border-b border-white/10 flex gap-4 md:gap-6 last:border-0"
                >
                  <item.Icon
                    className="flex-shrink-0 mt-0.5"
                    style={{ width: 20, height: 20, color: "#EA5A2A" }}
                    strokeWidth={1.75}
                  />
                  <div>
                    <h3 className="font-serif text-base md:text-xl text-white mb-1 md:mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs md:text-base text-sand/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      </PageTransition>
      <Footer />
    </>
  );
}
