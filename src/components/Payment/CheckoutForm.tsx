// src/components/Checkout/CheckoutForm.tsx
import { FiUser, FiMapPin, FiCreditCard, FiExternalLink } from 'react-icons/fi';
import './CheckoutForm.css';

export const CheckoutForm = () => {
    return (
        <form className="checkout-form">
            {/* Sección 1: Datos Personales */}
            <section className="form-section">
                <h3 className="form-section-title">
                    <FiUser /> Datos de Contacto
                </h3>
                <div className="form-grid">
                    <div className="input-group">
                        <label>Nombre completo</label>
                        <input type="text" placeholder="Ej: Juan Pérez" required />
                    </div>
                    <div className="input-group">
                        <label>Correo electrónico</label>
                        <input type="email" placeholder="juan@correo.com" required />
                    </div>
                </div>
            </section>

            {/* Sección 2: Dirección */}
            <section className="form-section">
                <h3 className="form-section-title">
                    <FiMapPin /> Dirección de Envío
                </h3>
                <div className="input-group">
                    <label>Calle y número</label>
                    <input type="text" placeholder="Av. Siempre Viva 123" required />
                </div>
                <div className="form-grid">
                    <div className="input-group">
                        <label>Comuna</label>
                        <input type="text" placeholder="Ej: El Bosque" required />
                    </div>
                    <div className="input-group">
                        <label>Región</label>
                        <select required>
                            <option value="">Selecciona una región...</option>
                            <option value="RM">Metropolitana</option>
                            <option value="V">Valparaíso</option>
                            {/* Agregar más opciones */}
                        </select>
                    </div>
                </div>
            </section>

            {/* Sección 3: Redirección a Pago */}
            <section className="form-section">
                <h3 className="form-section-title">
                    <FiCreditCard /> Pago Seguro
                </h3>
                <div className="webpay-info-box">
                    <div className="webpay-header">
                        {/* Aquí puedes reemplazar este texto por una etiqueta <img> con el logo oficial de Webpay */}
                        <span className="webpay-logo-text">Webpay Plus</span>
                        <div className="webpay-secure-tag">
                            <FiExternalLink /> Redirección
                        </div>
                    </div>
                    <p className="webpay-description">
                        Al hacer clic en "Confirmar y Pagar", serás redirigido de forma segura a la plataforma de Transbank para completar tu compra. No almacenamos los datos de tu tarjeta.
                    </p>
                </div>
            </section>
        </form>
    );
};