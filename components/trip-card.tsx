"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface TripCardProps {
  id: string
  title: string
  subtitle: string
  description: string
  duration: string
  image: string
  price: string
}

export function TripCard({
  id,
  title,
  subtitle,
  duration,
  image,
  price,
}: TripCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link
      href={`/trips/${id}`}
      className="group block relative rounded-2xl overflow-hidden"
    >
      {/* Fixed-height image area */}
      <div className="h-[260px] sm:h-[360px] md:h-[420px] relative overflow-hidden bg-ocean-teal/20">
        {/* TODO: add real photos to /public/trips/ */}
        {!imgError && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImgError(true)}
          />
        )}

        {/* Strong gradient — covers bottom 40% at heavy opacity */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />

        {/* Duration badge — top left */}
        <div className="absolute top-5 left-5">
          <span className="px-3 py-1.5 bg-sunset-orange text-white text-xs font-sans font-semibold tracking-wide rounded-full">
            {duration}
          </span>
        </div>

        {/* Main overlay text — always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 pb-6 md:pb-8">
          <p className="font-sans text-xs text-white/60 uppercase tracking-[0.2em] mb-2">
            {subtitle}
          </p>
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
              {title}
            </h3>
            <span className="font-sans font-semibold text-warm-cream/80 text-sm flex-shrink-0 mb-1">
              From {price} /person
            </span>
          </div>

          {/* "Discover more" — slides up from hidden on hover */}
          <div className="mt-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-sunset-orange">
              Discover more
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
