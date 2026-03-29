
import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import './ContactForm.css';

export const ContactForm = () => {
    // Estado para controlar los valores de los inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Función para actualizar el estado cuando el usuario escribe
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Datos listos para enviar:', formData);
        // Aquí luego agregaremos la lógica para enviar el correo
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
                <h3>Envíanos un mensaje</h3>
                <p>¿Tienes preguntas sobre nuestras barras saludables? Escríbenos y te responderemos pronto.</p>
            </div>

            <div className="input-group">
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="input-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="input-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="¿En qué te podemos ayudar hoy?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <button type="submit" className="form-submit-btn">
                <span>Enviar Mensaje</span>
                <FiSend className="send-icon" />
            </button>
        </form>
    );
};