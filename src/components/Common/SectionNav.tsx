import { HiOutlineSquares2X2, HiOutlineEnvelope, HiOutlineUsers } from "react-icons/hi2";
import './SectionNav.css';
import { useEffect, useState } from "react";

export const SectionNav = () => {

  const [activeSection, setActiveSection] = useState('productos-home');

  useEffect(() => {
    const option = {
      root: null
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, option)

    const sections = [
      document.getElementById('productos-home'),
      document.getElementById('contacto-home'),
      document.getElementById('nosotros-home')
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    // Limpieza: Cuando el componente se destruye, apagamos el observador para no gastar memoria
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };

  }, [])

  console.log(activeSection)
  return (
    <nav className="dock-nav">
      <div className="dock-container">

        <div className="dock-divider"></div>

        <a
          className={`dock-item ${activeSection === 'productos-home' ? 'active' : ''}`}
          href="#productos-home"
        >
          <HiOutlineSquares2X2 className="dock-icon" />
          <span className="dock-label">Productos</span>
        </a>

        <div className="dock-divider"></div>

        <a
          className={`dock-item ${activeSection === 'contacto-home' ? 'active' : ''}`}
          href="#contacto-home"
        >
          <HiOutlineEnvelope className="dock-icon" />
          <span className="dock-label">Contacto</span>
        </a>

        <div className="dock-divider"></div>

        <a
          className={`dock-item ${activeSection === 'nosotros-home' ? 'active' : ''}`}
          href="#nosotros-home"
        >
          <HiOutlineUsers className="dock-icon" />
          <span className="dock-label">Nosotros</span>
        </a>

      </div>
    </nav>
  );
};