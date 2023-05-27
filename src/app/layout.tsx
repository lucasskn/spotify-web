import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./components/providers";



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify',
  description: 'Listen music and crying',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-zinc-50">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}


