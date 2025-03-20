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
        
          <header className="flex items-center p-4 gap-4 h-16">
            <div>
              <Link href="/">
                <Image 
                  src="/images/talitha_logo4(1).png"
                  width={100}
                  height={100}
                  alt='logo talitha'
                />
              </Link>
            </div>
            <SignedOut>
              <div className="z-50 p-4 bg-lime-300 text-white rounded-lg shadow-md cursor-pointer">
                <SignInButton />
              </div>

              <div className="z-50 p-4 bg-lime-300 text-white rounded-lg shadow-md cursor-pointer">
                <SignUpButton />
              </div>
            </SignedOut>
            <SignedIn>
            <div className="z-50">
              <UserButton />
            </div>
              
            </SignedIn>

            <div className='flex justify-center items-center z-50 ml-auto gap-1.5'>
              <span className='border border-red-500'>
               <Link href="./about">About Us </Link>
              </span>
              <span className="flex justify-center items-center border border-red-500">
              <SearchBox data={christianArticles} />
              </span>
             
            </div>
            
          </header>
          
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}