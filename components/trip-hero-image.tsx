"use client"

import { useState } from "react"
import Image from "next/image"

export function TripHeroImage({
  src,
  fallbackSrc,
  alt,
}: {
  src: string
  fallbackSrc: string
  alt: string
}) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-cover"
      priority
      onError={() => setImgSrc(fallbackSrc)}
    />
  )
}
