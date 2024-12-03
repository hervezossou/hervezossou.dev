import { motion } from "motion/react"

export default function HeroPicture () {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-2xl" />
                <motion.div
                    className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}