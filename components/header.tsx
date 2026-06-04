"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  const logoSrc = isMenuOpen || !isScrolled ? "/logo-text-navy-bg.svg" : "/logo-text-light-bg.svg"
  const headerBg = isMenuOpen ? "bg-[#0E1F38]" : isScrolled ? "bg-[#FAF6EF] shadow-sm" : "bg-transparent"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={logoSrc}
              alt="Out in Asia"
              width={160}
              height={48}
              className="h-12 w-auto opacity-100"
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
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden flex items-center justify-center w-11 h-11 -mr-1.5"
          >
            {isMenuOpen
              ? <X className="h-6 w-6 text-white" />
              : <Menu className={`h-6 w-6 ${isScrolled ? "text-[#0E1F38]" : "text-white"}`} />
            }
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-20 bg-[#0E1F38] z-40 flex flex-col items-center justify-center gap-10 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-5xl text-white hover:text-[#EA5A2A] transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.3 }}
              className="mt-4"
            >
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center px-10 py-4 bg-[#EA5A2A] text-white rounded-full font-sans font-semibold text-lg min-h-[56px]"
              >
                Book a Trip
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
