import { createContext } from "react";
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

export const CategoryContext = createContext<CategoryContextType > (
    {} as CategoryContextType
  );
