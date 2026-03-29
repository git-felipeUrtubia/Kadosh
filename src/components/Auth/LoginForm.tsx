// src/components/Auth/LoginForm.tsx
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import './LoginForm.css';

export const LoginForm = () => {
    return (
        <div className="login-wrapper">
            <div className="login-header">
                <h3>Bienvenido de vuelta</h3>
                <p>Ingresa tus credenciales para continuar</p>
            </div>

            <form className="login-form">
                {/* Campo de Correo */}
                <div className="auth-input-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <div className="input-with-icon">
                        <FiMail className="input-icon" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="tu@correo.com"
                        />
                    </div>
                </div>

                {/* Campo de Contraseña */}
                <div className="auth-input-group">
                    <label htmlFor="password">Contraseña</label>
                    <div className="input-with-icon">
                        <FiLock className="input-icon" />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                {/* Opciones Adicionales */}
                <div className="login-options">
                    <label className="checkbox-container">
                        <input type="checkbox" name="remember" />
                        <span className="checkmark"></span>
                        Recordarme
                    </label>
                    <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
                </div>

                {/* Botón de Submit */}
                <button type="submit" className="login-submit-btn">
                    <span>Iniciar Sesión</span>
                    <FiLogIn className="btn-icon" />
                </button>
            </form>

            {/* Footer de Registro */}
            <div className="login-footer">
                <p>¿No tienes una cuenta? <a href="#">Regístrate aquí</a></p>
            </div>
        </div>
    );
};