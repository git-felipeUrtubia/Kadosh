// src/components/Cart/CarrouselAnimation.tsx
import { CardDrawer } from "./CardDrawer";
import './CarrouselAnimation.css';
import items from '../../mocks/products-hero.json'





export const CarrouselAnimation = () => {

    const mapItems = items.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
        bgColor: item.bgColor,
        textColor: item.textColor
    }))

    return (
        <div className="marquee-container">
            <div className="marquee-track">

                {/* Primera mitad de la cinta */}
                <div className="marquee-content">
                    {mapItems.map((item) => (
                        <CardDrawer
                            key={`first-${item.id}`}
                            title={item.title}
                            description={item.description}
                            // 👇 ¡AQUÍ ESTÁ LA SOLUCIÓN! Pasamos las props que faltaban
                            image={item.image}
                            bgColor={item.bgColor}
                            textColor={item.textColor}
                        />
                    ))}
                </div>

                <div className="marquee-content">
                    {mapItems.map((item) => (
                        <CardDrawer key={`b3-${item.id}`} {...item} />
                    ))}
                </div>

                <div className="marquee-content">
                    {mapItems.map((item) => (
                        <CardDrawer key={`b3-${item.id}`} {...item} />
                    ))}
                </div>

                <div className="marquee-content">
                    {mapItems.map((item) => (
                        <CardDrawer key={`b4-${item.id}`} {...item} />
                    ))}
                </div>

            </div>
        </div>
    );
};