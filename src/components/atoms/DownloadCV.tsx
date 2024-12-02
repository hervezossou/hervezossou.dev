import { motion } from "motion/react"
import { Download } from "lucide-react"

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

export default function DownlaodCV () {
    return (
        <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium"
            onClick={handleDownloadCV}
        >
            <Download className="size-4" />
            <span>Download CV</span>
        </motion.button>
    )
}