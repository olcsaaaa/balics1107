import type { Metadata } from 'next'
import "bootstrap/dist/css/bootstrap.min.css"
import { Inter } from 'next/font/google'
import './globals.css'
import {Container} from "react-bootstrap";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Practice',
  description: 'Practice and stuff'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Container>
        {children}
      </Container>
      </body>
    </html>
  )
}
