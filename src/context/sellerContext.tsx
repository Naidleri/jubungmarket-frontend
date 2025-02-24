import { createContext, useEffect, useState, ReactNode } from 'react';
import sellerService from '../services/sellerService';
import { Seller } from '../models/Seller';

interface SellerContextType {
    sellers: Seller[];
    seller: Seller | null;
    error: string | null;
    loading: boolean;
    getAllSellers: () => Promise<void>;
    getSellerById: (id: number) => Promise<void>;
    addSeller: (newSeller: FormData) => Promise<void>;
    updateSeller: (id: number, updatedSeller: FormData) => Promise<void>;
    deleteSeller: (id: number) => Promise<void>;
}

export const SellerContext = createContext<SellerContextType>({
    sellers: [],
    seller: null,
    error: null,
    loading: false,
    getAllSellers: async () => {},
    getSellerById: async () => {},
    addSeller: async () => {},
    updateSeller: async () => {},
    deleteSeller: async () => {},
});

interface SellerProviderProps {
    children: ReactNode;
}

export const SellerProvider = ({ children }: SellerProviderProps) => {
    const [sellers, setSellers] = useState<Seller[]>([]);
    const [seller, setSeller] = useState<Seller | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllSellers();
    }, []);

    const getAllSellers = async () => {
        setLoading(true);
        try {
            const data = await sellerService.getAll();
            setSellers(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal to fetch sellers');
        } finally {
            setLoading(false);
        }
    };

    const getSellerById = async (id: number) => {
        setLoading(true);
        try {
            const data = await sellerService.getById(id);
            setSeller(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal to fetch seller');
        } finally {
            setLoading(false);
        }
    };

    const addSeller = async (newSeller: FormData) => {
        setLoading(true);
        try {
            const data = await sellerService.addSeller(newSeller);
            setSellers([...sellers, data]);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal to add seller');
        } finally {
            setLoading(false);
        }
    };

    const updateSeller = async (id: number, updatedSeller: FormData) => {
        setLoading(true);
        try {
            const data = await sellerService.updateSeller(id, updatedSeller);
            setSellers(sellers.map((seller) => (seller.id === id ? data : seller)));
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal to update seller');
        } finally {
            setLoading(false);
        }
    };

    const deleteSeller = async (id: number) => {
        setLoading(true);
        try {
            await sellerService.deleteSeller(id);
            setSellers(sellers.filter((seller) => seller.id !== id));
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal to delete seller');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SellerContext.Provider
            value={{
                sellers,
                seller,
                error,
                loading,
                getAllSellers,
                getSellerById,
                addSeller,
                updateSeller,
                deleteSeller,
            }}
        >
            {children}
            </SellerContext.Provider>
    )
}

