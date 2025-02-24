import { Category } from "../models/Category";
import api from "./api";

const API_URL = '/category'

const getAll = async (): Promise<Category[]> => { 
    try {
        const response = await api.get<Category[]>(API_URL);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

const getById = async (id: number): Promise<Category> => {
    try {
        const response = await api.get<Category>(`${API_URL}/${id}`)
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

const deleteCategory = async (id:number): Promise<Category> => {
    try {
        const response = await api.delete<Category>(`${API_URL}/${id}`)
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default {
    getAll,
    getById,
    deleteCategory
}