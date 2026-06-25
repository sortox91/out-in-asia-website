import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Private Trips | Out in Asia",
  description:
    "Bespoke LGBTQ+ travel experiences in Southeast Asia, tailored entirely around you. Small group private tours, romantic escapes, and motorbike adventures.",
};

const tripTypes = [
  {
    eyebrow: "TAILORED FOR YOUR CIRCLE",
    title: "Private Group Trips",
    image: "/private-trips/card-private-groups.png",
    alt: "Group of travellers in Southeast Asia",
    descriptionDesktop:
      "Travel privately with your own group of friends, family or mixed guests, including women. We create elegant, seamless journeys shaped around your shared interests, combining beautiful stays, meaningful experiences and carefully planned moments. The result is a private escape that feels personal, refined and effortlessly enjoyable from beginning to end.",
    descriptionMobile:
      "Travel privately with your own group, including friends, family or mixed guests. We craft elegant journeys with beautiful stays and carefully planned moments.",
  },
  {
    eyebrow: "UNFORGETTABLE MOMENTS FOR TWO",
    title: "Romantic Escapes",
    image: "/private-trips/card-honeymoon.png",
    alt: "Romantic escape in Southeast Asia",
    descriptionDesktop:
      "For couples celebrating a honeymoon, an anniversary or simply a special moment together, we design romantic journeys with style, care and attention to every detail. From refined stays and scenic settings to intimate moments and unforgettable shared experiences, each itinerary is thoughtfully crafted to feel effortless, beautiful and completely personal.",
    descriptionMobile:
      "For couples celebrating a honeymoon, anniversary or a special moment, we design romantic journeys with style, care and attention to every detail.",
  },
  {
    eyebrow: "RIDE INTO THE WILD",
    title: "Motorbike Adventures",
    image: "/private-trips/card-motorbike.png",
    alt: "Motorbike adventure in Southeast Asia",
    descriptionDesktop:
      "Created for real nature lovers, our motorbike trips are designed for those who seek authentic, remote places and a deeper connection with the destination. We craft immersive adventures shaped around the route and scenery, while keeping comfort at the heart of the journey, with selected stays and an assisted driver option for guests who prefer not to ride.",
    descriptionMobile:
      "For those who seek authentic, remote places and a deeper connection with the destination. Immersive adventures with selected stays and an assisted driver option.",
  },
];

export default function PrivateTripsPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="overflow-x-hidden">

          <PageHero
            image="/private-trips/cover-web.png"
            mobileObjectPosition="72% center"
            eyebrow="PRIVATE TRIPS"
            title="You Dream"
            titleLine2="We"
            titleLine2Accent="Design"
            subtitle="Bespoke journeys across Southeast Asia, shaped around your group, your pace"
          />

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
                    key={trip.title}
                    className="group rounded-2xl overflow-hidden bg-white"
                    style={{ boxShadow: "0 4px 32px rgba(14,31,56,0.08)" }}
                  >
                    <div className="relative overflow-hidden" style={{ paddingBottom: "62%" }}>
                      <Image
                        src={trip.image}
                        alt={trip.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="px-6 py-6">
                      <p className="font-sans text-xs font-semibold tracking-widest uppercase text-ocean-teal mb-3">
                        {trip.eyebrow}
                      </p>
                      <h3 className="font-serif text-xl font-bold text-navy mb-3 leading-snug">
                        {trip.title}
                      </h3>
                      <p className="hidden md:block font-sans text-sm leading-relaxed text-navy/70">
                        {trip.descriptionDesktop}
                      </p>
                      <p className="md:hidden font-sans text-sm leading-relaxed text-navy/70">
                        {trip.descriptionMobile}
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

                <div>
                  <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#1F8A8F" }}>
                    Let&apos;s Talk
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
                    Let&apos;s Design Your{" "}
                    <span className="italic text-sunset-orange">Perfect Journey</span>
                  </h2>
                  <p className="font-sans text-base md:text-lg leading-relaxed mb-6" style={{ color: "rgba(250,246,239,0.75)" }}>
                    Start with a one-on-one consultation with Filippo or Szilárd. We&apos;ll listen to your ideas, understand what you&apos;re looking for, and build a trip that&apos;s truly yours.
                  </p>
                  <p className="font-sans text-base font-semibold text-sunset-orange mb-2">
                    Travel Consultation — €60
                  </p>
                  <p className="font-sans text-xs mb-10" style={{ color: "rgba(250,246,239,0.45)" }}>
                    If you proceed with a booking, this fee is fully deducted from your trip cost.
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

                <div className="relative h-56 md:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/private-trips/bottom-image.png"
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
