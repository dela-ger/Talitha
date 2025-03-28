"use client"
import { useParams } from "next/navigation";
import productsData from "../productData";
import Image from "next/image";
import Link from "next/link";
import { useCheckout } from "@/app/context/CheckoutContext";

export default function ProductDetail() {
    const params = useParams();
    const { id } = params;
    const product = productsData.find((item) => item.id === parseInt(id as string));
    const { addItem } = useCheckout()!;

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
                Product not found
            </div>
        );
    }

    // handle adding to cart
    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mr-40 ml-40">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link 
                        href="/market" 
                        className="text-lime-600 hover:text-lime-700 flex items-center"
                    >
                        ← Back to Marketplace
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Product Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                        <div className="space-y-4">
                            <div className="relative aspect-square rounded-xl overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6">
                            {/* Category and Price */}
                            <div className="flex justify-between items-start">
                                <span className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm">
                                    {product.category}
                                </span>
                                <div className="text-4xl font-bold text-lime-700">
                                    GH₵{product.price}
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl font-bold text-gray-900">
                                {product.name}
                            </h1>

                            {/* Description */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    Product Description
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-lime-600 text-white py-4 rounded-lg hover:bg-lime-700 transition-colors"
                                >
                                    Add to Cart - GH₵{product.price}
                                </button>
                                <button className="flex-1 border-2 border-lime-600 text-lime-700 py-4 rounded-lg hover:bg-lime-50 transition-colors">
                                    Ask Question
                                </button>
                            </div>

                            {/* Scripture Section */}
                            <div className="pt-6 mt-6 border-t border-gray-100">
                                <p className="text-gray-600 italic text-center">
                                    &quot;Each of you should use whatever gift you have received to serve others, 
                                    as faithful stewards of God&lsquo;s grace in its various forms.&quot;
                                    <br />
                                    <span className="not-italic font-semibold text-lime-700">
                                        1 Peter 4:10
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}