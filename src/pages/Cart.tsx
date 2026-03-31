// src/pages/Cart.tsx
import './Cart.css';
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom'; // Asumiendo que usas react-router

export const Cart = () => {
    const { cart, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

    const shippingEstimate = cart.length > 0 ? 3500 : 0;
    const finalTotal = cartTotal + shippingEstimate;

    return (
        <div className="cart-page-wrapper">
            <div className="cart-page-container">

                {/* Encabezado de la página */}
                <header className="cart-page-header">
                    <h1 className="cart-page-title">Productos Agregados</h1>
                    <Link to="/" className="continue-shopping-link">
                        <FiArrowLeft /> Seguir comprando...
                    </Link>
                </header>

                {/* VALIDACIÓN: Si el carrito está vacío */}
                {cart.length === 0 ? (
                    <div className="cart-empty-state">
                        <FiShoppingBag size={80} />
                        <h2>Tu carrito está vacío</h2>
                        <p>Parece que aún no has añadido ninguna delicia natural.</p>
                        <Link to="/" className="checkout-main-btn" style={{ maxWidth: '300px', textDecoration: 'none', textAlign: 'center' }}>
                            Ver Productos
                        </Link>
                    </div>
                ) : (
                    <div className="cart-layout">
                        {/* COLUMNA IZQUIERDA: Lista de Productos */}
                        <div className="cart-items-section">

                            {/* Cabeceras de la tabla (Solo visible en PC) */}
                            <div className="cart-table-header">
                                <span className="col-product">Producto</span>
                                <span className="col-price">Precio</span>
                                <span className="col-qty">Cantidad</span>
                                <span className="col-total">Subtotal</span>
                            </div>

                            {/* MAPEO DE PRODUCTOS REALES */}
                            {cart.map((item) => (
                                <div className="cart-page-item" key={item.id}>
                                    <div className="item-info col-product">
                                        <img
                                            src={item.image}
                                            alt={item.nombre}
                                            className="item-image"
                                        />
                                        <div className="item-details">
                                            <h3 className="item-name">{item.nombre}</h3>
                                            <span className="item-category">{item.categoria}</span>
                                            {/* Botón eliminar móvil */}
                                            <button
                                                className="item-remove-btn-mobile"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <FiTrash2 /> Eliminar
                                            </button>
                                        </div>
                                    </div>

                                    <div className="item-price col-price">${item.precio.toLocaleString('es-CL')}</div>

                                    <div className="item-quantity col-qty">
                                        <div className="qty-control">
                                            <button
                                                className="qty-btn"
                                                onClick={() => updateQuantity(item.id, -1)}
                                            >
                                                <FiMinus size={14} />
                                            </button>
                                            <span className="qty-val">{item.quantity}</span>
                                            <button
                                                className="qty-btn"
                                                onClick={() => updateQuantity(item.id, 1)}
                                            >
                                                <FiPlus size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="item-subtotal col-total">
                                        ${(item.precio * item.quantity).toLocaleString('es-CL')}
                                        <button
                                            className="item-remove-btn-desktop"
                                            title="Eliminar"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* COLUMNA DERECHA: Resumen de Compra */}
                        <aside className="cart-summary-section">
                            <div className="summary-card">
                                <h2 className="summary-title">Resumen de Orden</h2>

                                <div className="summary-row">
                                    <span>Subtotal ({cartCount} productos)</span>
                                    <span>${cartTotal.toLocaleString('es-CL')}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Envío estimado (Santiago)</span>
                                    <span>${shippingEstimate.toLocaleString('es-CL')}</span>
                                </div>

                                <div className="summary-divider"></div>

                                <div className="summary-row total-row">
                                    <span>Total</span>
                                    <span>${finalTotal.toLocaleString('es-CL')}</span>
                                </div>

                                <button className="checkout-main-btn">
                                    Ir a Pagar
                                </button>

                                <div className="secure-checkout-badge">
                                    Pago 100% seguro y encriptado
                                </div>
                            </div>
                        </aside>
                    </div>
                )}
            </div>
        </div>
    );
};