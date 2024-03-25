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
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
        </form>
    );
}

export default ContactForm;