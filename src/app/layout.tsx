import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Satya Restaurant | Authentic Indian Cuisine | Great Glen, Leicestershire',
  description:
    'Experience fresh, fine and truly authentic Indian cuisine in Great Glen, Leicestershire. Dine-in, takeaway, and professional catering for weddings and events.',
  keywords: 'Indian restaurant, Great Glen, Leicestershire, authentic Indian food, catering, wedding catering, Leicester',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}