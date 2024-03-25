import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>CONTACTER MOI</h2>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact;