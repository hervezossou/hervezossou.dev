import { motion } from "motion/react";
import { skills } from "../../data/skills";
import SkillCard from "../molecules/SkillCard";

export default function Skills () {
    return (
        <section className="py-16 md:py-20 2xl:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm" />
            <div className="container mx-auto px-4 md:px-20 relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
                >
                    Skills & Expertise
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-xl mx-auto text-base md:text-lg lg:text-xl text-center mb-12"
                >
                    The skills, tools and technologies I am really good at
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard 
                            key={index} 
                            skill={skill}  
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}