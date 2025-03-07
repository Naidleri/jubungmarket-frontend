import { useEffect, useState, ReactNode } from "react";
import { AuthContext } from "./authContext";
import authService from "../services/authService";
import { User } from "../models/User";
import Cookies from "js-cookie"; 

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token") || Cookies.get("token");

        if (storedUser && token) {
            setUser(JSON.parse(storedUser)); 
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const { user, token } = await authService.login(email, password);
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
            Cookies.set("token", token, { expires: 7 });
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed");
        } finally {
            setLoading(false);
        }
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                error,
                isAuthenticated: !!user,
                login,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
