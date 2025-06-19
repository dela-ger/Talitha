// components/ProductCard.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types'  // Import your Product type
import { useCheckout } from '@/app/context/CheckoutContext'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCheckout()!

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    })
  }

  return (
    <Link 
      href={`/market/${product.id}`} 
      className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="bg-lime-100 w-full h-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Category Tag */}
        {product.category && (
          <span className="absolute top-3 left-3 bg-lime-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-lg font-medium text-lime-800 line-clamp-2">
            {product.name}
          </h3>
          <span className="text-lime-700 font-bold whitespace-nowrap ml-2">
            GH₵{product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-lime-700/80 text-sm line-clamp-3 mb-4 min-h-[60px]">
          {product.description || 'A meaningful spiritual resource'}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-lime-600 hover:bg-lime-700 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add to Cart
        </button>
      </div>

      {/* Ministry Impact Badge */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 bg-lime-50 rounded-full px-3 py-1 text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-lime-700">
            30% supports orphanage ministry
          </span>
        </div>
      </div>
    </Link>
  )
}