// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div style={{ 
      minHeight: '60vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--action-color)', margin: 0 }}>404</h1>
      <h2 style={{ color: 'var(--text-main)' }}>¡Ups! Te saliste del mapa.</h2>
      <p style={{ color: 'var(--text-dim)', marginBottom: '24px' }}>
        No pudimos encontrar la página de barras saludables que estabas buscando.
      </p>
      {/* Usamos Link en lugar de <a> para navegar sin recargar */}
      <Link 
        to="/home" 
        style={{ 
          padding: '12px 24px', 
          backgroundColor: 'var(--action-color)', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '8px',
          fontWeight: 'bold'
        }}
      >
        Volver a la tienda
      </Link>
    </div>
  );
};