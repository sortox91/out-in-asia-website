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
      "Originally from Italy, Filippo built his life on the road as a digital nomad architect, exploring Southeast Asia's most remote corners by motorbike. What began as a passion for adventure grew into a deep love for the region's cultures, communities, and hidden gems.",
      "With a background in design and a genuine talent for connecting people, Filippo brings warmth, organisation, and an eye for detail to every trip. He believes the best travel experiences come from authentic connections — with the places you visit and the people you travel with.",
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
      "Originally from Hungary, Szilard built a well-established premium travel business serving discerning clients who want more from Southeast Asia. His outsider-turned-insider perspective is what sets him apart: he sees the region through two lenses — the wonder of discovery and the intimacy of someone who now calls it home.",
      "Passionate about sustainable tourism and genuine cultural connection, Szilard has spent years curating experiences that go far beyond the guidebook. His dream? To show LGBTQ+ travellers the Asia he knows and loves — a place of incredible diversity, acceptance, and endless wonder.",
    ],
    photoLeft: false,
  },
]

function FounderBio({ bio }: { bio: string[] }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      {/* Mobile: first paragraph + read more */}
      <div className="md:hidden">
        <p className="font-sans text-xs leading-relaxed mb-3" style={{ color: "rgba(250,246,239,0.78)" }}>
          {bio[0]}
        </p>
        {expanded && (
          <div className="space-y-3">
            {bio.slice(1).map((para, i) => (
              <p key={i} className="font-sans text-xs leading-relaxed" style={{ color: "rgba(250,246,239,0.78)" }}>
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
    <section className="py-14 md:py-20" style={{ backgroundColor: "#0E1F38" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-5 md:space-y-6">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.10)", backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              <div className={`flex flex-col ${founder.photoLeft ? "md:flex-row" : "md:flex-row-reverse"} md:min-h-[400px]`}>

                {/* Photo panel */}
                <div className="relative h-72 md:h-auto md:w-[42%] flex-shrink-0">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: founder.objectPosition }}
                  />
                  {/* Name overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{ background: "linear-gradient(to top, rgba(14,31,56,0.85) 0%, transparent 100%)" }}
                  >
                    <p className="font-serif text-base font-bold text-white mb-0.5">{founder.name}</p>
                    <a
                      href={founder.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-sans text-xs transition-colors"
                      style={{ color: "#1F8A8F" }}
                    >
                      <Instagram className="h-3.5 w-3.5" />
                      {founder.handle}
                    </a>
                  </div>
                </div>

                {/* Bio panel */}
                <div className="flex-1 flex flex-col justify-center px-5 md:px-10 py-6 md:py-12">
                  <h3 className="font-serif font-extrabold text-xl md:text-3xl text-white mb-4 md:mb-6">{founder.name}</h3>
                  <FounderBio bio={founder.bio} />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
