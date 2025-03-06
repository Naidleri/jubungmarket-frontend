import { useEffect, useState, ReactNode } from 'react';
import { SellerContext } from './sellerContext';
import sellerService from '../services/sellerService';
import { Seller } from '../models/Seller';

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
            setError(err instanceof Error ? err.message : 'Gagal memuat seller');
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
            setError(err instanceof Error ? err.message : 'Gagal memuat detail seller');
        } finally {
            setLoading(false);
        }
    };

    const addSeller = async (newSeller: FormData) => {
        setLoading(true);
        try {
            const data = await sellerService.addSeller(newSeller);
            setSellers(prev => [...prev, data]);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal menambahkan seller');
        } finally {
            setLoading(false);
        }
    };

    const updateSeller = async (id: number, updatedSeller: FormData) => {
        setLoading(true);
        try {
            const data = await sellerService.updateSeller(id, updatedSeller);
            setSellers(prev => 
                prev.map(seller => (seller.id === id ? data : seller))
            );
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal memperbarui seller');
        } finally {
            setLoading(false);
        }
    };

    const deleteSeller = async (id: number) => {
        setLoading(true);
        try {
            await sellerService.deleteSeller(id);
            setSellers(prev => prev.filter(seller => seller.id !== id));
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Gagal menghapus seller');
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
    );
};