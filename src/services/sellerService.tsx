import { Seller } from "../models/Seller";
import api from "./api";

const API_URL = `/seller`;

const getAll = async (): Promise<Seller[]> => {
    try {
        const response = await api.get(API_URL);
        return response.data.data || [];
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }
}

const getById = async (id: number): Promise<Seller> => {
    try {
        const response = await api.get(`${API_URL}/${id}`);
        return response.data.data; 
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }    
}

const addSeller = async (newSeller: FormData): Promise<Seller> => { 
    try {
        const response = await api.post(API_URL, newSeller);
        return response.data.data; 
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }    
} 

const updateSeller = async (id: number, updateSeller: FormData): Promise<Seller> => {
    try {
        const response = await api.put(`${API_URL}/${id}`, updateSeller);
        return response.data.data; 
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }    
}

const deleteSeller = async (id: number): Promise<Seller> => {
    try {
        const response = await api.delete(`${API_URL}/${id}`);
        return response.data.data; 
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }    
}

export default {
    getAll,
    getById,
    addSeller,
    updateSeller,
    deleteSeller
}