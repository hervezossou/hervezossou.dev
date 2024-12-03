import { motion } from "motion/react"
import SocialLinks from "../molecules/SocialLinks"
import { Heart } from "lucide-react"

export default function Footer () {
    const currentYear = new Date().getFullYear()

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white/5 dark:bg-gray-900/50 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 py-8 md:pt-16 lg:pt-20"
        >
            <div className="container mx-auto px-4 md:px-16 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Portfolio
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Crafting digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
                            <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
                            <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
                            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Let's connect</h4>
                        <SocialLinks />
                    </div>
                </div>
                {/* Copyright */}
                <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1"
                    >
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500 inline" />
                        <span>© {currentYear} Portfolio. All rights reserved.</span>
                    </motion.div>
            </div>
        </motion.footer>
    )
}