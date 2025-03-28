"use client"

import { useCheckout } from '../context/CheckoutContext'
import Link from 'next/link'

export default function CheckoutPage() {
  const { items, clearCart } = useCheckout()!
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Your cart is empty</p>
              <Link
                href="/market"
                className="text-lime-700 hover:text-lime-800 underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 mb-8">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600 text-sm">
                        GH₵{item.price} × {item.quantity}
                      </p>
                    </div>
                    <p className="text-lime-700 font-medium">
                      GH₵{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold">Total:</span>
                <span className="text-2xl font-bold text-lime-700">
                  GH₵{total.toFixed(2)}
                </span>
              </div>

              {/* Payment Form */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mobile Money Number
                  </label>
                  <input
                    type="tel"
                    placeholder="05X XXX XXXX"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Network Provider
                  </label>
                  <select className="w-full p-3 border rounded-lg" required>
                    <option value="">Select Network</option>
                    <option value="mtn">MTN</option>
                    <option value="vodafone">Vodafone</option>
                    <option value="airteltigo">AirtelTigo</option>
                  </select>
                </div>

                {/* Spiritual Commitment */}
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="prayer" className="rounded" required />
                  <label htmlFor="prayer" className="text-sm">
                    I commit to pray for the seller and this transaction
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={clearCart}
                    className="flex-1 border border-gray-300 rounded-lg py-3"
                  >
                    Clear Cart
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-lime-600 text-white rounded-lg py-3 hover:bg-lime-700"
                  >
                    Confirm Payment
                  </button>
                </div>
              </form>

              {/* Scripture Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-600 italic">
                  &quot;Each of you should give what you have decided in your heart to give, 
                  not reluctantly or under compulsion, for God loves a cheerful giver.&ldquo;
                  <br />
                  <span className="not-italic font-semibold text-lime-700">
                    2 Corinthians 9:7
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}