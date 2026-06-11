"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown, ShieldCheck, Compass, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// ─── Data ─────────────────────────────────────────────────────────────────────


const DESTINATIONS = [
  {
    id: "north-vietnam",
    title: "North Vietnam",
    subtitle: "Mountains & Heritage",
    image: "/ai-landscapes/vietnam-2.png",
    price: "€4,400",
    duration: "12 days",
  },
  {
    id: "thailand",
    title: "Thailand",
    subtitle: "Land of Smiles",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    price: "€2,900",
    duration: "10 days",
  },
  {
    id: "south-vietnam",
    title: "South Vietnam",
    subtitle: "Rivers & History",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    price: "€2,500",
    duration: "9 days",
  },
  {
    id: "bali",
    title: "Bali",
    subtitle: "Island of Gods",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    price: "€2,400",
    duration: "7 days",
  },
]


const TESTIMONIALS = [
  {
    quote:
      "I've been to 30+ countries, but Out in Asia was something else entirely. Filippo and Szilard created a space where I could be completely myself — visiting temples by day and dancing freely at night.",
    author: "James M.",
    flag: "🇬🇧",
    trip: "Thailand · December 2026",
  },
  {
    quote:
      "Every detail was perfect — from the handpicked boutique hotels to the secret local restaurants no guidebook mentions. What moved me most was feeling truly safe and welcomed as a gay traveller everywhere we went.",
    author: "Marco V.",
    flag: "🇩🇪",
    trip: "Bali · March 2027",
  },
  {
    quote:
      "Waking up on a junk boat in Ha Long Bay surrounded by people who just got it — I still tear up thinking about it. Already planning my return.",
    author: "Thomas K.",
    flag: "🇫🇷",
    trip: "North Vietnam · April 2027",
  },
]

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], [0, -160])

  return (
    <section className="relative h-[85vh] min-h-[560px] overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.18]">
        <Image
          src="/ai-landscapes/vietnam-1.png"
          alt="Vietnam landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />

      {/* Bottom-left text block */}
      <div className="absolute bottom-[15%] left-0 w-full px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif font-extrabold" style={{ paddingBottom: "0.2em" }}>
            {[
              { text: "Travel Gay", italic: false },
              { text: "Be You", italic: true, orange: true },
              { text: "Belong Together", italic: false },
            ].map(({ text, italic, orange }, i) => (
              <div key={i}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.35 + i * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`block leading-[1.3] ${italic ? "italic" : ""} ${
                    orange ? "text-sunset-orange" : "text-white"
                  }`}
                  style={{ fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)" }}
                >
                  {text}
                </motion.span>
              </div>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center"
          >
            <p className="font-sans text-sm text-white/50 sm:max-w-[240px] sm:mr-4 leading-relaxed hidden sm:block">
              Curated luxury journeys exclusively for the LGBTQ+ community.
            </p>
            <div className="flex flex-wrap gap-3">
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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

// ─── Premium Stats ─────────────────────────────────────────────────────────────

const PILLARS = [
  {
    label: "SAFETY FIRST",
    statement: "Every destination handpicked for LGBTQ+ comfort",
    Icon: ShieldCheck,
  },
  {
    label: "EXPERT GUIDES",
    statement: "Led by gay travellers who know Asia deeply",
    Icon: Compass,
  },
  {
    label: "CURATED LUXURY",
    statement: "4 & 5-star stays, private transfers, no compromises",
    Icon: Sparkles,
  },
]

function PremiumStatsSection() {
  return (
    <section style={{ background: "radial-gradient(ellipse at 50% 50%, #132842 0%, #0E1F38 68%)" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-8 md:py-14">

        {/* MOBILE: compact horizontal rows */}
        <div className="flex flex-col gap-0 divide-y divide-[rgba(250,246,239,0.10)] md:hidden">
          {PILLARS.map(({ label, statement, Icon }) => (
            <div key={label} className="flex items-center gap-4 py-4 px-1">
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

        {/* DESKTOP: 3 columns centred */}
        <div className="hidden md:grid grid-cols-3 divide-x divide-[rgba(250,246,239,0.12)]">
          {PILLARS.map(({ label, statement, Icon }) => (
            <div key={label} className="px-8 py-6 text-center flex flex-col items-center">
              <Icon className="h-7 w-7 mb-4" style={{ color: "#1F8A8F" }} />
              <p className="font-sans text-xs uppercase mb-3" style={{ color: "#1F8A8F", letterSpacing: "0.15em" }}>
                {label}
              </p>
              <div style={{ width: 40, height: 1, backgroundColor: "#1F8A8F", opacity: 0.5, marginBottom: "1rem" }} />
              <p className="font-serif text-xl italic" style={{ color: "#FAF6EF" }}>
                {statement}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Destinations ──────────────────────────────────────────────────────────────

function DestinationCard({
  dest,
  index,
}: {
  dest: (typeof DESTINATIONS)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/trips/${dest.id}`}
        className="group block relative rounded-2xl overflow-hidden h-[220px] sm:h-[300px] lg:h-[368px]"
      >
        <Image
          src={dest.image}
          alt={dest.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />

        {/* Gradient — strong base for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:via-black/50" />

        {/* Duration — top left */}
        <div className="absolute top-5 left-5">
          <span className="px-3 py-1.5 bg-sunset-orange text-white text-xs font-sans font-semibold rounded-full">
            {dest.duration}
          </span>
        </div>

        {/* Price — top right */}
        <div className="absolute top-5 right-5">
          <span className="px-3 py-1.5 bg-black/30 backdrop-blur-sm text-white text-xs font-sans rounded-full border border-white/20">
            From {dest.price} /person
          </span>
        </div>

        {/* Text — bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <p className="font-sans text-[10px] text-white/50 uppercase tracking-[0.22em] mb-2">
            {dest.subtitle}
          </p>
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              {dest.title}
            </h3>
            <div className="opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-sunset-orange flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
          <div className="mt-4 h-px bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
        </div>
      </Link>
    </motion.div>
  )
}

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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.05]"
            >
              Four Destinations,{" "}
              <span className="italic text-sunset-orange">
                Endless Memories
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy hover:text-sunset-orange transition-colors group"
            >
              View all trips{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* 2×2 grid — mobile shows Thailand + Bali only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {DESTINATIONS.map((dest, i) => (
            <div key={dest.id} className={dest.id === "north-vietnam" || dest.id === "south-vietnam" ? "hidden md:block" : ""}>
              <DestinationCard dest={dest} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Founders ──────────────────────────────────────────────────────────────────

// Shared text content for FoundersSection (used on both mobile and desktop)
function FoundersText({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <p className="font-sans text-xs uppercase mb-6" style={{ color: "#1F8A8F", letterSpacing: "0.2em" }}>
        Meet Your Guides
      </p>
      <h2
        className={`font-serif font-extrabold leading-tight mb-6 ${mobile ? "text-3xl" : "text-3xl md:text-5xl md:leading-snug"}`}
        style={{ color: "#FAF6EF" }}
      >
        Two <span style={{ color: "#EA5A2A" }}>Gay</span> Travellers
        <br />One Shared Love for <span style={{ color: "#EA5A2A" }}>Asia</span>
      </h2>
      <p className="font-sans text-base leading-relaxed mb-10" style={{ color: "rgba(250,246,239,0.78)", maxWidth: mobile ? "100%" : "440px" }}>
        Between us, we have over 10 years of living across Southeast Asia.
        Filippo spent years as a digital nomad, discovering the region&apos;s
        hidden corners by motorbike. Szilard built a thriving premium travel
        business serving discerning clients from Hungary. We design journeys
        for travellers who want to experience Asia the way we do: authentically,
        safely, and unforgettably.
      </p>

      <div className="flex gap-10 mb-10">
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3">
            <Image src="/founders/filippo.jpg" alt="Filippo Rossi" fill className="object-cover object-center" />
          </div>
          <p className="font-serif text-sm mb-1" style={{ color: "#FAF6EF" }}>Filippo Rossi</p>
          <a href="https://instagram.com/fillorossi.91" target="_blank" rel="noopener noreferrer" className="font-sans text-xs" style={{ color: "#1F8A8F" }}>@fillorossi.91</a>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3">
            <Image src="/founders/szilard-2.jpg" alt="Szilárd Daróczi" fill className="object-cover object-top" />
          </div>
          <p className="font-serif text-sm mb-1" style={{ color: "#FAF6EF" }}>Szilárd Daróczi</p>
          <a href="https://instagram.com/szilard_utakon" target="_blank" rel="noopener noreferrer" className="font-sans text-xs" style={{ color: "#1F8A8F" }}>@szilard_utakon</a>
        </div>
      </div>

      <Link
        href="/about"
        className="font-sans font-semibold px-7 py-3.5 rounded-full border-2 transition-all self-start text-sm inline-block"
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
            src="/founders/together-ai-1.jpg"
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
        <div className="absolute top-0 right-0 bottom-0 w-[55%]" style={{ overflow: "hidden" }}>
          <Image
            src="/founders/together-ai-1.jpg"
            alt="Filippo and Szilard"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0E1F38 0%, rgba(14,31,56,0.55) 25%, rgba(14,31,56,0.1) 55%, transparent 75%)" }} />
        </div>
        <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-20 w-full max-w-[560px] lg:max-w-[46%]">
          <FoundersText />
        </div>
      </div>

    </section>
  )
}

// ─── Testimonials ──────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: "#FAF6EF" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.25em] uppercase text-center mb-8"
          style={{ color: "#1F8A8F" }}
        >
          What People Say About Us
        </motion.p>

        {/* Testimonial card — navy on cream */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="mx-auto max-w-2xl rounded-2xl p-7 md:p-10 relative"
              style={{
                backgroundColor: "#0E1F38",
                boxShadow: "0 8px 40px rgba(0,0,0,0.14)",
              }}
            >
              {/* Decorative opening quote */}
              <span
                aria-hidden
                className="absolute top-4 left-6 font-serif leading-none select-none pointer-events-none"
                style={{ fontSize: "4.5rem", color: "#EA5A2A", opacity: 0.25, lineHeight: 1 }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <blockquote
                className="font-serif text-base md:text-lg italic leading-relaxed mb-7 relative z-10 pt-4"
                style={{ color: "#FAF6EF" }}
              >
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </blockquote>

              {/* Avatar + author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(250,246,239,0.10)" }}
                >
                  <span className="font-serif font-bold text-2xl" style={{ color: "#FAF6EF" }}>
                    {TESTIMONIALS[current].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-bold text-sm" style={{ color: "#EA5A2A" }}>
                    {TESTIMONIALS[current].author}{" "}
                    <span className="font-normal">{TESTIMONIALS[current].flag}</span>
                  </p>
                  <p className="font-sans text-xs mt-1" style={{ color: "#1F8A8F" }}>
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
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src="/trips/north-vietnam.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(14,31,56,0.78)" }} />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
        >
          Ready To Explore<br />
          <span className="italic text-sunset-orange">Southeast Asia?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-white/60 text-lg mb-10"
        >
          Join Filippo and Szilard on a journey like no other.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-sans font-semibold px-8 py-4 rounded-full bg-sunset-orange text-white hover:bg-ember transition-colors"
          >
            Start Planning <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/trips"
            className="inline-flex items-center gap-2 font-sans font-semibold px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Browse All Trips
          </Link>
        </motion.div>
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
