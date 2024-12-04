import { motion } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import DownlaodCV from "../atoms/DownloadCV";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const menuItems = [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ]
  
    const handleDownloadCV = () => {
      // Replace this URL with your actual CV file URL
      const cvUrl = '/path-to-your-cv.pdf'
      const link = document.createElement('a')
      link.href = cvUrl
      link.download = 'developer-cv.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  
    return (
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 dark:bg-gray-900/50 backdrop-blur-lg border-b border-white/10"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>
  
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <DownlaodCV />
              <ThemeToggle />
            </nav>
  
            <div className="md:hidden flex items-center gap-4">
              <motion.button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                CV
              </motion.button>
              <ThemeToggle />
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
  
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </div>
      </motion.header>
    )
}