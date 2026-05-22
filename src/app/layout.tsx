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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Satya Restaurant',
  image: 'https://satyarestaurant.co.uk/wp-content/uploads/2023/11/web-logo.png',
  url: 'https://satyarestaurant.co.uk',
  telephone: '+441162592765',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12A London Road',
    addressLocality: 'Great Glen',
    addressRegion: 'Leicestershire',
    postalCode: 'LE8 9GF',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 52.5708508, longitude: -1.0332951 },
  servesCuisine: ['Indian', 'South Asian'],
  priceRange: '££',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday','Wednesday','Thursday','Friday'], opens: '16:30', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '16:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '16:00', closes: '21:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '120' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}