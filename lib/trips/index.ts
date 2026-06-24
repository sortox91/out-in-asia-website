import type { TripContent } from "./types"
import { northVietnam } from "./north-vietnam"
import { thailand } from "./thailand"
import { bali } from "./bali"
import { southVietnam } from "./south-vietnam"

const tripContent: Record<string, TripContent> = {
  "north-vietnam": northVietnam,
  "thailand": thailand,
  "bali": bali,
  "south-vietnam": southVietnam,
}

export function getTripContent(slug: string): TripContent | undefined {
  return tripContent[slug]
}
