import { motion } from "motion/react"
import SocialLinks from "../molecules/SocialLinks"
import HeroPicture from "../atoms/HeroPicture"

export default function Hero () {
    return (
        <section className="flex items-center justify-center relative overflow-hidden py-16 lg:py-24">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm" />
            <div className="container mx-auto px-4 md:px-20 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
                    {/* Content Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-2/3 text-center md:text-left"
                    >
                        <motion.h1
                            className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-6"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Frontend Developer
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Crafting beautiful and performant web experiences with modern technologies
                        </motion.p>
                        <SocialLinks />
                    </motion.div>

                    {/* Profile Image Block */}
                    <HeroPicture />
                </div>
            </div>
        </section>
    )
}