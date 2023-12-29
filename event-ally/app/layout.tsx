/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next'

import './globals.css'


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "EventAlly - Create Events",
  description:
    "Event-Ally is a platform for event organizers to create and manage events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"></link>

    </head>
      <body>{children}</body>
    </html>
  )
}
