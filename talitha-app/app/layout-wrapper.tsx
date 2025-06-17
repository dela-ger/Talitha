import { Metadata } from 'next'
import RootLayout from './layout'

export const metadata: Metadata = {
  title: 'Talitha',
  description: 'A web app to bring people closer to God',
}

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayout>{children}</RootLayout>
}