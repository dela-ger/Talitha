"use client"
import React from 'react'
import { useProduct } from '../context/ProductContext';
import Image from 'next/image';
import Link from 'next/link';

function ProductCard() {
    const { products } = useProduct();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-12 ml-40 mr-40">
            {products.map((product) => (
                <Link 
                    key={product.id}
                    href={`/market/${product.id}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                    {/* Product Image with Prayer Overlay */}
                    <div className="relative h-48 sm:h-56">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <button 
                                className="text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    // Handle prayer button click
                                }}
                            >
                                🙏 Pray for Creator
                            </button>
                        </div> */}
                    </div>

                    {/* Product Details */}
                    <div className="p-6 space-y-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-lime-700 transition-colors">
                                {product.name}
                            </h3>
                            <span className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm">
                                {product.category}
                            </span>
                        </div>

                        <p className="text-gray-600 line-clamp-3">
                            {product.description}
                        </p>

                        {/* Ministry Impact */}
                        <div className="flex items-center gap-2 text-sm text-lime-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"/>
                            </svg>
                            <span>30% supports orphanage ministry</span>
                        </div>

                        {/* Price and Action */}
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-2xl font-bold text-lime-700">GH₵{product.price}</span>
                            </div>
                            <button 
                                className="bg-lime-600 text-white px-4 py-2 rounded-lg hover:bg-lime-700 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    // Handle purchase button click
                                }}
                            >
                                Bless This Work
                            </button>
                        </div>

                        {/* Scripture Verse */}
                        {/* <div className="pt-4 border-t border-gray-100">
                            <p className="text-sm text-gray-500 italic">
                                Each of you should use whatever gift you have received to serve others...
                                <br />
                                <span className="not-italic">- 1 Peter 4:10</span>
                            </p>
                        </div> */}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductCard;