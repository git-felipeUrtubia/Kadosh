// src/components/Nosotros/Nosotros.tsx
import { FiLayers, FiSun, FiHeart } from 'react-icons/fi';
import './Nosotros.css';

export const Nosotros = () => {
    return (
        <section id="nosotros-home" className="nosotros-container">
            {/* Cabecera idéntica a la de contacto para mantener consistencia */}
            <div className="nosotros-header">
                <span className="nosotros-badge">Nuestra Historia</span>
                <h2 className="nosotros-title">Hecho con <span>Propósito</span></h2>
            </div>

            <div className="nosotros-content">
                {/* Lado Izquierdo: La Historia */}
                <div className="nosotros-story">
                    <h3>La energía que tu cuerpo merece</h3>
                    <p>
                        Nacimos con una idea simple: crear un snack que no te obligue a elegir entre
                        lo saludable y lo delicioso. Cansados de las barras llenas de químicos e ingredientes
                        impronunciables, decidimos volver a lo básico.
                    </p>
                    <p>
                        Seleccionamos la mejor pulpa de fruta para crear barras que te acompañen en tu
                        día a día, dándote ese impulso de energía natural exactamente cuando lo necesitas.
                        Sin trucos, solo pura fruta.
                    </p>
                </div>

                {/* Lado Derecho: Los Pilares (Valores) */}
                <div className="nosotros-pillars">
                    <div className="pillar-card">
                        <div className="pillar-icon"><FiLayers /></div>
                        <h4>100% Natural</h4>
                        <p>Solo pulpa de fruta real, sin conservantes artificiales ni azúcar añadida.</p>
                    </div>

                    <div className="pillar-card">
                        <div className="pillar-icon"><FiSun /></div>
                        <h4>Energía Real</h4>
                        <p>Carbohidratos de rápida absorción para rendir al máximo en tu rutina.</p>
                    </div>

                    <div className="pillar-card">
                        <div className="pillar-icon"><FiHeart /></div>
                        <h4>Hecho con Amor</h4>
                        <p>Procesos cuidados que mantienen intactas las vitaminas de cada fruta.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};