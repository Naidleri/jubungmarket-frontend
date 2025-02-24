import { Product } from "../models/Product";
import api from "./api";

const API_URL = '/product'

const getAll = async (): Promise<Product[]> => {
    try {
        const response = await api.get(API_URL);
        return response.data.data || [];
    } catch (error: any) {
        console.error('Error fetching products:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch products');
    }
};

const getById = async (id: number): Promise<Product> => {
    try {
        const response = await api.get(`${API_URL}/${id}`);
        return response.data.data; 
    } catch (error: any) {
        console.error('Error fetching product by ID:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch product');
    }
}

const addProduct = async (newProduct: FormData): Promise<Product> => {
    try {
        const response = await api.post(API_URL, newProduct);
        return response.data.data; 
    } catch (error: any) {
        console.error('Error adding product:', error);
        throw new Error(error.response?.data?.message || 'Failed to add product');
    }
}

const updateProduct = async (id: number, updateProduct: FormData): Promise<Product> => {
    try {
        const response = await api.put(`${API_URL}/${id}`, updateProduct);
        return response.data.data; 
    } catch (error: any) {
        console.error('Error updating product:', error);
        throw new Error(error.response?.data?.message || 'Failed to update product');
    }
}

const deleteProduct = async (id: number): Promise<Product> => {
    try {
        const response = await api.delete(`${API_URL}/${id}`);
        return response.data.data; 
    } catch (error: any) {
        console.error('Error deleting product:', error);
        throw new Error(error.response?.data?.message || 'Failed to delete product');
    }
}

export default {
    getAll,
    getById,
    addProduct,
    updateProduct,
    deleteProduct
}