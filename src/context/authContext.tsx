import { createContext } from "react";
import { User } from "../models/User";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    login: (email:string,password:string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType 
);