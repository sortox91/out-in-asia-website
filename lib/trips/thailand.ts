import type { TripContent } from "./types"

export const thailand: TripContent = {
  coverWeb: "/thailand/thailand_cover_web.png",
  coverMobile: "/thailand/thailand_cover_mobile.png",

  heroSubtitle: "Golden temples, emerald jungle lakes, limestone cliffs and dreamy island beaches",
  stopsCities: "Bangkok · Khao Sok · Ao Nang",
  groupSize: "Max 12",
  brochureUrl: "https://drive.google.com/file/d/1eG4yXFKXK2SF77UEYb1lVew13JU-D_3X/view",

  stops: [
    {
      id: 1,
      city: "Bangkok",
      daysLabel: "Days 1–4",
      subtitle: "Golden Temple & Nightlife",
      mapSvg: "/thailand/maps/thaimap_01.svg",
      highlights: [],
      gallery: [
        { src: "/thailand/gallery/bangkok/BANGKOK-01.png", caption: "Private guided tour of Bangkok's golden temples" },
        { src: "/thailand/gallery/bangkok/BANGKOK-02.png", caption: "Silom gay night out and drag queen show" },
        { src: "/thailand/gallery/bangkok/BANGKOK-03.png", caption: "Day trip to an iconic Thai floating market" },
        { src: "/thailand/gallery/bangkok/BANGKOK-04.png", caption: "Guided Michelin street food tour in Bangkok" },
      ],
    },
    {
      id: 2,
      city: "Khao Sok",
      daysLabel: "Days 5–6",
      subtitle: "Floating Lake Retreat",
      mapSvg: "/thailand/maps/thaimap_02.svg",
      highlights: [],
      gallery: [
        { src: "/thailand/gallery/khaosok/KHAOSOK-01.png", caption: "Scenic canoe safari through the national park" },
        { src: "/thailand/gallery/khaosok/KHAOSOK-02.png", caption: "Ethical elephant experience in the jungle" },
        { src: "/thailand/gallery/khaosok/KHAOSOK-03.png", caption: "Guided jungle trekking adventure" },
        { src: "/thailand/gallery/khaosok/KHAOSOK-04.png", caption: "Floating lake camp experience" },
      ],
    },
    {
      id: 3,
      city: "Ao Nang",
      daysLabel: "Days 7–10",
      subtitle: "Paradise Islands and Beaches",
      mapSvg: "/thailand/maps/thaimap_03.svg",
      highlights: [],
      gallery: [
        { src: "/thailand/gallery/aonang/AONANG-01.png", caption: "Sunrise island hopping to Maya Bay and Phi Phi" },
        { src: "/thailand/gallery/aonang/AONANG-02.png", caption: "Scenic day trip to Hong Island" },
        { src: "/thailand/gallery/aonang/AONANG-03.png", caption: "Relaxing escape to Railay Beach" },
        { src: "/thailand/gallery/aonang/AONANG-04.png", caption: "Snorkeling experiences throughout the journey" },
      ],
    },
    {
      id: 4,
      city: "Bangkok",
      galleryCity: "Bangkok",
      daysLabel: "Days 11–12",
      subtitle: "Golden Temple & Nightlife",
      mapSvg: "/thailand/maps/thaimap_04.svg",
      highlights: [],
      gallery: [
        { src: "/thailand/gallery/bangkok-return/BANGKOK-21.png", caption: "Final farewell dinner in Bangkok" },
        { src: "/thailand/gallery/bangkok-return/BANGKOK-22.png", caption: "Free time for shopping, rest and city vibes" },
        { src: "/thailand/gallery/bangkok-return/BANGKOK-23.png", caption: "Final night together in Bangkok" },
        { src: "/thailand/gallery/bangkok-return/BANGKOK-24.png", caption: "Free time to relax before departure" },
      ],
    },
  ],

  comfortCards: [
    {
      image: "/thailand/comfort/THAICOMFORT-01.jpg",
      location: "Bangkok",
      title: "Premium 5-Star Hotel",
      tag: "5 nights · Breakfast included",
      description: "Elegant and panoramic hotel located in the heart of the city's gay quarter",
    },
    {
      image: "/thailand/comfort/THAICOMFORT-02.png",
      location: "Khao Sok",
      title: "Selected Floating Bungalow",
      tag: "2 nights · Full board",
      description: "Premium accommodation on Cheow Lan Lake, inside Khao Sok National Park",
    },
    {
      image: "/thailand/comfort/THAICOMFORT-03.png",
      location: "Ao Nang",
      title: "4-Star Beach Resort",
      tag: "4 nights · Breakfast included",
      description: "Premium beach resort with swimming pools, fitness centre and massage salon",
    },
    {
      image: "/thailand/comfort/THAICOMFORT-04.png",
      location: "",
      title: "Private Minivan",
      tag: "Private transfers",
      description: "Travel in comfortable premium minivans, making every journey relaxed and enjoyable",
    },
  ],

  included: [
    "Group guidance and assistance during the stay",
    "9 nights with breakfast in premium 4 and 5-star hotels",
    "2 nights on an exclusive floating bungalow in Khao Sok",
    "All included activities listed in the itinerary",
    "2 domestic flights",
    "5 selected additional meals",
    "Premium air-conditioned minivans throughout the trip",
    "Private airport transfer on arrival and departure",
    "Organisation fees, taxes and local charges",
    "Welcome gift package",
  ],

  notIncluded: [
    "International flights",
    "Additional meals not listed in the programme",
    "Travel insurance",
    "Personal expenses",
    "Extra activities not included in the programme",
    "Additional private assistance outside the programme",
    "Early check-in on arrival day",
    "Late check-out on departure day",
  ],
}
