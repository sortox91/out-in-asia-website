import type React from "react"
import Image from "next/image"

interface PageHeroProps {
  /** Desktop image (also used as mobile fallback if imageMobile not provided) */
  image: string
  /** Optional dedicated mobile image (portrait 4:5) */
  imageMobile?: string
  /** Optional object-position override for the mobile image (CSS value, e.g. "72% center") */
  mobileObjectPosition?: string
  /** Override mobile container height/aspect classes (replaces default "h-[60vh] min-h-[380px]") */
  mobileHeightClass?: string
  /** Small teal label above the title */
  eyebrow: string
  /** Main title — line 1 */
  title: string
  /** Optional italic orange word appended to line 1 */
  titleAccent?: string
  /** Optional second title line */
  titleLine2?: string
  /** Optional italic orange word appended to line 2 */
  titleLine2Accent?: string
  /** Optional subtitle in Manrope below the title */
  subtitle?: React.ReactNode
  /** Optional content rendered below the subtitle (e.g. departure date pills for trip pages) */
  bottomContent?: React.ReactNode
  /** Optional content rendered above the eyebrow (e.g. back link on trip pages) */
  topContent?: React.ReactNode
}

/**
 * Unified full-bleed hero for all secondary pages.
 * Desktop: 21:9 cinematic. Mobile: 60vh (matches Group Trips baseline).
 * Left-to-right navy fade for text readability. Header is transparent by default.
 */
export function PageHero({
  image,
  imageMobile,
  mobileObjectPosition,
  mobileHeightClass,
  eyebrow,
  title,
  titleAccent,
  titleLine2,
  titleLine2Accent,
  subtitle,
  bottomContent,
  topContent,
}: PageHeroProps) {
  const mobileImage = imageMobile ?? image

  return (
    <section className={`relative w-full ${mobileHeightClass ?? "h-[60vh] min-h-[380px]"} md:h-auto md:aspect-[21/9] md:min-h-[500px] md:max-h-[680px] overflow-hidden`}>

      {/* Desktop image */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Mobile image (fallback = desktop image) */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={mobileImage}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: mobileObjectPosition ?? "center" }}
          priority
        />
      </div>

      {/* Left-to-right navy fade — text readability */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(14,31,56,0.92) 0%, rgba(14,31,56,0.75) 25%, rgba(14,31,56,0.25) 55%, transparent 80%)" }} />
      {/* Top nav gradient */}
      <div className="absolute inset-x-0 top-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(14,31,56,0.55) 0%, rgba(14,31,56,0.15) 60%, transparent 100%)" }} />

      {/* Text — top-anchored, upper-third of hero */}
      <div className="absolute inset-0 flex items-start pt-16 md:pt-[72px]">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-sm md:max-w-lg text-left">
            {topContent && (
              <div className="mb-4">
                {topContent}
              </div>
            )}
            <p
              className="font-sans text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-2 md:mb-4"
              style={{ color: "#1F8A8F" }}
            >
              {eyebrow}
            </p>
            <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-2 md:mb-4">
              <span className="block">
                {title}
                {titleAccent && (
                  <>{" "}<span className="italic text-sunset-orange">{titleAccent}</span></>
                )}
              </span>
              {titleLine2 && (
                <span className="block whitespace-nowrap">
                  {titleLine2}
                  {titleLine2Accent && (
                    <>{" "}<span className="italic text-sunset-orange">{titleLine2Accent}</span></>
                  )}
                </span>
              )}
            </h1>
            {subtitle && (
              <p className="font-sans text-xs md:text-base leading-relaxed max-w-[220px] md:max-w-none" style={{ color: "#FAF6EF" }}>
                {subtitle}
              </p>
            )}
            {bottomContent && (
              <div className="mt-4 md:mt-5">
                {bottomContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
