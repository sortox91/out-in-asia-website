"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const CARDS = [
  {
    image: "/accommodation/hanoi-1.jpg",
    title: "Premium 4-Star Hotels",
    description: "Elegant hotels in the heart of Hanoi and Tam Coc, with rice field views and city convenience.",
    tag: "6 nights · Breakfast included",
  },
  {
    image: "/accommodation/sapa-1.jpg",
    title: "5-Star Mountain Resort",
    description: "Surrounded by clouds and mountains in Sapa. A luxurious retreat after a day of trekking.",
    tag: "3 nights · Breakfast included",
  },
  {
    image: "/accommodation/halong-1.jpg",
    title: "Luxury Yacht Cruise",
    description: "Private balcony cabins aboard a 5-star yacht. Full board, curated experiences and sunset cocktails on deck.",
    tag: "2 nights · Full board",
  },
]

// Level-3 arrow: small, no circle, clay/gold chevron (accommodation carousel)
function AccomBtn({ onClick, label, side }: { onClick: () => void; label: string; side: "left" | "right" }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        background: "none", border: "none", cursor: "pointer",
        padding: "12px 10px",
        minWidth: 44, minHeight: 44,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#B89870", transition: "opacity 200ms", opacity: 0.85,
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "0.85")}
    >
      {side === "left"
        ? <ChevronLeft style={{ width: 22, height: 22 }} />
        : <ChevronRight style={{ width: 22, height: 22 }} />}
    </button>
  )
}

export function TripComfortSection() {
  const [current, setCurrent] = useState(0)
  const total = CARDS.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#FAF6EF", borderTop: "1px solid rgba(232,221,208,0.5)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em",
            color: "#1F8A8F", marginBottom: "1rem",
          }}>
            Accommodations
          </p>
          <h2 style={{
            fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, color: "#0E1F38", marginBottom: "1rem",
          }}>
            Travel with Comfort
          </h2>
          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.95rem", color: "#7A6A58", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.7,
          }}>
            Every stay is carefully selected for quality, location and atmosphere —
            from elegant city hotels to mountain retreats and a luxury Ha Long Bay yacht.
          </p>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid" style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}>
          {CARDS.map((card) => (
            <div key={card.title} style={{
              backgroundColor: "white", borderRadius: "1rem", overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}>
              <div style={{ position: "relative", height: 192 }}>
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <span style={{
                  display: "inline-block", backgroundColor: "rgba(31,138,143,0.10)", color: "#1F8A8F",
                  fontFamily: "var(--font-manrope), Manrope, sans-serif", fontSize: "0.7rem",
                  borderRadius: "999px", padding: "0.25rem 0.75rem", marginBottom: "0.75rem",
                }}>{card.tag}</span>
                <h3 style={{
                  fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                  fontSize: "1.2rem", fontWeight: 700, color: "#0E1F38", marginBottom: "0.5rem",
                }}>{card.title}</h3>
                <p style={{
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontSize: "0.85rem", color: "#7A6A58", lineHeight: 1.65,
                }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel — 1 card at a time */}
        <div className="md:hidden">
          <div style={{
            backgroundColor: "white", borderRadius: "1rem", overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)", maxHeight: 280,
          }}>
            <div style={{ display: "flex", height: 280 }}>
              {/* Photo */}
              <div style={{ position: "relative", width: "42%", flexShrink: 0 }}>
                <Image
                  src={CARDS[current].image}
                  alt={CARDS[current].title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div style={{ flex: 1, padding: "1.1rem 1.2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{
                  display: "inline-block", backgroundColor: "rgba(31,138,143,0.10)", color: "#1F8A8F",
                  fontFamily: "var(--font-manrope), Manrope, sans-serif", fontSize: "0.65rem",
                  borderRadius: "999px", padding: "0.2rem 0.6rem", marginBottom: "0.6rem",
                }}>{CARDS[current].tag}</span>
                <h3 style={{
                  fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                  fontSize: "1rem", fontWeight: 700, color: "#0E1F38", marginBottom: "0.4rem",
                }}>{CARDS[current].title}</h3>
                <p style={{
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontSize: "0.78rem", color: "#7A6A58", lineHeight: 1.5,
                }}>{CARDS[current].description}</p>
              </div>
            </div>
          </div>

          {/* Navigation: Level-3 arrows + dots */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 14 }}>
            <AccomBtn onClick={prev} label="Previous accommodation" side="left" />
            <div style={{ display: "flex", gap: 4 }}>
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Accommodation ${i + 1}`}
                  style={{
                    padding: "10px 8px", background: "none", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center",
                  }}
                >
                  <span style={{
                    display: "block",
                    width: 7, height: 7, borderRadius: "50%",
                    backgroundColor: i === current ? "#B89870" : "rgba(184,152,112,0.3)",
                    transition: "background-color 200ms",
                  }} />
                </button>
              ))}
            </div>
            <AccomBtn onClick={next} label="Next accommodation" side="right" />
          </div>
        </div>

      </div>
    </section>
  )
}
