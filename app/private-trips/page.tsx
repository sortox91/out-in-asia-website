import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Heart, Bike } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

export const metadata = {
  title: "Private Trips | Out in Asia",
  description:
    "Bespoke LGBTQ+ travel experiences in Southeast Asia — tailored entirely around you. Small group private tours, romantic escapes, and motorbike adventures.",
};

const tripTypes = [
  {
    icon: Users,
    title: "Small Group Private Trips",
    subtitle: "Your friends, your pace",
    description:
      "Book a departure exclusively for your group — same incredible itinerary, fully private. Perfect for friend groups, families, or anyone who wants the intimacy of a private experience without compromising on the quality of our guided tours.",
    image: "/gallery/group-1.png",
    alt: "Group of travellers in Southeast Asia",
  },
  {
    icon: Heart,
    title: "Honeymoons & Romantic Escapes",
    subtitle: "Unforgettable moments for two",
    description:
      "A journey crafted around love. From sunrise cruises on Ha Long Bay to private candlelit dinners, we design romantic experiences that feel effortless — so you can focus entirely on each other.",
    image: "/gallery/halong/sunset.jpg",
    alt: "Romantic sunset over Ha Long Bay",
  },
  {
    icon: Bike,
    title: "Motorbike Adventures",
    subtitle: "The open road, your way",
    description:
      "For those who want to feel the wind and explore beyond the tourist trail. Ride through terraced rice fields in Sapa, along coastal roads, or into remote villages — led by Filippo, who has crossed Asia by scooter for years.",
    image: "/gallery/sapa/rice-terraces.jpg",
    alt: "Rice terraces in Sapa, Vietnam",
  },
];

export default function PrivateTripsPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="overflow-x-hidden">

          {/* Hero */}
          <section className="relative py-28 md:py-44 bg-navy overflow-hidden">
            <Image
              src="/gallery/halong/bay.jpg"
              alt="Ha Long Bay, Vietnam"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-navy/65" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="font-sans text-ocean-teal font-medium tracking-widest uppercase mb-4 text-xs">
                  Private Trips
                </p>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Travel Designed Around{" "}
                  <span className="italic text-sunset-orange">Your Dreams</span>
                </h1>
                <p className="font-sans text-base md:text-xl text-sand/90 leading-relaxed max-w-xl">
                  Every detail tailored to you — your group, your pace, your story. We design bespoke journeys across Southeast Asia that feel entirely your own.
                </p>
              </div>
            </div>
          </section>

          {/* Trip Type Cards */}
          <section className="py-16 md:py-28 bg-warm-cream">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <p className="font-sans text-xs text-ocean-teal font-medium tracking-widest uppercase mb-4">
                  How We Can Help
                </p>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy">
                  Choose Your{" "}
                  <span className="italic text-sunset-orange">Adventure</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {tripTypes.map((trip) => (
                  <div
                    key={trip.title}
                    className="group rounded-2xl overflow-hidden bg-white"
                    style={{ boxShadow: "0 4px 32px rgba(14,31,56,0.08)" }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ paddingBottom: "62%" }}>
                      <Image
                        src={trip.image}
                        alt={trip.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="px-6 py-7">
                      <div className="flex items-center gap-2.5 mb-3">
                        <trip.icon
                          className="h-4 w-4 flex-shrink-0"
                          style={{ color: "#1F8A8F" }}
                          strokeWidth={1.75}
                        />
                        <p className="font-sans text-xs font-semibold tracking-widest uppercase text-ocean-teal">
                          {trip.subtitle}
                        </p>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-navy mb-3 leading-snug">
                        {trip.title}
                      </h3>
                      <p className="font-sans text-sm md:text-base leading-relaxed text-navy/70">
                        {trip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Consultation CTA */}
          <section className="py-16 md:py-28" style={{ backgroundColor: "#0E1F38" }}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left: text */}
                <div>
                  <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#1F8A8F" }}>
                    Let's Talk
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
                    Let's Design Your{" "}
                    <span className="italic text-sunset-orange">Perfect Journey</span>
                  </h2>
                  <p className="font-sans text-base md:text-lg leading-relaxed mb-4" style={{ color: "rgba(250,246,239,0.75)" }}>
                    Start with a one-on-one consultation with Filippo or Szilárd. We'll listen to your ideas, understand what you're looking for, and build a trip that's truly yours.
                  </p>
                  <p className="font-sans text-sm mb-10" style={{ color: "rgba(250,246,239,0.50)" }}>
                    A €60 consultation fee applies — fully deducted from your trip cost if you book with us.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-sans font-semibold tracking-wide px-8 py-4 rounded-full bg-sunset-orange text-white hover:bg-ember transition-colors duration-300"
                    >
                      Book a Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/trips"
                      className="inline-flex items-center font-sans font-semibold tracking-wide px-8 py-4 rounded-full text-white/80 hover:text-white transition-colors duration-300 underline underline-offset-4"
                    >
                      Browse Group Trips
                    </Link>
                  </div>
                </div>

                {/* Right: image */}
                <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/gallery/halong/cruise.jpg"
                    alt="Private cruise on Ha Long Bay"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/20" />
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
