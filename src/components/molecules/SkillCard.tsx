import { motion } from "motion/react"
import { skills } from "../../data/skills"

interface SkillCardProps {
    skill: typeof skills[0]
    index: number
}

export default function SkillCard ({ skill, index } : SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                    {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
            </div>
            <ul className="space-y-2">
                {skill.skills.map((item, itemIndex) => (
                    <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
                        className="flex items-center gap-2"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}