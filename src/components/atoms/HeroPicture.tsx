import { motion } from "motion/react"
import HeroPhoto from '../../assets/HeroPhoto.png'

export default function HeroPicture () {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex items-center justify-center md:justify-end"
        >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-2xl" />
                <motion.div
                    className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <img
                        src={HeroPhoto}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}