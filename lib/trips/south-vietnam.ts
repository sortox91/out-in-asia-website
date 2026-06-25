import type { TripContent } from "./types"

export const southVietnam: TripContent = {
  coverWeb: "/south-vietnam/southvietnam_cover_web.png",
  coverMobile: "/south-vietnam/southvietnam_cover_mobile.png",
  heroSubtitle: "Vibrant city life, Mekong traditions, tropical beaches and rainforest adventures",

  stopsCities: "Ho Chi Minh City · Mekong Delta · Ho Tram · Cát Tiên",
  groupSize: "Max 12",
  brochureUrl: "https://drive.google.com/file/d/1Q8z0aq4E4hbY_xJAosAWMxLmkoiuGKgC/view",

  stops: [
    {
      id: 1,
      city: "Ho Chi Minh City",
      daysLabel: "Days 1–4",
      subtitle: "City Vibes & Nightlife",
      mapSvg: "/south-vietnam/maps/southvietnammap_01.svg",
      highlights: [],
      gallery: [
        { src: "/south-vietnam/gallery/hcmc/HCMC-01.png", caption: "Enjoy a sunset boat trip on the Saigon River" },
        { src: "/south-vietnam/gallery/hcmc/HCMC-02.png", caption: "Discover HCMC by motorbike on a food and city tour" },
        { src: "/south-vietnam/gallery/hcmc/HCMC-03.png", caption: "Experience a night out in HCMC's gay bars" },
        { src: "/south-vietnam/gallery/hcmc/HCMC-04.png", caption: "Learn Vietnam's signature dishes in a cooking class" },
      ],
    },
    {
      id: 2,
      city: "Mekong Delta",
      daysLabel: "Days 5–6",
      subtitle: "River Local Life",
      mapSvg: "/south-vietnam/maps/southvietnammap_02.svg",
      highlights: [],
      gallery: [
        { src: "/south-vietnam/gallery/mekong/MEKONG-01.png", caption: "Take a boat trip to Cái Răng Floating Market" },
        { src: "/south-vietnam/gallery/mekong/MEKONG-02.png", caption: "Explore the beautiful Trà Sư Bird Sanctuary" },
        { src: "/south-vietnam/gallery/mekong/MEKONG-03.png", caption: "Visit a traditional rice noodle workshop" },
        { src: "/south-vietnam/gallery/mekong/MEKONG-04.png", caption: "Travel by motorboat through floating villages" },
      ],
    },
    {
      id: 3,
      city: "Ho Tram",
      daysLabel: "Days 7, 8, 10, 11",
      subtitle: "Beach Escape",
      mapSvg: "/south-vietnam/maps/southvietnammap_03.svg",
      highlights: [],
      gallery: [
        { src: "/south-vietnam/gallery/hotram/HOTRAM-01.png", caption: "Enjoy the facilities of a 5-star beach resort" },
        { src: "/south-vietnam/gallery/hotram/HOTRAM-02.png", caption: "Take a sunset boat trip on the Ray River" },
        { src: "/south-vietnam/gallery/hotram/HOTRAM-03.png", caption: "Enjoy a quad biking experience through the forest" },
        { src: "/south-vietnam/gallery/hotram/HOTRAM-04.png", caption: "Relax on the quiet beach of Ho Tram" },
      ],
    },
    {
      id: 4,
      city: "Cát Tiên National Park",
      daysLabel: "Day 9",
      subtitle: "Jungle & Wildlife",
      mapSvg: "/south-vietnam/maps/southvietnammap_04.svg",
      highlights: [],
      gallery: [
        { src: "/south-vietnam/gallery/cattien/CATTIEN-01.png", caption: "Explore peaceful rivers and untouched jungle landscapes" },
        { src: "/south-vietnam/gallery/cattien/CATTIEN-02.png", caption: "Spot wildlife in the heart of the tropical forest" },
        { src: "/south-vietnam/gallery/cattien/CATTIEN-03.png", caption: "Swim in a hidden jungle river surrounded by nature" },
        { src: "/south-vietnam/gallery/cattien/CATTIEN-04.png", caption: "Walk among ancient giant trees in Cat Tien National Park" },
      ],
    },
    {
      id: 5,
      city: "Ho Chi Minh City",
      galleryCity: "Ho Chi Minh City",
      daysLabel: "Days 11–12",
      subtitle: "City Vibes & Nightlife",
      mapSvg: "/south-vietnam/maps/southvietnammap_05.svg",
      highlights: [],
      gallery: [
        { src: "/south-vietnam/gallery/hcmc-return/HCMC-21.png", caption: "Farewell dinner hosted by Out in Asia" },
        { src: "/south-vietnam/gallery/hcmc-return/HCMC-22.png", caption: "Enjoy free time to relax before departure" },
        { src: "/south-vietnam/gallery/hcmc-return/HCMC-23.png", caption: "One last night to enjoy HCMC's gay nightlife" },
        { src: "/south-vietnam/gallery/hcmc-return/HCMC-24.png", caption: "Free time for final shopping in HCMC" },
      ],
    },
  ],

  comfortCards: [
    {
      image: "/south-vietnam/comfort/SVIETNAMCOMFORT-01.jpg",
      location: "Ho Chi Minh City",
      title: "5-Star Hotel",
      tag: "4 nights · Breakfast included",
      description: "Elegant 5-star hotel in the heart of the city, including spa, swimming pool and fitness center",
    },
    {
      image: "/south-vietnam/comfort/SVIETNAMCOMFORT-02.jpg",
      location: "Ho Tram",
      title: "5-Star Beach Resort",
      tag: "5 nights · Breakfast included",
      description: "Premium beach resort including 2 swimming pools, 2 restaurants, fitness center and spa",
    },
    {
      image: "/south-vietnam/comfort/SVIETNAMCOMFORT-03.png",
      location: "",
      title: "Private Minivan",
      tag: "Private transfers",
      description: "Travel in comfortable premium minivans, making every journey relaxed and enjoyable",
    },
  ],

  included: [
    "Group guidance and assistance during the stay",
    "9 nights with breakfast in exclusive 5-star hotels",
    "2 nights with breakfast in 4-star hotels in Mekong Delta",
    "6 selected additional meals",
    "All included activities listed in the itinerary",
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
