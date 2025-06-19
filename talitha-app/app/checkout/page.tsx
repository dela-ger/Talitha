"use client"
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useCheckout } from '@/app/context/CheckoutContext'
import Link from 'next/link'
// Remove unused Order import
import { OrderItem } from '@/types'  // Only import what's needed

export default function CheckoutPage() {
  const { items, clearCart } = useCheckout()!
  const [isSubmitting, setIsSubmitting] = useState(false)
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
     // Convert form data to plain object
  const formData = new FormData(e.target as HTMLFormElement)
  const formValues = Object.fromEntries(formData.entries())
  
  // Create order with explicit typing
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([{
      total_amount: total,
      phone_number: String(formValues.mobile_money_number),
      network_provider: String(formValues.network_provider),
      status: 'pending',
      customer_name: String(formValues.customer_name) // Ensure string conversion
    }])
    .select('id')
    .single()

    console.log('Form values:', {
      customer_name: formValues.customer_name,
      mobile: formValues.mobile_money_number,
      network: formValues.network_provider
    })

    if (orderError) {
      console.error('Order creation error:', orderError)
      alert('Error creating order')
      setIsSubmitting(false)
      return
    }

    // Create order items
    const orderItems: Omit<OrderItem, 'id' | 'created_at'>[] = items.map(item => ({
      order_id: order.id,
      product_id: item.id,
      quantity: item.quantity,
      price: item.price
    }))

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems)

    if (itemsError) {
      console.error('Order items creation error:', itemsError)
      alert('Error adding order items')
      setIsSubmitting(false)
      return
    }

    clearCart()
    alert('Order placed successfully!')
    setIsSubmitting(false)
  }

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
              <form onSubmit={handleSubmit} className="space-y-6">  
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  name="customer_name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mobile Money Number
                  </label>
                  <input
                    name="mobile_money_number"  
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
                  <select 
                    name="network_provider"  
                    className="w-full p-3 border rounded-lg" 
                    required
                  >
                    <option value="">Select Network</option>
                    <option value="mtn">MTN</option>
                    <option value="vodafone">Vodafone</option>
                    <option value="airteltigo">AirtelTigo</option>
                  </select>
                </div>

                {/* Spiritual Commitment */}
                <div className="flex items-center gap-2">
                  <input 
                    name="prayer_commitment"  
                    type="checkbox" 
                    id="prayer" 
                    className="rounded" 
                    required 
                  />
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
                    disabled={isSubmitting}  
                    className={`flex-1 bg-lime-600 text-white rounded-lg py-3 hover:bg-lime-700 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Payment'}  {/* Change text */}
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