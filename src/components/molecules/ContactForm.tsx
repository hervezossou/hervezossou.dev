import { motion } from "motion/react"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import TextField from "../atoms/TextField"
import TextareaField from "../atoms/TextareaField"
import FormSubmit from "../atoms/FormSubmit"

export default function ContactForm () {
    const form = useRef<HTMLFormElement>(null)
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()
    
        if (form.current) {
            emailjs
                .sendForm(
                    "service_a3f1e8l", // Remplace avec ton Service ID
                    "template_tdv8gr6", // Remplace avec ton Template ID
                    form.current,
                    publicKey // Remplace avec ton User ID (trouvé dans l'onglet "Integration")
                )
                .then(
                () => {
                    alert("Message sent successfully!")
                },
                () => {
                    alert("An error occurred while sending the message.")
                }
            )
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
        >
            <div className="p-8 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <TextField label="Name" name="from_name" type="text" placeholder="John Doe" />
                    <TextField label="Email" name="from_email" type="email" placeholder="johndoe@gmail.com" />
                    <TextareaField />
                    <FormSubmit />
                </form>
            </div>
        </motion.div>
    )
}