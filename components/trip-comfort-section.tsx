"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const CARDS = [
  {
    image: "/accommodation/hanoi-1.jpg",
    title: "Premium 4-Star Hotels",
    description: "Elegant hotels in Hanoi and Tam Coc, ideally located, with breakfast included.",
    tag: "6 nights · Breakfast included",
    location: "Hanoi · Tam Coc",
  },
  {
    image: "/accommodation/sapa-1.jpg",
    title: "5-Star Mountain Resort",
    description: "Cloud-wrapped luxury in Sapa, a perfect retreat after a day of trekking in the terraces.",
    tag: "3 nights · Breakfast included",
    location: "Sapa",
  },
  {
    image: "/accommodation/halong-1.jpg",
    title: "Luxury Yacht Cruise",
    description: "Private balcony cabins on a 5-star yacht. Full board, sunset cocktails on deck.",
    tag: "2 nights · Full board",
    location: "Ha Long Bay",
  },
]

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
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em",
            color: "#1F8A8F", marginBottom: "1rem",
          }}>
            Accommodations
          </p>
          <h2 style={{
            fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, color: "#0E1F38", marginBottom: "0.75rem",
          }}>
            Travel with Comfort
          </h2>
          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.9rem", color: "#7A6A58", maxWidth: "36rem", margin: "0 auto", lineHeight: 1.65,
          }}>
            Every stay is carefully selected for quality, location and atmosphere.
          </p>
        </div>

        {/* Desktop: grid of cards — image on top, text below */}
        <div className="hidden md:grid" style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}>
          {CARDS.map((card) => (
            <div key={card.title} style={{
              backgroundColor: "white", borderRadius: "1rem", overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}>
              {/* Image with location label */}
              <div style={{ position: "relative", width: "100%", paddingBottom: "60%" }}>
                <Image src={card.image} alt={card.title} fill className="object-cover" />
                <span style={{
                  position: "absolute", top: 12, left: 12,
                  backgroundColor: "#EA5A2A", color: "white",
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em",
                  borderRadius: "999px", padding: "0.25rem 0.75rem",
                }}>
                  {card.location}
                </span>
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

        {/* Mobile: carousel — image on top, text below */}
        <div className="md:hidden">
          <div style={{
            backgroundColor: "white", borderRadius: "1rem", overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}>
            {/* Image with location label — stacked layers for smooth transitions */}
            <div style={{ position: "relative", width: "100%", paddingBottom: "56%" }}>
              {CARDS.map((card, i) => (
                <div key={card.image} style={{
                  position: "absolute", inset: 0,
                  opacity: i === current ? 1 : 0,
                  transition: "opacity 350ms ease",
                  pointerEvents: "none",
                }}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <span style={{
                position: "absolute", top: 12, left: 12, zIndex: 2,
                backgroundColor: "#EA5A2A", color: "white",
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em",
                borderRadius: "999px", padding: "0.22rem 0.7rem",
              }}>
                {CARDS[current].location}
              </span>
            </div>
            {/* Text */}
            <div style={{ padding: "1rem 1.2rem 1.25rem" }}>
              <span style={{
                display: "inline-block", backgroundColor: "rgba(31,138,143,0.10)", color: "#1F8A8F",
                fontFamily: "var(--font-manrope), Manrope, sans-serif", fontSize: "0.65rem",
                borderRadius: "999px", padding: "0.2rem 0.6rem", marginBottom: "0.5rem",
              }}>{CARDS[current].tag}</span>
              <h3 style={{
                fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                fontSize: "1rem", fontWeight: 700, color: "#0E1F38", marginBottom: "0.35rem",
              }}>{CARDS[current].title}</h3>
              <p style={{
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontSize: "0.8rem", color: "#7A6A58", lineHeight: 1.55,
              }}>{CARDS[current].description}</p>
            </div>
          </div>

          {/* Navigation: arrows + dots */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 12 }}>
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
