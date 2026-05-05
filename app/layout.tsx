import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Giovanni Pio Martello | Web Developer & Engineering Student',
  description: 'Computer Science & Automation Engineering student and freelance web developer focused on AI, space technologies, and full-stack development.',
  generator: 'GPM',
  icons: {
    icon: [
      {
        url: '/icon-32x32.png',
        media: '(prefers-color-scheme: light)',
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
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased min-h-screen bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}