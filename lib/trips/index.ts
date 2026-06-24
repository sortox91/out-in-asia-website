import type { TripContent } from "./types"
import { northVietnam } from "./north-vietnam"
import { thailand } from "./thailand"
import { bali } from "./bali"

const tripContent: Record<string, TripContent> = {
  "north-vietnam": northVietnam,
  "thailand": thailand,
  "bali": bali,
}

export function getTripContent(slug: string): TripContent | undefined {
  return tripContent[slug]
}
