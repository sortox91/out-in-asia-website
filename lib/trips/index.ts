import type { TripContent } from "./types"
import { northVietnam } from "./north-vietnam"

const tripContent: Record<string, TripContent> = {
  "north-vietnam": northVietnam,
}

export function getTripContent(slug: string): TripContent | undefined {
  return tripContent[slug]
}
