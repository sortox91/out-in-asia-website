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
    galleryPositions: ["center", "center", "center", "center"],
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
    galleryPositions: ["center", "center", "center", "center"],
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
    galleryPositions: ["center bottom", "center", "center", "center"],
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
    galleryPositions: ["center", "center", "center", "center 60%"],
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
    galleryPositions: ["center", "center", "center", "center"],
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

  const goTo = (index: number) => {
    setVisible(false)
    setTimeout(() => {
      setCurrent((index + total) % total)
      setGalleryIndex(0)
      setVisible(true)
    }, 180)
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

  useEffect(() => {
    const preload = (src: string) => {
      const img = new window.Image()
      img.src = src
    }
    preload(STOPS[(current + 1) % total].image)
    preload(STOPS[(current - 1 + total) % total].image)
  }, [current, total])

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

        {/* Card — single unified block */}
        <div style={{
          borderRadius: "1rem",
          overflow: "hidden",
          border: "1px solid #E8DDD0",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: isDesktop ? "row" : "column",
          height: isDesktop ? "540px" : "auto",
        }}>

          {/* LEFT: Map carousel (45% desktop) */}
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

            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous stop"
              style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                zIndex: 10,
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#EA5A2A",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ChevronLeft style={{ width: 20, height: 20, color: "white" }} />
            </button>

            {/* Dots */}
            <div style={{
              position: "absolute",
              bottom: 64,
              left: 0,
              right: 0,
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              gap: 8,
            }}>
              {STOPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to stop ${i + 1}`}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    border: `2px solid ${i === current ? "#EA5A2A" : "#1F8A8F"}`,
                    backgroundColor: i === current ? "#EA5A2A" : "transparent",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 200ms",
                  }}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next stop"
              style={{
                position: "absolute",
                bottom: 24,
                right: 24,
                zIndex: 10,
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#EA5A2A",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ChevronRight style={{ width: 20, height: 20, color: "white" }} />
            </button>
          </div>

          {/* RIGHT: highlights (top) + gallery (bottom) */}
          <div style={{
            flex: 1,
            minWidth: 0,
            height: isDesktop ? "100%" : "auto",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F9F8F6",
          }}>

            {/* RIGHT-TOP: stop info + highlights (~46% of card height) */}
            <div style={{
              flex: isDesktop ? "0 0 46%" : "none",
              overflowY: "auto",
              padding: "clamp(1.2rem, 2.5vw, 1.8rem)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 300ms, transform 300ms",
            }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#0E1F38",
                color: "#FAF6EF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                fontSize: "1rem",
                fontWeight: 700,
              }}>
                {String(stop.id).padStart(2, "0")}
              </div>

              <h3 style={{
                fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                color: "#0E1F38",
                marginTop: 10,
                lineHeight: 1.2,
              }}>
                {stop.city}
              </h3>

              <p style={{
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#1F8A8F",
                marginTop: 4,
              }}>
                {stop.subtitle}
              </p>

              <div style={{ width: 40, height: 1, backgroundColor: "#B89870", margin: "12px 0" }} />

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {stop.highlights.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      fontFamily: "var(--font-manrope), Manrope, sans-serif",
                      fontSize: "0.8rem",
                      color: "#5a4a3a",
                      lineHeight: 1.6,
                      marginBottom: 2,
                    }}
                  >
                    <span style={{ color: "#EA5A2A", fontWeight: 700, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Horizontal divider */}
            <div style={{ height: 1, backgroundColor: "#E8DDD0", margin: "0 20px", flexShrink: 0 }} />

            {/* RIGHT-BOTTOM: gallery */}
            <div style={{
              flex: isDesktop ? "1 1 0" : "none",
              minHeight: 0,
              padding: "12px 16px 14px",
              display: "flex",
              flexDirection: "column",
            }}>
              <p style={{
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontSize: "0.65rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#1F8A8F",
                marginBottom: "8px",
                flexShrink: 0,
              }}>
                DISCOVER {stop.city.toUpperCase()}
              </p>

              {/* Image container — flex: 1 on desktop, fixed height on mobile */}
              <div style={{
                position: "relative",
                borderRadius: "0.6rem",
                overflow: "hidden",
                ...(isDesktop ? { flex: 1, minHeight: 0 } : { height: 220 }),
              }}>
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
                    style={{ objectPosition: stop.galleryPositions[galleryIndex] }}
                  />
                </div>

                {/* Left arrow */}
                <button
                  onClick={galleryPrev}
                  aria-label="Previous photo"
                  style={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "#EA5A2A",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 200ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <ChevronLeft style={{ width: 16, height: 16, color: "white" }} />
                </button>

                {/* Right arrow */}
                <button
                  onClick={galleryNext}
                  aria-label="Next photo"
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "#EA5A2A",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 200ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <ChevronRight style={{ width: 16, height: 16, color: "white" }} />
                </button>

                {/* Dot indicators */}
                <div style={{
                  position: "absolute",
                  bottom: 8,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                  display: "flex",
                  justifyContent: "center",
                  gap: 5,
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
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        border: "none",
                        backgroundColor: i === galleryIndex ? "white" : "rgba(255,255,255,0.5)",
                        cursor: "pointer",
                        padding: 0,
                        transition: "background-color 200ms",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Caption */}
              <p style={{
                fontFamily: "var(--font-manrope), Manrope, sans-serif",
                fontSize: "0.72rem",
                color: "#B89870",
                marginTop: "6px",
                flexShrink: 0,
                opacity: galleryVisible ? 1 : 0,
                transition: "opacity 300ms",
              }}>
                {stop.city} · {stop.galleryCaptions[galleryIndex]}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
