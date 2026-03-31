
import type { Product } from "../../types/product";
import { ProductCard } from "./ProductCard";
import './ProductList.css';

interface ProductListProps {
  products?: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  if (!products || products.length === 0) {
    return <div className="list-empty">No hay productos disponibles.</div>;
  }

  return (
    <div className="product-list-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};