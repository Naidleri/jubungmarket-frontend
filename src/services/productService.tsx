import { Product } from "../models/Product";
import api from "./api";

const API_URL = '/product'

const getAll = async (): Promise<Product[]> => {
    try {
        const response = await api.get(API_URL);
        return response.data.data || [];
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }    
};

const getById = async (id: number): Promise<Product> => {
    try {
        const response = await api.get(`${API_URL}/${id}`);
        return response.data.data; 
    }catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }    
}

const addProduct = async (newProduct: FormData): Promise<Product> => {
    try {
        const response = await api.post(API_URL, newProduct);
        return response.data.data; 
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }    
}

const updateProduct = async (id: number, updateProduct: FormData): Promise<Product> => {
    try {
        const response = await api.put(`${API_URL}/${id}`, updateProduct);
        return response.data.data; 
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }    
}

const deleteProduct = async (id: number): Promise<Product> => {
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
    addProduct,
    updateProduct,
    deleteProduct
}