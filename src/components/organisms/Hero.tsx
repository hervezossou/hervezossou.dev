import { motion } from "motion/react"
import SocialLinks from "../molecules/SocialLinks"
import HeroPicture from "../atoms/HeroPicture"

export default function Hero () {
    return (
        <section className="min-h-full flex items-center justify-center relative overflow-hidden py-16 md:py-20 lg:py-24">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm" />
            <div className="container mx-auto w-full px-4 md:px-24 z-10">
                <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-8">
                    {/* Content Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 text-center md:text-justify"
                    >
                        <motion.h1
                            className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-6"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hi, I&apos;m Hervé ZOSSOU
                        </motion.h1>
                        <motion.p
                            className="text-sm md:text-base lg:text-base xl:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            I&apos;m a Front-End Developer with proficiency in React.js & Tailwindcss. I&apos;m focus on crafting beautiful and performant web experiences with modern technologies.
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