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
      name: "Szilárd Daróczi",
      role: "Co-Founder & Guide",
      bio: "A Hungarian with an outsider-turned-insider perspective on Southeast Asia, Szilárd ensures every trip is filled with hidden gems and genuine cultural experiences.",
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
      duration: "12 days",
      image: "/trips/thailand.png",
      heroImage: "/trips/thailand.jpg",
      price: { shared: "€5,600", single: "€6,700" },
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
      image: "/trips/north-vietnam.png",
      heroImage: "/ai-landscapes/vietnam-6.png",
      price: { shared: "€4,700", single: "€5,500" },
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
      duration: "12 days",
      image: "/trips/south-vietnam.png",
      heroImage: "/trips/south-vietnam.jpg",
      price: { shared: "€5,100", single: "€5,800" },
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
      duration: "13 days",
      image: "/trips/bali.png",
      heroImage: "/trips/bali.jpg",
      price: { shared: "€5,700", single: "€6,800" },
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
