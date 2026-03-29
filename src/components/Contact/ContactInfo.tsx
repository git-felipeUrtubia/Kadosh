


// src/components/Contact/ContactInfo.tsx
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook } from 'react-icons/fi';
import './ContactInfo.css';

export const ContactInfo = () => {
    return (
        <div className="contact-info-wrapper">
            <div className="info-header">
                <h2>Hablemos de Nutrición</h2>
                <p>Estamos aquí para ayudarte a elegir la mejor energía para tu día. Contáctanos por cualquiera de nuestros canales.</p>
            </div>

            <ul className="info-list">
                <li className="info-item">
                    <div className="icon-box">
                        <FiMapPin />
                    </div>
                    <div className="info-text">
                        <strong>Nuestra Tienda</strong>
                        <span>Av. Los Frutales 1234, El Bosque, Santiago</span>
                    </div>
                </li>

                <li className="info-item">
                    <div className="icon-box">
                        <FiPhone />
                    </div>
                    <div className="info-text">
                        <strong>Llámanos</strong>
                        <span>+56 9 1234 5678</span>
                    </div>
                </li>

                <li className="info-item">
                    <div className="icon-box">
                        <FiMail />
                    </div>
                    <div className="info-text">
                        <strong>Escríbenos</strong>
                        <span>hola@purifruta.cl</span>
                    </div>
                </li>

                <li className="info-item">
                    <div className="icon-box">
                        <FiClock />
                    </div>
                    <div className="info-text">
                        <strong>Horario de Atención</strong>
                        <span>Lunes a Viernes: 09:00 - 18:00 hrs</span>
                    </div>
                </li>
            </ul>

            {/* --- Redes Sociales --- */}
            <div className="social-section">
                <strong>Síguenos en nuestras redes:</strong>
                <div className="social-links">
                    <a href="#" className="social-btn" aria-label="Instagram">
                        <FiInstagram />
                    </a>
                    <a href="#" className="social-btn" aria-label="Facebook">
                        <FiFacebook />
                    </a>
                </div>
            </div>
        </div>
    );
};