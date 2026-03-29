import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import type { Product } from "../types/product";



export const useProduct = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
            .finally(() => setLoading(false))
    }, []);

    return { products, loading }
}





