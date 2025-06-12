"use client"
import Link from 'next/link'
import { useCheckout } from '../context/CheckoutContext'
import { ShoppingCart } from 'lucide-react'

export default function CartLink() {
  const { items } = useCheckout() || { items: [] }
  const itemCount = items?.length || 0

  return (
    <Link 
      href="/checkout" 
      className="relative flex items-center p-2 rounded-lg hover:bg-lime-50 transition-colors group"
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <div className="relative">
        <ShoppingCart className="w-6 h-6 text-lime-700 group-hover:text-lime-800 transition-colors" />
        
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center bg-lime-600 text-white rounded-full min-w-[22px] h-[22px] text-xs font-medium px-1.5 py-0.5 shadow-sm">
            {itemCount > 9 ? "9+" : itemCount}
          </span>
        )}
      </div>
      
      <span className="ml-2 text-lime-800 font-medium hidden md:inline-block group-hover:text-lime-900 transition-colors">
        Cart
      </span>
    </Link>
  )
}