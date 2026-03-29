import './Home.css';
import { Hero } from "../components/Common/Hero";
import { SectionNav } from "../components/Common/SectionNav";
import { GridCard } from "../components/Common/GridCard";
import { useProduct } from "../hooks/useProduct";
import { Contact } from '../components/Contact/Contact';
import { Nosotros } from '../components/Nosotros/Nosotros';

export const Home = () => {

    const { products, loading } = useProduct();


    return (
        <main>
            <Hero />
            <SectionNav />
            <section id='productos-home' className="catalog-container">
                <div className="catalog-header">
                    <span className="concept-tag">100% Pulpa de Fruta</span>
                    <h2 className="main-slogan">
                        Energía <span>Natural</span> para tu día
                    </h2>
                </div>
                {
                    !loading ?
                        (<GridCard products={products} />)
                        : (<p>Cargando productos...</p>)
                }
            </section>


            <section id='contacto-home' className="contact-container">
                <div className="contact-header">
                    <span className="contact-badge">Soporte y Dudas</span>
                    <h2 className="contact-title">¿En qué podemos <span>ayudarte?</span></h2>
                </div>
                <Contact />
            </section>


            <section id='nosotros-home' className='nosotros-container'>
                <Nosotros />
            </section>

        </main>
    )
}


