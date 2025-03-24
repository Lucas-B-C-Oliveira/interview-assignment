import { Header } from '@/components/header/header'
import { Footer } from './_components/footer'

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full h-full flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
