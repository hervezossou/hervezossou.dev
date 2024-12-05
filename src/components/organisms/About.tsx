import { motion } from "motion/react"
import AboutPicture from "../atoms/AboutPicture"

export default function About () {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm" />
            <div className="container mx-auto px-4 md:px-20 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                >
                    About Me
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
                    {/* Profile Image Block */}
                    <AboutPicture />

                    {/* Content Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-2/3 text-center md:text-justify"
                    >
                        <motion.p
                            className="text-sm md:text-base lg:text-base xl:text-lg text-gray-600 dark:text-gray-300 mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            With a background in statistical engineering, I discovered my passion for development in 2023 during an internship with COSIT Benin. This experience ignited my love for crafting visually stunning, interactive, and accessible user interfaces.
                        </motion.p>
                        <motion.p
                            className="text-sm md:text-base lg:text-base xl:text-lg text-gray-600 dark:text-gray-300 mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            I've worked hard to master the basic technologies of web page design, and specialize in creating responsive, intuitive interfaces that deliver an exceptional user experience. 
                            My expertise includes modern JavaScript frameworks, particularly React, along with state-of-the-art tools and best practices in web development.
                        </motion.p>
                        <motion.p
                            className="text-sm md:text-base lg:text-base xl:text-lg text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            I&apos;m driven by a passion for creating accessible, high-performance, and elegant web applications that positively impact people's lives.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}