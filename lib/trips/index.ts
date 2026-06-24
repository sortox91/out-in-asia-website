import type { TripContent } from "./types"
import { northVietnam } from "./north-vietnam"
import { thailand } from "./thailand"

const tripContent: Record<string, TripContent> = {
  "north-vietnam": northVietnam,
  "thailand": thailand,
}

export function getTripContent(slug: string): TripContent | undefined {
  return tripContent[slug]
}
