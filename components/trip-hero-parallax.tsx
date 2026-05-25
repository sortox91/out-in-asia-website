"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft } from "lucide-react"

interface TripHeroParallaxProps {
  title: string
  subtitle: string
  heroImage: string
  nextDates: string[]
}

export function TripHeroParallax({
  title,
  subtitle,
  heroImage,
  nextDates,
}: TripHeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"])

  return (
    <div ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Parallax image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.22]">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Back link */}
      <div className="absolute top-24 left-6 sm:left-10 lg:left-16 z-10">
        <Link
          href="/trips"
          className="inline-flex items-center gap-2 font-sans text-white/60 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          All trips
        </Link>
      </div>

      {/* Bottom-left: title block */}
      <div className="absolute bottom-10 left-6 sm:left-10 lg:left-16 max-w-[70%]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-sans text-[10px] sm:text-xs tracking-[0.35em] uppercase text-ocean-teal mb-4"
        >
          {subtitle}
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white leading-none"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            {title}
          </motion.h1>
        </div>
      </div>

      {/* Bottom-right: departure date pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute bottom-10 right-6 sm:right-10 lg:right-16 flex flex-col items-end gap-2"
      >
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/35 mb-1">
          Departures
        </p>
        {nextDates.map((date, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-sans rounded-full"
          >
            {date}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
