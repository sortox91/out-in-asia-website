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
      "I'm Filippo, an Italian architect, and in 2021 I left my office life in London to embrace a more independent and adventurous lifestyle, working remotely while travelling across Asia.",
      "Since then, I have explored the region extensively by scooter, following remote roads, discovering hidden landscapes and connecting with local communities far beyond the usual tourist trail. Those experiences gave me a deeper understanding of the cultures, traditions and people that make each destination unique.",
      "Today, I combine my passion for adventure, local knowledge and eye for detail to help create journeys that feel authentic, personal and genuinely connected to the places we visit.",
    ],
    photoLeft: true,
  },
  {
    name: "Szilárd Daróczi",
    handle: "@szilard_utakon",
    instagram: "https://www.instagram.com/szilard_utakon/",
    photo: "/founders/szilard-hat.jpg",
    objectPosition: "center top",
    bio: [
      "I'm Szilárd, and travel has shaped the path of my life. What began as a career in journalism gradually became a passion for creating memorable journeys and helping others discover extraordinary destinations.",
      "Since 2018, I have been based in Bali, where I built a successful travel company creating curated journeys across Southeast Asia, primarily for Hungarian travellers. Over the years, I have developed strong local partnerships and destination knowledge, allowing me to create authentic experiences while maintaining the comfort and quality expected from premium travel.",
      "Today, I combine my local expertise, trusted network and passion for hospitality to create journeys that bring people and destinations together in a meaningful way.",
    ],
    photoLeft: false,
  },
]

function FounderBio({ bio, handle, instagram }: { bio: string[]; handle: string; instagram: string }) {
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
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-sans text-xs font-medium mt-4"
          style={{ color: "#1F8A8F" }}
        >
          <Instagram className="h-3.5 w-3.5" />
          {handle}
        </a>
      </div>

      {/* Desktop: all paragraphs + Instagram link */}
      <div className="hidden md:block space-y-4 font-sans text-base leading-relaxed" style={{ color: "rgba(250,246,239,0.78)" }}>
        {bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-sm font-medium pt-1"
          style={{ color: "#1F8A8F" }}
        >
          <Instagram className="h-4 w-4" />
          {handle}
        </a>
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

                {/* Photo panel — clean, no overlay text */}
                <div className="relative h-72 md:h-auto md:w-[42%] flex-shrink-0">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: founder.objectPosition }}
                  />
                </div>

                {/* Bio panel */}
                <div className="flex-1 flex flex-col justify-center px-5 md:px-10 py-6 md:py-12">
                  <h3 className="font-serif font-extrabold text-xl md:text-3xl text-white mb-4 md:mb-6">{founder.name}</h3>
                  <FounderBio bio={founder.bio} handle={founder.handle} instagram={founder.instagram} />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
