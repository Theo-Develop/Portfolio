import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
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
                    console.log(result.text);
                    console.log("message envoyé");
                },
                (error) => {
                    console.log(error.text);
                    console.log("Veuillez réessayez ultérieurement");
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
            <input type="submit" value="Send" />
        </form>
    );
}

export default ContactForm;