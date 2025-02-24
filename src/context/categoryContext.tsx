import { createContext, useEffect, useState, ReactNode } from "react";
import categoryService from "../services/categoryService";
import { Category } from "../models/Category";

interface CategoryContextType {
    categories: Category[];
    category: Category | null;
    error: string | null;
    loading: boolean;
    getAllCategories: () => Promise<void>;
    getCategoryById: (id: number) => Promise<void>;
    deleteCategory: (id: number) => Promise<void>;
}

export const CategoryContext = createContext<CategoryContextType>({
    categories: [],
    category: null,
    error: null,
    loading: false,
    getAllCategories: async () => {},
    getCategoryById: async () => {},
    deleteCategory: async () => {},
});

interface CategoryProviderProps {
    children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState<Category | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllCategories();
    }, []);

    const getAllCategories = async () => {
        setLoading(true);
        try {
            const data = await categoryService.getAll();
            setCategories(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Gagal to fetch categories");
        } finally {
            setLoading(false);
        }
    };

    const getCategoryById = async (id: number) => {
        setLoading(true);
        try {
            const data = await categoryService.getById(id);
            setCategory(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Gagal to fetch category");
        } finally {
            setLoading(false);
        }
    };

    const deleteCategory = async (id: number) => {
        setLoading(true);
        try {
            const data = await categoryService.deleteCategory(id);
            setCategory(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Gagal to delete category");
        } finally {
            setLoading(false);
        };
    }

    return (
        <CategoryContext.Provider
            value={{
                categories,
                category,
                error,
                loading,
                getAllCategories,
                getCategoryById,
                deleteCategory
            }}
        >
         {children}
        </CategoryContext.Provider>
    );
};