"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "/trips", label: "Trips" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#FAF6EF] shadow-sm" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Link href="/">
            <Image
              src={isScrolled ? "/logo-text-navy-bg.svg" : "/logo-text-light-bg.svg"}
              alt="Out in Asia"
              width={180}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-base font-medium tracking-wider transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sunset-orange after:transition-all after:duration-300 hover:after:w-full ${isScrolled ? "text-[#0E1F38]" : "text-white"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className={`hidden lg:inline-flex items-center px-8 py-3 rounded-full font-sans font-semibold text-base transition-all duration-300 ${isScrolled ? "bg-navy text-white hover:bg-ocean-teal" : "border-2 border-white text-white hover:bg-white hover:text-navy"}`}
          >
            Book a Trip
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          >
            <span className={`w-6 h-0.5 block transition-all ${isScrolled ? "bg-[#0E1F38]" : "bg-white"}`} />
            <span className={`w-6 h-0.5 block transition-all ${isScrolled ? "bg-[#0E1F38]" : "bg-white"}`} />
            <span className={`w-6 h-0.5 block transition-all ${isScrolled ? "bg-[#0E1F38]" : "bg-white"}`} />
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0E1F38] z-40 flex flex-col items-center justify-center gap-8 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-4xl text-white hover:text-[#EA5A2A] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-[#EA5A2A] text-white rounded-full font-sans font-semibold"
          >
            Book a Trip
          </Link>
        </div>
      )}
    </header>
  )
}
