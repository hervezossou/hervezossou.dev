import { motion } from "motion/react"
import ContactForm from "../molecules/ContactForm"

export default function Contact () {
    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent dark:from-purple-500/5" />
            <div className="container mx-auto px-4 md:px-20 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-xl mx-auto text-base text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl text-center mb-12"
                >
                    What&apos;s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
                </motion.p>
                <ContactForm />
            </div>
        </section>
    )
}