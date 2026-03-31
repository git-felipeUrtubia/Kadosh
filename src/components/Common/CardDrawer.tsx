// src/components/Cart/CardDrawer.tsx
import './CardDrawer.css';
import type { CardDrawerProps } from '../../types/product';


export const CardDrawer = ({ 
  title, 
  description, 
  image,
  bgColor = "#ffffff", // Valor por defecto
  textColor = "#1a1a1a" // Valor por defecto
}: CardDrawerProps) => {
  return (
    <div 
      className="card-drawer-vertical"
      style={{ backgroundColor: bgColor, color: textColor }} // Inyectamos colores dinámicos
    >
      <div className="vertical-image-wrapper">
        <img src={image} alt={title} className="vertical-image" />
      </div>
      
      <div className="vertical-content">
        <h4 className="vertical-title">{title}</h4>
        {/* Usamos opacity en lugar de un color fijo para la descripción */}
        <p className="vertical-description" style={{ opacity: 0.85 }}>
          {description}
        </p>
      </div>

      <button 
        className="vertical-btn"
        style={{ borderColor: textColor, color: textColor }} // El botón se adapta al texto
      >
        VER DETALLES
      </button>
    </div>
  );
};