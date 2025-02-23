export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string | string[]; 
    sellerId: number; 
    categoryId: number;
}