export const siteConfig = {
  name: "Out in Asia",
  tagline: "Travel Gay • Be You • Belong Together",
  description:
    "High-end LGBTQ+ travel experiences across Southeast Asia. Curated trips led by passionate guides who know the region inside out.",
  url: "https://outinasia.com",
  founders: [
    {
      name: "Filippo Rossi",
      role: "Co-Founder & Guide",
      bio: "With a passion for authentic travel and deep connections, Filippo brings years of experience crafting unforgettable journeys across Asia.",
      // TODO: add real photos to /public/founders/
      image: "/founders/filippo.jpg",
      initials: "FR",
    },
    {
      name: "Szilard Daróczi",
      role: "Co-Founder & Guide",
      bio: "A Hungarian with an outsider-turned-insider perspective on Southeast Asia, Szilard ensures every trip is filled with hidden gems and genuine cultural experiences.",
      // TODO: add real photos to /public/founders/
      image: "/founders/szilard.png",
      initials: "SU",
    },
  ],
  trips: [
    {
      id: "thailand",
      title: "Thailand",
      subtitle: "Land of Smiles",
      description:
        "From Bangkok's vibrant energy to the serene temples of Chiang Mai and pristine beaches of the south. Experience Thailand's warmth, culture, and legendary hospitality.",
      duration: "10 days",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
      heroImage: "/trips/thailand.jpg",
      price: "€2,900",
      highlights: [
        "Bangkok nightlife & temples",
        "Chiang Mai culture",
        "Island hopping",
        "Thai cooking class",
      ],
    },
    {
      id: "north-vietnam",
      title: "North Vietnam",
      subtitle: "Mountains & Heritage",
      description:
        "Discover Hanoi's old quarter charm, trek through the terraced rice fields of Sapa, cruise Ha Long Bay's limestone karsts, and unwind in the scenic valleys of Ninh Binh.",
      duration: "12 days",
      image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80",
      heroImage: "/ai-landscapes/vietnam-6.png",
      price: "€4,400",
      highlights: [
        "Hanoi Old Quarter",
        "Ha Long Bay cruise",
        "Sapa trekking",
        "Vietnamese cuisine",
      ],
    },
    {
      id: "south-vietnam",
      title: "South Vietnam",
      subtitle: "Rivers & History",
      description:
        "Explore Ho Chi Minh City's fascinating history, cruise the Mekong Delta's waterways, and relax on the beaches of Phu Quoc.",
      duration: "9 days",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
      heroImage: "/trips/south-vietnam.jpg",
      price: "€2,500",
      highlights: [
        "Ho Chi Minh City",
        "Mekong Delta",
        "Cu Chi Tunnels",
        "Phu Quoc beaches",
      ],
    },
    {
      id: "bali",
      title: "Bali",
      subtitle: "Island of Gods",
      description:
        "Immerse yourself in Bali's spiritual heart, from Ubud's rice terraces and temples to the stunning beaches and vibrant nightlife of Seminyak.",
      duration: "7 days",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      heroImage: "/trips/bali.jpg",
      price: "€2,400",
      highlights: [
        "Ubud temples & arts",
        "Rice terrace treks",
        "Beach clubs",
        "Balinese ceremonies",
      ],
    },
  ],
  navigation: [
    { label: "Trips", href: "/trips" },
    { label: "Meet Us", href: "/about" },
    { label: "Get in Touch", href: "/contact" },
  ],
  social: {
    instagram: "https://instagram.com/outinasia",
    facebook: "https://facebook.com/outinasia",
    email: "info.outinasia@gmail.com",
  },
};
