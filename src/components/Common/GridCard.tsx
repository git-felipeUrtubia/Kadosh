import type { Product } from "../../types/product"
import { ProductCard } from "../Product/ProductCard"
import './GridCard.css'

interface GridProps {
    products?: Product[]
}




export const GridCard = ({ products }: GridProps) => {
    
  if (!products || products.length === 0) {
    return <div className="grid-empty">No hay productos disponibles.</div>;
  }

  return (
    <div className="grid-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


