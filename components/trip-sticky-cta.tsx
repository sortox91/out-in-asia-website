"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface TripStickyCtaProps {
  price: { shared: string; single: string }
  tripTitle: string
}

export function TripStickyCta({ price, tripTitle }: TripStickyCtaProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ backgroundColor: "#0E1F38", borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="flex-1 min-w-0">
          <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/40 leading-none mb-0.5">
            {tripTitle}
          </p>
          <p className="font-serif text-white font-bold text-lg leading-none">
            {price.shared} <span className="font-sans font-normal text-xs text-white/50">/person</span>
          </p>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 flex items-center gap-1.5 px-5 py-3 rounded-full font-sans font-semibold text-sm text-white min-h-[44px]"
          style={{ backgroundColor: "#EA5A2A" }}
        >
          Join This Trip
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
