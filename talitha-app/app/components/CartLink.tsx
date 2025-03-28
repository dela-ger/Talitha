"use client"
import Link from 'next/link'
import { useCheckout } from '../context/CheckoutContext'

export default function CartLink() {
  const { items } = useCheckout() || { items: [] } // Fallback to empty array

  return (
    <Link 
      href="/checkout" 
      className="hover:text-lime-700 flex items-center gap-1.5"
    >
      Cart ({items?.length || 0})
    </Link>
  )
}
