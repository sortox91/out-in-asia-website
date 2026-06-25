import Link from "next/link";
import { Home, Car, Compass, Sparkles, Users, UtensilsCrossed } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TripCard } from "@/components/trip-card";
import { PageTransition } from "@/components/page-transition";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Group Trips | Out in Asia",
  description:
    "Explore our curated LGBTQ+ group travel experiences across Southeast Asia: Thailand, Vietnam, and Bali. High-end journeys designed for gay travelers.",
};

// D — What We Offer items (no trailing periods)
const WHAT_WE_OFFER = [
  { Icon: Home,            title: "Handpicked Stays",          description: "Premium hotels, resorts and selected unique stays" },
  { Icon: Car,             title: "Seamless Transportation",   description: "Private transfers and comfortable transport throughout" },
  { Icon: Compass,         title: "Expert Guidance",           description: "Hosted with care by our team and trusted local guides" },
  { Icon: Sparkles,        title: "Curated Experiences",       description: "Culture, nature and local moments designed with purpose" },
  { Icon: Users,           title: "Community Connection",      description: "Small groups that create genuine LGBTQ+ connections" },
  { Icon: UtensilsCrossed, title: "Dining Experiences",        description: "Selected meals, local restaurants and authentic flavours" },
];

const TRIP_DATES: Record<string, string[]> = {
  thailand:        ["1 - 12 December 2026", "15 - 27 February 2027"],
  "north-vietnam": ["2 - 13 April 2027", "3 - 14 September 2027"],
  "south-vietnam": ["18 - 29 January 2027", "1 - 12 November 2027"],
  bali:            ["12 - 24 March 2027", "3 - 15 May 2027", "8 - 20 July 2027", "4 - 16 August 2027", "16 - 28 October 2027"],
}

export default function TripsPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="overflow-x-hidden">

          {/* A — PageHero template (LOT 3). B — title inside hero. */}
          <PageHero
            image="/group-trips/grouptrips-cover-web.png"
            imageMobile="/group-trips/grouptrips-cover-mobile.png"
            eyebrow="GROUP TRIPS"
            title="Shared Journeys"
            titleLine2="Real"
            titleLine2Accent="Connections"
            subtitle="Curated gay group trips across Southeast Asia, designed with care"
          />

          {/* C — Destinations grid */}
          <section className="py-14 md:py-20 bg-[#FAF6EF]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="font-sans text-xs tracking-[0.25em] uppercase mb-10" style={{ color: "#1F8A8F" }}>
                Choose Your Destination
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    nextDates={TRIP_DATES[trip.id] ?? []}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* D — What We Offer */}
          <section className="py-8 md:py-24 bg-navy">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 md:mb-16">
                <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#1F8A8F" }}>
                  WHAT WE OFFER
                </p>
                <h2 className="font-serif font-bold text-4xl sm:text-5xl text-white leading-tight">
                  <span className="block">The Out in Asia</span>
                  <span className="block italic text-sunset-orange">Experience</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
                {WHAT_WE_OFFER.map((item) => (
                  <div
                    key={item.title}
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
