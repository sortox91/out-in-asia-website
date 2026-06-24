export type GalleryPhoto = {
  src: string
  caption: string
}

export type TripStop = {
  id: number
  city: string
  galleryCity?: string
  subtitle: string
  daysLabel: string
  mapSvg: string
  objectPosition?: string
  highlights: string[]
  gallery: GalleryPhoto[]
}

export type ComfortCard = {
  image: string
  location: string
  title: string
  tag: string
  description: string
}

export type TripContent = {
  coverWeb: string
  coverMobile: string
  heroSubtitle?: string
  stops: TripStop[]
  comfortCards: ComfortCard[]
  included: string[]
  notIncluded: string[]
  brochureUrl: string
  stopsCities: string
  groupSize: string
}
