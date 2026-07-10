"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown, ShieldCheck, Compass, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TripCard } from "@/components/trip-card"

// ─── Data ─────────────────────────────────────────────────────────────────────

const DESTINATIONS = [
  {
    id: "north-vietnam",
    title: "North Vietnam",
    subtitle: "Mountains & Heritage",
    image: "/trips/north-vietnam.png",
    price: { shared: "€4,700", single: "€5,500" },
    duration: "12 days",
  },
  {
    id: "thailand",
    title: "Thailand",
    subtitle: "Land of Smiles",
    image: "/trips/thailand.png",
    price: { shared: "€5,600", single: "€6,700" },
    duration: "12 days",
  },
  {
    id: "south-vietnam",
    title: "South Vietnam",
    subtitle: "Rivers & History",
    image: "/trips/south-vietnam.png",
    price: { shared: "€5,100", single: "€5,800" },
    duration: "12 days",
  },
  {
    id: "bali",
    title: "Bali",
    subtitle: "Island of Gods",
    image: "/trips/bali.png",
    price: { shared: "€5,700", single: "€6,800" },
    duration: "13 days",
  },
]

const HOME_TRIP_DATES: Record<string, string[]> = {
  thailand:        ["1 - 12 December 2026", "15 - 27 February 2027"],
  "north-vietnam": ["2 - 13 April 2027", "3 - 14 September 2027"],
  "south-vietnam": ["18 - 29 January 2027", "1 - 12 November 2027"],
  bali:            ["12 - 24 March 2027", "3 - 15 May 2027", "8 - 20 July 2027", "4 - 16 August 2027", "16 - 28 October 2027"],
}

