
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';
import './Hero.css';

// Simulamos los datos que vendrían de una base de datos o API (Máximo 5)
const slidesData = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/3965551/pexels-photo-3965551.jpeg?auto=compress&cs=tinysrgb&w=1600',
        subtitle: 'NUEVA COLECCIÓN',
        title: 'Esenciales de Verano',
        description: 'Descubre nuestra selección de prendas lino minimalistas para el calor.',
        btnPrimary: 'Comprar Ahora',
        btnSecondary: 'Ver Lookbook'
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1600',
        subtitle: 'OFERTA EXCLUSIVA',
        title: 'Hasta 40% OFF Tech',
        description: 'Actualiza tu setup con accesorios de diseño nórdico en oferta.',
        btnPrimary: 'Ver Ofertas',
        btnSecondary: null // Ejemplo sin segundo botón
    }
];

export const Hero = () => {

    const [indexImg, setIndexImg] = useState<number>(0)

    // NOTA DE INGENIERÍA: Al ser solo diseño (sin lógica), 
    // renderizaremos solo la primera slide para visualizar el estilo.
    const activeSlide = slidesData[indexImg];

    return (
        <section className="hero-container">
            <div className="carousel-view">

                {/* --- 1. La Pista de Slides (Conceptual) --- */}
                <div className="carousel-track">
                    {/* Slide Activa (Única visible por diseño actual) */}
                    <article className="carousel-slide active">

                        {/* Imagen de Fondo con Object-Fit */}
                        <img src={activeSlide.image} alt={activeSlide.title} className="slide-image" loading="eager" />

                        {/* Capa de Texto (Overlay) - Posicionada abajo-izquierda */}
                        <div className="slide-content-overlay">
                            <div className="text-content">
                                <span className="slide-subtitle">{activeSlide.subtitle}</span>
                                <h2 className="slide-title">{activeSlide.title}</h2>
                                <p className="slide-description">{activeSlide.description}</p>

                                {/* Botones de Acción */}
                                <div className="slide-actions">
                                    <button className="btn btn-primary">{activeSlide.btnPrimary}</button>
                                    {activeSlide.btnSecondary && (
                                        <button className="btn btn-secondary">{activeSlide.btnSecondary}</button>
                                    )}
                                </div>
                            </div>
                        </div>

                    </article>
                </div>

                {/* --- 2. Flechas de Navegación (Dummies Visuales) --- */}
                <div className="carousel-nav">
                    <button className="nav-arrow prev-arrow" title="Anterior (Sin lógica)" onClick={() => setIndexImg(prev => prev <= 0 ? prev : prev - 1)}>
                        <FiChevronLeft />
                    </button>
                    <button className="nav-arrow next-arrow" title="Siguiente (Sin lógica)" onClick={() => setIndexImg(prev => prev >= slidesData.length - 1 ? prev : prev + 1)}>
                        <FiChevronRight />
                    </button>
                </div>

                {/* --- 3. Indicadores (Dots) (Dummies Visuales) --- */}
                <div className="carousel-pagination">
                    {/* Simulamos 5 dots */}
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

            </div>
        </section>
    );
};