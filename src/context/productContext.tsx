import { createContext, useEffect, useState, ReactNode } from 'react';
import productService from '../services/productService';
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

export const ProductContext = createContext<ProductContextType>({
    products: [],
    product: null,
    error: null,
    loading: false,
    getAllProducts: async () => {},
    getProductById: async () => {},
    addProduct: async () => {},
    updateProduct: async () => {},
    deleteProduct: async () => {},
});

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        setLoading(true);
        try {
            const data = await productService.getAll();
            setProducts(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal memuat produk');
        } finally {
            setLoading(false);
        }
    };

    const getProductById = async (id: number) => {
        setLoading(true);
        try {
            const data = await productService.getById(id);
            setProduct(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal memuat detail produk');
        } finally {
            setLoading(false);
        }
    };

    const addProduct = async (newProduct: FormData) => {
        setLoading(true);
        try {
            const data = await productService.addProduct(newProduct);
            setProducts(prev => [...prev, data]);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal menambahkan produk');
        } finally {
            setLoading(false);
        }
    };

    const updateProduct = async (id: number, updatedProduct: FormData) => {
        setLoading(true);
        try {
            const data = await productService.updateProduct(id, updatedProduct);
            setProducts(prev =>
                prev.map(product => (product.id === id ? data : product))
            );
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal memperbarui produk');
        } finally {
            setLoading(false);
        }
    };

    const deleteProduct = async (id: number) => {
        setLoading(true);
        try {
            await productService.deleteProduct(id);
            setProducts(prev => prev.filter(product => product.id !== id));
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal menghapus produk');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                product,
                error,
                loading,
                getAllProducts,
                getProductById,
                addProduct,
                updateProduct,
                deleteProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};