import { Product } from "../models/Product";
import api from "./api";

const API_URL = '/product'

const getAll = async (): Promise<Product[]> => {
    try {
        const response = await api.get<Product[]>(API_URL);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

const getById = async (id: number): Promise<Product> => {
    try {
        const response = await api.get<Product>(`${API_URL}/${id}`)
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

const addProduct = async (newProduct : FormData): Promise<Product> => {
    try {
        const response = await api.post<Product>(API_URL, newProduct)
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

const updateProduct = async (id:number, updateProduct: FormData): Promise<Product> => {
    try {
        const response = await api.put<Product>(`${API_URL}/${id}`,updateProduct)
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

const deleteProduct = async (id:number): Promise<Product> => {
    try {
        const response = await api.delete<Product>(`${API_URL}/${id}`)
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}
export default {
    getAll,
    getById,
    addProduct,
    updateProduct,
    deleteProduct
}