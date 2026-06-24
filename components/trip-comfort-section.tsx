"use client"

import Image from "next/image"
import type { ComfortCard } from "@/lib/trips/types"

export function TripComfortSection({ cards }: { cards: ComfortCard[] }) {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#FAF6EF", borderTop: "1px solid rgba(232,221,208,0.5)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em",
            color: "#1F8A8F", marginBottom: "1rem",
          }}>
            Accommodation and Transport
          </p>
          <h2 style={{
            fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, color: "#0E1F38", marginBottom: "0.75rem",
          }}>
            Travel with <span style={{ color: "#EA5A2A", fontStyle: "italic" }}>Comfort</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "clamp(0.7rem, 2.6vw, 0.9rem)", color: "#7A6A58",
            maxWidth: "28rem", margin: "0 auto", lineHeight: 1.55,
          }}>
            Every detail is carefully selected for quality and ease
          </p>
        </div>

        {/* Carrousel horizontal scroll-snap — desktop 3 visible, mobile ~1 */}
        <div
          className="flex gap-5 overflow-x-auto pb-4 -mx-6 pl-6 md:mx-0 md:pl-0 snap-x snap-mandatory [scroll-padding-left:1.5rem] md:[scroll-padding-left:0]"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
        >
          {cards.map((card) => (
            <div
              key={card.location}
              className="flex-shrink-0 snap-start w-[82vw] sm:w-[60vw] md:w-[30%]"
              style={{ backgroundColor: "white", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
            >
              {/* Image + location badge */}
              <div style={{ position: "relative", width: "100%", paddingBottom: "60%" }}>
                <Image src={card.image} alt={card.title} fill className="object-cover" />
                {card.location && (
                  <span style={{
                    position: "absolute", top: 12, left: 12,
                    backgroundColor: "#EA5A2A", color: "white",
                    fontFamily: "var(--font-manrope), Manrope, sans-serif",
                    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em",
                    borderRadius: "999px", padding: "0.25rem 0.75rem",
                  }}>
                    {card.location}
                  </span>
                )}
              </div>
              {/* Text */}
              <div style={{ padding: "1.1rem 1.25rem 1.4rem" }}>
                <span style={{
                  display: "inline-block", backgroundColor: "rgba(31,138,143,0.10)", color: "#1F8A8F",
                  fontFamily: "var(--font-manrope), Manrope, sans-serif", fontSize: "0.68rem",
                  borderRadius: "999px", padding: "0.2rem 0.65rem", marginBottom: "0.6rem",
                }}>{card.tag}</span>
                <h3 style={{
                  fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                  fontSize: "1.1rem", fontWeight: 700, color: "#0E1F38", marginBottom: "0.4rem",
                }}>{card.title}</h3>
                <p style={{
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontSize: "0.83rem", color: "#7A6A58", lineHeight: 1.6,
                }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
