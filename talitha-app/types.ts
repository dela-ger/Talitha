export interface Product {
    id: number
    name: string
    description: string | null
    price: number
    category: string | null
    image: string | null
    created_at: string
  }
  
  export interface Order {
    id: string
    total_amount: number
    phone_number: string | null
    network_provider: string | null
    status: string
    created_at: string
    customer_name: string | null
  }
  
  export interface OrderItem {
    id: number
    order_id: string
    product_id: number
    quantity: number
    price: number
    created_at: string
  }
  
  export interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
  }

  export interface ContactRequest {
    id: number
    created_at: string
    request_type: string
    name: string | null
    email: string | null
    message: string
  }