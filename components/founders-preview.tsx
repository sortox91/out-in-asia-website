"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"

export function FoundersPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-4"
          >
            Meet Your Guides
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.05]"
          >
            Travel led by passionate locals who get it
          </motion.h2>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {siteConfig.founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col"
            >
              {/* Avatar Circle */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ocean-teal to-clay-color flex items-center justify-center mb-6 flex-shrink-0">
                <span className="font-serif text-3xl font-bold text-white">
                  {founder.initials}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl lg:text-3xl text-navy mb-1">
                {founder.name}
              </h3>
              <p className="font-sans text-sm uppercase tracking-wider text-ocean-teal font-semibold mb-4">
                {founder.role}
              </p>
              <p className="font-sans text-base leading-relaxed text-navy/75 mb-4">
                {founder.shortBio}
              </p>
              <p className="font-sans text-sm italic text-[#B89870] leading-relaxed">
                "{founder.bio}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
