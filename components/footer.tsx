"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const destinations = [
  { name: "Thailand", href: "/trips/thailand" },
  { name: "North Vietnam", href: "/trips/north-vietnam" },
  { name: "South Vietnam", href: "/trips/south-vietnam" },
  { name: "Bali", href: "/trips/bali" },
]

const links = [
  { name: "Trips", href: "/trips" },
  { name: "Meet Us", href: "/about" },
  { name: "Get in Touch", href: "/contact" },
]

const socialItems = [
  { icon: Instagram, href: "https://instagram.com/outinasia.travel", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/outinasia", label: "Facebook" },
  { icon: Mail, href: "mailto:info.outinasia@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-navy text-warm-cream relative overflow-hidden border-t-4 border-sunset-orange">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-12 md:pt-20 pb-6 md:pb-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-10 md:mb-14">

          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Image
              src="/logo-text-navy-bg.svg"
              alt="Out in Asia"
              width={220}
              height={58}
              className="h-14 w-auto mb-6"
            />
            <p className="font-sans text-sm lg:text-lg text-sand/70 max-w-md leading-relaxed mb-6">
              Curated luxury travel experiences for the LGBTQ+ community across Southeast Asia.
              Travel authentically, connect meaningfully.
            </p>

            {/* Mobile only: Get in Touch + social icons */}
            <div className="lg:hidden">
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-sand/40 mb-4">
                Get in Touch
              </h4>
              <div className="flex gap-4">
                {socialItems.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="w-11 h-11 rounded-full border border-sand/20 flex items-center justify-center text-sand/60 hover:text-sunset-orange hover:border-sunset-orange transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns — desktop only */}
          <div className="hidden lg:grid lg:col-span-7 grid-cols-3 gap-8">
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-sand/40 mb-6">
                Destinations
              </h4>
              <nav className="flex flex-col gap-4">
                {destinations.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-sand/80 hover:text-sunset-orange transition-colors duration-300 group flex items-center gap-2"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-sand/40 mb-6">
                Explore
              </h4>
              <nav className="flex flex-col gap-4">
                {links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-sand/80 hover:text-sunset-orange transition-colors duration-300 group flex items-center gap-2"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-sand/40 mb-6">
                Get in Touch
              </h4>
              <div className="flex flex-col gap-3 mb-5">
                <a
                  href="mailto:info.outinasia@gmail.com"
                  className="font-sans text-sand/80 hover:text-sunset-orange transition-colors duration-300"
                >
                  info.outinasia@gmail.com
                </a>
              </div>
              <div className="flex gap-3">
                {socialItems.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="w-10 h-10 rounded-full border border-sand/20 flex items-center justify-center text-sand/60 hover:text-sunset-orange hover:border-sunset-orange transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ash-navy pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-sans text-sm text-sand/40">
            &copy; {new Date().getFullYear()} Out in Asia. All rights reserved.
          </p>
          <p className="font-serif italic text-sand/60">
            Travel Gay &bull; Be You &bull; Belong Together
          </p>
        </div>
      </div>
    </footer>
  )
}
