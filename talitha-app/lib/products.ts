// lib/products.ts
import { supabase } from './supabase';

// Define the Product type based on your database schema
export interface Product {
  id: string | number;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  category?: string;
  created_at?: string;
  updated_at?: string;
  // Add other fields as needed based on your products table
}

// Define return type for your functions
interface ProductResponse {
  data: Product[] | null;
  error: unknown;
}

interface SingleProductResponse {
  data: Product | null;
  error: unknown;
}

export async function getAllProducts(): Promise<ProductResponse> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
   
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { data: null, error };
  }
}

export async function getProductById(id: string | number): Promise<SingleProductResponse> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
   
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { data: null, error };
  }
}

export async function getProductsByCategory(category: string): Promise<ProductResponse> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });
   
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return { data: null, error };
  }
}