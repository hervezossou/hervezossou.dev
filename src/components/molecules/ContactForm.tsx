import { motion } from "motion/react"
import TextField from "../atoms/TextField"
import TextareaField from "../atoms/TextareaField"
import FormSubmit from "../atoms/FormSubmit"

export default function ContactForm () {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
        >
            <div className="p-8 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                <form className="space-y-6">
                    <TextField label="Name" type="text" placeholder="John Doe" />
                    <TextField label="Email" type="email" placeholder="johndoe@gmail.com" />
                    <TextareaField />
                    <FormSubmit />
                </form>
            </div>
        </motion.div>
    )
}