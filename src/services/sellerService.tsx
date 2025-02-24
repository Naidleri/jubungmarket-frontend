import { Seller }  from "../models/Seller"
import api from "./api"

const API_URL = `/seller`

const getAll = async (): Promise<Seller[]> => {
    try {
        const response = await api.get<Seller[]>(API_URL)
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

const getById = async (id: number): Promise<Seller> => {
    try {
        const response = await api.get<Seller>(`${API_URL}/${id}`)
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

const addSeller = async (newSeller: FormData): Promise<Seller> => { 
    try {
        const response = await api.post<Seller>(API_URL, newSeller)
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
} 

const updateSeller = async (id: number, updateSeller: FormData): Promise<Seller> => {
    try {
        const response = await api.put<Seller>(`${API_URL}/${id}`, updateSeller)
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

const deleteSeller = async (id:number): Promise<Seller> => {
    try {
        const response = await api.delete<Seller>(`${API_URL}/${id}`)
        return response.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default {
    getAll,
    getById,
    addSeller,
    updateSeller,
    deleteSeller
}