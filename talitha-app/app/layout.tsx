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
import ArticleProvider from '../app/context/ArticleContext'
import Footer from './components/Footer'
import ProductProvider from './context/ProductContext'
import CheckoutProvider from './context/CheckoutContext'
import CartLink from './components/CartLink'

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
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="bg-gray-50 antialiased min-h-screen flex flex-col text-[#101418] font-sans">
          <CheckoutProvider>
            <div className="flex flex-col min-h-screen">
              <header className="flex items-center justify-between border-b border-[#eaedf1] px-10 py-3">
                {/* Left Section: Logo + Nav */}
                <div className="flex items-center gap-8">
                  <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                    <Image
                      src="/images/talitha_logo4(1).png"
                      width={100}
                      height={100}
                      alt="Talitha Logo"
                      className="w-16 sm:w-20 lg:w-24 h-auto"
                    />
                  </Link>

                  <nav className="hidden md:flex items-center gap-6">
                    <Link href="/market" className="text-sm font-medium hover:text-lime-600">
                      Market
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:text-lime-600">
                      About Us
                    </Link>
                    <Link href="/ticket" className="text-sm font-medium hover:text-lime-600">
                      Events
                    </Link>
                    <CartLink />
                  </nav>
                </div>

                {/* Right Section: Search + Auth */}
                <div className="flex items-center gap-6">
                  <div className="hidden sm:flex w-full max-w-xs lg:max-w-md">
                    <SearchBox data={christianArticles} />
                  </div>

                  <SignedOut>
                    <div className="flex gap-2">
                      <div className="p-2 bg-lime-300 text-white rounded-xl shadow hover:bg-lime-400 transition">
                        <SignInButton />
                      </div>
                      <div className="p-2 bg-lime-300 text-white rounded-xl shadow hover:bg-lime-400 transition">
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
              </header>

              <ProductProvider>
                <ArticleProvider>
                  <main className="flex-1">{children}</main>
                </ArticleProvider>
              </ProductProvider>

              <Footer />
            </div>
          </CheckoutProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
