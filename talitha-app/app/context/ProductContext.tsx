"use client"

import React, { createContext, ReactNode, useContext, useState } from 'react';
import productsData from '../market/productData';

// define the type for the context to be used
interface ProductContextType {
    products: typeof productsData;
    setProducts: React.Dispatch<React.SetStateAction<typeof productsData>>;
}

// interface for the prop type
interface ProductProviderProp {
    children: ReactNode;
}

// Now we provide the value for context here
const ProductContext = createContext<ProductContextType>({
    products: productsData,
    setProducts: () => {},
})

export default function ProductProvider({ children }: ProductProviderProp) {
    const [products, setProducts] = useState(productsData)
  return (
    <>
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    </>
  )
}

// custom useProduct hook
export function useProduct() {
    return useContext(ProductContext)
}

