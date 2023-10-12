import UIProvider from '@/providers/UIProvider'
import './globals.css'
import { Figtree } from 'next/font/google'
import ModelProvider from '@/providers/ModelProvider'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Zify',
  description: 'Ai Optimiser',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <ModelProvider />
        <UIProvider>
          {/* <main className='dark text-foreground'> */}

          {children}
          {/* </main> */}
        </UIProvider>
      </body>
    </html>
  )
}
