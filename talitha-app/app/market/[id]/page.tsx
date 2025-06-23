import ProductDetail from './ProductDetail';
import { supabase } from '@/lib/supabase';

// Generate static params for all products in database
export async function generateStaticParams() {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('id');
    
    if (error) {
      console.error('Error fetching products for static generation:', error);
      return [];
    }
    
    return products?.map((product) => ({
      id: product.id.toString(),
    })) || [];
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

// Optional: Generate metadata for each product
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  try {
    const { data: product } = await supabase
      .from('products')
      .select('name, description')
      .eq('id', parseInt(id))
      .single();
    
    if (product) {
      return {
        title: `${product.name} | Talitha Marketplace`,
        description: product.description?.substring(0, 160) || 'Quality products supporting ministry',
      };
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
  }
  
  return {
    title: 'Product | Talitha Marketplace',
    description: 'Quality products supporting ministry',
  };
}

export default async function Page() {
  return <ProductDetail />;
}