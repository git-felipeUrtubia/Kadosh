import './ProductCard.css';
import { FiShoppingCart } from 'react-icons/fi';
import type { Product } from '../../types/product';
import { useCart } from '../../hooks/useCart';

interface ProductCardProp {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProp) => {

  const { addToCart } = useCart();

  return (
    <article className="card-classic" key={product.id}>

      {/* Mitad Izquierda: Imagen del Producto */}
      <div className="classic-img-wrapper">
        <img src={product.image} alt={product.nombre} className="classic-img" />
      </div>

      {/* Mitad Derecha: Contenido y Acciones */}
      <div className="classic-content">
        <span className="classic-category">{product.categoria}</span>

        <h3 className="classic-title">{product.nombre}</h3>

        <p className="classic-desc">{product.descripcion}</p>

        <div className="classic-price-group">
          <span className="classic-price-current">${product.precio}</span>
        </div>

        <button
          className="classic-btn"
          title="Añadir al carrito"
          onClick={ () => addToCart(product) }
        >
          <FiShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>

    </article>
  );
};