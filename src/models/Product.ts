export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string | string[]; 
    createdAt: string;
    updatedAt: string;
    sellerId: number; 
    categoryId: number;
}