// src/components/Contact/Contact.tsx
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import './Contact.css';

export const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-grid">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    );
};