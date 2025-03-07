import { User } from "../models/User"
import api from "./api"

const API_URL = '/login'

const login = async (email: string, password: string): Promise<{ user: User; token: string }> => {
    try {
        const response = await api.post(API_URL,{email,password})
        return response.data.data
    } catch (error:unknown) {
        if (error instanceof Error) {
            throw new Error(error.message)
        }
        throw new Error('An unexpected error occurred')
    }
}

export default {
    login
}