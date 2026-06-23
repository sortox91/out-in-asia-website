import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Calendar, Users, MapPin, Sparkles, ArrowLeft, FileText } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RouteMap } from "@/components/route-map";
import { TripHeroParallax } from "@/components/trip-hero-parallax";
import { PageHero } from "@/components/page-hero";
import { TripPricingBlock, BROCHURE_URL } from "@/components/trip-pricing-block";
import { TripComfortSection } from "@/components/trip-comfort-section";
import { siteConfig } from "@/lib/config";


// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatTripDate(raw: string): string {
  const parts = raw.split(/\s[–—]\s/)
  if (parts.length !== 2) return raw
  const [startDay, startMonth] = parts[0].trim().split(" ")
  const endTokens = parts[1].trim().split(" ")
  const endDay = endTokens[0]
  const endMonth = endTokens[1]
  const year = endTokens[2]
  if (startMonth === endMonth) return `${startDay} - ${endDay} ${endMonth} ${year}`
  return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${year}`
}

// ─── Extended trip data ───────────────────────────────────────────────────────

const tripDetails: Record<
  string,
  {
    itinerary: { day: number; title: string; description: string }[];
    included: string[];
    notIncluded: string[];
    groupSize: string;
    nextDates: string[];
  }
> = {
  thailand: {
    itinerary: [
      { day: 1,  title: "Arrival in Bangkok",         description: "Welcome dinner and introduction to the group at a rooftop restaurant with stunning city views." },
      { day: 2,  title: "Bangkok Temples & Culture",   description: "Visit the Grand Palace, Wat Pho, and explore the historic Rattanakosin district." },
      { day: 3,  title: "Bangkok Markets & Nightlife", description: "Chatuchak market exploration, Thai cooking class, and evening in Silom." },
      { day: 4,  title: "Fly to Chiang Mai",           description: "Morning flight north. Afternoon visit to Doi Suthep temple and night market exploration." },
      { day: 5,  title: "Chiang Mai Culture",          description: "Elephant sanctuary visit, traditional Lanna spa experience, and local artisan workshops." },
      { day: 6,  title: "Travel to the Islands",       description: "Fly south to the islands. Settle into our beachfront resort and sunset cocktails." },
      { day: 7,  title: "Island Exploration",          description: "Snorkeling trip to nearby islands, beach time, and seafood dinner by the water." },
      { day: 8,  title: "Beach Day & Wellness",        description: "Free morning for relaxation. Optional yoga session and Thai massage." },
      { day: 9,  title: "Island Hopping",              description: "Full-day boat trip exploring hidden beaches and swimming spots." },
      { day: 10, title: "Departure",                   description: "Final breakfast together and transfers to the airport. Until next time!" },
    ],
    included: [
      "All domestic flights", "9 nights accommodation",
      "Daily breakfast, selected lunches and dinners",
      "All activities and entrance fees", "Private transportation",
      "English-speaking guides", "Airport transfers",
    ],
    notIncluded: ["International flights", "Travel insurance", "Personal expenses", "Some meals", "Optional activities"],
    groupSize: "8-12 travelers",
    nextDates: ["December 1–12, 2026", "January 18–29, 2027"],
  },

  "north-vietnam": {
    itinerary: [
      { day: 1,  title: "Arrival in Hanoi",          description: "Transfer from airport to hotel, check-in, welcome dinner, meet the group." },
      { day: 2,  title: "Hanoi Discovery",            description: "Ngoc Son Temple on Hoan Kiem Lake, egg coffee, guided street food tour from 16:00, optional gay bars." },
      { day: 3,  title: "Hanoi to Sapa",              description: "Departure by air-conditioned minivan (5–6 hours), arrive Sapa, check-in 5-star hotel." },
      { day: 4,  title: "Sapa Trekking",              description: "Guided trek through bamboo forests, rice terraces and villages, lunch at guide's homestay." },
      { day: 5,  title: "Cable Car Fansipan",         description: "Cable car to Vietnam's highest peak, breathtaking views above clouds, buffet lunch, Sapa Hot Pot dinner." },
      { day: 6,  title: "Sapa to Tam Coc",            description: "Minivan to Ninh Binh (6–7 hours), arrival Tam Coc 15:00–16:00, relax by pool." },
      { day: 7,  title: "Tam Coc Boat Trip",          description: "Morning climb to Dragon Mountain viewpoint, boat trip through rivers, cliffs and caves at 15:30." },
      { day: 8,  title: "Ninh Binh Cycling Tour",     description: "Hidden Tam Coc cycling tour: Thung Nang Lake, Bich Dong Pagoda, rice fields." },
      { day: 9,  title: "Tam Coc to Ha Long Bay",     description: "Departure 7:00, 3-hour drive, transfer by boat to luxury yacht, buffet lunch on board, sunset drinks." },
      { day: 10, title: "Ha Long Bay & Cat Ba Island", description: "Tai chi on deck, excursion to Cat Ba Island, Three Peaches Beach swim, dinner on board." },
      { day: 11, title: "Return to Hanoi",            description: "Breakfast on yacht, return to Hanoi, Train Street visit at 18:00, farewell dinner." },
      { day: 12, title: "Departure",                  description: "Breakfast, free morning, hotel checkout 12:00, private airport transfer." },
    ],
    included: [
      "Private airport transfer on arrival and departure",
      "6 nights with breakfast in premium 4-star hotels",
      "3 nights with breakfast in a premium 5-star hotel",
      "2 nights on a 5-star exclusive yacht with full board",
      "3 additional lunches",
      "3 additional dinners",
      "Premium air-conditioned minivan throughout the trip",
      "Organisation fees, taxes and local charges",
      "English-language travel information",
      "Welcome gift package",
      "Group guidance and assistance during the stay",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Additional meals not listed in the programme",
    ],
    groupSize: "6-10 travelers",
    nextDates: ["2 April – 13 April 2027", "3 September – 14 September 2027"],
  },

  "south-vietnam": {
    itinerary: [
      { day: 1, title: "Arrival in Ho Chi Minh City", description: "Welcome dinner at a French colonial villa restaurant in District 1." },
      { day: 2, title: "Saigon Exploration",           description: "War Remnants Museum, Notre-Dame Cathedral, and Ben Thanh Market." },
      { day: 3, title: "Cu Chi & Local Life",          description: "Morning at Cu Chi Tunnels, afternoon Vietnamese cooking class." },
      { day: 4, title: "Mekong Delta",                 description: "Travel to the delta. Boat cruise through floating markets and local villages." },
      { day: 5, title: "Mekong Experience",            description: "Cycling through fruit orchards, traditional music, and local crafts." },
      { day: 6, title: "Fly to Phu Quoc",              description: "Morning flight to Phu Quoc island. Beach resort check-in and sunset time." },
      { day: 7, title: "Island Paradise",              description: "Snorkeling, beach time, and fresh seafood dinner on the sand." },
      { day: 8, title: "Phu Quoc Exploration",         description: "Visit pepper farms, fish sauce factory, and night squid fishing experience." },
      { day: 9, title: "Departure",                    description: "Final beach morning and transfers for departure." },
    ],
    included: [
      "Domestic flights", "8 nights accommodation", "Daily breakfast, selected meals",
      "Mekong Delta boat trips", "All activities", "Private transportation", "Local guides",
    ],
    notIncluded: ["International flights", "Visa fees", "Travel insurance", "Personal expenses"],
    groupSize: "6-10 travelers",
    nextDates: ["February 16–27, 2027", "November 1–12, 2027"],
  },

  bali: {
    itinerary: [
      { day: 1, title: "Arrival in Bali",     description: "Welcome to the Island of Gods. Transfer to Ubud and welcome dinner." },
      { day: 2, title: "Ubud Culture",         description: "Morning yoga, Tegallalang rice terraces, and traditional Balinese dance performance." },
      { day: 3, title: "Temples & Spirituality", description: "Tirta Empul holy spring, Gunung Kawi temple, and blessing ceremony." },
      { day: 4, title: "Arts & Crafts",        description: "Silver jewelry workshop, Ubud art market, and cooking class with local family." },
      { day: 5, title: "Travel to Seminyak",   description: "Morning in Ubud, then transfer to Seminyak. Beach club afternoon." },
      { day: 6, title: "Beach & Nightlife",    description: "Beach day, spa treatments, and explore Seminyak's vibrant scene." },
      { day: 7, title: "Departure",            description: "Final breakfast, optional last-minute shopping, and airport transfers." },
    ],
    included: [
      "6 nights accommodation", "Daily breakfast, selected meals",
      "All activities and entrance fees", "Private transportation",
      "Yoga sessions", "Airport transfers", "Local guides",
    ],
    notIncluded: ["International flights", "Travel insurance", "Personal expenses", "Some meals"],
    groupSize: "8-12 travelers",
    nextDates: ["March 12–24, 2027", "May 3–14, 2027", "July 8–19, 2027", "August 4–15, 2027", "October 16–27, 2027"],
  },
};

const tripRoutes: Record<string, { city: string; day: number }[]> = {
  thailand:       [{ city: "Bangkok", day: 1 }, { city: "Chiang Mai", day: 4 }, { city: "Khao Sok", day: 6 }, { city: "Krabi / Railay", day: 8 }],
  "north-vietnam":[{ city: "Hanoi", day: 1 }, { city: "Ha Long Bay", day: 3 }, { city: "Sapa", day: 5 }, { city: "Ninh Binh", day: 7 }],
  "south-vietnam":[{ city: "Ho Chi Minh City", day: 1 }, { city: "Mekong Delta", day: 4 }, { city: "Phu Quoc", day: 6 }],
  bali:           [{ city: "Bali", day: 1 }, { city: "Ubud", day: 2 }, { city: "Seminyak", day: 5 }, { city: "Komodo", day: 7 }],
};

const galleryImages: Record<string, { large: string; small1: string; small2: string }> = {
  thailand:        { large: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1200&q=80", small1: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=80", small2: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80" },
  "north-vietnam": { large: "/ai-landscapes/vietnam-3.png", small1: "/ai-landscapes/vietnam-4.png", small2: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80" },
  "south-vietnam": { large: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80", small1: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80", small2: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80" },
  bali:            { large: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80", small1: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80", small2: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80" },
};

// ─── Static params + metadata ─────────────────────────────────────────────────

export async function generateStaticParams() {
  return siteConfig.trips.map((trip) => ({ slug: trip.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip = siteConfig.trips.find((t) => t.id === slug);
  if (!trip) return { title: "Trip Not Found" };
  return { title: `${trip.title} | Out in Asia`, description: trip.description };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function TripPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip    = siteConfig.trips.find((t) => t.id === slug);
  const details = tripDetails[slug];
  const gallery = galleryImages[slug];

  if (!trip || !details) notFound();

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">

        {/* ── Hero ── */}
        {slug === "north-vietnam" ? (
          <>
            <div className="relative">
              <PageHero
                image="/north-vietnam/northvietnam-cover-web.png"
                imageMobile="/north-vietnam/northvietnam-cover-mobile.png"
                eyebrow="GROUP GAY TRIPS"
                title="North Vietnam"
                subtitle="Rice terraces, mountain villages, limestone bays and immersive local experiences"
              />
              <div className="absolute top-20 left-6 sm:left-10 lg:left-16 z-10">
                <Link
                  href="/trips"
                  className="inline-flex items-center gap-2 font-sans text-white/60 hover:text-white transition-colors text-sm"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All trips
                </Link>
              </div>
              {/* Departures — overlay en bas de l'image */}
              <div
                className="absolute bottom-0 left-0 right-0 pt-16 pb-4 md:pb-5"
                style={{ background: "linear-gradient(to top, rgba(14,31,56,0.60) 0%, transparent 100%)" }}
              >
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2">Departures</p>
                  <div className="flex flex-wrap gap-2">
                    {details.nextDates.map((date, i) => (
                      <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-sans rounded-full">
                        {formatTripDate(date)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <TripHeroParallax
            title={trip.title}
            subtitle={trip.subtitle}
            heroImage={trip.heroImage}
            nextDates={details.nextDates}
          />
        )}

        {/* ── Quick facts bar (north-vietnam) / Highlights bar (other trips) ── */}
        {slug === "north-vietnam" ? (
          <section className="bg-sunset-orange py-4">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {([
                  { Icon: Calendar, value: "12 Days", label: "Duration" },
                  { Icon: Users, value: "Small Group", label: "Max 12" },
                  { Icon: MapPin, value: "4 Stops", label: "Hanoi · Sapa · Tam Coc · Ha Long" },
                  { Icon: Sparkles, value: `From ${trip.price.shared}`, label: "Per person" },
                ] as const).map((fact, i) => (
                  <div
                    key={i}
                    className={`flex flex-row md:flex-col items-start md:items-center justify-start md:justify-center gap-2 md:gap-0 py-3 px-3 md:text-center${
                      i === 1 || i === 3 ? " border-l border-white/25" : i === 2 ? " md:border-l md:border-white/25" : ""
                    }`}
                  >
                    <fact.Icon className="h-4 w-4 text-white flex-shrink-0 mt-0.5 md:mt-0 md:mb-1.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-serif text-white font-bold text-sm leading-tight md:mb-0.5">{fact.value}</p>
                      <p className="font-sans text-white/75 text-[0.6rem] leading-tight">{fact.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="hidden md:block py-5 bg-sunset-orange">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                {trip.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-white">
                    <Check className="h-4 w-4 flex-shrink-0" />
                    <span className="font-sans font-medium text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Route map ── */}
        {slug === "north-vietnam" && <RouteMap />}
        {slug === "north-vietnam" && (
          <div className="bg-[#FAF6EF] pt-4 pb-10 md:pt-5 md:pb-12 flex justify-center px-6">
            <a
              href={BROCHURE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-sans font-semibold text-sm px-8 py-4 rounded-full border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-300"
            >
              <FileText className="h-4 w-4 flex-shrink-0" />
              Day-by-Day Itinerary
            </a>
          </div>
        )}
        {slug === "north-vietnam" && <TripComfortSection />}
        {slug !== "north-vietnam" && tripRoutes[slug] && (
          <section className="py-16 bg-[#FAF6EF] border-t border-[#E8DDD0]/50">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <p className="font-sans text-ocean-teal font-medium tracking-widest uppercase mb-3 text-xs">
                  Your Journey
                </p>
                <h2 className="font-serif text-3xl font-bold text-navy">
                  Route <span className="italic text-sunset-orange">Overview</span>
                </h2>
              </div>
              <div className="relative flex items-start justify-between px-6 overflow-x-auto">
                <div className="absolute left-6 right-6 top-[40px] h-px bg-ocean-teal/30" />
                {tripRoutes[slug]?.map((stop, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center flex-shrink-0 px-2">
                    <span className="font-sans text-[10px] uppercase tracking-wider text-[#7A6A58] mb-2">Day {stop.day}</span>
                    <div className="w-3.5 h-3.5 rounded-full bg-sunset-orange ring-2 ring-white shadow-sm" />
                    <span className="font-sans text-xs font-semibold text-navy mt-3 text-center max-w-[72px] leading-tight">{stop.city}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── North Vietnam pricing block ── */}
        {slug === "north-vietnam" && <TripPricingBlock priceShared={trip.price.shared} priceSingle={trip.price.single} />}

        {/* ── What's included — hidden for north-vietnam (covered by TripPricingBlock) ── */}
        {slug !== "north-vietnam" && <section className="py-14 md:py-24 bg-[#F0E8DA]">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-4">What You Get</p>
              <h2 className="font-serif text-3xl lg:text-4xl text-navy">
                Everything <span className="italic text-sunset-orange">included</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-xl font-bold text-navy mb-6 flex items-center gap-3">
                  <div className="w-9 h-9 bg-ocean-teal text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Included
                </h3>
                <ul className="space-y-3">
                  {details.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm text-[#7A6A58]">
                      <Check className="h-4 w-4 text-ocean-teal flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-navy mb-6">Not Included</h3>
                <ul className="space-y-3">
                  {details.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm text-[#7A6A58]">
                      <span className="text-[#7A6A58]/40 flex-shrink-0">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>}

        {/* ── Final CTA ── */}
        <section className="py-12 md:py-16 bg-navy">
          <div className="flex justify-center px-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans font-semibold px-10 py-4 rounded-full bg-sunset-orange text-white hover:bg-ember transition-colors"
            >
              Inquire About This Trip
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
