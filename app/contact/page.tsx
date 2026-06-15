"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Instagram,
  MapPin,
  Send,
  ChevronDown,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/config";

const faqs = [
  {
    q: "What's the group size?",
    a: "Our trips typically have 8-12 travelers for an intimate experience. Small groups are at the heart of everything we do.",
  },
  {
    q: "What about the weather?",
    a: "Our trips run during the best seasons. However, weather in Asia can sometimes be unpredictable, but always warm.",
  },
  {
    q: "Are the trips LGBTQ+ exclusive?",
    a: "Yes, all Out in Asia trips are designed exclusively for LGBTQ+ travelers and their guests. Every hotel, guide, and experience is chosen with the community in mind.",
  },
  {
    q: "Do I need a visa?",
    a: "Visa requirements vary by destination and nationality. We'll send you a detailed guide after booking and help you navigate the process.",
  },
  {
    q: "Is travel insurance required?",
    a: "Yes, comprehensive travel insurance is required for all our trips. We can recommend policies that cover adventure activities.",
  },
  {
    q: "What is the best time to travel?",
    a: "Every trip is scheduled at the perfect time of year for its destination.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4"
      >
        <span className="font-sans font-semibold text-white text-sm">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-sand/50 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="font-sans text-sand/70 leading-relaxed text-sm pb-5">{a}</p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          trip: selectedTrip,
          message: formData.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      setIsSubmitted(true);
    } catch {
      setError(
        `Something went wrong. Please email us directly at ${siteConfig.social.email}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">

        {/* Page hero — consistent template */}
        <section className="relative h-[55vh] md:h-[65vh] min-h-[380px] flex items-center overflow-hidden">
          <Image
            src="/gallery/halong/bay.jpg"
            alt="Ha Long Bay, Vietnam"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Left-side dark gradient */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(14,31,56,0.90) 0%, rgba(14,31,56,0.65) 45%, rgba(14,31,56,0.15) 75%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,31,56,0.3) 0%, transparent 40%)" }} />

          <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16 w-full">
            <div className="max-w-xl">
              <p className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#EA5A2A" }}>
                Get in Touch
              </p>
              <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                Your Next Journey<br />
                Starts <span className="italic text-sunset-orange">Here</span>
              </h1>
              <p className="font-sans text-base text-white/70 max-w-md leading-relaxed">
                Join one of our group journeys, or let us design one around your dreams
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="reach-out" className="py-10 md:py-20 bg-warm-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:items-end">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white shadow-lg rounded-2xl p-8">
                  <h2 className="font-serif text-2xl font-bold text-navy mb-8">
                    Send Us a Message
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-ocean-teal text-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="h-7 w-7" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                        Message Sent!
                      </h3>
                      <p className="font-sans text-clay mb-8">
                        Thank you for reaching out. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setSelectedTrip("");
                          setError("");
                        }}
                        className="font-sans font-semibold text-ocean-teal hover:text-sunset-orange transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                          <label
                            htmlFor="firstName"
                            className="block font-sans text-sm font-medium text-navy mb-2"
                          >
                            First Name
                          </label>
                          <input
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-dune bg-warm-cream font-sans text-navy placeholder:text-clay/50 focus:outline-none focus:border-ocean-teal transition-colors"
                          />
                        </div>
                        <div className="flex-1">
                          <label
                            htmlFor="lastName"
                            className="block font-sans text-sm font-medium text-navy mb-2"
                          >
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-dune bg-warm-cream font-sans text-navy placeholder:text-clay/50 focus:outline-none focus:border-ocean-teal transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block font-sans text-sm font-medium text-navy mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-dune bg-warm-cream font-sans text-navy placeholder:text-clay/50 focus:outline-none focus:border-ocean-teal transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="trip"
                          className="block font-sans text-sm font-medium text-navy mb-2"
                        >
                          Interested In
                        </label>
                        <select
                          id="trip"
                          value={selectedTrip}
                          onChange={(e) => setSelectedTrip(e.target.value)}
                          className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-dune bg-warm-cream font-sans text-navy focus:outline-none focus:border-ocean-teal transition-colors appearance-none"
                        >
                          <option value="">Select an option (optional)</option>
                          <option value="general">General Inquiry</option>
                          <option value="private-trips">Private Trips</option>
                          {siteConfig.trips.map((trip) => (
                            <option key={trip.id} value={trip.id}>
                              {trip.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block font-sans text-sm font-medium text-navy mb-2"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us about your travel dreams..."
                          className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-dune bg-warm-cream font-sans text-navy placeholder:text-clay/50 focus:outline-none focus:border-ocean-teal transition-colors resize-none"
                        />
                      </div>

                      {error && (
                        <p className="font-sans text-sm text-ember">{error}</p>
                      )}

                      <div className="text-center pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 font-sans font-semibold tracking-wide px-10 py-4 rounded-full bg-sunset-orange text-white hover:bg-ember transition-colors duration-300 disabled:opacity-50"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                          <ArrowRight className="h-4 w-4" />
                        </button>
                        <p className="font-sans text-sm text-clay/60 mt-4">
                          ✓ We reply within 24 hours
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar — aligned to bottom of form on desktop */}
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-11 h-11 bg-ocean-teal/10 text-ocean-teal rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-navy mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${siteConfig.social.email}`}
                        className="font-sans text-clay hover:text-sunset-orange transition-colors"
                      >
                        {siteConfig.social.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-11 h-11 bg-ocean-teal/10 text-ocean-teal rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-navy mb-1">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/393475006791"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-clay hover:text-sunset-orange transition-colors block"
                      >
                        Filippo · +39 347 500 6791
                      </a>
                      <a
                        href="https://wa.me/36305326286"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-clay hover:text-sunset-orange transition-colors block mt-1"
                      >
                        Szilárd · +36 30 532 6286
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-11 h-11 bg-ocean-teal/10 text-ocean-teal rounded-full flex items-center justify-center">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-navy mb-1">
                        Instagram
                      </h3>
                      <a
                        href="https://instagram.com/outinasia.travel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-clay hover:text-sunset-orange transition-colors"
                      >
                        @outinasia.travel
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-11 h-11 bg-ocean-teal/10 text-ocean-teal rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-navy mb-1">
                        Based In
                      </h3>
                      <p className="font-sans text-clay">Bali, Indonesia 🌴</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Accordion */}
                <div className="bg-navy rounded-2xl p-8">
                  <h3 className="font-serif text-xl font-bold text-white mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div>
                    {faqs.map((faq, index) => (
                      <FAQItem key={index} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
