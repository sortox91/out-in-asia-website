"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const STOPS = [
  {
    id: 1,
    image: "/maps/map-1-hanoi.png",
    city: "Hanoi",
    subtitle: "Days 1–3 · Vietnam's Capital",
    highlights: [
      "Airport transfer & boutique hotel check-in",
      "Ngoc Son Temple on Hoan Kiem Lake",
      "Iconic egg coffee experience",
      "Guided street food tour from 16:00",
      "Optional: Hanoi's vibrant gay bars",
      "Full city discovery on Day 2",
    ],
    galleryImages: ["/gallery/hanoi/hoan-kiem.jpg", "/gallery/hanoi/old-quarter.jpg", "/gallery/hanoi/group.png", "/gallery/hanoi/egg-coffee.jpg"],
    galleryCaptions: ["Hoan Kiem Lake", "Old Quarter at Night", "Coffee on Train Street", "Iconic Egg Coffee"],
    objectPosition: "center center",
  },
  {
    id: 2,
    image: "/maps/map-2-sapa.png",
    city: "Sapa",
    subtitle: "Days 4–6 · Mountain Escape",
    highlights: [
      "5–6h scenic minivan from Hanoi",
      "Guided trek through rice terraces & villages",
      "Overnight in 5-star mountain hotel",
      "Cable Car to Fansipan — Vietnam's highest peak",
      "Traditional Sapa Hot Pot dinner",
    ],
    galleryImages: ["/gallery/sapa/rice-terraces.jpg", "/gallery/sapa/cable-car.jpg", "/gallery/sapa/village.jpg", "/gallery/sapa/group.png"],
    galleryCaptions: ["Golden Rice Terraces", "Fansipan Cable Car", "Traditional Village", "Trekking Together"],
    objectPosition: "center 40%",
  },
  {
    id: 3,
    image: "/maps/map-3-tamcoc.png",
    city: "Tam Coc",
    subtitle: "Days 7–9 · Ha Long Bay on Land",
    highlights: [
      "Scenic minivan direct from Sapa",
      "Dragon Mountain sunrise viewpoint",
      "Scenic boat trip through caves & cliffs",
      "Cycling tour: Thung Nang Lake & Bich Dong Pagoda",
      "Boutique eco-resort with pool",
    ],
    galleryImages: ["/gallery/tamcoc/dragon-mountain.jpg", "/gallery/tamcoc/boats.jpg", "/gallery/tamcoc/cycling-group.png", "/gallery/tamcoc/group-cycling.jpg"],
    galleryCaptions: ["Dragon Mountain View", "Tam Coc Boat Trip", "Cycling the Rice Fields", "Together on Two Wheels"],
    objectPosition: "center 60%",
  },
  {
    id: 4,
    image: "/maps/map-4-halongbay.png",
    city: "Ha Long Bay",
    subtitle: "Days 10–11 · Luxury Yacht Cruise",
    highlights: [
      "3h drive + private boat transfer to yacht",
      "Kayaking through limestone islands",
      "Cat Ba Island & Three Peaches Beach",
      "Full board dining + sunset cocktails on deck",
      "Private balcony cabin on luxury yacht",
    ],
    galleryImages: ["/gallery/halong/cruise.jpg", "/gallery/halong/bay.jpg", "/gallery/halong/group.png", "/gallery/halong/sunset.jpg"],
    galleryCaptions: ["Luxury Cruise", "Ha Long Bay", "Sunset Drinks on Deck", "Golden Hour on the Bay"],
    objectPosition: "center 70%",
  },
  {
    id: 5,
    image: "/maps/map-5-return.png",
    city: "Return to Hanoi",
    subtitle: "Day 12 · Farewell",
    highlights: [
      "Final morning free in Hanoi",
      "Train Street visit",
      "Farewell lunch with the group",
      "Private airport transfer",
    ],
    galleryImages: ["/gallery/hanoi/old-quarter.jpg", "/gallery/hanoi/hoan-kiem.jpg", "/gallery/hanoi/group.png", "/gallery/hanoi/egg-coffee.jpg"],
    galleryCaptions: ["Last Evening in Hanoi", "Farewell Walk", "Farewell Drinks", "One Last Coffee"],
    objectPosition: "center center",
  },
]

