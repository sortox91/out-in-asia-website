import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface ContactSubmission {
  id: string;
  timestamp: string;
  firstName: string;
  lastName: string;
  email: string;
  trip: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    const { firstName, lastName, email, trip, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const submission: ContactSubmission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      firstName: String(firstName),
      lastName: String(lastName),
      email: String(email),
      trip: trip ? String(trip) : "general",
      message: String(message),
    };

    // Always persist to JSON as a backup — works in any environment
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "contact-submissions.json");
      await fs.mkdir(dataDir, { recursive: true });

      let submissions: ContactSubmission[] = [];
      try {
        const existing = await fs.readFile(filePath, "utf-8");
        submissions = JSON.parse(existing) as ContactSubmission[];
      } catch {
        // File doesn't exist yet — start fresh
      }

      submissions.push(submission);
      await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));
    } catch (err) {
      console.error("Failed to save submission to file:", err);
    }

    // Send email via Resend when API key is configured
    if (process.env.RESEND_API_KEY) {
      const tripLabel =
        submission.trip && submission.trip !== "general"
          ? `Trip interest: ${submission.trip}`
          : "General inquiry";

      const html = `
        <h2 style="color:#0E1F38;font-family:Georgia,serif;">New contact form submission</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
          <tr><td style="padding:6px 12px 6px 0;color:#888;white-space:nowrap;">Name</td><td style="padding:6px 0;">${submission.firstName} ${submission.lastName}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#888;">Email</td><td style="padding:6px 0;"><a href="mailto:${submission.email}">${submission.email}</a></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#888;">Enquiry</td><td style="padding:6px 0;">${tripLabel}</td></tr>
        </table>
        <h3 style="color:#0E1F38;font-family:Georgia,serif;margin-top:20px;">Message</h3>
        <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;">${submission.message}</p>
      `;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Out in Asia <onboarding@resend.dev>",
          to: ["info.outinasia@gmail.com"],
          reply_to: submission.email,
          subject: `New enquiry from ${submission.firstName} ${submission.lastName}`,
          html,
        }),
      });

      if (!res.ok) {
        console.error("Resend API error:", await res.text());
      }
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
