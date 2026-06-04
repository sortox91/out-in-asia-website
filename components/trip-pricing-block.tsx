"use client"

import { motion } from "framer-motion"

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ width: 18, height: 18, flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 15, height: 15, flexShrink: 0, marginTop: 1 }}>
    <circle cx="10" cy="10" r="10" fill="#1F8A8F" fillOpacity="0.15" />
    <path d="M6 10l3 3 5-5" stroke="#1F8A8F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 14, height: 14, flexShrink: 0, marginTop: 2 }}>
    <path d="M6 6l8 8M14 6l-8 8" stroke="#B89870" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const BedIcon = ({ single = false }: { single?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    {single ? <path d="M6 8v9" /> : (<><path d="M6 8v5" /><path d="M14 8v5" /></>)}
  </svg>
)

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const INCLUDED = [
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
]

const NOT_INCLUDED = [
  "International flights",
  "Travel insurance",
  "Personal expenses",
  "Additional meals not listed in the programme",
]

export function TripPricingBlock() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-[#0E1F38]">
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

        {/* Two pricing cards — stacked on mobile, side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3 mb-6">
          {/* Shared */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border border-ocean-teal/50 rounded-2xl p-5 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
          >
            <div className="text-ocean-teal mb-4">
              <BedIcon />
            </div>
            <p className="font-sans text-white/50 text-xs uppercase tracking-[0.2em] mb-2">
              Shared Room
            </p>
            <p className="font-serif text-sunset-orange leading-none mb-1" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
              €4,400
            </p>
            <p className="font-sans text-white/35 text-xs">per person</p>
          </motion.div>

          {/* Single */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border border-white/15 rounded-2xl p-5 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
          >
            <div className="text-white/50 mb-4">
              <BedIcon single />
            </div>
            <p className="font-sans text-white/50 text-xs uppercase tracking-[0.2em] mb-2">
              Single Room
            </p>
            <p className="font-serif text-white leading-none mb-1" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
              €4,900
            </p>
            <p className="font-sans text-white/35 text-xs">per person</p>
          </motion.div>
        </div>

        {/* Included / Not included — two columns always */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-8 mb-6"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {/* Included */}
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-ocean-teal mb-3">Included</p>
              <ul className="space-y-1.5">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="font-sans text-white/70 text-xs leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not included */}
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/30 mb-3">Not Included</p>
              <ul className="space-y-1.5">
                {NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <XIcon />
                    <span className="font-sans text-white/40 text-xs leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <p className="font-sans text-white/30 text-xs text-center mb-6">
          Minimum 8 participants · 50% deposit to confirm booking
        </p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <a
            href="https://wa.me/36305326286"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-4 px-8 bg-sunset-orange text-white rounded-full font-sans font-semibold hover:bg-ember transition-colors text-sm"
          >
            <WhatsAppIcon />
            Contact Us on WhatsApp
          </a>
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
