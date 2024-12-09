import { motion } from "motion/react"
import { Send } from "lucide-react"

export default function FormSubmit () {
    return (
        <motion.button
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center text-white font-medium justify-center gap-2"
        >   
            <span>Send Message</span>
            <Send className="size-4" />
        </motion.button>
    )
}