import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center p-24 ${inter.className}`}
    >
      <p>Página em construção</p>
    </main>
  )
}
