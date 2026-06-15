"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, Compass, Users, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const destinations = [
  { name: "Thailand",      href: "/trips/thailand" },
  { name: "North Vietnam", href: "/trips/north-vietnam" },
  { name: "South Vietnam", href: "/trips/south-vietnam" },
  { name: "Bali",          href: "/trips/bali" },
]

const exploreLinks = [
  { name: "Trips",         href: "/trips",   Icon: Compass },
  { name: "Meet Us",       href: "/about",   Icon: Users },
  { name: "Get in Touch",  href: "/contact", Icon: MessageCircle },
]

const socialItems = [
  { icon: Instagram, href: "https://instagram.com/outinasia.travel", label: "Instagram" },
  { icon: Facebook,  href: "https://facebook.com/outinasia",         label: "Facebook" },
  { icon: Mail,      href: "mailto:info.outinasia@gmail.com",        label: "Email" },
]

export function Footer() {
  return (
    <footer
      className="text-warm-cream relative overflow-hidden border-t-4 border-sunset-orange"
      style={{ background: "linear-gradient(160deg, #0E1F38 0%, #0a1628 100%)" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-8 md:pt-10 pb-5 md:pb-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 md:mb-10">

          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Image
              src="/logo-text-navy-bg.svg"
              alt="Out in Asia"
              width={200}
              height={52}
              className="h-12 w-auto mb-4"
            />
            <p className="font-sans text-xs lg:text-sm text-sand/65 max-w-sm leading-relaxed mb-5">
              Premium LGBTQ+ travel in Southeast Asia.
            </p>

            {/* Mobile only: GET IN TOUCH inline with icons */}
            <div className="lg:hidden flex items-center gap-4">
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-sand/40">
                Get in Touch
              </span>
              {socialItems.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-9 h-9 rounded-full border border-sand/20 flex items-center justify-center text-sand/60 hover:text-sunset-orange hover:border-sunset-orange transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns — desktop only */}
          <div className="hidden lg:grid lg:col-span-7 grid-cols-3 gap-8">

            {/* Destinations */}
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-sand/40 mb-5">
                Destinations
              </h4>
              <nav className="flex flex-col gap-4">
                {destinations.map((dest) => (
                  <Link
                    key={dest.href}
                    href={dest.href}
                    className="font-sans text-sm text-sand/80 hover:text-sunset-orange transition-colors duration-300"
                  >
                    {dest.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-sand/40 mb-5">
                Explore
              </h4>
              <nav className="flex flex-col gap-4">
                {exploreLinks.map(({ name, href, Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center gap-2.5 font-sans text-sand/80 hover:text-sunset-orange transition-colors duration-300"
                  >
                    <Icon
                      className="flex-shrink-0 transition-colors duration-300 group-hover:text-sunset-orange"
                      style={{ width: 16, height: 16, color: "#1F8A8F" }}
                      strokeWidth={1.5}
                    />
                    {name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-sand/40 mb-5">
                Get in Touch
              </h4>
              <div className="mb-5">
                <a
                  href="mailto:info.outinasia@gmail.com"
                  className="font-sans text-sm text-sand/80 hover:text-sunset-orange transition-colors duration-300"
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

        {/* Bottom Bar — copyright only, no tagline */}
        <div className="border-t border-white/20 pt-4 flex justify-center">
          <p className="font-sans text-xs text-sand/35">
            &copy; {new Date().getFullYear()} Out in Asia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
