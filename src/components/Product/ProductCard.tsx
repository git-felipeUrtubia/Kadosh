// src/components/Product/ProductCard.tsx
import { FiInfo, FiShoppingCart } from 'react-icons/fi';
import type { Product } from "../../types/product";
import './ProductCard.css';

interface ProductCardProp {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProp) => {
    return (
        <article className="product-card-tech" key={product.id}>
            {/* 1. Contenedor de Imagen con Overlay sutil */}
            <div className="product-visual">
                <img src={product.image} alt={product.nombre} className="product-img" />
                <div className="product-badge">{product.categoria}</div>
            </div>

            {/* 2. Bloque de Contenido Informativo */}
            <div className="product-details">
                <h3 className="product-title">{product.nombre}</h3>
                <p className="product-desc">{product.descripcion}</p>
                <div className="product-price-tag">
                    <span className="currency">$</span>
                    <span className="price-value">{product.precio}</span>
                </div>
            </div>

            {/* 3. Fila de Acciones (Alineada al fondo) */}
            <footer className="product-actions">
                <button className="btn-secondary" title="Ver detalles">
                    <FiInfo />
                    <span>Detalles</span>
                </button>
                <button className="btn-primary" title="Añadir al carrito">
                    <FiShoppingCart />
                    <span>Añadir</span>
                </button>
            </footer>
        </article>
    );
};