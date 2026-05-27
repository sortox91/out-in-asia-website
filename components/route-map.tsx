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
  },
]

export function RouteMap() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const total = STOPS.length
  const stop = STOPS[current]

  const goTo = (index: number) => {
    setVisible(false)
    setTimeout(() => {
      setCurrent((index + total) % total)
      setVisible(true)
    }, 180)
  }

  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  useEffect(() => {
    const preload = (src: string) => {
      const img = new window.Image()
      img.src = src
    }
    preload(STOPS[(current + 1) % total].image)
    preload(STOPS[(current - 1 + total) % total].image)
  }, [current, total])

  return (
    <section className="py-20 bg-[#FAF6EF] border-t border-[#E8DDD0]/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="font-sans text-xs uppercase mb-4"
            style={{ color: "#1F8A8F", letterSpacing: "0.25em" }}
          >
            Your Journey
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy">
            Route <span className="italic text-sunset-orange">Overview</span>
          </h2>
        </div>

        {/* Split-screen card */}
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-[#E8DDD0] shadow-md md:min-h-[600px]">

          {/* ── LEFT: Map image carousel ── */}
          <div className="relative w-full md:w-1/2 h-[320px] md:h-auto overflow-hidden bg-[#FAF6EF]">
            {STOPS.map((s, i) => (
              <div
                key={s.id}
                className="absolute inset-0 transition-opacity duration-[400ms]"
                style={{
                  opacity: i === current ? 1 : 0,
                  pointerEvents: i === current ? "auto" : "none",
                }}
              >
                <Image
                  src={s.image}
                  alt={`Map of ${s.city}`}
                  fill
                  className="object-cover"
                  style={{ mixBlendMode: "multiply" }}
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous stop"
              className="absolute bottom-6 left-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-85"
              style={{ backgroundColor: "#EA5A2A" }}
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>

            {/* Indicator dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
              {STOPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to stop ${i + 1}`}
                  className="focus:outline-none"
                >
                  <span
                    className="block w-2 h-2 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: i === current ? "#EA5A2A" : "transparent",
                      border: `2px solid ${i === current ? "#EA5A2A" : "#1F8A8F"}`,
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next stop"
              className="absolute bottom-6 right-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-85"
              style={{ backgroundColor: "#EA5A2A" }}
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* ── RIGHT: Content panel ── */}
          <div className="w-full md:w-1/2 flex items-center" style={{ backgroundColor: "#FAF6EF" }}>
            <div
              className="w-full transition-all duration-300"
              style={{
                padding: "clamp(2rem, 5vw, 3rem)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
              }}
            >
              {/* Stop number badge */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-serif text-xl font-bold"
                style={{ backgroundColor: "#0E1F38", color: "#FAF6EF" }}
              >
                {String(stop.id).padStart(2, "0")}
              </div>

              {/* City name */}
              <h3
                className="font-serif font-bold mt-4 leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#0E1F38" }}
              >
                {stop.city}
              </h3>

              {/* Subtitle */}
              <p
                className="font-sans text-sm mt-2 uppercase tracking-widest"
                style={{ color: "#1F8A8F" }}
              >
                {stop.subtitle}
              </p>

              {/* Divider */}
              <div
                className="my-6"
                style={{ width: "64px", height: "1px", backgroundColor: "#B89870" }}
              />

              {/* Highlights */}
              <ul className="space-y-2">
                {stop.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="font-sans text-sm flex items-start gap-2.5"
                    style={{ color: "#5a4a3a", lineHeight: 1.8 }}
                  >
                    <span className="flex-shrink-0 font-bold" style={{ color: "#EA5A2A" }}>
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
