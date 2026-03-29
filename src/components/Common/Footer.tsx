// src/components/Common/Footer/Footer.tsx
import { FiInstagram, FiFacebook, FiMail, FiMapPin } from 'react-icons/fi';
import './Footer.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="main-footer">
            <div className="footer-container">

                {/* Sección 1: Brand y Redes */}
                <div className="footer-section footer-brand">
                    <div className="nav-brand">
                        <span className="brand-text">KA<span className="thin">DOSH</span></span>
                    </div>
                    <p className="footer-description">
                        Barras de pulpa de fruta 100% natural. Energía real para tu día a día, directo desde Puerta a Tokio.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Instagram"><FiInstagram /></a>
                        <a href="#" aria-label="Facebook"><FiFacebook /></a>
                    </div>
                </div>

                {/* Sección 2: Enlaces Rápidos (Tienda) */}
                <div className="footer-section footer-links">
                    <h4>Tienda</h4>
                    <ul>
                        <li><a href="#productos-home">Todos los Productos</a></li>
                        <li><a href="#">Paquetes Ahorro</a></li>
                        <li><a href="#">Novedades</a></li>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                    </ul>
                </div>

                {/* Sección 3: Compañía */}
                <div className="footer-section footer-links">
                    <h4>Compañía</h4>
                    <ul>
                        <li><a href="#nosotros-home">Nuestra Historia</a></li>
                        <li><a href="#contacto-home">Contacto</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                    </ul>
                </div>

                {/* Sección 4: Contacto Rápido */}
                <div className="footer-section footer-contact">
                    <h4>Contacto</h4>
                    <ul>
                        <li>
                            <FiMail className="footer-icon" />
                            <span>hola@kadosh.cl</span>
                        </li>
                        <li>
                            <FiMapPin className="footer-icon" />
                            <span>Region del Maule - Parral - Chile</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Barra Inferior de Copyright */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>&copy; {currentYear} Kadosh. Todos los derechos reservados.</p>
                    <p className="designer-tag">Diseñado con ❤️ por el Ingeniero Felipe</p>
                </div>
            </div>
        </footer>
    );
};