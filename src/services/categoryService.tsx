import { Category } from "../models/Category";
import api from "./api";

const API_URL = '/category'

const getAll = async (): Promise<Category[]> => { 
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

const getById = async (id: number): Promise<Category> => {
    try {
        const response = await api.get(`${API_URL}/${id}`)
        return response.data.data; 
    }catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }    
}

const deleteCategory = async (id:number): Promise<Category> => {
    try {
        const response = await api.delete(`${API_URL}/${id}`)
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
    deleteCategory
}