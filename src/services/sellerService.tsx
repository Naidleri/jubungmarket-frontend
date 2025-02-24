import { Seller } from "../models/Seller";
import api from "./api";

const API_URL = `/seller`;

const getAll = async (): Promise<Seller[]> => {
    try {
        const response = await api.get(API_URL);
        return response.data.data || [];
    } catch (error: any) {
        console.error('Error fetching sellers:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch sellers');
    }
}

const getById = async (id: number): Promise<Seller> => {
    try {
        const response = await api.get(`${API_URL}/${id}`);
        return response.data.data; 
    } catch (error: any) {
        console.error('Error fetching seller:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch seller');
    }
}

const addSeller = async (newSeller: FormData): Promise<Seller> => { 
    try {
        const response = await api.post(API_URL, newSeller);
        return response.data.data; 
    } catch (error: any) {
        console.error('Error adding seller:', error);
        throw new Error(error.response?.data?.message || 'Failed to add seller');
    }
} 

const updateSeller = async (id: number, updateSeller: FormData): Promise<Seller> => {
    try {
        const response = await api.put(`${API_URL}/${id}`, updateSeller);
        return response.data.data; 
    } catch (error: any) {
        console.error('Error updating seller:', error);
        throw new Error(error.response?.data?.message || 'Failed to update seller');
    }
}

const deleteSeller = async (id: number): Promise<Seller> => {
    try {
        const response = await api.delete(`${API_URL}/${id}`);
        return response.data.data; 
    } catch (error: any) {
        console.error('Error deleting seller:', error);
        throw new Error(error.response?.data?.message || 'Failed to delete seller');
    }
}

export default {
    getAll,
    getById,
    addSeller,
    updateSeller,
    deleteSeller
}