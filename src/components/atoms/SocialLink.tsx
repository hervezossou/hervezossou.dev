import { motion } from "motion/react"

interface SocialLinkProps {
    href: string,
    icon: React.ReactNode,
    label: string
}

export default function SocialLink ({href, icon, label} : SocialLinkProps) {
    return (
        <motion.a
            href={href}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="sr-only">{label}</span>
            {icon}
        </motion.a>
    )
}