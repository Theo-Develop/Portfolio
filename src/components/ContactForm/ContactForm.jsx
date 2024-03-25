import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const form = useRef();

    // Définition des constantes pour les identifiants et la clé publique
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                serviceID,
                templateID,
                form.current,
                publicKey,
            )
            .then(
                (result) => {
                    console.log({ message: "Message envoyé!", details: result.message });
                    setStateMessage("Message envoyé!");
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 2500); // hide message after 2,5 seconds
                },
                (error) => {
                    console.log({ message: "Quelque chose c'est mal passé. Merci d'essayer plus tard", details: error.message });
                    setStateMessage("Quelque chose c'est mal passé. Merci d'essayer plus tard");
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 2500); // hide message after 2,5 seconds
                }
            );
        e.target.reset();
    };

    return (
        <form className="form" ref={form} onSubmit={sendEmail}>
            <label></label>
            <input type="text" name="user_name" placeholder="Nom" required />
            <label></label>
            <input type="email" name="user_email" placeholder="Email" required />
            <label></label>
            <textarea name="message" placeholder="Message" required />
            <input type="submit" className="button" value="Envoyer" disabled={isSubmitting} />
            <div className="infoForm">
                {stateMessage && <p>{stateMessage}</p>}
            </div>
        </form>
    );
}

export default ContactForm;