const TESTIMONIALS = [
  {
    quote:
      "Every detail was perfect, from the handpicked boutique hotels to the secret local restaurants no guidebook mentions. What moved me most was feeling truly safe and welcomed as a gay traveller everywhere we went.",
    author: "Marco V.",
    flag: "🇮🇹",
    trip: "Bali · April 2026",
    photo: "/reviews/reviewer-1.png",
  },
  {
    quote:
      "North Vietnam completely exceeded my expectations. The landscapes were incredible, but what made the journey special was the atmosphere of the group, relaxed, elegant and genuinely inclusive. I never felt like just another tourist.",
    author: "David C.",
    flag: "🇬🇧",
    trip: "North Vietnam · March 2026",
    photo: "/reviews/reviewer-2.png",
  },
  {
    quote:
      "I loved how well everything flowed, from the hotels and transfers to the local experiences. South Vietnam felt vibrant, authentic and easy to enjoy because everything had been so thoughtfully planned. It was my first gay group trip, and definitely not my last.",
    author: "Marcus R.",
    flag: "🇺🇸",
    trip: "South Vietnam · January 2026",
    photo: "/reviews/reviewer-3.png",
  },
  {
    quote:
      "Bali was the perfect mix of beauty, comfort and connection. I joined solo and left with unforgettable memories and new friends. The trip felt polished but never stiff, and I could fully relax and be myself throughout.",
    author: "Kenji N.",
    flag: "🇯🇵",
    trip: "Bali · May 2026",
    photo: "/reviews/reviewer-4.png",
  },
]

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], [0, -160])

  return (
    <section className="relative h-[65vh] md:h-screen min-h-[480px] md:min-h-[600px] overflow-hidden">

      {/* Desktop background — landscape, with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.18] hidden md:block">
        <Image
          src="/hero/hero-home-web.png"
          alt="Out in Asia"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Mobile background — portrait 4:5, no parallax */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/hero/hero-home-mobile.png"
          alt="Out in Asia"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/25" />

      {/* Title block:
          Mobile → top of section (people are in bottom of image)
          Desktop → bottom-left */}
      <div className="absolute top-[108px] left-0 w-full px-6 sm:px-10 md:top-auto md:bottom-[22%] lg:bottom-[28%] lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* A — font-bold (700), ~20% smaller than before.
              All text white — "Be You" orange had <1.5:1 contrast on the warm sunset image. */}
          <h1 className="font-serif font-bold" style={{ paddingBottom: "0.2em" }}>
            {[
              <>Travel <span className="italic text-sunset-orange">Gay</span></>,
              <>Be <span className="italic text-sunset-orange">You</span></>,
              <>Belong Together</>,
            ].map((content, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.35 + i * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block leading-[1.3] text-white text-[clamp(2rem,5.75vw,2.5rem)] md:text-[clamp(2.5rem,6.9vw,6rem)] lg:text-[clamp(2.125rem,5.865vw,5.1rem)]"
                >
                  {content}
                </motion.span>
              </div>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-3 md:mt-8 flex flex-col gap-4 items-start"
          >
            <p className="font-sans w-full text-[11.5px] sm:text-sm text-white/50 leading-relaxed lg:whitespace-nowrap [text-wrap:normal]">
              Curated premium journeys exclusively{" "}
              <span className="md:hidden"><br /></span>
              for the LGBTQ+ community.
            </p>
            <div className="hidden md:flex flex-row gap-3">
              <Link
                href="/trips"
                className="inline-flex items-center gap-2 font-sans font-semibold px-7 py-3.5 rounded-full bg-sunset-orange text-white hover:bg-ember transition-colors text-sm"
              >
                Explore Journeys <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-sans font-semibold px-7 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors text-sm"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─── Pillars ──────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    label: "SAFETY FIRST",
    statement: "Destinations chosen for LGBTQ+ comfort",
    Icon: ShieldCheck,
  },
  {
    label: "EXPERT GUIDES",
    statement: "Led by gay travellers who know Asia deeply",
    Icon: Compass,
  },
  {
    label: "CURATED LUXURY",
    statement: "Premium stays, private transfers, always",
    Icon: Sparkles,
  },
]

function PremiumStatsSection() {
  return (
    <section className="relative z-10" style={{ backgroundColor: "#0E1F38" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-3 md:py-0">

        {/* MOBILE: compact horizontal rows */}
        <div className="flex flex-col gap-0 divide-y divide-[rgba(250,246,239,0.10)] md:hidden">
          {PILLARS.map(({ label, statement, Icon }) => (
            <div key={label} className="flex items-center gap-4 py-2.5 px-1">
              <Icon className="h-6 w-6 flex-shrink-0" style={{ color: "#1F8A8F" }} />
              <div>
                <p className="font-sans text-[10px] uppercase font-semibold mb-0.5" style={{ color: "#1F8A8F", letterSpacing: "0.15em" }}>
                  {label}
                </p>
                <p className="font-serif text-sm italic leading-snug" style={{ color: "#FAF6EF" }}>
                  {statement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP: slim 3-column strip */}
        <div className="hidden md:grid grid-cols-3 divide-x divide-[rgba(250,246,239,0.10)]">
          {PILLARS.map(({ label, statement, Icon }) => (
            <div key={label} className="flex items-center gap-3 px-8 py-4">
              <Icon className="h-4 w-4 flex-shrink-0" style={{ color: "#1F8A8F" }} />
              <div>
                <p className="font-sans uppercase font-semibold leading-none mb-1" style={{ color: "#1F8A8F", letterSpacing: "0.18em", fontSize: "0.6rem" }}>
                  {label}
                </p>
                <p className="font-serif italic leading-snug" style={{ color: "rgba(250,246,239,0.82)", fontSize: "0.78rem" }}>
                  {statement}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Destinations ──────────────────────────────────────────────────────────────

function DestinationsSection() {
  return (
    <section className="py-14 md:py-24 lg:py-32 bg-[#FAF6EF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-4"
            >
              Our Journeys
            </motion.p>
            {/* A — font-bold */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.05]"
            >
              Four Destinations,{" "}
              <span className="italic text-sunset-orange">
                Endless Memories
              </span>
            </motion.h2>
          </div>
          {/* View all trips — desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden md:block"
          >
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy hover:text-sunset-orange transition-colors group whitespace-nowrap"
            >
              View all trips{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* 2×2 grid — mobile shows Thailand + Bali only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {DESTINATIONS.map((dest, i) => (
            <div
              key={dest.id}
              className={dest.id === "north-vietnam" || dest.id === "south-vietnam" ? "hidden md:block" : ""}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <TripCard
                  id={dest.id}
                  title={dest.title}
                  subtitle={dest.subtitle}
                  description=""
                  duration={dest.duration}
                  image={dest.image}
                  price={dest.price}
                  nextDates={HOME_TRIP_DATES[dest.id] ?? []}
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Mobile only — View all trips after the 2 visible cards */}
        <div className="md:hidden mt-6 flex justify-center">
          <Link
            href="/trips"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy hover:text-sunset-orange transition-colors group"
          >
            View all trips{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Founders ──────────────────────────────────────────────────────────────────

function FoundersText({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <p className={`font-sans text-xs uppercase ${mobile ? "mb-3" : "mb-6"}`} style={{ color: "#1F8A8F", letterSpacing: "0.2em" }}>
        Meet Your Guides
      </p>
      {/* A — font-bold, E — "Gay" and "Love" in orange italic, "Shared" removed */}
      <h2
        className={`font-serif font-bold leading-tight mb-6 ${mobile ? "text-3xl" : "text-3xl md:text-5xl md:leading-snug"}`}
        style={{ color: "#FAF6EF" }}
      >
        Two{" "}
        <span className="italic" style={{ color: "#EA5A2A" }}>Gay</span>
        {" "}Travellers
        <br />
        One{" "}
        <span className="italic" style={{ color: "#EA5A2A" }}>Love</span>
        {" "}for Asia
      </h2>
      <p
        className={`font-sans leading-relaxed ${mobile ? "mb-8 text-[12.5px] [text-wrap:normal]" : "mb-6 text-[12.5px] md:text-sm"}`}
        style={{ color: "rgba(250,246,239,0.78)" }}
      >
        Between us, we&apos;ve spent over 10 years living across Southeast Asia. Filippo explored
        the region as a digital nomad, discovering hidden corners by motorbike, while Szilárd
        built a premium travel company mainly serving Hungarian travellers across Asia.
        Together, we&apos;ve combined our local knowledge, passion and experience to design
        small-group adventures where you can discover the region authentically, connect with
        like-minded travellers, and simply be yourself.
      </p>

      <div className={`${mobile ? "mb-10" : "mb-8"} flex items-center`}>
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/founders/filippo.jpg" alt="Filippo Rossi" fill className="object-cover" style={{ objectPosition: "center" }} />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-serif text-sm font-bold leading-none" style={{ color: "#FAF6EF" }}>Filippo Rossi</p>
            <a href="https://instagram.com/fillorossi.91" target="_blank" rel="noopener noreferrer" className="font-sans text-xs leading-none" style={{ color: "#1F8A8F" }}>@fillorossi.91</a>
          </div>
        </div>
        <div className="w-px h-12 bg-white/20 mx-6 shrink-0" />
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/founders/szilard-2.jpg" alt="Szilárd Daróczi" fill className="object-cover" style={{ objectPosition: "top" }} />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-serif text-sm font-bold leading-none" style={{ color: "#FAF6EF" }}>Szilárd Daróczi</p>
            <a href="https://instagram.com/szilard_utakon" target="_blank" rel="noopener noreferrer" className="font-sans text-xs leading-none" style={{ color: "#1F8A8F" }}>@szilard_utakon</a>
          </div>
        </div>
      </div>

      <Link
        href="/about"
        className="font-sans font-semibold px-7 py-3.5 rounded-full border-2 transition-all text-sm block text-center w-full"
        style={{ borderColor: "#FAF6EF", color: "#FAF6EF" }}
        onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#FAF6EF"; el.style.color = "#0E1F38" }}
        onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.color = "#FAF6EF" }}
      >
        Read Our Full Story →
      </Link>
    </>
  )
}

function FoundersSection() {
  return (
    <section className="overflow-hidden" style={{ backgroundColor: "#0E1F38" }}>

      {/* ── MOBILE: image on top, text below ── */}
      <div className="md:hidden">
        <div className="relative h-72 overflow-hidden">
          <Image
            src="/guides/founders-home.png"
            alt="Filippo and Szilard"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0E1F38 0%, rgba(14,31,56,0.3) 60%, transparent 100%)" }} />
        </div>
        <div className="px-6 pb-14 -mt-6 relative z-10">
          <FoundersText mobile />
        </div>
      </div>

      {/* ── DESKTOP: image right, text left ── */}
      <div className="hidden md:flex relative overflow-hidden items-center" style={{ minHeight: "540px" }}>
        <div className="absolute top-0 right-0 bottom-0 w-[50%]" style={{ overflow: "hidden" }}>
          <Image
            src="/guides/founders-home.png"
            alt="Filippo and Szilard"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0E1F38 0%, rgba(14,31,56,0.55) 25%, rgba(14,31,56,0.1) 55%, transparent 75%)" }} />
        </div>
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="pt-8 lg:pt-10 pb-12 lg:pb-14 max-w-[300px] lg:max-w-[44%]">
              <FoundersText />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

// ─── Testimonials ──────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % TESTIMONIALS.length), 10000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: "#FAF6EF" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.25em] uppercase text-center mb-8"
          style={{ color: "#1F8A8F" }}
        >
          What People Say About Us
        </motion.p>

        {/* F — cream card with soft shadow (previously navy) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="mx-auto max-w-2xl rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 20px rgba(14,31,56,0.08)",
                border: "1px solid rgba(14,31,56,0.06)",
              }}
            >
              {/* Quote area */}
              <div className="relative p-7 md:p-9 pb-5 md:pb-6">
                <span
                  aria-hidden
                  className="absolute top-4 left-6 font-serif leading-none select-none pointer-events-none"
                  style={{ fontSize: "4rem", color: "#EA5A2A", opacity: 0.10, lineHeight: 1 }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="font-serif text-sm md:text-base italic leading-relaxed relative z-10 pt-3 text-center"
                  style={{ color: "#0E1F38" }}
                >
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </blockquote>
              </div>

              {/* Separator */}
              <div style={{ borderTop: "1px solid rgba(14,31,56,0.12)", margin: "0" }} />

              {/* Author row — always horizontal, flush at the bottom */}
              <div className="flex items-center justify-center gap-4 px-7 md:px-9 py-4 md:py-5">
                <div className="w-11 h-11 md:w-13 md:h-13 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={TESTIMONIALS[current].photo}
                    alt={TESTIMONIALS[current].author}
                    width={52}
                    height={52}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm" style={{ color: "#EA5A2A" }}>
                    {TESTIMONIALS[current].author}{" "}
                    <span className="font-normal" style={{ color: "#0E1F38" }}>{TESTIMONIALS[current].flag}</span>
                  </p>
                  <p className="font-sans text-xs mt-0.5" style={{ color: "#1F8A8F" }}>
                    {TESTIMONIALS[current].trip}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex justify-center gap-1 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              className="py-4 px-2 flex items-center"
            >
              <span className={`block h-[3px] rounded-full transition-all duration-300 ${
                i === current ? "bg-sunset-orange w-8" : "bg-navy/30 w-3"
              }`} />
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── CTA ───────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="relative pt-20 pb-16 md:py-24 lg:py-28 overflow-hidden min-h-[500px] md:min-h-0">
      {/* Desktop image */}
      <div className="absolute inset-0 hidden md:block">
        <Image src="/ready-to-explore/explore-web.png" alt="" fill className="object-cover object-[center_80%]" />
      </div>
      {/* Mobile image — object-top anchors the sky at the top of the section */}
      <div className="absolute inset-0 md:hidden">
        <Image src="/ready-to-explore/explore-mobile.png" alt="" fill className="object-cover object-[center_25%]" />
      </div>
      {/* Desktop overlay */}
      <div className="absolute inset-0 hidden md:block" style={{ background: "linear-gradient(to left, rgba(14,31,56,0.90) 0%, rgba(14,31,56,0.70) 30%, rgba(14,31,56,0.25) 60%, transparent 85%)" }} />
      {/* Mobile overlay : dark at the top where text sits (sky zone) */}
      <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to bottom, rgba(14,31,56,0.78) 0%, rgba(14,31,56,0.50) 50%, rgba(14,31,56,0.08) 100%)" }} />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-16 md:flex md:justify-end">
        <div className="w-full max-w-lg text-center md:text-right">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-3 md:mb-6"
          >
            <span className="block md:whitespace-nowrap">Ready To Explore</span>
            <span className="italic text-sunset-orange">Southeast Asia?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-white/60 text-xs md:text-lg mb-5 md:mb-10"
          >
            Join Filippo and Szilard on a journey like no other
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-3 md:flex-row md:gap-4 md:justify-end"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans font-semibold px-8 py-4 rounded-full bg-sunset-orange text-white hover:bg-ember transition-colors"
            >
              Start Planning <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <PremiumStatsSection />
      <DestinationsSection />
      <FoundersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
