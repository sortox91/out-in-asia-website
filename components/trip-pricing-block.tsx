"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const BedIcon = ({ single = false }: { single?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    {single ? (
      <path d="M6 8v9" />
    ) : (
      <>
        <path d="M6 8v5" />
        <path d="M14 8v5" />
      </>
    )}
  </svg>
)

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

export function TripPricingBlock() {
  return (
    <section className="py-20 lg:py-24 bg-[#0E1F38]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-4">
            Pricing
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-white">
            Choose Your <span className="italic text-sunset-orange">Room Type</span>
          </h2>
        </motion.div>

        {/* Two cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {/* Shared */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border border-ocean-teal/50 rounded-2xl p-8 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
          >
            <div className="text-ocean-teal mb-6">
              <BedIcon />
            </div>
            <p className="font-sans text-white/50 text-xs uppercase tracking-[0.2em] mb-3">
              Shared Deluxe Room
            </p>
            <p
              className="font-serif text-sunset-orange leading-none mb-1"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}
            >
              €4,400
            </p>
            <p className="font-sans text-white/35 text-sm">per person</p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <ul className="space-y-2">
                {[
                  "6 nights breakfast in premium 4-star hotels",
                  "3 nights breakfast in 5-star hotel",
                  "2 nights on luxury yacht full board",
                ].map((f) => (
                  <li key={f} className="font-sans text-white/50 text-xs flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-ocean-teal flex-shrink-0 mt-1.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Single */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border border-white/15 rounded-2xl p-8 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
          >
            <div className="text-white/50 mb-6">
              <BedIcon single />
            </div>
            <p className="font-sans text-white/50 text-xs uppercase tracking-[0.2em] mb-3">
              Single Deluxe Room
            </p>
            <p
              className="font-serif text-white leading-none mb-1"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}
            >
              €4,900
            </p>
            <p className="font-sans text-white/35 text-sm">per person</p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <ul className="space-y-2">
                {[
                  "Same inclusions as shared",
                  "Private room guaranteed throughout",
                ].map((f) => (
                  <li key={f} className="font-sans text-white/50 text-xs flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-1.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-sunset-orange text-white rounded-full font-sans font-semibold hover:bg-ember transition-colors text-sm"
          >
            Book a Discovery Call <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://drive.google.com/uc?export=download&id=17-Q1ewgfsz1qfnys3RtQI9GCpmwc00Nx"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 px-8 border-2 border-sunset-orange text-sunset-orange rounded-full font-sans font-semibold hover:bg-sunset-orange hover:text-white transition-all text-sm"
          >
            <DownloadIcon />
            Download Full Brochure (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  )
}
