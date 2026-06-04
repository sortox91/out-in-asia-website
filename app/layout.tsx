import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Out in Asia | Travel Gay • Be You • Belong Together',
  description: 'Out in Asia - LGBTQ+ travel experiences across Asia. Travel Gay, Be You, Belong Together.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen">
        {/* forcedTheme="light" locks the site to light mode — no dark mode toggle exists in the UI */}
        <ThemeProvider attribute="class" forcedTheme="light">
          <div className="pb-20 md:pb-0">
            {children}
          </div>
          {process.env.NODE_ENV === 'production' && <Analytics />}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
