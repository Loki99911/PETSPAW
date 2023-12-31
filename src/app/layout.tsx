import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'


const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PETSPAW',
  description: 'petspaw app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" sizes="any" />
      </head>
      <body className={jost.className}>
        {children}
      </body>
    </html>
  );
}
