"use client"

import Image from "next/image"
import { useState } from "react"

interface FounderImageProps {
  src: string
  alt: string
  initials: string
  gradientFrom?: string
  gradientTo?: string
}

export function FounderImage({
  src,
  alt,
  initials,
  gradientFrom = "from-ocean-teal/20",
  gradientTo = "to-sunset-orange/20",
}: FounderImageProps) {
  const [error, setError] = useState(false)

  return (
    <div
      className={`aspect-[4/5] relative bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl overflow-hidden flex items-center justify-center`}
    >
      {/* TODO: add real photos to /public/founders/ */}
      {!error && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setError(true)}
        />
      )}
      {/* Fallback initials — visible when image is missing */}
      <div className="absolute inset-0 flex items-center justify-center -z-0">
        <div className="w-40 h-40 rounded-full bg-dune flex items-center justify-center">
          <span className="font-serif text-5xl font-bold text-navy">{initials}</span>
        </div>
      </div>
    </div>
  )
}
