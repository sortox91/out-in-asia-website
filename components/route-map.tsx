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

  // Preload ALL gallery images at mount for instant transitions
  useEffect(() => {
    STOPS.forEach(s => s.galleryImages.forEach(src => {
      const img = new window.Image()
      img.src = src
    }))
  }, [])

  // Preload all map images at mount
  useEffect(() => {
    STOPS.forEach(s => {
      const img = new window.Image()
      img.src = s.image
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
      setGalleryIndex((i) => (i - 1 + stop.galleryImages.length) % stop.galleryImages.length)
      setGalleryVisible(true)
    }, 180)
  }

  const galleryNext = () => {
    setGalleryVisible(false)
    setTimeout(() => {
      setGalleryIndex((i) => (i + 1) % stop.galleryImages.length)
      setGalleryVisible(true)
    }, 180)
  }

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#F9F8F6", borderTop: "1px solid rgba(232,221,208,0.5)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#1F8A8F",
            marginBottom: "1rem",
          }}>
            Your Journey
          </p>
          <h2 style={{
            fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#0E1F38",
          }}>
            Route{" "}
            <span style={{ fontStyle: "italic", color: "#EA5A2A" }}>Overview</span>
          </h2>
        </div>

        {/* Card */}
        <div style={{
          borderRadius: "1rem",
          overflow: "hidden",
          border: "1px solid #E8DDD0",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: isDesktop ? "row" : "column",
          height: isDesktop ? "540px" : "auto",
        }}>

          {/* ── LEFT: Map carousel ── */}
          <div style={{
            position: "relative",
            width: isDesktop ? "45%" : "100%",
            height: isDesktop ? "100%" : "280px",
            backgroundColor: "#F9F8F6",
            overflow: "hidden",
            flexShrink: 0,
            borderRight: isDesktop ? "1px solid #E8DDD0" : "none",
            borderBottom: isDesktop ? "none" : "1px solid #E8DDD0",
          }}>
            {STOPS.map((s, i) => (
              <div
                key={s.id}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: i === current ? 1 : 0,
                  transition: "opacity 400ms",
                  pointerEvents: i === current ? "auto" : "none",
                }}
              >
                <Image
                  src={s.image}
                  alt={`Map of ${s.city}`}
                  fill
                  className="object-contain"
                  priority={i === 0}
                />
              </div>
            ))}

            <button
              onClick={prev}
              aria-label="Previous stop"
              style={{
                position: "absolute", bottom: 24, left: 24, zIndex: 10,
                width: 48, height: 48, borderRadius: "50%",
                backgroundColor: "#EA5A2A", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ChevronLeft style={{ width: 20, height: 20, color: "white" }} />
            </button>

            <div style={{
              position: "absolute", bottom: 64, left: 0, right: 0, zIndex: 10,
              display: "flex", justifyContent: "center", gap: 8,
            }}>
              {STOPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to stop ${i + 1}`}
                  style={{
                    width: 8, height: 8, borderRadius: "50%",
                    border: `2px solid ${i === current ? "#EA5A2A" : "#1F8A8F"}`,
                    backgroundColor: i === current ? "#EA5A2A" : "transparent",
                    cursor: "pointer", padding: 0, transition: "all 200ms",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next stop"
              style={{
                position: "absolute", bottom: 24, right: 24, zIndex: 10,
                width: 48, height: 48, borderRadius: "50%",
                backgroundColor: "#EA5A2A", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ChevronRight style={{ width: 20, height: 20, color: "white" }} />
            </button>
          </div>

          {/* ── RIGHT: Full-height gallery + overlaid stop info (desktop) ── */}
          <div style={{
            flex: 1,
            minWidth: 0,
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#1a2d47",
          }}>

            {/* Gallery image — fills full right column on desktop, fixed height on mobile */}
            {isDesktop ? (
              <div style={{
                position: "absolute",
                inset: 0,
                opacity: galleryVisible ? 1 : 0,
                transition: "opacity 300ms",
              }}>
                <Image
                  src={stop.galleryImages[galleryIndex]}
                  alt={stop.galleryCaptions[galleryIndex]}
                  fill
                  className="object-cover"
                  style={{ objectPosition: stop.objectPosition }}
                />
              </div>
            ) : (
              <div style={{
                position: "relative",
                height: 260,
                overflow: "hidden",
                opacity: galleryVisible ? 1 : 0,
                transition: "opacity 300ms",
              }}>
                <Image
                  src={stop.galleryImages[galleryIndex]}
                  alt={stop.galleryCaptions[galleryIndex]}
                  fill
                  className="object-cover"
                  style={{ objectPosition: stop.objectPosition }}
                />
                {/* Mobile dots */}
                <div style={{
                  position: "absolute", bottom: 10, left: 0, right: 0,
                  zIndex: 10, display: "flex", justifyContent: "center", gap: 5,
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
                        width: 6, height: 6, borderRadius: "50%", border: "none",
                        backgroundColor: i === galleryIndex ? "white" : "rgba(255,255,255,0.45)",
                        cursor: "pointer", padding: 0, transition: "background-color 200ms",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Desktop gradient overlay */}
            {isDesktop && (
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(14,31,56,0) 28%, rgba(14,31,56,0.80) 60%, rgba(14,31,56,0.94) 100%)",
                pointerEvents: "none",
              }} />
            )}

            {/* Desktop: "DISCOVER" label top-left */}
            {isDesktop && (
              <p style={{
                position: "absolute", top: 14, left: 18, zIndex: 6, margin: 0,
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontSize: "0.6rem",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.65)",
              }}>
                Discover {stop.city}
              </p>
            )}

            {/* Gallery prev/next arrows */}
            <button
              onClick={galleryPrev}
              aria-label="Previous photo"
              style={{
                position: "absolute",
                left: 10,
                top: isDesktop ? "32%" : "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: 36, height: 36, borderRadius: "50%",
                backgroundColor: "#EA5A2A", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ChevronLeft style={{ width: 16, height: 16, color: "white" }} />
            </button>

            <button
              onClick={galleryNext}
              aria-label="Next photo"
              style={{
                position: "absolute",
                right: 10,
                top: isDesktop ? "32%" : "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: 36, height: 36, borderRadius: "50%",
                backgroundColor: "#EA5A2A", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ChevronRight style={{ width: 16, height: 16, color: "white" }} />
            </button>

            {/* Desktop dots — above the text overlay */}
            {isDesktop && (
              <div style={{
                position: "absolute", bottom: 178, left: 0, right: 0,
                zIndex: 10, display: "flex", justifyContent: "center", gap: 5,
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
                      width: 6, height: 6, borderRadius: "50%", border: "none",
                      backgroundColor: i === galleryIndex ? "white" : "rgba(255,255,255,0.4)",
                      cursor: "pointer", padding: 0, transition: "background-color 200ms",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Desktop: stop info overlaid at bottom */}
            {isDesktop && (
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                padding: "10px 20px 14px",
                zIndex: 5,
                opacity: visible ? 1 : 0,
                transition: "opacity 300ms",
              }}>
                {/* Badge + city + subtitle row */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                    backgroundColor: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.28)",
                    color: "#FDFAF6",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                    fontSize: "0.85rem", fontWeight: 700,
                  }}>
                    {String(stop.id).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                      fontSize: "1.55rem", fontWeight: 700,
                      color: "#FDFAF6", lineHeight: 1.1, margin: 0,
                    }}>
                      {stop.city}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-manrope), Manrope, sans-serif",
                      fontSize: "0.65rem",
                      textTransform: "uppercase", letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.58)", margin: "2px 0 0",
                    }}>
                      {stop.subtitle}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ width: 34, height: 1, backgroundColor: "rgba(184,152,112,0.5)", marginBottom: 10 }} />

                {/* Highlights — 2-column grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2px 14px",
                  marginBottom: 10,
                }}>
                  {stop.highlights.map((item, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: 6,
                      fontFamily: "var(--font-manrope), Manrope, sans-serif",
                      fontSize: "0.7rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.45,
                    }}>
                      <span style={{ color: "#EA5A2A", fontWeight: 700, flexShrink: 0, fontSize: "0.68rem" }}>•</span>
                      {item}
                    </div>
                  ))}
                </div>

                {/* Caption */}
                <p style={{
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontSize: "0.64rem",
                  color: "rgba(184,152,112,0.7)",
                  margin: 0,
                  opacity: galleryVisible ? 1 : 0,
                  transition: "opacity 300ms",
                }}>
                  {stop.city} · {stop.galleryCaptions[galleryIndex]}
                </p>
              </div>
            )}

            {/* Mobile: stop info below the image on light background */}
            {!isDesktop && (
              <div style={{
                padding: "16px 18px 22px",
                backgroundColor: "#F9F8F6",
                opacity: visible ? 1 : 0,
                transition: "opacity 300ms",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
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
                      fontSize: "1.4rem", fontWeight: 700,
                      color: "#0E1F38", lineHeight: 1.2, margin: 0,
                    }}>
                      {stop.city}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-manrope), Manrope, sans-serif",
                      fontSize: "0.7rem",
                      textTransform: "uppercase", letterSpacing: "0.1em",
                      color: "#1F8A8F", margin: "3px 0 0",
                    }}>
                      {stop.subtitle}
                    </p>
                  </div>
                </div>

                <div style={{ width: 36, height: 1, backgroundColor: "#B89870", marginBottom: 12 }} />

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 10px" }}>
                  {stop.highlights.map((item, i) => (
                    <li key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: 8,
                      fontFamily: "var(--font-manrope), Manrope, sans-serif",
                      fontSize: "0.82rem", color: "#5a4a3a", lineHeight: 1.6, marginBottom: 2,
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
                  {stop.city} · {stop.galleryCaptions[galleryIndex]}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
