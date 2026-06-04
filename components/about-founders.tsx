"use client"

import { useState } from "react"
import Image from "next/image"
import { Instagram, ChevronDown } from "lucide-react"

const founders = [
  {
    name: "Filippo Rossi",
    handle: "@fillorossi.91",
    instagram: "https://www.instagram.com/fillorossi.91/",
    photo: "/founders/filippo.jpg",
    objectPosition: "center center",
    bio: [
      "Originally from Italy, Filippo fell in love with Southeast Asia during his first backpacking trip over a decade ago. What started as a month-long adventure turned into a lifelong passion for the region's cultures, cuisines, and hidden treasures.",
      "With a background in hospitality and a genuine love for connecting people, Filippo brings warmth, organisation, and an eye for detail to every trip. He believes that the best travel experiences come from authentic connections — both with the places you visit and the people you travel with.",
      "When he's not leading trips, you'll find him exploring local markets, perfecting his Thai cooking, or planning the next adventure.",
    ],
    photoLeft: true,
  },
  {
    name: "Szilárd Utakon",
    handle: "@szilard_utakon",
    instagram: "https://www.instagram.com/szilard_utakon/",
    photo: "/founders/szilard-hat.jpg",
    objectPosition: "center top",
    bio: [
      "Originally from Hungary, Szilard discovered Southeast Asia through years of extensive travel that changed the course of his life. What began as a traveler's curiosity became a deep passion — he immersed himself in the region's cultures, languages, and communities until Southeast Asia became his second home.",
      "His unique outsider-turned-insider perspective is what sets Szilard apart as a guide. He sees the region through two lenses: the wonder of a traveler discovering it for the first time, and the intimacy of someone who now calls it home.",
      "Szilard is passionate about sustainable tourism and building meaningful connections between travelers and local communities. His dream? To show LGBTQ+ travelers the Asia he knows and loves — a place of incredible diversity, acceptance, and endless wonder.",
    ],
    photoLeft: false,
  },
]

function FounderBio({ bio }: { bio: string[] }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      {/* Mobile: show first paragraph + truncate rest behind "Read more" */}
      <div className="md:hidden">
        <p className="font-sans text-sm leading-relaxed mb-3" style={{ color: "rgba(250,246,239,0.78)" }}>
          {bio[0]}
        </p>
        {expanded && (
          <div className="space-y-3">
            {bio.slice(1).map((para, i) => (
              <p key={i} className="font-sans text-sm leading-relaxed" style={{ color: "rgba(250,246,239,0.78)" }}>
                {para}
              </p>
            ))}
          </div>
        )}
        {bio.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 flex items-center gap-1 font-sans text-xs font-semibold"
            style={{ color: "#1F8A8F" }}
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown
              className="h-3.5 w-3.5 transition-transform duration-200"
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
        )}
      </div>

      {/* Desktop: all paragraphs */}
      <div className="hidden md:block space-y-4 font-sans text-base leading-relaxed" style={{ color: "rgba(250,246,239,0.78)" }}>
        {bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </>
  )
}

export function AboutFounders() {
  return (
    <section>
      {founders.map((founder) => (
        <div key={founder.name} style={{ backgroundColor: "#0E1F38" }}>
          <div className={`flex flex-col ${founder.photoLeft ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[480px]`}>

            {/* Photo panel */}
            <div className="relative h-64 lg:h-auto lg:w-[42%] flex-shrink-0">
              <Image
                src={founder.photo}
                alt={founder.name}
                fill
                className="object-cover"
                style={{ objectPosition: founder.objectPosition }}
              />
              {/* Name overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-5"
                style={{ background: "linear-gradient(to top, rgba(14,31,56,0.85) 0%, transparent 100%)" }}
              >
                <p className="font-serif text-lg font-bold text-white mb-1">{founder.name}</p>
                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm transition-colors"
                  style={{ color: "#1F8A8F" }}
                >
                  <Instagram className="h-4 w-4" />
                  {founder.handle}
                </a>
              </div>
            </div>

            {/* Bio panel */}
            <div className="flex-1 flex flex-col justify-center px-5 md:px-12 py-8 md:py-14">
              <h3 className="font-serif font-extrabold text-2xl md:text-3xl text-white mb-4 md:mb-6">{founder.name}</h3>
              <FounderBio bio={founder.bio} />
            </div>

          </div>
        </div>
      ))}
    </section>
  )
}
