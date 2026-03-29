// src/components/Common/NavBar/NavBar.tsx
import { FiShoppingBag, FiSun, FiMoon, FiUser } from 'react-icons/fi'; // Añadimos FiUser
import { useTheme } from '../../hooks/useTheme';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const nav = useNavigate();





  return (
    <header className="main-header">
      <nav className="nav-container">

        <div className="nav-brand">
          <span className="brand-text">KA<span className="thin">DOSH</span></span>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="categorias"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Categorias
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/novedades"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Novedades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Blog
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          {/* --- Botón de Login Interactivo --- */}
          <button
            className="action-btn login-btn"
            title="Iniciar Sesión"
            onClick={() => nav('/login')}
          >
            <FiUser />
          </button>

          <button
            className="action-btn theme-toggle"
            title={theme === 'light' ? 'Activar Modo Oscuro' : 'Activar Modo Claro'}
            onClick={toggleTheme}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>

          <button className="action-btn cart-btn" title="Carrito">
            <FiShoppingBag />
            <span className="cart-badge-dot"></span>
          </button>
        </div>

      </nav>
    </header>
  );
};