"use client"

import { motion } from "framer-motion"

interface ItineraryDay {
  day: number
  title: string
  description: string
}

export function TripTimeline({ itinerary }: { itinerary: ItineraryDay[] }) {
  return (
    <section className="py-24 bg-[#FAF6EF]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-4"
          >
            Day by Day
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl text-navy"
          >
            Your{" "}
            <span className="italic text-sunset-orange">Itinerary</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical teal line */}
          <div className="absolute left-[23px] top-2 bottom-2 w-px bg-ocean-teal/20" />

          <div className="space-y-0">
            {itinerary.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: Math.min(i * 0.05, 0.3),
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {/* Dot on the line */}
                <div className="absolute left-[17px] top-1.5 w-[13px] h-[13px] rounded-full bg-ocean-teal border-2 border-[#FAF6EF] shadow-sm" />

                {/* Day badge */}
                <span className="inline-block font-sans text-[10px] tracking-[0.22em] text-sunset-orange uppercase font-semibold mb-2">
                  Day {item.day}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl lg:text-2xl text-navy mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-[#7A6A58] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
