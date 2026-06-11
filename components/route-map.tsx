"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const STOPS = [
  {
    id: 1,
    image: "/maps/map-1-hanoi.svg",
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
    image: "/maps/map-2-sapa.svg",
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
    image: "/maps/map-3-tamcoc.svg",
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
    image: "/maps/map-4-halong.svg",
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
    image: "/maps/map-5-return.svg",
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

// Level-1 orange circle arrow — map stop navigation
function NavBtn({
  onClick, label, side, size = 48, top = "50%",
}: {
  onClick: () => void; label: string; side: "left" | "right"; size?: number; top?: string
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        position: "absolute",
        [side]: 12,
        top,
        transform: "translateY(-50%)",
        zIndex: 10,
        width: size, height: size,
        borderRadius: "50%",
        backgroundColor: "#EA5A2A",
        border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
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

  // Preload all maps + gallery images at mount → instant transitions
  useEffect(() => {
    STOPS.forEach(s => {
      const m = new window.Image(); m.src = s.image
      s.galleryImages.forEach(src => { const g = new window.Image(); g.src = src })
    })
  }, [])

  // Navigate between stops (resets gallery to first photo)
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

  // Select a photo within the current stop
  const selectPhoto = (index: number) => {
    if (index === galleryIndex) return
    setGalleryVisible(false)
    setTimeout(() => {
      setGalleryIndex(index)
      setGalleryVisible(true)
    }, 150)
  }

  // Stop navigation dots — padded to 44px touch target
  const StopDots = () => (
    <div style={{ display: "flex", justifyContent: "center", gap: 4 }}>
      {STOPS.map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          aria-label={`Stop ${i + 1}`}
          style={{
            padding: "10px 8px", cursor: "pointer",
            background: "none", border: "none", display: "flex", alignItems: "center",
          }}
        >
          <span style={{
            display: "block",
            width: 9, height: 9, borderRadius: "50%",
            border: `2px solid ${i === current ? "#EA5A2A" : "#1F8A8F"}`,
            backgroundColor: i === current ? "#EA5A2A" : "transparent",
            transition: "all 200ms",
          }} />
        </button>
      ))}
    </div>
  )

  /* ─────────────────────────────────────
     MOBILE LAYOUT — stacked
  ───────────────────────────────────── */
  if (!isDesktop) {
    return (
      <section id="route-overview" style={{ backgroundColor: "#FAF6EF" }}>

        {/* 1. Map */}
        <div style={{ position: "relative", height: "50vh", overflow: "hidden", backgroundColor: "white" }}>
          {STOPS.map((s, i) => (
            <div key={s.id} style={{
              position: "absolute", inset: 0,
              opacity: i === current ? 1 : 0, transition: "opacity 400ms",
              pointerEvents: "none",
            }}>
              <Image src={s.image} alt={`Map of ${s.city}`} fill className="object-contain" />
            </div>
          ))}
          <NavBtn onClick={prev} label="Previous stop" side="left" size={44} />
          <NavBtn onClick={next} label="Next stop" side="right" size={44} />
          <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, zIndex: 10 }}>
            <StopDots />
          </div>
        </div>

        {/* 2. Gallery: main image + thumbnails */}
        <div style={{ borderTop: "1px solid #E8DDD0", padding: "14px 16px 0" }}>

          {/* Main image — slimmer ratio — with prev/next overlay arrows + counter */}
          <div style={{ position: "relative", width: "100%", paddingBottom: "60%", borderRadius: "0.5rem", overflow: "hidden" }}>
            {stop.galleryImages.map((src, i) => (
              <div key={src} style={{
                position: "absolute", inset: 0,
                opacity: i === galleryIndex && galleryVisible ? 1 : 0,
                transition: "opacity 250ms",
                pointerEvents: "none",
              }}>
                <Image
                  src={src}
                  alt={stop.galleryCaptions[i]}
                  fill
                  className="object-cover"
                  style={{ objectPosition: stop.objectPosition }}
                  priority
                />
              </div>
            ))}

            {/* Prev arrow */}
            {galleryIndex > 0 && (
              <button
                onClick={() => selectPhoto(galleryIndex - 1)}
                aria-label="Previous photo"
                style={{
                  position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
                  zIndex: 10, width: 36, height: 36, borderRadius: "50%",
                  backgroundColor: "rgba(14,31,56,0.65)", border: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft style={{ width: 18, height: 18, color: "white" }} />
              </button>
            )}

            {/* Next arrow */}
            {galleryIndex < stop.galleryImages.length - 1 && (
              <button
                onClick={() => selectPhoto(galleryIndex + 1)}
                aria-label="Next photo"
                style={{
                  position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                  zIndex: 10, width: 36, height: 36, borderRadius: "50%",
                  backgroundColor: "rgba(14,31,56,0.65)", border: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ChevronRight style={{ width: 18, height: 18, color: "white" }} />
              </button>
            )}

            {/* Photo counter */}
            <div style={{
              position: "absolute", top: 10, right: 10,
              backgroundColor: "rgba(14,31,56,0.65)",
              borderRadius: "999px", padding: "2px 10px",
              fontFamily: "var(--font-manrope), Manrope, sans-serif",
              fontSize: "0.65rem", color: "rgba(255,255,255,0.85)",
              zIndex: 10,
            }}>
              {galleryIndex + 1}/{stop.galleryImages.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {stop.galleryImages.map((src, i) => (
              <button
                key={i}
                onClick={() => selectPhoto(i)}
                aria-label={stop.galleryCaptions[i]}
                style={{
                  flex: 1, position: "relative", height: 56,
                  borderRadius: "0.3rem", overflow: "hidden",
                  border: `2.5px solid ${i === galleryIndex ? "#1F8A8F" : "transparent"}`,
                  padding: 0, cursor: "pointer",
                  opacity: i === galleryIndex ? 1 : 0.52,
                  transition: "opacity 200ms, border-color 200ms",
                }}
              >
                <Image
                  src={src}
                  alt={stop.galleryCaptions[i]}
                  fill
                  className="object-cover"
                  style={{ objectPosition: stop.objectPosition }}
                />
              </button>
            ))}
          </div>

          {/* Caption */}
          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.7rem", color: "#B89870", margin: "8px 0 14px",
            opacity: galleryVisible ? 1 : 0, transition: "opacity 250ms",
          }}>
            {stop.city} · {stop.galleryCaptions[galleryIndex]}
          </p>
        </div>

        {/* 3. Info banner */}
        <div style={{
          borderTop: "1px solid #E8DDD0",
          padding: "18px 16px 26px", backgroundColor: "#FAF6EF",
          opacity: visible ? 1 : 0, transition: "opacity 300ms",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
              backgroundColor: "#0E1F38", color: "#FAF6EF",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
              fontSize: "0.9rem", fontWeight: 700,
            }}>
              {String(stop.id).padStart(2, "0")}
            </div>
            <div>
              <h3 style={{
                fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                fontSize: "1.4rem", fontWeight: 700, color: "#0E1F38", lineHeight: 1.1, margin: 0,
              }}>
                {stop.city}
              </h3>
              <p style={{
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em",
                color: "#1F8A8F", margin: "3px 0 0",
              }}>
                {stop.subtitle}
              </p>
            </div>
          </div>

        </div>

      </section>
    )
  }

  /* ─────────────────────────────────────
     DESKTOP LAYOUT — two columns
  ───────────────────────────────────── */
  return (
    <section id="route-overview" style={{ padding: "40px 0 60px", backgroundColor: "#FAF6EF", borderTop: "1px solid rgba(232,221,208,0.5)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{
          borderRadius: "1rem", overflow: "hidden",
          border: "1px solid #E8DDD0", boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}>

          {/* ── TWO COLUMNS: map (38%) + gallery (62%) ── */}
          <div style={{ display: "flex", alignItems: "stretch", borderBottom: "1px solid #E8DDD0" }}>

            {/* LEFT — SVG Map */}
            <div style={{
              width: "40%", flexShrink: 0,
              borderRight: "1px solid #E8DDD0",
              backgroundColor: "white",
              display: "flex", flexDirection: "column",
            }}>
              {/* Map area — flex:1 so it matches gallery column height */}
              <div style={{ position: "relative", flex: 1, minHeight: 320 }}>
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

                {/* Navigation arrows */}
                <NavBtn onClick={prev} label="Previous stop" side="left" size={42} top="50%" />
                <NavBtn onClick={next} label="Next stop"     side="right" size={42} top="50%" />
              </div>

              {/* Stop dots below map */}
              <div style={{ padding: "10px 0 14px" }}>
                <StopDots />
              </div>
            </div>

            {/* RIGHT — Gallery: main image + thumbnails */}
            <div style={{
              flex: 1,
              padding: "20px 24px 18px",
              backgroundColor: "#FAF6EF",
              display: "flex", flexDirection: "column",
            }}>

              {/* Main image — 16:10 aspect ratio */}
              <div style={{
                position: "relative", width: "100%", paddingBottom: "63%",
                borderRadius: "0.5rem", overflow: "hidden",
                flexShrink: 0, marginBottom: 10,
              }}>
                {stop.galleryImages.map((src, i) => (
                  <div key={src} style={{
                    position: "absolute", inset: 0,
                    opacity: i === galleryIndex && galleryVisible ? 1 : 0,
                    transition: "opacity 250ms",
                    pointerEvents: "none",
                  }}>
                    <Image
                      src={src}
                      alt={stop.galleryCaptions[i]}
                      fill
                      className="object-cover"
                      style={{ objectPosition: stop.objectPosition }}
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Thumbnail strip */}
              <div style={{ display: "flex", gap: 8, marginBottom: 10, flexShrink: 0 }}>
                {stop.galleryImages.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => selectPhoto(i)}
                    aria-label={stop.galleryCaptions[i]}
                    style={{
                      flex: 1, position: "relative", height: 76,
                      borderRadius: "0.35rem", overflow: "hidden",
                      border: `2.5px solid ${i === galleryIndex ? "#1F8A8F" : "transparent"}`,
                      padding: 0, cursor: "pointer",
                      opacity: i === galleryIndex ? 1 : 0.5,
                      transition: "opacity 200ms, border-color 200ms",
                    }}
                    onMouseEnter={e => { if (i !== galleryIndex) e.currentTarget.style.opacity = "0.78" }}
                    onMouseLeave={e => { if (i !== galleryIndex) e.currentTarget.style.opacity = "0.5" }}
                  >
                    <Image
                      src={src}
                      alt={stop.galleryCaptions[i]}
                      fill
                      className="object-cover"
                      style={{ objectPosition: stop.objectPosition }}
                    />
                  </button>
                ))}
              </div>

              {/* Caption */}
              <p style={{
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontSize: "0.72rem", color: "#B89870", margin: 0,
                opacity: galleryVisible ? 1 : 0, transition: "opacity 250ms",
                flexShrink: 0,
              }}>
                {stop.city} · {stop.galleryCaptions[galleryIndex]}
              </p>

            </div>
          </div>

          {/* ── INFO BANNER — full width ── */}
          <div style={{
            backgroundColor: "#FAF6EF", padding: "13px 24px",
            opacity: visible ? 1 : 0, transition: "opacity 300ms",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>

              {/* Badge + city + subtitle */}
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
                    fontSize: "1.15rem", fontWeight: 700, color: "#0E1F38", lineHeight: 1.1, margin: 0,
                  }}>
                    {stop.city}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-manrope), Manrope, sans-serif",
                    fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.1em",
                    color: "#1F8A8F", margin: "3px 0 0",
                  }}>
                    {stop.subtitle}
                  </p>
                </div>
              </div>

              {/* Vertical divider */}
              <div style={{ width: 1, height: 38, backgroundColor: "#D9C9B5", flexShrink: 0, marginRight: 20 }} />

              {/* Highlights — 2 columns */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: "2px 24px", flex: 1,
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

        </div>
      </div>
    </section>
  )
}
