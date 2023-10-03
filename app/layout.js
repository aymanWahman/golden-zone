import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Golden Zone',
  description: 'Resort',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
      
    </html>
  )
}
