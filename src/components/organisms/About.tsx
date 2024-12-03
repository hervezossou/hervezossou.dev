import { motion } from "motion/react"
import AboutPicture from "../atoms/AboutPicture"

export default function About () {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm" />
            <div className="container mx-auto px-4 z-10 relative">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center md:text-left mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                >
                    About Me
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
                    {/* Profile Image Block */}
                    <AboutPicture />

                    {/* Content Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 text-center md:text-left"
                    >
                        <motion.p
                            className="text-xl text-gray-600 dark:text-gray-300 mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            With over 5 years of experience in frontend development, I specialize in creating responsive and intuitive user interfaces that deliver exceptional user experiences.
                        </motion.p>
                        <motion.p
                            className="text-xl text-gray-600 dark:text-gray-300 mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            My expertise includes modern JavaScript frameworks, particularly React, along with state-of-the-art tools and best practices in web development.
                        </motion.p>
                        <motion.p
                            className="text-xl text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            I'm passionate about creating accessible, performant, and beautiful web applications that make a difference in people's lives.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}