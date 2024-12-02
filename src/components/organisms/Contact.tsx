import { motion } from "motion/react"
import ContactForm from "../molecules/ContactForm"

export default function Contact () {
    return (
        <section>
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent dark:from-purple-500/5" />
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
                >
                    Get in Touch
                </motion.h2>
                <ContactForm />
            </div>
        </section>
    )
}