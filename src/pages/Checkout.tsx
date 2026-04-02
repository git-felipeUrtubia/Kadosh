// src/pages/Checkout.tsx
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShield } from 'react-icons/fi';
import { useCart } from '../hooks/useCart';
import { CheckoutForm } from '../components/Payment/CheckoutForm';
import './Checkout.css';

export const Checkout = () => {
    const shippingPrice: number = 1000;
    const { cart, cartTotal } = useCart();
    const priceFinal: number = cartTotal + (cart.length > 0 ? shippingPrice : 0);

    return (
        <div className="checkout-page-wrapper">
            <div className="checkout-page-container">
                <header className="checkout-header">
                    <h1 className="checkout-title">Finalizar Compra</h1>
                    <Link to="/cart" className="back-to-cart-link">
                        <FiArrowLeft /> Volver al carrito
                    </Link>
                </header>

                <div className="checkout-layout">
                    {/* Columna Izquierda: Formulario de Datos */}
                    <div className="checkout-form-section">
                        <CheckoutForm />
                    </div>

                    {/* Columna Derecha: Resumen de Orden Simplificado */}
                    <aside className="checkout-summary-section">
                        <div className="checkout-summary-card">
                            <h2 className="summary-title">Tu Pedido</h2>

                            <div className="checkout-items-mini">
                                {cart.map(item => (
                                    <div key={item.id} className="mini-item">
                                        <div className="mini-item-info">
                                            <span className="mini-item-qty">{item.quantity}x</span>
                                            <span className="mini-item-name">{item.nombre}</span>
                                        </div>
                                        <span className="mini-item-price">
                                            ${(item.precio * item.quantity).toLocaleString('es-CL')}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="summary-divider"></div>

                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${cartTotal.toLocaleString('es-CL')}</span>
                            </div>
                            <div className="summary-row">
                                <span>Envío (Santiago)</span>
                                <span>${shippingPrice.toLocaleString('es-CL')}</span>
                            </div>

                            <div className="summary-divider"></div>

                            <div className="summary-row total-row">
                                <span>Total a Pagar</span>
                                <span>${priceFinal.toLocaleString('es-CL')}</span>
                            </div>

                            <button className="place-order-btn">
                                Confirmar y Pagar
                            </button>

                            <div className="secure-payment-info">
                                <FiShield size={18} />
                                <span>Transacción encriptada de extremo a extremo.</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};