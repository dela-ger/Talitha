import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import SearchBox from './components/SearchBox'
import christianArticles from '@/data'
import ArticleProvider  from "../app/context/ArticleContext"
import Footer from './components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Talitha',
  description: 'A web app to bring people closer to God',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="flex flex-col min-h-screen">
            <header className="flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-4 gap-4">
              {/* Logo Section */}
              <div className="flex items-center flex-shrink-0">
                <Link href="/" className="hover:opacity-90 transition-opacity">
                  <Image 
                    src="/images/talitha_logo4(1).png"
                    width={100}
                    height={100}
                    alt='Talitha Logo'
                    className="w-16 h-auto sm:w-20 lg:w-24"
                  />
                </Link>
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center gap-2 order-last sm:order-none z-30">
                <SignedOut>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="p-2 sm:p-3 bg-lime-300 text-white rounded-lg shadow-md cursor-pointer text-sm sm:text-base hover:bg-lime-400 transition-colors">
                      <SignInButton />
                    </div>
                    <div className="p-2 sm:p-3 bg-lime-300 text-white rounded-lg shadow-md cursor-pointer text-sm sm:text-base hover:bg-lime-400 transition-colors">
                      <SignUpButton />
                    </div>
                  </div>
                </SignedOut>
                
                <SignedIn>
                  <div className="z-50">
                    <UserButton />
                  </div>
                </SignedIn>
              </div>

              {/* Navigation & Search */}
              <div className="flex flex-1 justify-end items-center gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto">
                <nav className="hidden sm:flex items-center gap-3 lg:gap-4">
                  <Link 
                    href="/market" 
                    className="text-sm lg:text-base hover:text-lime-600 transition-colors"
                  >
                    Market
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-sm lg:text-base hover:text-lime-600 transition-colors"
                  >
                    About Us
                  </Link>
                </nav>
                <div className="flex-grow sm:flex-grow-0 max-w-xs lg:max-w-md w-full z-10">
                  <SearchBox data={christianArticles} />
                </div>
              </div>
            </header>

            <ArticleProvider>
              <main className="flex-1">{children}</main>
            </ArticleProvider>

            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}