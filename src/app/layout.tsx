import { Header } from '@/components/Header'
import { HeroPattern } from '@/components/HeroPattern'
import { Sidebar } from '@/components/Sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'UI TailwindCSS',
  description:
    'Recriando interfacaces com Tailwind, desenvolvido por Emmanuel Oliveira',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body bg-zinc className="bg-zinc-900">
        <Sidebar />
        <div className="lg:ml-72 :ml-0 relative h-screen">
          <Header />
          <HeroPattern />

          <div className="py-24 max-w-4xl px-8 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  )
}
