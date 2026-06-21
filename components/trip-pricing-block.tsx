"use client"

export const BROCHURE_URL =
  "https://drive.google.com/file/d/17-Q1ewgfsz1qfnys3RtQI9GCpmwc00Nx/view"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Check, X, FileText } from "lucide-react"

const BedIcon = ({ single = false }: { single?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    {single ? <path d="M6 8v9" /> : (<><path d="M6 8v5" /><path d="M14 8v5" /></>)}
  </svg>
)

const INCLUDED = [
  "Travel with Filippo and Szilard",
  "9 nights in 4/5 star hotels",
  "2 night luxury yacht cruise",
  "Selected meals and activities",
  "Private premium transports",
]

const NOT_INCLUDED = [
  "International flights",
  "Travel insurance",
  "Personal expenses",
  "Extra activities not listed",
  "Early check-in / late check-out",
]

interface TripPricingBlockProps {
  priceShared: string
  priceSingle: string
}

export function TripPricingBlock({ priceShared, priceSingle }: TripPricingBlockProps) {
  const [activeList, setActiveList] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth } = scrollRef.current
    setActiveList(scrollLeft > scrollWidth / 4 ? 1 : 0)
  }

  return (
    <section className="py-10 md:py-16 bg-[#0E1F38]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-3">
            Pricing
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-2">
            Pricing &amp; <span className="italic text-sunset-orange">Inclusions</span>
          </h2>
          <p className="font-sans text-sm text-white/45">
            Two room options. Same unforgettable journey
          </p>
        </motion.div>

        {/* Pricing cards — always side by side */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="border border-ocean-teal/50 rounded-xl p-3 md:p-5 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
          >
            <div className="text-ocean-teal mb-3">
              <BedIcon />
            </div>
            <p className="font-sans text-white/45 text-[10px] uppercase tracking-[0.2em] mb-1.5">
              Shared Deluxe Room
            </p>
            <p className="font-serif text-sunset-orange leading-none mb-1" style={{ fontSize: "clamp(1.4rem, 5vw, 2.5rem)" }}>
              {priceShared}
            </p>
            <p className="font-sans text-white/30 text-[10px]">per person</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="border border-white/15 rounded-xl p-3 md:p-5 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
          >
            <div className="text-white/45 mb-3">
              <BedIcon single />
            </div>
            <p className="font-sans text-white/45 text-[10px] uppercase tracking-[0.2em] mb-1.5">
              Single Deluxe Room
            </p>
            <p className="font-serif text-white leading-none mb-1" style={{ fontSize: "clamp(1.4rem, 5vw, 2.5rem)" }}>
              {priceSingle}
            </p>
            <p className="font-sans text-white/30 text-[10px]">per person</p>
          </motion.div>
        </div>

        {/* Lists — mobile: horizontal scroll cards, desktop: two-column grid */}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="md:hidden overflow-x-auto flex gap-3 pb-2 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex-shrink-0 w-[75vw] snap-start rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ocean-teal mb-3">Included</p>
            <ul className="space-y-2.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-ocean-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-sans text-white/70 text-xs leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0 w-[75vw] snap-start rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">Not Included</p>
            <ul className="space-y-2.5">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <X className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: "#B89870", opacity: 0.55 }} strokeWidth={2} />
                  <span className="font-sans text-white/35 text-xs leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scroll dots — mobile only */}
        <div className="md:hidden flex justify-center gap-2 mt-2.5 mb-4">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="block w-2 h-2 rounded-full transition-colors duration-250"
              style={{ backgroundColor: i === activeList ? "#EA5A2A" : "rgba(255,255,255,0.18)" }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="hidden md:grid grid-cols-2 gap-6 rounded-xl border border-white/10 bg-white/[0.03] p-6 mb-5"
        >
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-ocean-teal mb-3">Included</p>
            <ul className="space-y-2.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-ocean-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-sans text-white/70 text-xs leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/30 mb-3">Not Included</p>
            <ul className="space-y-2.5">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <X className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: "#B89870", opacity: 0.55 }} strokeWidth={2} />
                  <span className="font-sans text-white/35 text-xs leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Note */}
        <p className="font-sans text-white/25 text-xs text-center mb-5">
          Minimum 8 participants · 50% deposit to confirm booking
        </p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className=""
        >
          <a
            href={BROCHURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-4 px-8 bg-sunset-orange text-white rounded-full font-sans font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <FileText className="h-4 w-4 flex-shrink-0" />
            Download the full brochure
          </a>
        </motion.div>

      </div>
    </section>
  )
}
