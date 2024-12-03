import { motion } from "motion/react"
import { skills } from "../../data/skills"

interface SkillCardProps {
    skill: typeof skills[0]
}

export default function SkillCard ({ skill } : SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
        >
            <div className="flex gap-6">
                <div className="p-4 flex items-center justify-center">
                    <img 
                        className="size-16 rounded-xl" 
                        src={skill.icon} 
                        alt={skill.title.toLowerCase()} 
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{skill.description}</p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                        <motion.div
                            className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                        />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
            </div>
        </motion.div>
    )
}