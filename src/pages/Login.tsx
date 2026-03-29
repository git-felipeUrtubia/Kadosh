// src/pages/Login.tsx
import { LoginForm } from "../components/Auth/LoginForm";
// 1. Importamos iconos para los beneficios y para volver
import { FiArrowLeft, FiPackage, FiZap, FiUserCheck } from 'react-icons/fi';
import './Login.css';

export const Login = () => {
    return (
        <main className="login-page-split">

            {/* --- Columna Izquierda: Branding y Beneficios --- */}
            <div className="login-branding-side">
                {/* Botón flotante para volver */}
                <a href="/" className="back-home-floating">
                    <FiArrowLeft />
                    <span>Volver a la tienda</span>
                </a>

                <div className="branding-content">
                    {/* Aquí iría tu logo en grande */}
                    <div className="login-logo-placeholder">
                        Puri<span>Fruta</span>
                    </div>

                    <h1>Tu energía natural, a un clic de distancia.</h1>
                    <p>Inicia sesión para una experiencia más rápida y personalizada.</p>

                    {/* Lista de beneficios con iconos */}
                    <ul className="benefits-list">
                        <li>
                            <div className="benefit-icon-box"><FiPackage /></div>
                            <div className="benefit-text">
                                <strong>Rastreo Veloz</strong>
                                <span>Sigue tus pedidos en tiempo real.</span>
                            </div>
                        </li>
                        <li>
                            <div className="benefit-icon-box"><FiZap /></div>
                            <div className="benefit-text">
                                <strong>Ofertas Exclusivas</strong>
                                <span>Accede a descuentos solo para miembros.</span>
                            </div>
                        </li>
                        <li>
                            <div className="benefit-icon-box"><FiUserCheck /></div>
                            <div className="benefit-text">
                                <strong>Compra Rápida</strong>
                                <span>Guarda tus datos para checkouts en segundos.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Decoración abstracta de fondo (opcional, por CSS) */}
                <div className="bg-decor-circle"></div>
            </div>

            {/* --- Columna Derecha: El Formulario --- */}
            <div className="login-form-side">
                <LoginForm />
            </div>
        </main>
    );
}