import { createContext } from 'react';
import { Product } from '../models/Product';

interface ProductContextType {
    products: Product[];
    product: Product | null;
    error: string | null;
    loading: boolean;
    getAllProducts: () => Promise<void>;
    getProductById: (id: number) => Promise<void>;
    addProduct: (newProduct: FormData) => Promise<void>;
    updateProduct: (id: number, updatedProduct: FormData) => Promise<void>;
    deleteProduct: (id: number) => Promise<void>;
}

export const ProductContext = createContext<ProductContextType>(
    {} as ProductContextType
  );