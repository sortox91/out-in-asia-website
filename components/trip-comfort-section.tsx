import Image from "next/image"

const CARDS = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    title: "Premium 4-Star Hotels",
    description: "Elegant hotels in the heart of Hanoi and Tam Coc, with rice field views and city convenience.",
    tag: "6 nights · Breakfast included",
  },
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
    title: "5-Star Mountain Resort",
    description: "Surrounded by clouds and mountains in Sapa. A luxurious retreat after a day of trekking.",
    tag: "3 nights · Breakfast included",
  },
  {
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
    title: "Luxury Yacht Cruise",
    description: "Private balcony cabins aboard a 5-star yacht. Full board, curated experiences and sunset cocktails on deck.",
    tag: "2 nights · Full board",
  },
]

export function TripComfortSection() {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "#FAF6EF", borderTop: "1px solid rgba(232,221,208,0.5)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#1F8A8F",
            marginBottom: "1rem",
          }}>
            Accommodations
          </p>
          <h2 style={{
            fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            fontWeight: 700,
            color: "#0E1F38",
            marginBottom: "1rem",
          }}>
            Travel with Comfort
          </h2>
          <p style={{
            fontFamily: "var(--font-manrope), Manrope, sans-serif",
            fontSize: "0.95rem",
            color: "#7A6A58",
            maxWidth: "40rem",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Every stay is carefully selected for quality, location and atmosphere.
            From elegant city hotels to mountain retreats and a luxury Ha Long Bay yacht,
            comfort is never compromised.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}>
          {CARDS.map((card) => (
            <div
              key={card.title}
              style={{
                backgroundColor: "white",
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ position: "relative", height: 192 }}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <span style={{
                  display: "inline-block",
                  backgroundColor: "rgba(31,138,143,0.10)",
                  color: "#1F8A8F",
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontSize: "0.7rem",
                  borderRadius: "999px",
                  padding: "0.25rem 0.75rem",
                  marginBottom: "0.75rem",
                }}>
                  {card.tag}
                </span>
                <h3 style={{
                  fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0E1F38",
                  marginBottom: "0.5rem",
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-manrope), Manrope, sans-serif",
                  fontSize: "0.85rem",
                  color: "#7A6A58",
                  lineHeight: 1.65,
                }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
