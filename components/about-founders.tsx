"use client"

import { useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

const founders = [
  {
    name: "Filippo Rossi",
    role: "Co-Founder & Guide",
    origin: "Originally from Italy",
    instagram: "https://www.instagram.com/fillorossi.91/",
    handle: "@fillorossi.91",
    photo: "/founders/filippo.jpg",
    initials: "FR",
    bio: [
      "Originally from Italy, Filippo fell in love with Southeast Asia during his first backpacking trip over a decade ago. What started as a month-long adventure turned into a lifelong passion for the region's cultures, cuisines, and hidden treasures.",
      "With a background in hospitality and a genuine love for connecting people, Filippo brings warmth, organization, and an eye for detail to every trip. He believes that the best travel experiences come from authentic connections — both with the places you visit and the people you travel with.",
      "When he's not leading trips, you'll find him exploring local markets, perfecting his Thai cooking, or planning the next adventure.",
    ],
  },
  {
    name: "Szilard Utakon",
    role: "Co-Founder & Guide",
    origin: "Originally from Hungary",
    instagram: "https://www.instagram.com/szilard_utakon/",
    handle: "@szilard_utakon",
    photo: "/founders/szilard-2.jpg",
    initials: "SU",
    bio: [
      "Originally from Hungary, Szilard discovered Southeast Asia through years of extensive travel that changed the course of his life. What began as a traveler's curiosity became a deep passion — he immersed himself in the region's cultures, languages, and communities until Southeast Asia became his second home.",
      "His unique outsider-turned-insider perspective is what sets Szilard apart as a guide. He sees the region through two lenses: the wonder of a traveler discovering it for the first time, and the intimacy of someone who now calls it home. With years of experience in the travel industry and a natural talent for storytelling, he brings destinations to life in ways that guidebooks simply cannot.",
      "Szilard is passionate about sustainable tourism and building meaningful connections between travelers and local communities. His dream? To show LGBTQ+ travelers the Asia he knows and loves — a place of incredible diversity, acceptance, and endless wonder.",
    ],
  },
]

function FounderPhoto({
  src,
  alt,
  initials,
  className,
  imgClassName,
}: {
  src: string
  alt: string
  initials: string
  className: string
  imgClassName: string
}) {
  const [error, setError] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-ocean-teal/20 to-sunset-orange/20 ${className}`}>
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={imgClassName}
          onError={() => setError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-dune">
          <span className="font-serif text-4xl font-bold text-navy">{initials}</span>
        </div>
      )}
    </div>
  )
}

export function AboutFounders() {
  return (
    <section className="bg-navy">
      {/* ── Intro block ── */}
      <div className="text-center pt-24 pb-16 px-4">
        <p className="font-sans text-xs text-sand/40 tracking-[0.25em] uppercase mb-6">
          Your Guides
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-12">
          Meet the team behind{" "}
          <span className="italic text-sunset-orange">Out in Asia</span>
        </h2>

        {/* Two circles side by side */}
        <div className="flex justify-center items-start gap-12 sm:gap-20">
          {founders.map((f) => (
            <div key={f.name} className="flex flex-col items-center gap-4">
              <div className="w-36 h-36 rounded-full overflow-hidden flex-shrink-0">
                <FounderPhoto
                  src={f.photo}
                  alt={f.name}
                  initials={f.initials}
                  className="w-full h-full rounded-full"
                  imgClassName="object-cover object-top"
                />
              </div>
              <div className="text-center">
                <p className="font-serif text-lg text-white font-semibold mb-1">{f.name}</p>
                <a
                  href={f.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-ocean-teal hover:text-mist transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  {f.handle}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bio section ── */}
      <div className="bg-sand">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-16">
            {/* Filippo bio */}
            <div>
              <div className="mb-8">
                <div className="relative w-48 h-48 rounded-full overflow-hidden">
                  <FounderPhoto
                    src="/founders/filippo.jpg"
                    alt="Filippo Rossi"
                    initials="FR"
                    className="w-full h-full rounded-full"
                    imgClassName="object-cover object-top"
                  />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                {founders[0].name}
              </h3>
              <div className="mb-6">
                <a
                  href={founders[0].instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-ocean-teal hover:text-sunset-orange transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  {founders[0].handle}
                </a>
              </div>
              <div className="space-y-4 font-sans text-clay leading-relaxed">
                {founders[0].bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Szilard bio */}
            <div>
              <div className="mb-8">
                <div className="relative w-48 h-48 rounded-full overflow-hidden">
                  <FounderPhoto
                    src="/founders/szilard-2.jpg"
                    alt="Szilard Utakon"
                    initials="SU"
                    className="w-full h-full rounded-full"
                    imgClassName="object-cover object-top"
                  />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                {founders[1].name}
              </h3>
              <div className="mb-6">
                <a
                  href={founders[1].instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-ocean-teal hover:text-sunset-orange transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  {founders[1].handle}
                </a>
              </div>
              <div className="space-y-4 font-sans text-clay leading-relaxed">
                {founders[1].bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
