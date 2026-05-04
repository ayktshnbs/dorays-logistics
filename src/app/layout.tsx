import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Dorays Logistics | International Freight & Supply Chain Solutions',
  description:
    'Dorays Logistics provides reliable international road, sea, air freight, customs coordination, warehousing and project cargo solutions.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-body antialiased`}>{children}</body>
    </html>
  )
}
