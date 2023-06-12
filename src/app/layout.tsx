import './globals.scss'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin',], weight: ['300', '400', '500', '600'] })

export const metadata = {
  title: 'Gabriel de Souza',
  description: 'Gabriel de Souza - Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
