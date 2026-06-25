"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, FileText, ChevronDown, Mail } from "lucide-react"

const BedIcon = ({ single = false }: { single?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    {single ? <path d="M6 8v9" /> : (<><path d="M6 8v5" /><path d="M14 8v5" /></>)}
  </svg>
)

const INCLUDED_PREVIEW = 3
const EXCLUDED_PREVIEW = 3

interface TripPricingBlockProps {
  priceShared: string
  priceSingle: string
  included: string[]
  notIncluded: string[]
  brochureUrl: string
  nextDates: string[]
  tripId: string
}

export function TripPricingBlock({ priceShared, priceSingle, included, notIncluded, brochureUrl, nextDates, tripId }: TripPricingBlockProps) {
  const [includedExpanded, setIncludedExpanded] = useState(false)
  const [excludedExpanded, setExcludedExpanded] = useState(false)

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
            THE DETAILS
          </p>
          <h2 className="font-serif font-bold text-white mb-2" style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}>
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
            <p className="font-serif text-white leading-none mb-1" style={{ fontSize: "clamp(1.4rem, 5vw, 2.5rem)" }}>
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

        {/* Lists — MOBILE: vertical stacked with read-more */}
        <div className="md:hidden space-y-4 mb-4">

          {/* Included */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ocean-teal mb-3">Included</p>
            <ul className="space-y-2.5">
              {(includedExpanded ? included : included.slice(0, INCLUDED_PREVIEW)).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-ocean-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-sans text-white/70 text-xs leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            {included.length > INCLUDED_PREVIEW && (
              <button
                onClick={() => setIncludedExpanded(!includedExpanded)}
                className="mt-3 flex items-center gap-1 font-sans text-xs font-semibold"
                style={{ color: "#1F8A8F" }}
              >
                {includedExpanded ? "Show less" : "Show more"}
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-200"
                  style={{ transform: includedExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
            )}
          </div>

          {/* Not Included */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: "#EA5A2A" }}>Not Included</p>
            <ul className="space-y-2.5">
              {(excludedExpanded ? notIncluded : notIncluded.slice(0, EXCLUDED_PREVIEW)).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <X className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: "#EA5A2A" }} strokeWidth={2} />
                  <span className="font-sans text-white/35 text-xs leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            {notIncluded.length > EXCLUDED_PREVIEW && (
              <button
                onClick={() => setExcludedExpanded(!excludedExpanded)}
                className="mt-3 flex items-center gap-1 font-sans text-xs font-semibold"
                style={{ color: "#EA5A2A" }}
              >
                {excludedExpanded ? "Show less" : "Show more"}
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-200"
                  style={{ transform: excludedExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
            )}
          </div>

        </div>

        {/* Lists — DESKTOP: two-column grid, all visible */}
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
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-ocean-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="font-sans text-white/70 text-xs leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#EA5A2A" }}>Not Included</p>
            <ul className="space-y-2.5">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <X className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style={{ color: "#EA5A2A" }} strokeWidth={2} />
                  <span className="font-sans text-white/35 text-xs leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Note — mobile only (repris dans le bloc desktop 2-col ci-dessous) */}
        <p className="md:hidden font-sans text-white/25 text-xs text-center mb-5">
          Minimum 8 participants · 50% deposit to confirm booking
        </p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {/* MOBILE CTAs */}
          <div className="md:hidden">
            <a
              href={brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-8 bg-sunset-orange text-white rounded-full font-sans font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <FileText className="h-4 w-4 flex-shrink-0" />
              Download Brochure
            </a>
            <p className="font-sans text-white/40 text-xs text-center mt-3 mb-4">
              Check day-by-day itinerary, booking conditions and full trip details
            </p>
            {/* Dates left + Enquire Now right */}
            <div className="flex items-center gap-3">
              <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                {nextDates.map((date, i) => (
                  <span key={i} className="px-2.5 py-1 border border-white/15 text-white/55 text-[10px] font-sans rounded-full whitespace-nowrap" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                    {date}
                  </span>
                ))}
              </div>
              <a
                href={`/contact?trip=${tripId}#reach-out`}
                className="flex-shrink-0 flex items-center gap-1.5 py-3 px-5 border border-white/25 text-white/75 rounded-full font-sans font-semibold text-xs hover:border-white/55 hover:text-white transition-all"
              >
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                Enquire Now
              </a>
            </div>
          </div>

          {/* DESKTOP : 2 colonnes — textes à gauche / Download à droite */}
          <div className="hidden md:flex items-center gap-6 mb-2">
            <div className="flex-1 min-w-0">
              <p className="font-sans text-white/40 text-xs leading-snug">
                Check day-by-day itinerary, booking conditions and full trip details
              </p>
              <p className="font-sans text-white/25 text-xs mt-1.5">
                Minimum 8 participants · 50% deposit to confirm booking
              </p>
            </div>
            <a
              href={brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2.5 py-4 px-8 bg-sunset-orange text-white rounded-full font-sans font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <FileText className="h-4 w-4 flex-shrink-0" />
              Download Brochure
            </a>
          </div>

          {/* Enquire Now — desktop */}
          <a
            href={`/contact?trip=${tripId}#reach-out`}
            className="hidden md:flex w-full items-center justify-center gap-2 mt-1.5 py-3.5 px-8 border border-white/20 text-white/55 rounded-full font-sans font-medium text-sm hover:border-white/50 hover:text-white/80 transition-all"
          >
            <Mail className="h-4 w-4 flex-shrink-0" />
            Enquire Now
          </a>
        </motion.div>

      </div>
    </section>
  )
}