// Reusable arrow button
function NavBtn({
  onClick, label, side, size = 48, top = "50%",
}: {
  onClick: () => void
  label: string
  side: "left" | "right"
  size?: number
  top?: string
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        position: "absolute",
        [side]: 16,
        top,
        transform: "translateY(-50%)",
        zIndex: 10,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "#EA5A2A",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 10px rgba(234,90,42,0.35)",
        transition: "opacity 200ms",
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
    >
      {side === "left"
        ? <ChevronLeft style={{ width: size * 0.4, height: size * 0.4, color: "white" }} />
        : <ChevronRight style={{ width: size * 0.4, height: size * 0.4, color: "white" }} />}
    </button>
  )
}

export function RouteMap() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isDesktop, setIsDesktop] = useState(true)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [galleryVisible, setGalleryVisible] = useState(true)
  const total = STOPS.length
  const stop = STOPS[current]

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Preload every map + gallery image at mount → instant transitions
  useEffect(() => {
    STOPS.forEach(s => {
      const m = new window.Image(); m.src = s.image
      s.galleryImages.forEach(src => { const g = new window.Image(); g.src = src })
    })
  }, [])

  const goTo = (index: number) => {
    setVisible(false)
    setGalleryVisible(false)
    setTimeout(() => {
      setCurrent((index + total) % total)
      setGalleryIndex(0)
      setVisible(true)
      setGalleryVisible(true)
    }, 200)
  }

  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  const galleryPrev = () => {
    setGalleryVisible(false)
    setTimeout(() => {
      setGalleryIndex(i => (i - 1 + stop.galleryImages.length) % stop.galleryImages.length)
      setGalleryVisible(true)
    }, 180)
  }
  const galleryNext = () => {
    setGalleryVisible(false)
    setTimeout(() => {
      setGalleryIndex(i => (i + 1) % stop.galleryImages.length)
      setGalleryVisible(true)
    }, 180)
  }

  // Shared dot strip
  const StopDots = ({ light = false }: { light?: boolean }) => (
    <div style={{ display: "flex", justifyContent: "center", gap: 9 }}>
      {STOPS.map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          aria-label={`Stop ${i + 1}`}
          style={{
            width: 9, height: 9, borderRadius: "50%", padding: 0, cursor: "pointer",
            border: `2px solid ${i === current ? "#EA5A2A" : light ? "rgba(255,255,255,0.65)" : "#1F8A8F"}`,
            backgroundColor: i === current ? "#EA5A2A" : "transparent",
            transition: "all 200ms",
          }}
        />
      ))}
    </div>
  )

  /* ─────────────────────────────────────
     MOBILE LAYOUT
  ───────────────────────────────────── */
  if (!isDesktop) {
    return (
      <section id="route-overview" style={{ backgroundColor: "#F9F8F6", borderTop: "1px solid rgba(232,221,208,0.5)" }}>

        {/* Top half — destination photo (50vh) */}
        <div style={{ position: "relative", height: "50vh", overflow: "hidden", backgroundColor: "#1a2d47" }}>
          <div style={{
            position: "absolute", inset: 0,
            opacity: galleryVisible ? 1 : 0, transition: "opacity 300ms",
          }}>
            <Image
              src={stop.galleryImages[0]}
              alt={stop.city}
              fill
              className="object-cover"
              style={{ objectPosition: stop.objectPosition }}
              priority
            />
          </div>

          {/* Gradient overlay for legibility */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "linear-gradient(to bottom, rgba(14,31,56,0.18) 0%, rgba(14,31,56,0) 40%, rgba(14,31,56,0.55) 100%)",
          }} />

          {/* City label */}
          <p style={{
            position: "absolute", top: 14, left: 16, zIndex: 5, margin: 0,
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.88)",
          }}>
            Discover {stop.city}
          </p>

          {/* Stop navigation arrows */}
          <NavBtn onClick={prev} label="Previous stop" side="left" size={44} />
          <NavBtn onClick={next} label="Next stop" side="right" size={44} />

          {/* Stop dots */}
          <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, zIndex: 10 }}>
            <StopDots light />
          </div>
        </div>

        {/* Bottom half — map (50vh) */}
        <div style={{
          position: "relative", height: "50vh", overflow: "hidden",
          backgroundColor: "#F9F8F6", borderTop: "1px solid #E8DDD0",
        }}>
          {STOPS.map((s, i) => (
            <div key={s.id} style={{
              position: "absolute", inset: 0,
              opacity: i === current ? 1 : 0, transition: "opacity 400ms",
              pointerEvents: "none",
            }}>
              <Image src={s.image} alt={`Map of ${s.city}`} fill className="object-contain" />
            </div>
          ))}
        </div>

        {/* Below fold — stop info (scroll to see) */}
        <div style={{
          padding: "22px 20px 28px", backgroundColor: "#F9F8F6",
          borderTop: "1px solid #E8DDD0",
          opacity: visible ? 1 : 0, transition: "opacity 300ms",
        }}>
          {/* Badge + city */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{
              width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
              backgroundColor: "#0E1F38", color: "#FAF6EF",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
              fontSize: "1rem", fontWeight: 700,
            }}>
              {String(stop.id).padStart(2, "0")}
            </div>
            <div>
              <h3 style={{
                fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                fontSize: "1.5rem", fontWeight: 700, color: "#0E1F38", lineHeight: 1.1, margin: 0,
              }}>
                {stop.city}
              </h3>
              <p style={{
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em",
                color: "#1F8A8F", margin: "3px 0 0",
              }}>
                {stop.subtitle}
              </p>
            </div>
          </div>

          <div style={{ width: 36, height: 1, backgroundColor: "#B89870", marginBottom: 14 }} />

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>
            {stop.highlights.map((item, i) => (
              <li key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 8,
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontSize: "0.84rem", color: "#5a4a3a", lineHeight: 1.65, marginBottom: 3,
              }}>
                <span style={{ color: "#EA5A2A", fontWeight: 700, flexShrink: 0 }}>•</span>
                {item}
              </li>
            ))}
          </ul>

          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.72rem", color: "#B89870", margin: 0,
          }}>
            {stop.city} · {stop.galleryCaptions[0]}
          </p>
        </div>
      </section>
    )
  }

  /* ─────────────────────────────────────
     DESKTOP LAYOUT
  ───────────────────────────────────── */
  return (
    <section id="route-overview" style={{ padding: "80px 0", backgroundColor: "#FAF6EF", borderTop: "1px solid rgba(232,221,208,0.5)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em",
            color: "#1F8A8F", marginBottom: "1rem",
          }}>
            Your Journey
          </p>
          <h2 style={{
            fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#0E1F38",
          }}>
            Route{" "}
            <span style={{ fontStyle: "italic", color: "#EA5A2A" }}>Overview</span>
          </h2>
        </div>

        {/* Card wrapper */}
        <div style={{
          borderRadius: "1rem", overflow: "hidden",
          border: "1px solid #E8DDD0", boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}>

          {/* ── MAP — full width, 420px ── */}
          <div style={{
            position: "relative", height: "420px",
            backgroundColor: "#FAF6EF", overflow: "hidden",
          }}>
            {STOPS.map((s, i) => (
              <div key={s.id} style={{
                position: "absolute", inset: 0,
                opacity: i === current ? 1 : 0, transition: "opacity 400ms",
                pointerEvents: "none",
              }}>
                <Image
                  src={s.image}
                  alt={`Map of ${s.city}`}
                  fill
                  className="object-contain"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Stop navigation arrows */}
            <NavBtn onClick={prev} label="Previous stop" side="left" size={52} />
            <NavBtn onClick={next} label="Next stop" side="right" size={52} />

            {/* Stop dots */}
            <div style={{ position: "absolute", bottom: 22, left: 0, right: 0, zIndex: 10 }}>
              <StopDots />
            </div>
          </div>

          {/* ── INFO BANNER ── */}
          <div style={{
            borderTop: "1px solid #E8DDD0", borderBottom: "1px solid #E8DDD0",
            backgroundColor: "#FAF6EF", padding: "10px 28px",
            opacity: visible ? 1 : 0, transition: "opacity 300ms",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>

              {/* Left: badge + city + subtitle */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0, paddingRight: 20 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  backgroundColor: "#0E1F38", color: "#FAF6EF",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                  fontSize: "0.85rem", fontWeight: 700,
                }}>
                  {String(stop.id).padStart(2, "0")}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                    fontSize: "1.2rem", fontWeight: 700, color: "#0E1F38", lineHeight: 1.1, margin: 0,
                  }}>
                    {stop.city}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-manrope), Manrope, sans-serif",
                    fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em",
                    color: "#1F8A8F", margin: "2px 0 0",
                  }}>
                    {stop.subtitle}
                  </p>
                </div>
              </div>

              {/* Vertical divider */}
              <div style={{ width: 1, height: 38, backgroundColor: "#D9C9B5", flexShrink: 0, marginRight: 20 }} />

              {/* Highlights in 2 columns */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: "1px 20px", flex: 1,
              }}>
                {stop.highlights.map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 6,
                    fontFamily: "var(--font-manrope), Manrope, sans-serif",
                    fontSize: "0.72rem", color: "#5a4a3a", lineHeight: 1.4,
                  }}>
                    <span style={{ color: "#EA5A2A", fontWeight: 700, flexShrink: 0 }}>•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── GALLERY SECTION ── */}
          <div style={{ backgroundColor: "#FAF6EF", padding: "0 24px 20px" }}>

            {/* "Discover" label */}
            <p style={{
              fontFamily: "var(--font-manrope), Manrope, sans-serif",
              fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.22em",
              color: "#1F8A8F", margin: "0", padding: "10px 0 8px",
            }}>
              DISCOVER {stop.city.toUpperCase()}
            </p>

            {/* Photo — 320px */}
            <div style={{
              position: "relative", height: "320px",
              borderRadius: "0.75rem", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                opacity: galleryVisible ? 1 : 0, transition: "opacity 300ms",
              }}>
                <Image
                  src={stop.galleryImages[galleryIndex]}
                  alt={stop.galleryCaptions[galleryIndex]}
                  fill
                  className="object-cover"
                  style={{ objectPosition: stop.objectPosition }}
                />
              </div>

              {/* Gallery photo navigation */}
              <NavBtn onClick={galleryPrev} label="Previous photo" side="left" size={44} />
              <NavBtn onClick={galleryNext} label="Next photo" side="right" size={44} />

              {/* Photo dots */}
              <div style={{
                position: "absolute", bottom: 14, left: 0, right: 0, zIndex: 10,
                display: "flex", justifyContent: "center", gap: 6,
              }}>
                {stop.galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setGalleryVisible(false)
                      setTimeout(() => { setGalleryIndex(i); setGalleryVisible(true) }, 180)
                    }}
                    aria-label={`Photo ${i + 1}`}
                    style={{
                      width: 7, height: 7, borderRadius: "50%", border: "none", padding: 0,
                      backgroundColor: i === galleryIndex ? "white" : "rgba(255,255,255,0.48)",
                      cursor: "pointer", transition: "background-color 200ms",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Caption */}
            <p style={{
              fontFamily: "var(--font-manrope), Manrope, sans-serif",
              fontSize: "0.75rem", color: "#B89870",
              marginTop: "10px", marginBottom: 0,
              opacity: galleryVisible ? 1 : 0, transition: "opacity 300ms",
            }}>
              {stop.city} · {stop.galleryCaptions[galleryIndex]}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
