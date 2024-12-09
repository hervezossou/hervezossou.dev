import SocialLink from "../atoms/SocialLink"
import { motion } from "motion/react"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function SocialLinks () {
    return (
        <motion.div
          className="flex justify-center md:justify-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
      >
          <SocialLink href="https://github.com/hervezossou" icon={<Github />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/hervezossou" icon={<Linkedin />} label="LinkedIn" />
          <SocialLink href="https://x.com/0xHervenz" icon={<Twitter />} label="Twitter" />
          <SocialLink href="mailto:contacthervenz@google.com" icon={<Mail />} label="Email" />
      </motion.div>
    )
}