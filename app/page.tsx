"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
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

const VALUES = [
  {
    number: "01",
    title: "Small Groups",
    desc: "Intimate journeys with 6–12 like-minded travelers for genuine, lasting connection.",
  },
  {
    number: "02",
    title: "Curated Luxury",
    desc: "Handpicked boutique hotels and one-of-a-kind experiences at every single stop.",
  },
  {
    number: "03",
    title: "Safe Spaces",
    desc: "LGBTQ+ friendly throughout — every hotel, every guide, every single moment.",
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
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.18]">
        <Image
          src="/ai-landscapes/vietnam-1.png"
          alt="Vietnam landscape"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Bottom-left text block */}
      <div className="absolute bottom-[15%] left-0 w-full px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[10px] sm:text-xs tracking-[0.35em] uppercase text-white/50 mb-6"
          >
            Luxury LGBTQ+ Travel · Southeast Asia
          </motion.p>

          <h1 className="font-serif">
            {[
              { text: "Travel Gay.", italic: false },
              { text: "Be You.", italic: true, orange: true },
              { text: "Belong Together.", italic: false },
            ].map(({ text, italic, orange }, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.35 + i * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`block leading-[0.9] ${italic ? "italic" : ""} ${
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
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/30" />
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
  },
  {
    label: "EXPERT GUIDES",
    statement: "Led by gay travellers who know Asia deeply",
  },
  {
    label: "CURATED LUXURY",
    statement: "4 & 5-star stays, private transfers, no compromises",
  },
]

function PremiumStatsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url(/ai-landscapes/vietnam-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(14,31,56,0.82)" }} />
      <div className="relative py-[100px] mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(250,246,239,0.2)]">
          {PILLARS.map(({ label, statement }) => (
            <div key={label} className="px-8 py-10 md:py-0 text-center">
              <p
                className="font-sans text-xs uppercase mb-5"
                style={{ color: "#1F8A8F", letterSpacing: "0.15em" }}
              >
                {label}
              </p>
              <p className="font-serif text-2xl italic" style={{ color: "#FAF6EF" }}>
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
        className="group block relative rounded-2xl overflow-hidden h-[400px] lg:h-[460px]"
      >
        <Image
          src={dest.image}
          alt={dest.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F38]/90 via-[#0E1F38]/10 to-transparent transition-all duration-500 group-hover:via-[#0E1F38]/30" />

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
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="font-sans text-[10px] text-white/50 uppercase tracking-[0.22em] mb-2">
            {dest.subtitle}
          </p>
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-serif text-3xl lg:text-4xl text-white leading-tight">
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
    <section className="py-24 lg:py-32 bg-[#FAF6EF]">
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
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.05]"
            >
              Four destinations,{" "}
              <span className="italic text-sunset-orange relative inline-block">
                endless memories
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-sunset-orange/35 origin-left block"
                />
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

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard key={dest.id} dest={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Values ────────────────────────────────────────────────────────────────────

function ValuesSection() {
  return (
    <section className="py-24 lg:py-32 bg-navy overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-16"
        >
          Why Travel With Us
        </motion.p>

        <div className="divide-y divide-white/[0.07]">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="py-10 lg:py-14 flex items-start gap-8 lg:gap-16"
            >
              <span className="font-serif text-5xl lg:text-8xl text-ocean-teal font-bold leading-none flex-shrink-0 mt-1 select-none">
                {v.number}
              </span>
              <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:gap-16 pt-2">
                <h3 className="font-serif text-2xl lg:text-4xl text-white mb-3 lg:mb-0 lg:w-72 flex-shrink-0">
                  {v.title}
                </h3>
                <p className="font-sans text-white/40 leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Founders ──────────────────────────────────────────────────────────────────

function FoundersSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url(/founders/together.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(14,31,56,0.75)" }} />

      <div className="relative mx-auto max-w-[900px] px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        {/* Label */}
        <p
          className="font-sans text-xs uppercase mb-8"
          style={{ color: "#1F8A8F", letterSpacing: "0.2em" }}
        >
          MEET YOUR GUIDES
        </p>

        {/* Headline */}
        <h2
          className="font-serif font-bold leading-tight mb-8"
          style={{ color: "#FAF6EF", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
        >
          Two gay travellers. One shared obsession with Asia.
        </h2>

        {/* Paragraph */}
        <p
          className="font-sans text-base leading-relaxed mb-16 max-w-[600px]"
          style={{ color: "rgba(250,246,239,0.8)" }}
        >
          We met in an unusual way — we discovered we had a boyfriend in common. Instead of rivals,
          we became best friends, then business partners. Today we design journeys for gay travellers
          who want to experience Asia the way we do: authentically, safely, and unforgettably.
        </p>

        {/* Founder cards */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 mb-14">
          {/* Filippo */}
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image
                src="/founders/filippo.jpg"
                alt="Filippo Rossi"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-serif text-lg mb-2" style={{ color: "#FAF6EF" }}>
              Filippo Rossi
            </p>
            <a
              href="https://instagram.com/fillorossi.91"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm transition-colors"
              style={{ color: "#1F8A8F" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#EA5A2A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#1F8A8F")}
            >
              @fillorossi.91
            </a>
          </div>

          {/* Szilard */}
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image
                src="/founders/szilard.jpg"
                alt="Szilárd Utakon"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-serif text-lg mb-2" style={{ color: "#FAF6EF" }}>
              Szilárd Utakon
            </p>
            <a
              href="https://instagram.com/szilard_utakon"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm transition-colors"
              style={{ color: "#1F8A8F" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#EA5A2A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#1F8A8F")}
            >
              @szilard_utakon
            </a>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/about"
          className="font-sans font-semibold px-8 py-4 rounded-full border-2 transition-all"
          style={{ borderColor: "#FAF6EF", color: "#FAF6EF" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.backgroundColor = "#FAF6EF"
            el.style.color = "#0E1F38"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.backgroundColor = "transparent"
            el.style.color = "#FAF6EF"
          }}
        >
          Read Our Full Story →
        </Link>
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
    <section
      className="py-24 lg:py-36 bg-black relative overflow-hidden"
      style={{
        backgroundImage: "url(/ai-landscapes/vietnam-group.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay — sits above bg image, below all content */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Giant decorative quote */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-[22rem] leading-none text-sunset-orange/8 select-none pointer-events-none"
        aria-hidden
      >
        &ldquo;
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-14"
        >
          Traveler Stories
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
          >
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl italic text-white leading-relaxed mb-10">
              &ldquo;{TESTIMONIALS[current].quote}&rdquo;
            </blockquote>
            <p className="font-sans font-semibold text-white text-sm">
              {TESTIMONIALS[current].author}{" "}
              <span className="ml-1">{TESTIMONIALS[current].flag}</span>
            </p>
            <p className="font-sans text-xs text-white/35 mt-1">
              {TESTIMONIALS[current].trip}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === current ? "bg-sunset-orange w-8" : "bg-white/20 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ───────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <Image
          src="/ai-landscapes/vietnam-6.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Ready to explore
              <br />
              <span className="italic text-sunset-orange">Southeast Asia?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-white/45 text-lg mb-10 max-w-md"
            >
              Join Filippo and Szilard on a journey like no other.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-sans font-semibold px-8 py-4 rounded-full bg-sunset-orange text-white hover:bg-ember transition-colors"
              >
                Start Planning <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/trips"
                className="inline-flex items-center gap-2 font-sans font-semibold px-8 py-4 rounded-full border-2 border-white/25 text-white hover:bg-white/10 transition-colors"
              >
                Browse All Trips
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative h-72 w-96 max-w-full rounded-2xl overflow-hidden flex-shrink-0"
          >
            <Image
              src="/founders/together.jpg"
              alt="Filippo and Szilard"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
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
      <ValuesSection />
      <FoundersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
