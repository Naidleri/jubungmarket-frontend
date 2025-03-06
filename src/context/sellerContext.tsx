import { createContext } from 'react';
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

export const SellerContext = createContext<SellerContextType> (
    {} as SellerContextType
  );