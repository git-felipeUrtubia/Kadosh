import type { Product } from "../types/product";



export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch('/data.json')

    if (!response.ok) throw new Error("Error al cargar productos");

    const data = await response.json();
    return data;
}




