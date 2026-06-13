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
    titleMain: "Private Group",
    titleAccent: "Trips",
    subtitle: "Tailored for your circle",
    description:
      "Travel privately with your own group of friends, family or mixed guests, including women. We create elegant journeys shaped around your shared interests, with beautiful stays and carefully planned moments.",
    image: "/private-trips/card-group.png",
    alt: "Group of travellers in Southeast Asia",
  },
  {
    icon: Heart,
    titleMain: "Romantic",
    titleAccent: "Escapes",
    subtitle: "Unforgettable moments for two",
    description:
      "For couples celebrating a honeymoon, anniversary or special moment together. We design romantic journeys with style, care and attention to every detail — effortless, beautiful, completely personal.",
    image: "/private-trips/card-honeymoon.png",
    alt: "Romantic escape in Southeast Asia",
  },
  {
    icon: Bike,
    titleMain: "Motorbike",
    titleAccent: "Adventures",
    subtitle: "Ride into the wild",
    description:
      "For those who seek authentic, remote places and a deeper connection with the destination. Immersive adventures shaped around the route and scenery, with selected stays and an assisted driver option.",
    image: "/private-trips/card-motorbike.png",
    alt: "Motorbike adventure in Southeast Asia",
  },
];

export default function PrivateTripsPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="overflow-x-hidden">

          {/* Hero — contained rectangle, narrower than cards */}
          <section className="bg-navy py-8 md:py-10">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="relative h-[52vh] min-h-[340px] rounded-2xl overflow-hidden">
                <Image
                  src="/private-trips/hero.png"
                  alt="Private trip in Southeast Asia"
                  fill
                  className="object-cover object-[65%_center]"
                  priority
                />
                <div className="absolute inset-0 bg-navy/60" />
                <div className="relative z-10 h-full flex items-end px-8 md:px-14 pb-10 md:pb-14">
                  <div className="max-w-2xl">
                    <p className="font-sans text-ocean-teal font-medium tracking-widest uppercase mb-4 text-xs">
                      Private Trips
                    </p>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                      You Dream<br />
                      We{" "}
                      <span className="italic text-sunset-orange">Design</span>
                    </h1>
                    <p className="font-sans text-sm md:text-base text-sand/80 leading-relaxed max-w-lg">
                      Bespoke journeys across Southeast Asia, shaped around your group, your pace and your story.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trip Type Cards */}
          <section className="py-14 md:py-24 bg-warm-cream">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
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
                    key={trip.titleMain}
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
                    <div className="px-6 py-6">
                      <div className="flex items-center gap-2.5 mb-3">
                        <trip.icon
                          className="h-4 w-4 flex-shrink-0"
                          style={{ color: "#1F8A8F" }}
                          strokeWidth={1.5}
                        />
                        <p className="font-sans text-xs font-semibold tracking-widest uppercase text-ocean-teal">
                          {trip.subtitle}
                        </p>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-navy mb-3 leading-snug">
                        {trip.titleMain}{" "}
                        <span className="italic text-sunset-orange">{trip.titleAccent}</span>
                      </h3>
                      <p className="font-sans text-sm leading-relaxed text-navy/70">
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
                  <div className="flex justify-center lg:justify-start">
                    <Link
                      href="/contact#reach-out"
                      className="inline-flex items-center gap-2 font-sans font-semibold tracking-wide px-8 py-4 rounded-full bg-sunset-orange text-white hover:bg-ember transition-colors duration-300"
                    >
                      Book a Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: image */}
                <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/private-trips/cta-bottom.png"
                    alt="Bespoke private trip in Southeast Asia"
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
