import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, trip, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const res = await fetch("https://formspree.io/f/xjgqwjdw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        trip: trip || "general",
        message,
        _replyto: email,
        _subject: `New enquiry from ${firstName} ${lastName}`,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Formspree error:", err);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
