
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
        btnSecondary: null
    }
];

export const Hero = () => {

    const [slide, setSlide] = useState<number>(0)

    const handleClickDot = (e: React.MouseEvent<HTMLSpanElement>) => {
        const id = e.currentTarget.id
        setSlide(Number(id) * 100)
    }


    return (
        <section className="hero-container">
            <div className="carousel-view">


                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${slide}%)` }}
                >

                    {slidesData.map(data => (
                        <article className="carousel-slide" key={data.id}>

                            <img src={data.image} alt={data.title} className="slide-image" loading="eager" />

                            <div className="slide-content-overlay">
                                <div className="text-content">
                                    <span className="slide-subtitle">{data.subtitle}</span>
                                    <h2 className="slide-title">{data.title}</h2>
                                    <p className="slide-description">{data.description}</p>

                                    {/* Botones de Acción */}
                                    <div className="slide-actions">
                                        <button className="btn btn-primary">{data.btnPrimary}</button>
                                        {data.btnSecondary && (
                                            <button className="btn btn-secondary">{data.btnSecondary}</button>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </article>
                    ))}

                </div>

                <div className="carousel-nav">
                    <button
                        className="nav-arrow prev-arrow"
                        title="Anterior (Sin lógica)"
                        onClick={() => setSlide((prev) => prev >= 0 ? prev - 100 : prev)}
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        className="nav-arrow next-arrow"
                        title="Siguiente (Sin lógica)"
                        onClick={() => setSlide((prev) => prev < (slidesData.length - 1) * 100 ? prev + 100 : prev)}
                    >
                        <FiChevronRight />
                    </button>
                </div>

                {/* --- 3. Indicadores (Dots) (Dummies Visuales) --- */}
                <div className="carousel-pagination">
                    {slidesData.map((data, index) => (
                        <span
                            id={`${index}`}
                            className={`dot ${slide / 100 === index ? 'active' : ''}`} key={data.id}
                            onClick={(e) => handleClickDot(e)}
                        >
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
};