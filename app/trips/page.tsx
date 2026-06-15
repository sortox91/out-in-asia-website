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

        {/* Page hero — consistent template */}
        <section className="relative h-[55vh] md:h-[65vh] min-h-[380px] flex items-center overflow-hidden">
          <Image
            src="/trips/bali.jpg"
            alt="Southeast Asia"
            fill
            className="object-cover"
            priority
          />
          {/* Left-side dark gradient */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(14,31,56,0.90) 0%, rgba(14,31,56,0.65) 45%, rgba(14,31,56,0.15) 75%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,31,56,0.3) 0%, transparent 40%)" }} />

          <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16 w-full">
            <div className="max-w-xl">
              <p className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#EA5A2A" }}>
                Four Destinations
              </p>
              <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                Shared Journeys<br />
                Real <span className="italic text-sunset-orange">Connections</span>
              </h1>
              <p className="font-sans text-base text-white/70 max-w-md leading-relaxed">
                Curated gay group trips across Southeast Asia, designed with care
              </p>
            </div>
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

        {/* What We Offer */}
        <section className="py-8 md:py-24 bg-navy">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-sans text-ocean-teal font-medium tracking-widest uppercase mb-4 text-xs">
                What We Offer
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
                The Out in Asia{" "}
                <span className="italic text-sunset-orange">Experience</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
              {[
                { Icon: Home,             title: "Handpicked Stays",          description: "Premium hotels, resorts and selected unique stays" },
                { Icon: Car,              title: "Seamless Transportation",   description: "Private transfers and comfortable transport throughout" },
                { Icon: Compass,          title: "Expert Guidance",           description: "Hosted with care by our team and trusted local guides" },
                { Icon: Sparkles,         title: "Curated Experiences",       description: "Culture, nature and local moments designed with purpose" },
                { Icon: Users,            title: "Community Connection",      description: "Small groups that create genuine LGBTQ+ connections" },
                { Icon: UtensilsCrossed,  title: "Dining Experiences",        description: "Selected meals, local restaurants and authentic flavours" },
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
