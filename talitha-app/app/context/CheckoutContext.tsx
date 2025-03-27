"use client"

import { useContext, createContext, useState } from "react";

type CheckoutItem = {
    id: number
    name: string
    price: number
    quantity: number
  }

type CheckoutContextType = {
    items: CheckoutItem[]
    addItem: (item: CheckoutItem) => void
    clearCart: () => void
  }

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined)

export default function CheckoutProvider( {children}: { children: React.ReactNode } ) {
    const [items, setItems] = useState<CheckoutItem[]>([])

    // function to add items to the cart
    const addItem = (item: CheckoutItem) => (
        setItems (prev => [...prev, item])
    ) 

    // function to remove items from cart
    const clearCart = () => setItems([])

    return(
        <>
            <CheckoutContext.Provider value={{items, addItem, clearCart}}>
                {children}
            </CheckoutContext.Provider>
        </>
    )
}

export function useCheckout() {
    return useContext(CheckoutContext)
}