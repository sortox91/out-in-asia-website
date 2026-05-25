"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const VIETNAM_PATH =
  "M 8,28 C 40,10 80,4 105,4 L 150,45 L 135,65 L 115,80 " +
  "L 95,100 L 90,128 L 108,158 L 120,170 L 132,178 L 145,188 " +
  "L 158,205 L 168,222 L 175,252 L 182,280 L 178,302 L 172,320 " +
  "L 152,336 L 132,350 L 115,342 L 95,362 L 72,400 L 60,392 " +
  "L 48,358 L 48,328 L 48,305 L 40,280 L 38,255 L 38,230 " +
  "L 45,212 L 62,200 L 65,188 L 60,175 L 68,162 L 48,148 " +
  "L 40,130 L 32,115 L 22,102 L 20,88 L 10,76 L 22,64 " +
  "L 24,52 L 22,38 L 8,28 Z"

interface Stop {
  key: string
  svgX: number
  svgY: number
  step: number
  title: string
  subtitle: string
  details: string[]
}

const STOPS: Stop[] = [
  {
    key: "hanoi",
    svgX: 96,
    svgY: 67,
    step: 1,
    title: "Hanoi",
    subtitle: "Days 1 & 2 · Vietnam's Capital",
    details: [
      "Airport transfer & hotel check-in",
      "Ngoc Son Temple on Hoan Kiem Lake",
      "Iconic egg coffee experience",
      "Guided street food tour",
      "Optional: Hanoi's vibrant gay bars",
    ],
  },
  {
    key: "sapa",
    svgX: 46,
    svgY: 31,
    step: 2,
    title: "Sapa",
    subtitle: "Days 3–5 · Mountain Escape",
    details: [
      "5–6h scenic minivan from Hanoi",
      "Guided trek: bamboo forests & rice terraces",
      "Local village encounters",
      "Cable Car Fansipan — Vietnam's highest peak",
      "Traditional Sapa Hot Pot dinner",
    ],
  },
  {
    key: "ninhbinh",
    svgX: 99,
    svgY: 88,
    step: 3,
    title: "Ninh Binh",
    subtitle: "Days 6–8 · Ha Long Bay on Land",
    details: [
      "6–7h minivan from Sapa",
      "Morning climb to Dragon Mountain viewpoint",
      "Scenic boat trip through rivers & caves",
      "Hidden cycling tour: Thung Nang Lake & Bich Dong Pagoda",
    ],
  },
  {
    key: "halong",
    svgX: 130,
    svgY: 70,
    step: 4,
    title: "Ha Long Bay",
    subtitle: "Days 9–10 · Luxury Yacht Cruise",
    details: [
      "3h drive from Ninh Binh",
      "Board luxury yacht with private balcony cabins",
      "Kayaking through limestone islands",
      "Cat Ba Island excursion & Three Peaches Beach",
      "Sunset drinks & full board dining",
    ],
  },
  {
    key: "hanoi-return",
    svgX: 114,
    svgY: 82,
    step: 5,
    title: "Return to Hanoi",
    subtitle: "Days 11–12 · Farewell",
    details: [
      "Final morning on the yacht",
      "Train Street visit at 18:00",
      "Farewell dinner with the group",
      "Private airport transfer on Day 12",
    ],
  },
]

const ROUTE_POINTS = STOPS.map((s) => `${s.svgX},${s.svgY}`).join(" ")

export function RouteMap() {
  const [activeKey, setActiveKey] = useState<string>("hanoi")
  const activeStop = STOPS.find((s) => s.key === activeKey) ?? STOPS[0]

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#E8DDD0] shadow-sm">
      <div className="flex flex-col md:flex-row md:min-h-[560px]">

        {/* ── LEFT: SVG map 45% ── */}
        <div className="w-full md:w-[45%] bg-[#EDE5D8] flex items-center justify-center p-6 md:p-10">
          <div className="h-[300px] md:h-[520px] flex items-center justify-center">
            <svg
              viewBox="-12 -12 224 444"
              className="h-full w-auto drop-shadow-sm"
              aria-label="North Vietnam route map"
            >
              {/* Country silhouette */}
              <path
                d={VIETNAM_PATH}
                fill="#F5EDDF"
                stroke="#C4B5A0"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />

              {/* Animated dashed route line */}
              <polyline
                points={ROUTE_POINTS}
                fill="none"
                stroke="#1F8A8F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.75"
                strokeDasharray="8 5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-130"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </polyline>

              {/* Stop dots */}
              {STOPS.map((stop) => {
                const isActive = activeKey === stop.key
                return (
                  <g
                    key={stop.key}
                    transform={`translate(${stop.svgX},${stop.svgY})`}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveKey(stop.key)}
                    onClick={() => setActiveKey(stop.key)}
                    role="button"
                    tabIndex={0}
                    aria-label={stop.title}
                    onKeyDown={(e) => e.key === "Enter" && setActiveKey(stop.key)}
                  >
                    {/* Active pulse ring — orange */}
                    {isActive && (
                      <circle r="8" fill="none" stroke="#EA5A2A" strokeWidth="1.5">
                        <animate
                          attributeName="r"
                          values="8;24"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.9;0"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    {/* Inactive pulse ring — teal */}
                    {!isActive && (
                      <circle r="5" fill="none" stroke="#1F8A8F" strokeWidth="1" strokeOpacity="0.5">
                        <animate
                          attributeName="r"
                          values="5;14"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.5;0"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    {/* Main dot */}
                    <circle r={isActive ? 7 : 5} fill={isActive ? "#EA5A2A" : "#1F8A8F"} />
                    <circle r="2" fill="white" fillOpacity="0.55" />

                    {/* Step number above dot */}
                    <text
                      y={-12}
                      textAnchor="middle"
                      style={{
                        fontSize: 7,
                        fontWeight: 700,
                        fill: isActive ? "#EA5A2A" : "#1F8A8F",
                        fontFamily: "var(--font-manrope), Manrope, sans-serif",
                        userSelect: "none",
                      }}
                    >
                      {String(stop.step).padStart(2, "0")}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        {/* ── RIGHT: Content panel 55% ── */}
        <div className="w-full md:w-[55%] bg-[#FAF6EF] flex flex-col justify-center px-8 py-10 md:px-14 md:py-14">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {/* Stop label */}
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-ocean-teal mb-4">
                Stop {String(activeStop.step).padStart(2, "0")} of {STOPS.length}
              </p>

              {/* Title */}
              <h3
                className="font-serif font-bold text-navy leading-none mb-3"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                {activeStop.title}
              </h3>

              {/* Subtitle */}
              <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-ocean-teal mb-8">
                {activeStop.subtitle}
              </p>

              {/* Detail bullets */}
              <ul className="space-y-3.5">
                {activeStop.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-sans text-sm leading-snug"
                    style={{ color: "#B89870" }}
                  >
                    <span className="flex-shrink-0 w-1 h-1 rounded-full bg-sunset-orange mt-[7px]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex items-center gap-2.5 mt-12">
            {STOPS.map((stop) => {
              const isActive = activeKey === stop.key
              return (
                <button
                  key={stop.key}
                  onClick={() => setActiveKey(stop.key)}
                  aria-label={`View ${stop.title}`}
                  className="focus:outline-none"
                >
                  <span
                    className="block h-2 rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? "28px" : "8px",
                      backgroundColor: isActive ? "#EA5A2A" : "#C4B5A0",
                    }}
                  />
                </button>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
