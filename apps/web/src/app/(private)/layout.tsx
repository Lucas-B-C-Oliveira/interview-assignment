import type { ReactNode } from 'react'
import { Header } from '@/components/header/header'

export default function PrivateLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full h-full flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  )
}
